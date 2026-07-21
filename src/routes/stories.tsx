import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { STORIES, STATS } from "@/lib/data";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Patient Stories — HJ Unicare" },
      {
        name: "description",
        content:
          "Case studies from families who placed their most important decisions in our hands — Nigeria, Iraq, Kenya, Uzbekistan. Country flags, conditions, timelines, and outcomes.",
      },
      { property: "og:title", content: "Patient Stories — HJ Unicare" },
      { property: "og:description", content: "The only review that matters: the next referral." },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        section="§ 03 — Trust, Loyalty, Credibility"
        title={
          <>
            The only review
            <br />
            that matters: <em>the next referral.</em>
          </>
        }
        lead="Letters and notes from families who placed their most important decisions in our hands — and then sent the next family our way."
      />

      {/* STATS BAR */}
      <section className="bg-ink text-paper py-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className="font-serif text-4xl md:text-5xl text-paper leading-none">{s.n}</div>
              <div className="mt-2 text-[11px] font-mono tracking-[0.18em] uppercase text-paper/50">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY CARDS */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-16 lg:space-y-24">
          {STORIES.map((story, idx) => (
            <article key={story.name} className="border-t border-ink/10 pt-12 lg:pt-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-ink text-paper px-5 py-3 shadow-paper flex items-center gap-3">
                  <span className="text-3xl leading-none">{story.flag}</span>
                  <div>
                    <div className="font-serif text-lg leading-none">{story.country}</div>
                    <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-paper/60 mt-1">
                      {story.code}
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
                  Case Study {String(idx + 1).padStart(2, "0")} /{" "}
                  {String(STORIES.length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-7">
                  <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight">
                    {story.condition}
                  </h2>
                  <div className="mt-2 text-sm text-muted-foreground font-mono">
                    {story.hospital}
                  </div>

                  <blockquote className="mt-8 pl-10 pt-6 font-serif text-2xl lg:text-3xl text-ink leading-[1.25] text-pretty relative">
                    <Quote className="absolute -top-3 -left-2 h-8 w-8 text-primary/20" />
                    {story.text}
                  </blockquote>

                  <figcaption className="mt-8 pt-6 border-t border-ink/10">
                    <div className="font-medium text-ink">{story.name}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{story.role}</div>
                  </figcaption>
                </div>

                <div className="lg:col-span-5">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Journey Timeline
                  </div>
                  <div className="space-y-3">
                    {story.timeline.map((step, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="font-mono text-[11px] text-accent shrink-0 w-20 pt-0.5">
                          {step.phase}
                        </span>
                        <span className="text-sm text-ink/85 leading-relaxed">{step.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-[0.95] text-balance">
            Your story could be next.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Share your reports and we will return a personalised plan within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper hover:bg-primary transition-smooth"
            >
              Start your journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-1 transition-smooth"
            >
              Explore specialities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
