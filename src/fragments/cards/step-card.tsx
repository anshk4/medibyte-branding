export function StepCard({
  number,
  phase,
  detail,
  bordered = true,
}: {
  number?: string;
  phase?: string;
  detail: string;
  bordered?: boolean;
}) {
  return (
    <div className={`bg-paper p-6 lg:p-8 ${bordered ? "" : ""}`}>
      {number && <span className="font-mono text-[11px] text-accent">{number}</span>}
      {phase && (
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
            {phase}
          </span>
        </div>
      )}
      <p className="text-sm text-ink/85 leading-relaxed">{detail}</p>
    </div>
  );
}
