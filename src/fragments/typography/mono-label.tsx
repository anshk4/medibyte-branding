export function MonoLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`text-[11px] font-mono tracking-[0.18em] uppercase ${className}`}>
      {children}
    </span>
  );
}
