import type { Lead, LeadAttachment } from "@/lib/types/leads";

type LeadRow = {
  id: string;
  type: Lead["type"];
  name: string;
  email: string;
  phone: string | null;
  country: string | null;
  speciality: string | null;
  condition: string | null;
  message: string;
  status: Lead["status"];
  created_at: string;
  updated_at: string;
};

type AttachmentRow = {
  id: string;
  lead_id: string;
  file_name: string;
  storage_path: string;
  mime_type: string;
  size_bytes: number;
  created_at: string;
};

export function mapLeadRow(row: LeadRow): Lead {
  return {
    id: row.id,
    type: row.type,
    name: row.name,
    email: row.email,
    phone: row.phone,
    country: row.country,
    speciality: row.speciality,
    condition: row.condition,
    message: row.message,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function mapAttachmentRow(row: AttachmentRow): LeadAttachment {
  return {
    id: row.id,
    leadId: row.lead_id,
    fileName: row.file_name,
    storagePath: row.storage_path,
    mimeType: row.mime_type,
    sizeBytes: row.size_bytes,
    createdAt: row.created_at,
  };
}
