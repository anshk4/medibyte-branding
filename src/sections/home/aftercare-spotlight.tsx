import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, UtensilsCrossed, HeartPulse } from "lucide-react";
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

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            The days after discharge matter most. Our recovery suites keep your family close to the
            hospital, with nursing, nutrition, and a coordinator who visits every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
            <div key={feature.title} className="bg-paper p-8 border border-ink/10">
              <feature.icon className="h-6 w-6 text-accent mb-4" />
              <h4 className="font-serif text-xl text-ink mb-2">{feature.title}</h4>
              <p className="text-base text-muted-foreground">{feature.detail}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper hover:bg-primary transition-smooth"
          >
            Learn More
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
