interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "neutral" | "custom";
  color?: string;
  className?: string;
}

export default function Badge({ children, variant = "primary", color, className = "" }: BadgeProps) {
  const variants = {
    primary:
      "bg-[var(--color-primary-light)] text-[var(--color-primary)]",
    success:
      "bg-green-100 text-green-700",
    neutral:
      "bg-border text-gray-600",
    custom: "",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
      style={color ? { backgroundColor: `${color}15`, color } : undefined}
    >
      {children}
    </span>
  );
}
