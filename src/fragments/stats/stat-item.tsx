export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-5xl md:text-6xl text-paper leading-none">{value}</div>
      <div className="mt-3 text-[11px] font-mono tracking-[0.18em] uppercase text-paper/60">
        {label}
      </div>
    </div>
  );
}
