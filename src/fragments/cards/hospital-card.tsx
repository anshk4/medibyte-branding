import { Link } from "@tanstack/react-router";
import { ASSETS, HOSPITAL_IMAGES } from "@/lib/data";

export function HospitalCard({
  name,
  country,
  flag,
}: {
  name: string;
  country: string;
  flag: string;
}) {
  return (
    <Link
      to="/hospitals"
      className="group bg-paper p-6 hover:bg-ink hover:text-paper transition-smooth"
    >
      <div className="aspect-[16/10] overflow-hidden mb-4 bg-cream">
        <img
          src={HOSPITAL_IMAGES[name] ?? ASSETS.logoDark}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="font-serif text-xl text-ink group-hover:text-paper">{name}</h3>
      <div className="mt-1 text-xs font-mono text-muted-foreground group-hover:text-paper/60">
        {flag} {country}
      </div>
    </Link>
  );
}
