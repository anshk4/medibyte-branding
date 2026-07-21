import { SectionLabel, SectionTitle } from "@/fragments";

const PHILOSOPHY = [
  {
    title: "Operations should disappear",
    body: "Good operations are invisible. The patient should never feel the machinery — only the care. Our job is to absorb complexity so the family can focus on healing.",
  },
  {
    title: "Transparency is the product",
    body: "Every estimate is a line-item document. Every hospital is accredited. Every coordinator is reachable. Trust is not a marketing claim — it is a spreadsheet, a phone number, and a promise kept.",
  },
  {
    title: "The next referral is the only metric",
    body: "We measure ourselves not by inbound queries but by families who refer the next family. If a patient sends their cousin, their neighbour, their colleague — we have done the work.",
  },
  {
    title: "Home to home, not hospital to hospital",
    body: "The journey does not end at discharge. It ends when the patient is home, stable, and connected to their local doctor. We manage the entire arc — from the first WhatsApp to the follow-up scan at home.",
  },
];

export function AboutOperatingPhilosophy() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel>§ Operating Philosophy</SectionLabel>
          <SectionTitle className="mt-6">
            Four principles,
            <br />
            <em>no exceptions.</em>
          </SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {PHILOSOPHY.map((p, i) => (
            <div key={p.title} className="bg-paper p-8 lg:p-10">
              <span className="font-mono text-[11px] tracking-[0.18em] text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-2xl lg:text-3xl text-ink leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
