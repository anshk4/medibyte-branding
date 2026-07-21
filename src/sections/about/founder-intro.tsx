import { ASSETS } from "@/lib/data";

export function AboutFounderIntro() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            <div className="aspect-[4/5] w-full bg-cream rounded-sm overflow-hidden shadow-portrait relative">
              <img
                src={ASSETS.gurvinder}
                alt="Gurvinder Jit Singh"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="bg-ink text-paper px-6 py-4 flex items-center justify-between shadow-paper">
              <div>
                <div className="font-serif text-xl leading-none">Gurvinder Jit Singh</div>
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-paper/60 mt-2">
                  Co-Founder · COO
                </div>
              </div>
              <img src={ASSETS.logo} alt="" className="h-10 w-10 object-contain brightness-200" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-ink/85 text-pretty">
          <p className="font-serif text-3xl text-ink leading-snug first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">
            Medical travel is rarely about medicine alone. It is about visas, languages, the right
            surgeon at the right table, a translator who knows the difference between a symptom and
            a fear.
          </p>
          <p>
            At HJ Unicare I lead the operations that turn that complexity into something simple for
            the patient — a single point of contact, a transparent estimate, a coordinated arrival,
            a trusted hospital, and a careful journey home. The work is unglamorous on purpose. Good
            operations should disappear.
          </p>
          <p>
            We work only with NABH and JCI-accredited institutions, and we measure ourselves not by
            inbound queries but by families who refer the next family. That is the only metric that
            matters in this work.
          </p>
          <div className="pt-6 border-t border-ink/15 grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Headquartered
              </div>
              <div className="mt-1 text-ink">New Delhi · India</div>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Operating since
              </div>
              <div className="mt-1 text-ink">Active across 12+ source countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
