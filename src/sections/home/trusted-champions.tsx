import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HandHeart, Plane } from "lucide-react";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomeTrustedChampions() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionLabel>§ Why Families Trust Us</SectionLabel>
            <SectionTitle className="mt-4">
              Trusted by families
              <br />
              <em>when it matters most.</em>
            </SectionTitle>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
              From airport pickup to discharge and follow-up, one team stays with your family
              throughout the journey.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper hover:bg-primary transition-smooth"
              >
                Find Out Why
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Plane, label: "Airport to hospital" },
              { icon: HandHeart, label: "One assigned coordinator" },
              { icon: ShieldCheck, label: "Accredited partners" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-cream p-6 border border-ink/10 text-center"
              >
                <item.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <div className="font-serif text-lg text-ink">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
