export function FormTextarea({
  label,
  value,
  onChange,
  required,
  placeholder,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <textarea
        required={required}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-ink/20 focus:border-ink py-2 text-sm text-ink placeholder:text-ink/30 focus:outline-none resize-none"
      />
    </div>
  );
}
