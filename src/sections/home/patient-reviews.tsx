import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { STORIES } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";

export function HomePatientReviews() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel>§ Patient Experiences</SectionLabel>
            <SectionTitle className="mt-4">
              Patient experiences
              <br />
              <em>from across the world.</em>
            </SectionTitle>
          </div>
          <Link
            to="/stories"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-1 transition-smooth shrink-0"
          >
            View all Reviews
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {STORIES.slice(0, 4).map((story) => (
            <div
              key={story.name}
              className="bg-paper border border-ink/10 p-6 lg:p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{story.flag}</span>
                <div>
                  <div className="font-medium text-ink text-base">{story.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {story.country} · {story.role}
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-lg text-ink mb-2">{story.condition}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                {story.text}
              </p>
              <Link
                to="/stories"
                className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-ink transition-smooth"
              >
                read more
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
