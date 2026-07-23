import apolloLogo from "@/assets/images/logos/apollo.png";
import artemisLogo from "@/assets/images/logos/artemis.png";
import blkMaxLogo from "@/assets/images/logos/blkmax.jpg";
import fortisLogo from "@/assets/images/logos/fortis.png";
import manipalLogo from "@/assets/images/logos/manipal.png";
import medantaLogo from "@/assets/images/logos/medanta.png";
import narayanaLogo from "@/assets/images/logos/narayana.jpg";

const PARTNER_LOGOS = [
  { name: "Apollo Hospitals", src: apolloLogo },
  { name: "Artemis Hospital", src: artemisLogo },
  { name: "BLK-Max Hospital", src: blkMaxLogo },
  { name: "Fortis Healthcare", src: fortisLogo },
  { name: "Manipal Hospitals", src: manipalLogo },
  { name: "Medanta", src: medantaLogo },
  { name: "Narayana Health", src: narayanaLogo },
];

export function HomePartnerMarquee() {
  const items = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="bg-cream text-ink py-14 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-8">
        <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground text-center">
          Leading hospitals, by your side
        </div>
      </div>
      <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
        {items.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex items-center justify-center shrink-0 h-14 lg:h-16 px-3"
          >
            <img
              src={p.src}
              alt={p.name}
              className="h-full w-auto max-w-[180px] object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-smooth"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
