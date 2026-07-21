import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto px-6 lg:px-10 ${wide ? "max-w-[1600px]" : "max-w-[1400px]"} ${className}`}
    >
      {children}
    </div>
  );
}
