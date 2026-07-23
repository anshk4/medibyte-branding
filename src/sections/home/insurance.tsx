import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { INSURANCE_CONTENT } from "@/lib/data";
import postTreatmentAssuranceImg from "@/assets/images/sections/post-treatment-assurance.jpg";

export function HomeInsurance() {
  return (
    <section className="relative overflow-hidden bg-primary text-paper py-24">
      <img
        src={postTreatmentAssuranceImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-[900px] px-6 lg:px-10 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-paper/10 border border-paper/10 mb-6">
          <ShieldCheck className="h-8 w-8 text-accent" />
        </div>
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
    </section>
  );
}
