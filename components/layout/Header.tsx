"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "TCF Canada", href: "/tcf-canada" },
  { label: "Blog", href: "/blog" },
  { label: "Tarifs", href: "/tarifs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-surface/80 border-b border-border shadow-sm"
          : "bg-surface"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
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
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Se connecter
            </Button>
            <Button variant="primary" size="sm">
              S&apos;inscrire →
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
          <button
            className="p-2 rounded-lg hover:bg-border focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border px-4 pt-4 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-text py-2 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Button variant="outline" size="sm" className="w-full justify-center">
              Se connecter
            </Button>
            <Button variant="primary" size="sm" className="w-full justify-center">
              S&apos;inscrire →
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
