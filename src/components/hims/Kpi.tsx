import { type LucideIcon } from "lucide-react";

export function Kpi({
  icon: Icon,
  label,
  value,
  delta,
  tone = "info",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  delta?: string;
  tone?: "info" | "success" | "warning" | "destructive" | "primary";
}) {
  const toneMap: Record<string, string> = {
    info: "bg-info/10 text-info",
    success: "bg-success/10 text-success",
    warning: "bg-warning/15 text-warning-foreground",
    destructive: "bg-destructive/10 text-destructive",
    primary: "bg-primary/10 text-primary",
  };
  return (
    <div className="bg-card rounded-xl border p-4 flex items-start gap-3">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${toneMap[tone]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
        {delta && <div className="text-[11px] text-success mt-0.5">↑ {delta}</div>}
      </div>
    </div>
  );
}

export function Section({
  title,
  action,
  children,
  className = "",
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-card rounded-xl border ${className}`}>
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <h3 className="font-semibold">{title}</h3>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
