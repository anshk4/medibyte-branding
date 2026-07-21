import type { LucideIcon } from "lucide-react";

export function PathCard({
  icon: Icon,
  title,
  description,
  active,
  onClick,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`border p-6 cursor-pointer transition-smooth ${
        active ? "border-ink bg-paper shadow-paper" : "border-ink/15 bg-paper/50 hover:bg-paper"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-ink text-paper flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-serif text-xl text-ink">{title}</div>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
