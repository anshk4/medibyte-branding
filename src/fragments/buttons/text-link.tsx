import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function TextLink({
  to,
  href,
  children,
  dark = false,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  const className = `group inline-flex items-center gap-2 text-sm font-medium border-b pb-1 transition-smooth ${
    dark
      ? "text-paper border-paper/30 hover:border-paper"
      : "text-ink border-ink/30 hover:border-ink"
  }`;

  const content = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
