import { PlaceholderImage } from "@/components/site/placeholder-image";

export function BadgeChip({
  label,
  icon,
  dark = false,
  small = false,
}: {
  label: string;
  icon?: React.ReactNode;
  dark?: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-${small ? "2" : "3"} rounded-full border ${dark ? "border-paper/20" : "border-ink/15"} ${small ? "px-4 py-2" : "px-5 py-3"}`}
    >
      {icon ? (
        icon
      ) : (
        <PlaceholderImage
          alt={`${label} seal`}
          aspect=""
          className={`rounded-full !border-ink/10 ${small ? "h-6 w-6" : "h-8 w-8"}`}
        />
      )}
      <span
        className={`font-medium ${dark ? "text-paper" : "text-ink"} ${small ? "text-xs" : "text-sm"}`}
      >
        {label}
      </span>
    </div>
  );
}
