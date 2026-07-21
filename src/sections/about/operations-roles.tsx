import { SectionLabel, SectionTitle } from "@/fragments";

const ROLES = [
  {
    role: "Co-Founder",
    items: [
      "Vision, brand and long-term strategy for HJ Unicare",
      "Hospital empanelment and international partnerships",
      "Investor, advisory and growth conversations",
      "Speaking, writing and category leadership",
    ],
  },
  {
    role: "Chief Operating Officer",
    items: [
      "Patient journey architecture — query to discharge",
      "Hospital SLAs, pricing transparency and audits",
      "Concierge, translation, visa and logistics teams",
      "Quality, compliance and post-care feedback loops",
    ],
  },
];

export function AboutOperationsRoles() {
  return (
    <section className="bg-ink text-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <SectionLabel dark>§ Operations</SectionLabel>
            <SectionTitle dark className="mt-6">
              Two titles.
              <br />
              <em className="text-accent">One responsibility:</em> the patient.
            </SectionTitle>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-lg text-paper/70 leading-relaxed">
            The strategic and the operational sit on one desk. Below: what each role actually means,
            day-to-day, for a family choosing HJ Unicare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-paper/10">
          {ROLES.map((b) => (
            <div key={b.role} className="bg-ink p-8 lg:p-12">
              <div className="flex items-baseline justify-between mb-10">
                <h3 className="font-serif text-3xl lg:text-4xl">{b.role}</h3>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/40">
                  Role
                </span>
              </div>
              <ul className="space-y-5">
                {b.items.map((it, i) => (
                  <li key={it} className="flex gap-5 border-t border-paper/10 pt-5">
                    <span className="font-mono text-[11px] text-accent shrink-0 mt-1">
                      0{i + 1}
                    </span>
                    <span className="text-paper/85 leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
