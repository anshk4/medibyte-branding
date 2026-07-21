import { SectionLabel, SectionTitle } from "@/fragments";

const STEPS = [
  {
    n: "01",
    title: "We receive your query",
    detail: "Your message or reports land on a coordinator's desk — not a queue.",
  },
  {
    n: "02",
    title: "Clinical review",
    detail: "Reports are shared with the relevant speciality team at our partner hospitals.",
  },
  {
    n: "03",
    title: "Personalised plan",
    detail: "You receive hospital options, an indicative estimate, and a proposed timeline.",
  },
  {
    n: "04",
    title: "You decide",
    detail: "No pressure, no funnels. If you choose to proceed, we handle the rest — visa to home.",
  },
];

export function ContactNextSteps() {
  return (
    <section className="bg-paper py-20 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel>§ What happens next</SectionLabel>
        <SectionTitle className="mt-6 mb-12">
          From your message to a plan in hand — <em>24 hours.</em>
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {STEPS.map((step) => (
            <div key={step.n} className="bg-paper p-6 lg:p-8">
              <span className="font-mono text-[11px] text-accent">{step.n}</span>
              <h3 className="mt-3 font-serif text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
