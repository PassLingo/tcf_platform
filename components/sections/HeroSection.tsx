import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section id="accueil" className="relative bg-white overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ backgroundColor: "var(--color-primary)", opacity: 0.05 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium mb-6"
              style={{
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary)",
              }}
            >
              🏆 Plateforme #1 de préparation
            </span>

            <h1
              className="text-4xl lg:text-[52px] font-bold leading-tight text-text mb-6"
              style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
            >
              Réussissez votre
              <br />
              examen de{" "}
              <span className="relative inline-block">
                français
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  height="8"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6 Q25 2 50 5 Q75 8 100 4 Q125 1 150 5 Q175 8 200 4"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2.5"
                  />
                </svg>
              </span>
              <br />
              dès le premier essai
            </h1>

            <p
              className="text-lg text-muted max-w-md mb-6 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Entraînez-vous avec de vrais billets d&apos;examen. Simulations
              officielles, corrections détaillées et suivi personnalisé.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["✓ Taux de réussite 100%", "✓ 100% en ligne", "✓ Suivi par des experts"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 text-sm font-medium text-text"
                  >
                    <span className="text-success">{item.slice(0, 1)}</span>
                    {item.slice(2)}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md">
                Voir les formations →
              </Button>
              <Button variant="outline" size="md">
                Essai gratuit
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="rounded-2xl overflow-hidden p-1"
              style={{ backgroundColor: "var(--color-primary-light)" }}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted">
                    Question 12 / 25
                  </span>
                  <div className="flex-1 mx-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: "48%", backgroundColor: "var(--color-primary)" }}
                    />
                  </div>
                  <span className="text-xs font-medium" style={{ color: "var(--color-primary)" }}>
                    48%
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-muted mb-2 uppercase tracking-wide font-medium">
                    Choisissez la bonne réponse :
                  </p>
                  <p
                    className="text-base font-semibold text-text"
                    style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
                  >
                    &quot;Elle ___ partie hier soir&quot;
                  </p>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                  {[
                    { label: "est", selected: false },
                    { label: "était", selected: true },
                    { label: "a", selected: false },
                    { label: "soit", selected: false },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                        opt.selected
                          ? "border-primary bg-primary-light"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          opt.selected ? "border-primary" : "border-gray-300"
                        }`}
                      >
                        {opt.selected && (
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          opt.selected
                            ? "font-medium text-primary"
                            : "text-text"
                        }`}
                      >
                        {opt.label}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-2.5 rounded-xl text-sm font-medium text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Valider →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
