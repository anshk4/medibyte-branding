import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const LEAD_REPORTS_BUCKET = "lead-reports";

let adminClient: SupabaseClient | null | undefined;

export function isSupabaseServerConfigured(): boolean {
  return Boolean(
    process.env.VITE_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export function getSupabaseAdmin(): SupabaseClient | null {
  if (adminClient !== undefined) return adminClient;

  if (!isSupabaseServerConfigured()) {
    adminClient = null;
    return null;
  }

  adminClient = createClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );

  return adminClient;
}

export function getSupabaseUserClient(accessToken: string): SupabaseClient | null {
  if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
    return null;
  }

  return createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}

export async function verifyAdminAccess(accessToken: string): Promise<{
  ok: boolean;
  userId?: string;
  email?: string;
  error?: string;
}> {
  const supabase = getSupabaseUserClient(accessToken);
  if (!supabase) {
    return { ok: false, error: "Supabase is not configured" };
  }

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) {
    return { ok: false, error: "Invalid or expired session" };
  }

  const admin = getSupabaseAdmin();
  if (!admin) {
    return { ok: false, error: "Server configuration error" };
  }

  const { data: adminRow, error: adminError } = await admin
    .from("admin_users")
    .select("id")
    .eq("user_id", userData.user.id)
    .maybeSingle();

  if (adminError) {
    return { ok: false, error: adminError.message };
  }

  if (!adminRow) {
    return { ok: false, error: "You are not authorized to access admin" };
  }

  return {
    ok: true,
    userId: userData.user.id,
    email: userData.user.email ?? undefined,
  };
}

export async function ensureAdminUser(userId: string, email: string): Promise<boolean> {
  const admin = getSupabaseAdmin();
  if (!admin) return false;

  const allowedEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  if (!allowedEmails.includes(email.toLowerCase())) {
    return false;
  }

  const { error } = await admin.from("admin_users").upsert(
    { user_id: userId, email },
    { onConflict: "user_id" },
  );

  return !error;
}

export { LEAD_REPORTS_BUCKET };
