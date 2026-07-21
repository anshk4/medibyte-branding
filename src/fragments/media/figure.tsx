export function Figure({
  image,
  caption,
  aspect = "aspect-[4/3]",
}: {
  image: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <figure>
      <div className={`${aspect} rounded-lg overflow-hidden shadow-paper bg-cream`}>
        <img src={image} alt={caption} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <figcaption className="mt-3 text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
