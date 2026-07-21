import type { ReactNode } from "react";

export function FormSelect({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-ink/20 focus:border-ink py-2 text-sm text-ink focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
}
