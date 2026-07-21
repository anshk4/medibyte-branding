import type { ReactNode } from "react";

export function SectionTitle({
  children,
  dark = false,
  as: Component = "h2",
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Component
      className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance ${dark ? "text-paper" : "text-ink"} ${className}`}
    >
      {children}
    </Component>
  );
}
