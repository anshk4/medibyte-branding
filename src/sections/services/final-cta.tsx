import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Speciality } from "@/lib/data";

export function ServiceFinalCta({ speciality }: { speciality: Speciality }) {
  return (
    <section className="bg-ink text-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl text-paper leading-[0.95] text-balance">
          Exploring {speciality.name.toLowerCase()} options in India?
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg text-paper/70 leading-relaxed">
          Share your reports and we will return a personalised plan within 24 hours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-sm font-medium text-ink hover:bg-accent transition-smooth"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/stories"
            className="group inline-flex items-center gap-2 text-sm font-medium text-paper border-b border-paper/30 hover:border-paper pb-1 transition-smooth"
          >
            Read related stories
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
