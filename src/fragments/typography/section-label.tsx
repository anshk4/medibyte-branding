export function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`text-[11px] font-mono tracking-[0.2em] uppercase ${dark ? "text-paper/60" : "text-accent"}`}
    >
      {children}
    </div>
  );
}
