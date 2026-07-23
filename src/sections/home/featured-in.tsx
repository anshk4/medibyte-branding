import { Newspaper } from "lucide-react";
import { MEDIA_LOGOS } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomeFeaturedIn() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <SectionLabel>§ In the Press</SectionLabel>
        <SectionTitle className="mt-4">We are featured in</SectionTitle>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {MEDIA_LOGOS.map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-3 text-muted-foreground opacity-70 hover:opacity-100 transition-smooth"
            >
              <Newspaper className="h-6 w-6 text-accent" />
              <span className="font-serif text-lg text-ink">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
