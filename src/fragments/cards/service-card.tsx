import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Speciality } from "@/lib/data";
import { SPECIALITY_IMAGES } from "@/lib/data";

export function ServiceCard({
  speciality,
  showProcedures = false,
}: {
  speciality: Speciality;
  showProcedures?: boolean;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: speciality.slug }}
      className="group relative border-r border-b border-ink/10 overflow-hidden flex flex-col bg-paper hover:bg-cream transition-smooth"
    >
      <div className="aspect-[16/10] overflow-hidden bg-cream">
        <img
          src={SPECIALITY_IMAGES[speciality.slug]?.bg}
          alt=""
          className="h-full w-full object-cover object-center transition-smooth duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-8 lg:p-10 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-8">
          <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
            {speciality.n} / 06
          </span>
          <ArrowUpRight className="h-5 w-5 text-ink/40 group-hover:text-ink group-hover:rotate-12 transition-smooth" />
        </div>
        <h3 className="font-serif text-2xl lg:text-3xl leading-tight text-ink">
          {speciality.name}
        </h3>
        <div className="mt-2 font-serif italic text-base text-accent">{speciality.lead}</div>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{speciality.body}</p>
        {showProcedures && (
          <div className="mt-auto pt-6 border-t border-ink/10">
            <div className="flex items-center gap-2 text-sm font-mono tracking-[0.18em] uppercase text-muted-foreground">
              <span>{speciality.procedures.length} procedures</span>
              <span>·</span>
              <span>View detail</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
