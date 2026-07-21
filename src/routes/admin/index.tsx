import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { useAdminSession } from "@/hooks/use-admin-session";
import { listAdminBlogPosts, seedBlogFromStatic } from "@/lib/blog-fns";
import { listAdminLeads } from "@/lib/leads-fns";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [{ title: "Admin Dashboard — HJ Unicare" }],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const { accessToken } = useAdminSession();
  const [leadCount, setLeadCount] = useState(0);
  const [newLeads, setNewLeads] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [seedMessage, setSeedMessage] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    if (!accessToken) return;

    Promise.all([
      listAdminLeads({ data: { accessToken } }),
      listAdminBlogPosts({ data: { accessToken, includeDrafts: true } }),
    ]).then(([leads, posts]) => {
      setLeadCount(leads.length);
      setNewLeads(leads.filter((l) => l.status === "new").length);
      setPostCount(posts.length);
    });
  }, [accessToken]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-4xl text-ink">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Leads and blog content for the public site.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Total leads" value={String(leadCount)} href="/admin/leads" />
        <StatCard label="New leads" value={String(newLeads)} href="/admin/leads" />
        <StatCard label="Blog posts" value={String(postCount)} href="/admin/blog" />
      </div>

      <section className="bg-paper border border-ink/10 p-6 space-y-4">
        <h2 className="font-serif text-2xl text-ink">First-time setup</h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
          <li>Run the SQL migration in Supabase (`supabase/migrations/001_initial.sql`).</li>
          <li>Create a private Storage bucket named <code>lead-reports</code>.</li>
          <li>Create a staff user in Supabase Auth and add their email to `ADMIN_EMAILS`.</li>
          <li>Sign in here, then import existing blog posts from the static site data.</li>
        </ol>
        <button
          type="button"
          disabled={!accessToken || seeding}
          onClick={async () => {
            if (!accessToken) return;
            setSeeding(true);
            setSeedMessage(null);
            try {
              const result = await seedBlogFromStatic({ data: { accessToken } });
              setSeedMessage(`Imported ${result.imported} blog posts.`);
              const posts = await listAdminBlogPosts({
                data: { accessToken, includeDrafts: true },
              });
              setPostCount(posts.length);
            } catch (err) {
              setSeedMessage(err instanceof Error ? err.message : "Import failed");
            } finally {
              setSeeding(false);
            }
          }}
          className="bg-ink text-paper px-4 py-2 text-sm hover:bg-primary disabled:opacity-60"
        >
          {seeding ? "Importing…" : "Import blog posts from static data"}
        </button>
        {seedMessage && <p className="text-sm text-muted-foreground">{seedMessage}</p>}
      </section>
    </div>
  );
}

function StatCard({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <Link
      to={href}
      className="block bg-paper border border-ink/10 p-6 hover:border-ink/30 transition-smooth"
    >
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 font-serif text-4xl text-ink">{value}</div>
    </Link>
  );
}
