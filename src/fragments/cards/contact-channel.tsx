import type { LucideIcon } from "lucide-react";

export function ContactChannel({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <div className="flex items-center gap-4 group">
      <div className="h-10 w-10 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-smooth">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {label}
        </div>
        <div className="text-ink">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {body}
      </a>
    );
  }

  return <div>{body}</div>;
}
