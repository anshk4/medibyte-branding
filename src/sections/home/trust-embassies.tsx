import { TRUST_EMBASSIES } from "@/lib/data";
import { Figure } from "@/fragments";

export function HomeTrustEmbassies() {
  return (
    <section className="bg-paper py-16 border-b border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">
              § Trusted By Governments &amp; Institutions
            </div>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-ink leading-tight text-balance">
              Recognised by diplomatic missions across the Gulf.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            Formal engagements with embassies and consulates — sanctioned corridors for the families
            we accompany.
          </p>
        </div>
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x">
          {TRUST_EMBASSIES.map((e) => (
            <div key={e.caption} className="snap-center shrink-0 w-[78vw] sm:w-[300px] lg:w-auto">
              <Figure image={e.image} caption={e.caption} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
