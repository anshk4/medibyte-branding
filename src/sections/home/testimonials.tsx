import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomeTestimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-12">
          <SectionLabel>§ Real Voices</SectionLabel>
          <SectionTitle className="mt-4">
            Real Voices. <em>Real Experiences.</em>
          </SectionTitle>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee px-6">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[340px] sm:w-[380px] shrink-0 bg-paper border border-ink/10 overflow-hidden whitespace-normal p-8"
            >
              <Quote className="h-6 w-6 text-primary/30 mb-4" />
              <blockquote className="font-serif text-xl lg:text-2xl text-ink leading-relaxed text-pretty mb-8">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-ink/10">
                <div className="h-10 w-10 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-ink text-base truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.flag} {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
