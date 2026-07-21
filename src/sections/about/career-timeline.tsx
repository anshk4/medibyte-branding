import { SectionLabel, SectionTitle } from "@/fragments";

const TIMELINE = [
  {
    year: "2009",
    title: "First exposure to medical travel",
    detail:
      "Began coordinating logistics for international patients arriving in Delhi — visas, translations, hospital admissions. Learned the work from the ground up.",
  },
  {
    year: "2012",
    title: "Building the coordinator network",
    detail:
      "Recruited and trained a team of multilingual patient coordinators across Delhi NCR, building the operational backbone that would become HJ Unicare.",
  },
  {
    year: "2015",
    title: "Co-founding HJ Unicare",
    detail:
      "Established HJ Unicare with a single principle: medical travel should feel like care, not commerce. Built the first hospital empanelment agreements.",
  },
  {
    year: "2018",
    title: "Scaling to 12+ countries",
    detail:
      "Expanded the source-country footprint across Africa, the Middle East, and Central Asia. Opened coordination desks in Lagos, Baghdad, and Tashkent.",
  },
  {
    year: "2021",
    title: "Accreditation and quality systems",
    detail:
      "Formalised quality protocols across all partner hospitals — JCI and NABH verification, outcome tracking, and post-care feedback loops.",
  },
  {
    year: "2024",
    title: "500+ patients guided",
    detail:
      "Crossed the 500-patient milestone with a 94% referral rate — the only metric that matters in this work.",
  },
];

export function AboutCareerTimeline() {
  return (
    <section className="bg-cream py-24 border-y border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel>§ Career Timeline</SectionLabel>
          <SectionTitle className="mt-6">
            Fifteen years,
            <br />
            <em>one patient at a time.</em>
          </SectionTitle>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink/15" />
          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div
                  className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pr-0 md:pl-12 md:[direction:ltr]"}`}
                >
                  <div className="font-serif text-5xl text-primary leading-none">{item.year}</div>
                  <h3 className="mt-3 font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent border-2 border-cream" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
