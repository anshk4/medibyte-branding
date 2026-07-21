import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ASSETS, NAV } from "@/lib/data";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={ASSETS.logo} alt="HJ Unicare" className="h-12 w-auto object-contain" />
          <div className="leading-tight">
            <div className="font-serif text-lg text-ink">Gurvinder Jit Singh</div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground font-mono">
              HJ Unicare · Home to Home
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => {
            const isActive = item.to === "/" ? location === "/" : location.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[13px] transition-smooth ${isActive ? "text-ink font-medium" : "text-muted-foreground hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden sm:inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-paper hover:bg-primary transition-smooth"
          >
            Book a consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full border border-ink/20 text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper">
          <nav className="mx-auto max-w-[1400px] px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => {
              const isActive = item.to === "/" ? location === "/" : location.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm transition-smooth ${isActive ? "text-ink font-medium" : "text-muted-foreground hover:text-ink"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
            >
              Book a consultation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
