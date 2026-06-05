import Button from "@/components/ui/Button";

const exams = [
  {
    title: "TCF Canada",
    description: "Examen officiel pour l'immigration au Canada. Valable 2 ans.",
    levels: ["B1", "B2", "C1"],
    totalBillets: 45,
    color: "#4F3CC9",
    popular: true,
  },
  {
    title: "TCF Québec",
    description:
      "Version spécifique pour les candidats à l'immigration au Québec.",
    levels: ["A2", "B1", "B2"],
    totalBillets: 38,
    color: "#16A37F",
    popular: false,
  },
  {
    title: "DELF B2",
    description: "Diplôme officiel de langue française reconnu internationalement.",
    levels: ["B2"],
    totalBillets: 30,
    color: "#E6812A",
    popular: false,
  },
];

export default function ExamsSection() {
  return (
    <section id="examens" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold text-text mb-4"
            style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
          >
            Examens disponibles
          </h2>
          <p className="text-muted text-lg">
            Choisissez votre examen et commencez à vous entraîner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.title}
              className={`relative bg-white rounded-2xl p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1 ${
                exam.popular ? "border-2 scale-[1.02]" : "border border-gray-100"
              }`}
              style={exam.popular ? { borderColor: "var(--color-primary)" } : undefined}
            >
              {exam.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Le plus populaire
                </div>
              )}

              <h3
                className="text-xl font-bold text-text mb-2"
                style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
              >
                {exam.title}
              </h3>
              <p className="text-sm text-muted mb-5 flex-1">
                {exam.description}
              </p>

              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs text-muted">Niveaux :</span>
                {exam.levels.map((level) => (
                  <span
                    key={level}
                    className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: exam.color }}
                  >
                    {level}
                  </span>
                ))}
              </div>

              <p className="text-xs text-muted mb-5">
                {exam.totalBillets} billets disponibles
              </p>

              <Button
                variant={exam.popular ? "primary" : "outline"}
                size="md"
                className="w-full justify-center"
              >
                Commencer l&apos;examen →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
