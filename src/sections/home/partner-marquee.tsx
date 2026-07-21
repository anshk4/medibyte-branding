import { PARTNER_NAMES } from "@/lib/data";

export function HomePartnerMarquee() {
  const items = [...PARTNER_NAMES, ...PARTNER_NAMES];

  return (
    <section className="bg-cream text-ink py-16 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-6">
        <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground text-center">
          Leading hospitals, by your side
        </div>
      </div>
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-16 font-serif text-2xl text-ink/50">
            <span>{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
