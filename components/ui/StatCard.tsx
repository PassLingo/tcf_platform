interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-8 py-6">
      <span
        className="text-3xl font-bold text-white"
        style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
      >
        {value}
      </span>
      <span className="mt-1 text-sm text-white/80" style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}>
        {label}
      </span>
    </div>
  );
}
