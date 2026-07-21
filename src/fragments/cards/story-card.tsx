import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import type { Story } from "@/lib/data";

export function StoryCard({ story, dark = false }: { story: Story; dark?: boolean }) {
  return (
    <Link
      to="/stories"
      className={`group p-8 lg:p-10 transition-smooth ${dark ? "bg-ink text-paper hover:bg-ink/90" : "bg-paper hover:bg-cream"}`}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          {story.code} · {story.country}
        </span>
        <Quote className="h-5 w-5 text-primary" />
      </div>
      <blockquote className="font-serif text-2xl lg:text-[28px] text-ink leading-[1.25] text-pretty">
        {story.text}
      </blockquote>
      <figcaption className="mt-8 pt-6 border-t border-ink/10 flex items-center justify-between text-sm">
        <div>
          <div className="font-medium text-ink">{story.name}</div>
          <div className="text-muted-foreground text-xs mt-0.5">{story.role}</div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-ink/40 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-smooth" />
      </figcaption>
    </Link>
  );
}
