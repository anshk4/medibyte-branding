import { LucideIcon } from "lucide-react";

export function IconCard({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="text-center">
      <Icon className="h-5 w-5 text-accent mx-auto mb-2" />
      <div className="text-[10px] font-mono tracking-[0.12em] uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
