interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 ${
        hover ? "hover:-translate-y-1 transition-transform duration-200" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
