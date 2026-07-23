import { ArrowRight } from "lucide-react";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomeFinalCta() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[900px] px-6 lg:px-10">
        <div className="text-center mb-10">
          <SectionLabel>§ Get in Touch</SectionLabel>
          <SectionTitle className="mt-4">
            Ready to find
            <br />
            <em>the right care?</em>
          </SectionTitle>
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed text-pretty">
            Share the patient's details or reports. We reply within 24 hours with a plan, hospital
            options, and a clear estimate.
          </p>
        </div>

        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-ink/20 px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-ink transition-smooth placeholder:text-muted-foreground/50"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-ink/20 px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-ink transition-smooth placeholder:text-muted-foreground/50"
              />
            </div>
          </div>
          <div>
            <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">
              Message
            </label>
            <textarea
              placeholder="Tell us about the patient..."
              rows={4}
              className="w-full border border-ink/20 px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-ink transition-smooth placeholder:text-muted-foreground/50 resize-none"
            />
          </div>
          <button className="w-full group inline-flex items-center justify-between bg-ink px-6 py-4 text-sm font-medium text-paper hover:bg-primary transition-smooth">
            <span>Send Enquiry</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
