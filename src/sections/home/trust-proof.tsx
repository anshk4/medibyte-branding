import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Quote } from "lucide-react";
import { STORIES } from "@/lib/data";

export function HomeTrustProof() {
  const featuredStories = STORIES.slice(0, 2);

  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">
              § Trust, Loyalty, Credibility
            </div>
            <h2 className="mt-6 font-serif text-5xl lg:text-6xl text-ink leading-[0.95]">
              The only review
              <br />
              that matters: <em>the next referral.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed text-pretty">
            Letters and notes from families who placed their most important decisions in our hands —
            and then sent the next family our way.
          </div>
        </div>

        {/* accreditation badges */}
        <div className="flex flex-wrap gap-4 mb-12">
          {["JCI Accredited", "NABH Certified", "ISO 9001", "MVTI Member"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3"
            >
              <BadgeCheck className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium text-ink">{badge}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {featuredStories.map((r) => (
            <Link
              key={r.name}
              to="/stories"
              className="group bg-paper p-8 lg:p-10 hover:bg-cream transition-smooth"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                  {r.code} · {r.country}
                </span>
                <Quote className="h-5 w-5 text-primary" />
              </div>
              <blockquote className="font-serif text-2xl lg:text-[28px] text-ink leading-[1.25] text-pretty">
                {r.text}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/10 flex items-center justify-between text-sm">
                <div>
                  <div className="font-medium text-ink">{r.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{r.role}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink/40 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-smooth" />
              </figcaption>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/stories"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-1 transition-smooth"
          >
            Read all patient stories
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
