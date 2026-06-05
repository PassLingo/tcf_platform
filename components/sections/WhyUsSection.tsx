import Card from "@/components/ui/Card";

const features = [
  {
    icon: "🎯",
    title: "Accompagnement personnalisé",
    description:
      "Un expert vous suit tout au long de votre préparation et adapte le contenu à vos points faibles.",
  },
  {
    icon: "📊",
    title: "Simulations officielles",
    description:
      "Des billets 100% conformes au format réel de l'examen avec correction automatique et explications.",
  },
  {
    icon: "♾️",
    title: "Accès illimité",
    description:
      "Révisez à votre rythme, 24h/24, depuis n'importe quel appareil, sans limite de sessions.",
  },
  {
    icon: "🏆",
    title: "Garantie de réussite",
    description:
      "Si vous ne réussissez pas après avoir suivi notre programme, nous vous remboursons intégralement.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold text-text mb-4"
            style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
          >
            Pourquoi choisir notre plateforme ?
          </h2>
          <p className="text-muted text-lg">
            Tout ce dont vous avez besoin pour réussir, au même endroit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} hover>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4"
                style={{ backgroundColor: "var(--color-primary-light)" }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-base font-medium text-text mb-2"
                style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)", fontSize: "17px" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
