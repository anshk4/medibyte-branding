import { HOSPITAL_NETWORK, ASSETS, HOSPITAL_IMAGES } from "@/lib/data";
import type { Speciality } from "@/lib/data";
import { SectionLabel, SectionTitle, TextLink } from "@/fragments";
import { Link } from "@tanstack/react-router";

export function ServiceHospitals({ speciality }: { speciality: Speciality }) {
  const networkHospitals = HOSPITAL_NETWORK.flatMap((g) =>
    g.hospitals.map((name) => ({ name, country: g.country, flag: g.flag })),
  );

  return (
    <section className="bg-cream py-24 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>§ Hospital Partners</SectionLabel>
            <SectionTitle className="mt-6">
              Where this care happens
            </SectionTitle>
          </div>
          <TextLink to="/hospitals">View all hospitals</TextLink>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {networkHospitals.map((h) => (
            <Link
              key={h.name}
              to="/hospitals"
              className="group bg-paper p-6 hover:bg-ink hover:text-paper transition-smooth"
            >
              <div className="aspect-[16/10] overflow-hidden mb-4 bg-cream">
                <img
                  src={HOSPITAL_IMAGES[h.name] ?? ASSETS.logoDark}
                  alt={`${h.name} hospital`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl text-ink group-hover:text-paper">{h.name}</h3>
              <div className="mt-1 text-xs font-mono text-muted-foreground group-hover:text-paper/60">
                {h.flag} {h.country}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
