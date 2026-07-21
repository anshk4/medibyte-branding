import { Check } from "lucide-react";
import type { Speciality } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";

export function ServiceProcedures({ speciality }: { speciality: Speciality }) {
  return (
    <section className="bg-cream py-24 border-y border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14">
          <SectionLabel>§ Procedures</SectionLabel>
          <SectionTitle className="mt-6">What we coordinate</SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {speciality.procedures.map((proc, i) => (
            <div key={proc} className="bg-paper p-6 lg:p-8 flex items-start gap-4">
              <span className="font-mono text-[11px] text-accent shrink-0 mt-1">0{i + 1}</span>
              <div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-ink">{proc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
