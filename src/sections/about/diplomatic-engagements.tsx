import { EMBASSIES } from "@/lib/data";
import { Figure, SectionLabel, SectionTitle } from "@/fragments";

export function AboutDiplomaticEngagements() {
  return (
    <section className="bg-paper py-24 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel>§ Government &amp; Diplomatic Engagements</SectionLabel>
          <SectionTitle className="mt-6">
            Active dialogues
            <br />
            <em>across 24+ countries.</em>
          </SectionTitle>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Active discussions with embassies and consulates across Africa, Central Asia, and island
            nations — building sanctioned, transparent corridors for patients travelling to India
            and the UAE.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EMBASSIES.map((e) => (
            <Figure key={e.caption} image={e.image} caption={e.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}
