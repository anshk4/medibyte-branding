import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { INSURANCE_CONTENT, SECTION_IMAGES } from "@/lib/data";

export function HomeInsurance() {
  return (
    <section className="relative overflow-hidden bg-primary text-paper py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">
              § Post-Treatment Assurance
            </div>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-paper leading-[0.95]">
              {INSURANCE_CONTENT.title}
            </h2>
            <p className="mt-4 text-xl text-paper/70 leading-relaxed text-pretty">
              {INSURANCE_CONTENT.lead}
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-base font-medium text-ink hover:bg-accent transition-smooth"
              >
                Book a Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-[4/3] w-full rounded-sm overflow-hidden border border-paper/10">
              <img
                src={SECTION_IMAGES.insuranceAssurance}
                alt="Post-treatment assurance"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
