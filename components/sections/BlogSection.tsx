import Link from "next/link";
import Button from "@/components/ui/Button";

const posts = [
  {
    category: "Conseils",
    title: "Comment se préparer au TCF Canada en 30 jours",
    excerpt:
      "Découvrez notre méthode éprouvée pour maximiser votre score en un mois de préparation intensive.",
    date: "15 nov. 2025",
    readTime: "5 min",
  },
  {
    category: "Guide",
    title: "TCF vs DELF : lequel choisir pour immigrer au Canada ?",
    excerpt:
      "Analyse complète des deux examens : format, reconnaissance, validité et conseils pour faire le bon choix.",
    date: "3 nov. 2025",
    readTime: "7 min",
  },
  {
    category: "Testimonial",
    title: "De B1 à C1 en 3 mois : le parcours de Mohamed",
    excerpt:
      "Mohamed nous raconte comment il a progressé de deux niveaux grâce à une méthode structurée et régulière.",
    date: "22 oct. 2025",
    readTime: "4 min",
  },
];

const categoryColors: Record<string, string> = {
  Conseils: "var(--color-primary)",
  Guide: "#16A37F",
  Testimonial: "#E6812A",
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold text-text mb-4"
            style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
          >
            Nos derniers articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-200"
            >
              <div
                className="w-full aspect-video flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary-light)" }}
              >
                <span className="text-3xl opacity-40">📖</span>
              </div>

              <div className="p-6">
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-white mb-3"
                  style={{
                    backgroundColor: categoryColors[post.category] ?? "var(--color-primary)",
                  }}
                >
                  {post.category}
                </span>

                <h3
                  className="font-medium text-text mb-2 leading-snug"
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "17px",
                  }}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted">
                  <span>
                    {post.date} · {post.readTime} de lecture
                  </span>
                  <a
                    href="#"
                    className="font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Lire la suite →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/blog">
            <Button variant="outline" size="md">
              Voir tous les articles →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
