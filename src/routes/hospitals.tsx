import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import {
  PARTNER_NAMES,
  HOSPITAL_NETWORK,
  HOSPITAL_IMAGES,
  ASSETS,
  type HospitalGroup,
} from "@/lib/data";
import { PageHeader } from "@/components/site/page-header";

function HospitalCountryCarousel({ group }: { group: HospitalGroup }) {
  const items = group.hospitals.map((name) => ({
    name,
    image: HOSPITAL_IMAGES[name] ?? ASSETS.logoDark,
    country: group.country,
    flag: group.flag,
  }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, dragFree: true },
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <div className="flex items-end justify-between gap-6 mb-8 border-b border-ink/10 pb-4">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
            {group.flag} {group.country}
          </div>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-ink leading-tight">
            {group.hospitals.length} partner institutions
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            className="h-10 w-10 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-ink hover:text-paper transition-smooth"
            aria-label="Previous hospitals"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="h-10 w-10 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-ink hover:text-paper transition-smooth"
            aria-label="Next hospitals"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {items.map((h) => (
            <div
              key={h.name}
              className="flex-[0_0_340px] sm:flex-[0_0_400px] lg:flex-[0_0_460px] bg-cream border border-ink/10 overflow-hidden shadow-paper"
            >
              <div className="aspect-[16/10] bg-paper overflow-hidden">
                <img
                  src={h.image}
                  alt={h.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-ink leading-tight">{h.name}</h3>
                <div className="text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  {h.flag} {h.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/hospitals")({
  head: () => ({
    meta: [
      { title: "Hospitals & Partners — HJ Unicare" },
      {
        name: "description",
        content:
          "Hospital and medical tourism partnerships — 10 accredited hospitals across India with JCI and NABH certifications, speciality tags, and city profiles.",
      },
      { property: "og:title", content: "Hospitals & Partners — HJ Unicare" },
      {
        property: "og:description",
        content:
          "Card grid of accredited hospital partners with photography, accreditation badges, and speciality tags.",
      },
    ],
  }),
  component: HospitalsPage,
});

function HospitalsPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        section="§ Hospital & Medical Tourism Partnerships"
        title={
          <>
            Twenty-three institutions.
            <br />
            <em>One standard:</em> accredited, audited, accountable.
          </>
        }
        lead="We work only with NABH and JCI-accredited institutions. Each partner below has been empanelled after a site visit, an outcomes review, and a relationship built over years — not a commission arrangement."
      />

      {/* HOSPITAL NETWORK — country carousels */}
      <section className="bg-paper py-20 lg:py-28 space-y-24">
        {HOSPITAL_NETWORK.map((group) => (
          <HospitalCountryCarousel key={group.country} group={group} />
        ))}
      </section>

      {/* ACCREDITATION STANDARDS */}
      <section className="bg-paper py-20 border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="bg-ink text-paper p-8 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">
                  § Accreditation Standards
                </div>
                <h2 className="mt-4 font-serif text-3xl text-paper leading-tight">
                  What the badges mean
                </h2>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    name: "JCI",
                    full: "Joint Commission International",
                    desc: "The global gold standard for hospital quality, audited to US-level clinical protocols.",
                  },
                  {
                    name: "NABH",
                    full: "National Accreditation Board for Hospitals",
                    desc: "India's national quality benchmark — the baseline for every hospital we partner with.",
                  },
                ].map((a) => (
                  <div key={a.name} className="border border-paper/15 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full border border-paper/20 bg-paper/10 flex items-center justify-center">
                        <span className="font-serif text-lg text-accent">{a.name[0]}</span>
                      </div>
                      <div>
                        <div className="font-serif text-xl text-paper">{a.name}</div>
                        <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-paper/50">
                          {a.full}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-paper/70 leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <section className="bg-ink text-paper py-6 overflow-hidden border-y border-ink/40">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...PARTNER_NAMES, ...PARTNER_NAMES].map((p, i) => (
            <div key={i} className="flex items-center gap-16 font-serif text-2xl text-paper/80">
              <span>{p}</span>
              <Plus className="h-3 w-3 text-paper/40" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[0.95] text-balance">
            Want to compare hospitals
            <br />
            for a specific condition?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed">
            We will share a side-by-side comparison of outcomes, costs, and wait times — tailored to
            the patient's diagnosis.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper hover:bg-primary transition-smooth"
            >
              Request a hospital comparison
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
