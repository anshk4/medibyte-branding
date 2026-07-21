import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { signInAdmin } from "@/hooks/use-admin-session";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [{ title: "Admin Login — HJ Unicare" }],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setLoading(true);
          try {
            await signInAdmin(email, password);
            navigate({ to: "/admin" });
          } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed");
          } finally {
            setLoading(false);
          }
        }}
        className="w-full max-w-md bg-paper border border-ink/10 p-8 shadow-paper space-y-6"
      >
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Staff only
          </div>
          <h1 className="font-serif text-3xl text-ink mt-2">Admin sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Use your Supabase Auth credentials. Your email must be listed in{" "}
            <code className="text-xs">ADMIN_EMAILS</code> and registered in{" "}
            <code className="text-xs">admin_users</code>.
          </p>
        </div>

        {error && (
          <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2">
            {error}
          </div>
        )}

        <label className="block space-y-2">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-ink/20 bg-transparent py-2 text-sm focus:outline-none focus:border-ink"
          />
        </label>

        <label className="block space-y-2">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Password
          </span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-ink/20 bg-transparent py-2 text-sm focus:outline-none focus:border-ink"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-ink text-paper py-3 text-sm font-medium hover:bg-primary disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>

        <Link to="/" className="block text-center text-sm text-muted-foreground hover:text-ink">
          Back to website
        </Link>
      </form>
    </div>
  );
}
