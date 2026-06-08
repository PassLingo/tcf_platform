import Button from "@/components/ui/Button";

const plans = [
  {
    id: "sprint",
    name: "Pas le temps ?",
    tagline: "Accès Sprint",
    duration: "10 jours",
    price: "9€",
    description: "Pour ceux qui ont besoin de se préparer vite et bien.",
    badge: null,
    highlighted: false,
    features: [
      "Accès complet pendant 10 jours",
      "Tous les examens TCF Canada",
      "Corrections automatiques",
      "Statistiques de progression",
    ],
    cta: "Commencer le sprint →",
  },
  {
    id: "standard",
    name: "Cap sur le C1",
    tagline: "Accès Standard",
    duration: "30 jours",
    price: "19€",
    description: "Une préparation solide pour viser le niveau C1.",
    badge: "Le plus populaire",
    highlighted: true,
    features: [
      "Accès complet pendant 30 jours",
      "Tous les examens TCF Canada",
      "Corrections détaillées",
      "Statistiques de progression",
      "Simulations d'examen réelles",
      "Support par email",
    ],
    cta: "Viser le C1 →",
  },
  {
    id: "pro",
    name: "Niveau C2 Professionnel",
    tagline: "Accès Pro",
    duration: "60 jours",
    price: "34€",
    description: "Pour maîtriser le français comme un expert absolu.",
    badge: null,
    highlighted: false,
    features: [
      "Accès complet pendant 60 jours",
      "Tous les examens TCF Canada",
      "Corrections ultra-détaillées",
      "Statistiques avancées",
      "Simulations d'examen réelles",
      "Coaching 1-to-1 inclus",
      "Support prioritaire",
    ],
    cta: "Devenir pro →",
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-bg py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1
            className="text-4xl lg:text-5xl font-bold text-text mb-4"
            style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
          >
            Nos tarifs
          </h1>
          <p className="text-muted text-lg">
            Choisissez l&apos;accès qui correspond à votre rythme et vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 flex flex-col transition-shadow ${
                plan.highlighted
                  ? "border-2 shadow-xl scale-[1.03]"
                  : "border border-border bg-surface shadow-sm"
              }`}
              style={
                plan.highlighted
                  ? {
                      borderColor: "var(--color-primary)",
                      backgroundColor: "var(--color-surface, white)",
                    }
                  : undefined
              }
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {plan.tagline}
                </span>
              </div>

              <h2
                className="text-xl font-bold text-text mb-1"
                style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
              >
                {plan.name}
              </h2>

              <p className="text-sm text-muted mb-5">{plan.description}</p>

              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="text-5xl font-bold text-text"
                  style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
                >
                  {plan.price}
                </span>
              </div>
              <p className="text-sm text-muted mb-7">
                accès pendant{" "}
                <span className="font-semibold text-text">{plan.duration}</span>
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className="text-sm font-bold mt-0.5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "primary" : "outline"}
                size="md"
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-10">
          Paiement unique · Aucun abonnement · Accès immédiat
        </p>
      </div>
    </main>
  );
}
