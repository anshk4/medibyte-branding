import { Link } from "@tanstack/react-router";
import { ArrowRight, PiggyBank } from "lucide-react";
import { PRICING } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";
import saveOnTreatmentImg from "@/assets/images/sections/save-on-treatment.jpg";

export function HomePricingComparison() {
  return (
    <section>
      {/* SAVE BANNER */}
      <div className="relative overflow-hidden bg-primary text-paper py-16 lg:py-20">
        <img
          src={saveOnTreatmentImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-[900px] px-6 lg:px-10 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-paper/10 border border-paper/10 mb-6">
            <PiggyBank className="h-8 w-8 text-accent" />
          </div>
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">
            § Save on Treatment
          </div>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-paper leading-[0.95]">
            Save up to <em className="text-accent">70%</em>
            <br />
            on your treatment.
          </h2>
          <p className="mt-4 text-xl text-paper/70 leading-relaxed text-pretty">
            Compared to UK private care, with quality treatment, accommodation and recovery support,
            all included.
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
      </div>

      {/* PRICING TABLE */}
      <div className="bg-paper py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-10">
            <SectionLabel>§ Transparent Pricing</SectionLabel>
            <SectionTitle className="mt-4">
              World-class care doesn't
              <br />
              <em>have to cost a fortune.</em>
            </SectionTitle>
          </div>

          <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
            <table className="w-full min-w-[680px] border border-ink/10">
              <thead>
                <tr className="border-b border-ink/10 bg-cream text-left">
                  <th className="p-4 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                    Treatment
                  </th>
                  <th className="p-4 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                    Typical price abroad
                  </th>
                  <th className="p-4 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                    HJ Unicare estimate
                  </th>
                  <th className="p-4 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                    Indicative saving
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((item) => (
                  <tr
                    key={item.treatment}
                    className="border-b border-ink/10 last:border-b-0 hover:bg-cream/50 transition-smooth"
                  >
                    <td className="p-4 font-serif text-lg text-ink">{item.treatment}</td>
                    <td className="p-4 text-sm text-muted-foreground">{item.homePrice}</td>
                    <td className="p-4 text-accent font-medium">{item.hjPrice}</td>
                    <td className="p-4 text-sm text-muted-foreground">Up to 70%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60 leading-relaxed max-w-3xl">
            Disclaimer: figures are indicative sample comparisons for planning purposes only. Actual
            costs depend on the hospital, surgeon, room category, implants, and the patient's
            clinical profile. A personalised, line-itemed estimate is shared after report review.
          </p>
        </div>
      </div>
    </section>
  );
}
