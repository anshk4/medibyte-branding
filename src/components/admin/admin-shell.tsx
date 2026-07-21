import { Link, useRouterState } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import type { ReactNode } from "react";

import { signOutAdmin, useAdminSession } from "@/hooks/use-admin-session";

export function AdminShell({ children }: { children: ReactNode }) {
  const { session, loading, configured } = useAdminSession();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLogin = pathname === "/admin/login";

  if (!configured) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6">
        <div className="max-w-md bg-paper border border-ink/10 p-8 text-center">
          <h1 className="font-serif text-2xl text-ink">Admin unavailable</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Set <code className="text-xs">VITE_SUPABASE_URL</code> and{" "}
            <code className="text-xs">VITE_SUPABASE_ANON_KEY</code> in your environment.
          </p>
          <Link to="/" className="mt-6 inline-block text-sm text-accent underline">
            Back to site
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center text-sm text-muted-foreground">
        Loading admin…
      </div>
    );
  }

  if (!session && !isLogin) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6">
        <div className="max-w-md bg-paper border border-ink/10 p-8 text-center">
          <h1 className="font-serif text-2xl text-ink">Sign in required</h1>
          <Link
            to="/admin/login"
            className="mt-6 inline-flex items-center justify-center bg-ink px-5 py-3 text-sm text-paper"
          >
            Go to login
          </Link>
        </div>
      </div>
    );
  }

  if (isLogin) {
    return <div className="min-h-screen bg-cream">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <header className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              HJ Unicare Admin
            </div>
            <div className="font-serif text-xl text-ink">Operations console</div>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4 text-sm">
              <Link to="/admin" className="hover:text-accent">
                Dashboard
              </Link>
              <Link to={"/admin/leads" as any} className="hover:text-accent">
                Leads
              </Link>
              <Link to={"/admin/blog" as any} className="hover:text-accent">
                Blog
              </Link>
            </nav>
            <button
              type="button"
              onClick={() => signOutAdmin()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
