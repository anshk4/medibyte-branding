import { useState } from "react";
import { JOURNEY_STAGES } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";

const WEEK_LABELS = ["Week 1", "Week 4", "Week 5", "Week 7"];

export function HomePatientJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12">
          <SectionLabel>§ Your Journey</SectionLabel>
          <SectionTitle className="mt-4">
            Led by doctors,
            <br />
            <em>from first step to full recovery.</em>
          </SectionTitle>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="space-y-0 border-l-2 border-ink/20 pl-0">
              {JOURNEY_STAGES.map((stage, i) => (
                <button
                  key={stage.stage}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-5 px-6 border-b border-ink/10 transition-smooth relative ${
                    active === i
                      ? "bg-paper border-l-2 border-l-accent -ml-[2px]"
                      : "bg-transparent hover:bg-paper/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent shrink-0">
                      {WEEK_LABELS[i]}
                    </span>
                    <span className="font-serif text-xl text-ink">{stage.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-paper border border-ink/10 p-8 lg:p-12 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
                  {WEEK_LABELS[active]}
                </span>
                <span className="h-px flex-1 bg-ink/10" />
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                  Stage {JOURNEY_STAGES[active].stage}
                </span>
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl text-ink mb-4">
                {JOURNEY_STAGES[active].label}
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                {JOURNEY_STAGES[active].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
