import type { ReactNode } from "react";

export function PageHeader({
  section,
  title,
  lead,
  dark = false,
}: {
  section: string;
  title: ReactNode;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`${dark ? "bg-ink text-paper" : "bg-paper"} pt-32 pb-16 lg:pt-40 lg:pb-20 border-b ${dark ? "border-paper/10" : "border-ink/10"}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">
          {section}
        </div>
        <h1
          className={`mt-6 font-serif text-5xl lg:text-7xl leading-[0.95] max-w-4xl text-balance ${dark ? "text-paper" : "text-ink"}`}
        >
          {title}
        </h1>
        {lead && (
          <p
            className={`mt-6 text-lg max-w-2xl leading-relaxed text-pretty ${dark ? "text-paper/70" : "text-muted-foreground"}`}
          >
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
