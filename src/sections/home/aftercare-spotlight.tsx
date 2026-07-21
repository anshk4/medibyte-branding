import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, UtensilsCrossed, HeartPulse } from "lucide-react";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomeAftercareSpotlight() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-12">
          <SectionLabel>§ Recovery & Aftercare</SectionLabel>
          <SectionTitle className="mt-4">
            Aftercare built for
            <br />
            <em>comfort and peace of mind.</em>
          </SectionTitle>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          <div className="aspect-[4/3] w-full rounded-sm overflow-hidden bg-cream border border-ink/10 relative">
            <PlaceholderImage
              alt="HJ Unicare recovery suite"
              aspect=""
              className="absolute inset-0 h-full w-full !border-ink/10"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              The days after discharge matter most. Our recovery suites keep your family close to
              the hospital, with nursing, nutrition, and a coordinator who visits every day.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  title: "24/7 on-site doctor and nurse",
                  detail: "On-call nursing and daily wound checks throughout your stay.",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Nutritionist-designed meal plans",
                  detail: "Meals planned around your procedure, medications, and recovery goals.",
                },
                {
                  icon: HeartPulse,
                  title: "Recovery-optimised rooms",
                  detail: "Step-down accommodation within 15 minutes of your hospital.",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <feature.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg text-ink">{feature.title}</h4>
                    <p className="mt-1 text-base text-muted-foreground">{feature.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper hover:bg-primary transition-smooth"
              >
                Learn More
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
