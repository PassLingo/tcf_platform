import StatCard from "@/components/ui/StatCard";

const stats = [
  { value: "1 200+", label: "Candidats formés" },
  { value: "100%", label: "Taux de réussite" },
  { value: "5 ans", label: "D'expérience" },
];

const testimonials = [
  {
    name: "Amina K.",
    result: "Obtenu B2 — TCF Canada",
    rating: 5,
    text: "Grâce aux simulations, j'ai su exactement à quoi m'attendre le jour J. J'ai obtenu mon niveau du premier coup !",
    initials: "AK",
    color: "#4F3CC9",
  },
  {
    name: "Mohamed B.",
    result: "Obtenu C1 — TCF Canada",
    rating: 5,
    text: "Le suivi personnalisé m'a permis de cibler mes lacunes en expression écrite. Résultat au-delà de mes espérances.",
    initials: "MB",
    color: "#16A37F",
  },
  {
    name: "Fatou D.",
    result: "Obtenu B2 — DELF B2",
    rating: 5,
    text: "Interface simple, billets réalistes et corrections très claires. Je recommande à tous ceux qui veulent vraiment réussir.",
    initials: "FD",
    color: "#E6812A",
  },
];

export default function ResultsSection() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl mb-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2
            className="text-3xl lg:text-4xl font-bold text-text mb-4"
            style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
          >
            Ce que disent nos candidats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-muted">{t.result}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed">
                &quot;{t.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
