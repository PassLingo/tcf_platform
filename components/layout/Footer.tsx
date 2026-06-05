import { Globe, Share2, MessageCircle } from "lucide-react";

const footerLinks = {
  Pages: [
    { label: "Accueil", href: "#accueil" },
    { label: "Examens", href: "#examens" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  Methodologies: [
    { label: "Compréhension écrite", href: "#" },
    { label: "Compréhension orale", href: "#" },
    { label: "Expression écrite", href: "#" },
    { label: "Expression orale", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Politique de retour", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGU", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "var(--color-primary)", fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
              >
                M
              </div>
              <span
                className="text-lg font-bold text-text"
                style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
              >
                MonTCF
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              La plateforme de référence pour préparer votre examen de français et réussir votre projet d&apos;immigration.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="p-2 rounded-lg hover:bg-bg text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-bg text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                <Share2 size={18} />
              </a>
              <a href="#" aria-label="WhatsApp" className="p-2 rounded-lg hover:bg-bg text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-sm font-semibold text-text mb-4"
                style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © 2025 MonTCF. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">
              CGU
            </a>
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
