import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "pour toujours",
    description: "Idéal pour découvrir la plateforme",
    features: [
      "5 billets d'essai",
      "Correction automatique",
      "Accès à 1 examen",
      "Sans carte bancaire",
    ],
    cta: "Commencer gratuitement",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "19€",
    period: "par mois",
    description: "Pour une préparation complète",
    features: [
      "Billets illimités",
      "Tous les examens",
      "Corrections détaillées",
      "Statistiques de progression",
      "Support par email",
    ],
    cta: "Choisir Standard",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    name: "Premium",
    price: "39€",
    period: "par mois",
    description: "Pour aller encore plus loin",
    features: [
      "Tout ce qui est inclus dans Standard",
      "Accompagnement 1-to-1",
      "Sessions de coaching",
      "Garantie de réussite",
      "Support prioritaire",
    ],
    cta: "Choisir Premium",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="tarifs" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold text-text mb-4"
            style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
          >
            Nos tarifs
          </h2>
          <p className="text-muted text-lg">
            Commencez gratuitement, évoluez selon vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? "border-2 scale-[1.02]"
                  : "border border-border bg-surface"
              }`}
              style={
                plan.highlighted
                  ? { borderColor: "var(--color-primary)", backgroundColor: "white" }
                  : undefined
              }
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-lg font-bold text-text mb-1"
                  style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-muted mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl font-bold text-text"
                    style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">/ {plan.period}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="text-success font-bold text-sm mt-0.5">✓</span>
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
      </div>
    </section>
  );
}
