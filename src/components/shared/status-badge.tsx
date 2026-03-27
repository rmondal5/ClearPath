import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "success" | "warning" | "danger" | "neutral";

interface StatusBadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent: "bg-accent-muted text-accent",
  success: "bg-success-muted text-success",
  warning: "bg-warning-muted text-warning",
  danger: "bg-danger-muted text-danger",
  neutral: "bg-white/6 text-neutral-500 border border-white/10",
};

export function StatusBadge({ label, variant = "neutral", className }: StatusBadgeProps) {
  return (
    <span className={cn("badge", variantStyles[variant], className)}>
      {label}
    </span>
  );
}
