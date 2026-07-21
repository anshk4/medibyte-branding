import { SPECIALITY_FEATURED_IMAGE, SPECIALITY_IMAGES } from "@/lib/data";
import type { Speciality } from "@/lib/data";

export function ServiceOverview({ speciality }: { speciality: Speciality }) {
  const images = SPECIALITY_IMAGES[speciality.slug] ?? { bg: "" };
  const featured = SPECIALITY_FEATURED_IMAGE[speciality.slug];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {images.bg && (
        <>
          <img
            src={images.bg}
            alt={`${speciality.name} department at a partner hospital`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/80" />
        </>
      )}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">
            § Overview
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-paper leading-[0.98]">
            What this speciality covers at HJ Unicare
          </h2>
          <p className="text-lg text-paper/80 leading-relaxed text-pretty">
            {speciality.body} Each pathway is anchored by a small network of consultants and
            super-speciality hospitals — selected for outcomes, not for advertising spend.
          </p>

          {/* accreditation badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            {["JCI Accredited", "NABH Certified"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs font-medium text-paper">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          {featured && (
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-portrait bg-cream">
              <img
                src={featured}
                alt={`${speciality.name} care at a partner hospital`}
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
