import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomeTrustedChampions() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
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
          <div className="lg:col-span-6">
            <div className="aspect-[16/10] w-full rounded-sm overflow-hidden bg-cream border border-ink/10 shadow-portrait relative">
              <PlaceholderImage
                alt="HJ Unicare trusted partners"
                aspect=""
                className="absolute inset-0 h-full w-full !border-ink/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
