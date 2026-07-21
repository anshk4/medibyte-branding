export function PlaceholderImage({
  alt,
  className,
  aspect = "aspect-[4/3]",
  dark = false,
}: {
  alt: string;
  className?: string;
  aspect?: string;
  dark?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`${aspect} ${dark ? "bg-ink/40" : "bg-cream"} border ${dark ? "border-paper/10" : "border-ink/10"} flex items-center justify-center overflow-hidden ${className ?? ""}`}
    >
      <div className="text-center px-4">
        <div
          className={`inline-block font-mono text-[10px] tracking-[0.18em] uppercase ${dark ? "text-paper/40" : "text-muted-foreground"}`}
        >
          {alt}
        </div>
      </div>
    </div>
  );
}
