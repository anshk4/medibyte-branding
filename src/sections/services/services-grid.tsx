import { SPECIALITIES } from "@/lib/data";
import { ServiceCard, TextLink } from "@/fragments";

export function ServicesGrid() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/10">
          {SPECIALITIES.map((s) => (
            <ServiceCard key={s.slug} speciality={s} showProcedures />
          ))}
        </div>

        {/* accreditation strip */}
        <div className="mt-16 flex flex-wrap items-center gap-4">
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
            All partner hospitals:
          </span>
          {["JCI Accredited", "NABH Certified", "ISO 9001"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-medium text-ink">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
