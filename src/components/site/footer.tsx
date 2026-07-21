import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Mic } from "lucide-react";
import { ASSETS, NAV, CONTACT_INFO } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-paper/15">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={ASSETS.logoDark} alt="HJ Unicare" className="h-12 w-auto object-contain" />
              <div>
                <div className="font-serif text-2xl">HJ Unicare</div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/50 mt-1">
                  Home to Home
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-paper/65 leading-relaxed">
              A medical travel practice led by Gurvinder Jit Singh — quietly building the bridge
              between the world's patients and India's finest care.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/50 mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-paper/80 hover:text-paper transition-smooth">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/50 mb-4">
              Elsewhere
            </div>
            <div className="flex items-center gap-3 mb-6">
              {[Instagram, Linkedin, Youtube, Mic].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="space-y-1 text-sm text-paper/65">
              <div>{CONTACT_INFO.email}</div>
              <div>{CONTACT_INFO.phone}</div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper/50 mt-2">
                {CONTACT_INFO.location}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/50 font-mono">
          <div>© {new Date().getFullYear()} HJ Unicare · All rights reserved</div>
          <div>Designed with care · New Delhi, India</div>
        </div>
      </div>
    </footer>
  );
}
