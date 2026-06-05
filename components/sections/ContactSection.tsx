"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });

  const inputClass =
    "w-full border border-gray-200 rounded-xl p-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 transition-all";
  const focusRingStyle = { "--tw-ring-color": "rgba(79,60,201,0.2)" } as React.CSSProperties;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5">
            <h2
              className="text-3xl lg:text-4xl font-bold text-text mb-8"
              style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
            >
              Contactez-nous
            </h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Nom <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className={inputClass}
                  style={focusRingStyle}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  E-mail <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  style={focusRingStyle}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Votre message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={focusRingStyle}
                  required
                />
              </div>
              <Button variant="primary" size="md" type="submit" className="self-start">
                Envoyer le message →
              </Button>
            </form>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-start">
            <h3
              className="text-lg font-semibold text-text mb-6"
              style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
            >
              Ou contactez-nous directement
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-3 text-sm text-text hover:text-primary transition-colors group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <Mail size={18} style={{ color: "var(--color-primary)" }} />
                </div>
                contact@example.com
              </a>
              <a
                href="tel:+18000000000"
                className="flex items-center gap-3 text-sm text-text hover:text-primary transition-colors group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <Phone size={18} style={{ color: "var(--color-primary)" }} />
                </div>
                +1 (800) 000-0000
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium text-white transition-colors hover:opacity-90 self-start"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={18} />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl p-8 text-white text-center"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
          >
            Prêt à commencer votre préparation ?
          </h3>
          <p className="text-white/80 mb-6">
            Rejoignez 1 200+ candidats qui ont réussi.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-gray-100"
            style={{ backgroundColor: "white", color: "var(--color-primary)" }}
          >
            S&apos;inscrire gratuitement →
          </a>
        </div>
      </div>
    </section>
  );
}
