import type { Speciality } from "@/lib/data";
import { SectionLabel, SectionTitle, StepCard } from "@/fragments";

export function ServiceJourney({ speciality }: { speciality: Speciality }) {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14">
          <SectionLabel>§ The Patient Journey</SectionLabel>
          <SectionTitle className="mt-6">
            From arrival to home — <em>day by day</em>
          </SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {speciality.timeline.map((step, i) => (
            <StepCard key={i} phase={step.phase} detail={step.detail} />
          ))}
        </div>
      </div>
    </section>
  );
}
