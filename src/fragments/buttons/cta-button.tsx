import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function CtaButton({
  children,
  href,
  onClick,
  dark = false,
  arrow = true,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  dark?: boolean;
  arrow?: boolean;
}) {
  const className = `group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-smooth ${
    dark ? "bg-paper text-ink hover:bg-accent" : "bg-ink text-paper hover:bg-primary"
  }`;

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
