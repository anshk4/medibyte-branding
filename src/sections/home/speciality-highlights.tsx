import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SPECIALITIES, SPECIALITY_IMAGES } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomeSpecialityHighlights() {
  const featured = SPECIALITIES.slice(0, 4);

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>§ Treatments</SectionLabel>
            <SectionTitle className="mt-4">
              The treatments we offer,
              <br />
              <em>with no wait time.</em>
            </SectionTitle>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-1 transition-smooth shrink-0"
          >
            Explore all treatments
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group bg-paper border border-ink/10 overflow-hidden hover:shadow-paper transition-smooth"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={SPECIALITY_IMAGES[s.slug]?.bg || SPECIALITY_IMAGES.wellness?.bg}
                  alt=""
                  className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-ink leading-tight">{s.name}</h3>
                <p className="mt-1 text-base text-muted-foreground">{s.lead}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
