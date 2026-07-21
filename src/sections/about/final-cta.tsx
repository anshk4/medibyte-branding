import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function AboutFinalCta() {
  return (
    <section className="bg-cream py-24 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[0.95] text-balance">
          Want to talk through
          <br />a patient's journey?
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper hover:bg-primary transition-smooth"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/stories"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-1 transition-smooth"
          >
            Read patient stories
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
