import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";

import { mapAttachmentRow, mapLeadRow } from "@/lib/leads/mappers";
import {
  confirmAttachmentsSchema,
  consultationLeadSchema,
  reportsLeadSchema,
  updateLeadStatusSchema,
} from "@/lib/schemas/leads";
import { checkRateLimit, getClientIp } from "@/lib/server/rate-limit";
import {
  getSupabaseAdmin,
  LEAD_REPORTS_BUCKET,
  verifyAdminAccess,
} from "@/lib/supabase/server";
import type { Lead, LeadAttachment, UploadSlot } from "@/lib/types/leads";

const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/dicom",
  "application/octet-stream",
]);

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 200);
}

async function notifyNewLead(lead: Lead): Promise<void> {
  const notifyEmail = process.env.NOTIFY_EMAIL;
  if (!notifyEmail) return;
  // Hook for Resend/SendGrid — log for now so ops can wire email later.
  console.info("[lead] New inquiry", {
    notifyEmail,
    leadId: lead.id,
    type: lead.type,
    name: lead.name,
    email: lead.email,
  });
}

export const submitConsultationLead = createServerFn({ method: "POST" })
  .validator(consultationLeadSchema)
  .handler(async ({ data }): Promise<{ leadId: string }> => {
    const headers = getRequestHeaders();
    const ip = getClientIp(headers);
    const rate = checkRateLimit(`lead:consult:${ip}:${data.email.toLowerCase()}`);
    if (!rate.allowed) {
      throw new Error("Too many submissions. Please try again later.");
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      throw new Error(
        "Lead submission is not available yet. Please email care@hjunicare.com directly.",
      );
    }

    const { data: row, error } = await supabase
      .from("leads")
      .insert({
        type: "consultation",
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        country: data.country || null,
        speciality: data.speciality || null,
        message: data.message,
      })
      .select("*")
      .single();

    if (error) throw new Error(error.message);

    const lead = mapLeadRow(row);
    await notifyNewLead(lead);
    return { leadId: lead.id };
  });

export const submitReportsLead = createServerFn({ method: "POST" })
  .validator(reportsLeadSchema)
  .handler(
    async ({
      data,
    }): Promise<{ leadId: string; uploads: UploadSlot[] }> => {
      const headers = getRequestHeaders();
      const ip = getClientIp(headers);
      const rate = checkRateLimit(`lead:reports:${ip}:${data.email.toLowerCase()}`);
      if (!rate.allowed) {
        throw new Error("Too many submissions. Please try again later.");
      }

      const supabase = getSupabaseAdmin();
      if (!supabase) {
        throw new Error(
          "Report submission is not available yet. Please email care@hjunicare.com directly.",
        );
      }

      const { data: row, error } = await supabase
        .from("leads")
        .insert({
          type: "reports",
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          country: data.country || null,
          condition: data.condition || null,
          message: data.message || "",
        })
        .select("*")
        .single();

      if (error) throw new Error(error.message);

      const lead = mapLeadRow(row);
      const uploads: UploadSlot[] = [];

      for (const file of data.files ?? []) {
        if (!ALLOWED_MIME_TYPES.has(file.mimeType)) {
          throw new Error(`File type not allowed: ${file.fileName}`);
        }

        const safeName = sanitizeFileName(file.fileName);
        const storagePath = `${lead.id}/${Date.now()}-${safeName}`;

        const { data: signed, error: signError } = await supabase.storage
          .from(LEAD_REPORTS_BUCKET)
          .createSignedUploadUrl(storagePath);

        if (signError || !signed) {
          throw new Error(signError?.message ?? "Could not prepare file upload");
        }

        uploads.push({
          fileName: file.fileName,
          storagePath,
          signedUrl: signed.signedUrl,
          mimeType: file.mimeType,
          sizeBytes: file.sizeBytes,
        });
      }

      await notifyNewLead(lead);
      return { leadId: lead.id, uploads };
    },
  );

export const confirmLeadAttachments = createServerFn({ method: "POST" })
  .validator(confirmAttachmentsSchema)
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const supabase = getSupabaseAdmin();
    if (!supabase) throw new Error("Supabase is not configured");

    if (data.attachments.length === 0) return { ok: true };

    const { error } = await supabase.from("lead_attachments").insert(
      data.attachments.map((file) => ({
        lead_id: data.leadId,
        file_name: file.fileName,
        storage_path: file.storagePath,
        mime_type: file.mimeType,
        size_bytes: file.sizeBytes,
      })),
    );

    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listAdminLeads = createServerFn({ method: "POST" })
  .validator((input: { accessToken: string }) => input)
  .handler(async ({ data }): Promise<Lead[]> => {
    const auth = await verifyAdminAccess(data.accessToken);
    if (!auth.ok) throw new Error(auth.error ?? "Unauthorized");

    const supabase = getSupabaseAdmin();
    if (!supabase) throw new Error("Supabase is not configured");

    const { data: rows, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return (rows ?? []).map((row) => mapLeadRow(row));
  });

export const getAdminLeadAttachments = createServerFn({ method: "POST" })
  .validator((input: { accessToken: string; leadId: string }) => input)
  .handler(
    async ({
      data,
    }): Promise<(LeadAttachment & { downloadUrl: string | null })[]> => {
      const auth = await verifyAdminAccess(data.accessToken);
      if (!auth.ok) throw new Error(auth.error ?? "Unauthorized");

      const supabase = getSupabaseAdmin();
      if (!supabase) throw new Error("Supabase is not configured");

      const { data: rows, error } = await supabase
        .from("lead_attachments")
        .select("*")
        .eq("lead_id", data.leadId)
        .order("created_at", { ascending: true });

      if (error) throw new Error(error.message);

      const attachments = await Promise.all(
        (rows ?? []).map(async (row) => {
          const mapped = mapAttachmentRow(row);
          const { data: signed } = await supabase.storage
            .from(LEAD_REPORTS_BUCKET)
            .createSignedUrl(mapped.storagePath, 60 * 15);

          return {
            ...mapped,
            downloadUrl: signed?.signedUrl ?? null,
          };
        }),
      );

      return attachments;
    },
  );

export const updateAdminLeadStatus = createServerFn({ method: "POST" })
  .validator(updateLeadStatusSchema)
  .handler(async ({ data }): Promise<Lead> => {
    const auth = await verifyAdminAccess(data.accessToken);
    if (!auth.ok) throw new Error(auth.error ?? "Unauthorized");

    const supabase = getSupabaseAdmin();
    if (!supabase) throw new Error("Supabase is not configured");

    const { data: row, error } = await supabase
      .from("leads")
      .update({ status: data.status })
      .eq("id", data.leadId)
      .select("*")
      .single();

    if (error) throw new Error(error.message);
    return mapLeadRow(row);
  });
