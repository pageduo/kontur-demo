"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

/*
 * Eingabefelder haben im Token-Set 0px Radius — nur Buttons und Tags sind Pills.
 * Die Felder sind reine Linien: kein Kasten, kein Füllton, nur eine Unterkante,
 * die beim Fokus auf Schwarz umschlägt.
 */
const fieldClass =
  "w-full border-0 border-b border-pewter bg-transparent px-0 py-3 text-[16px] text-ink placeholder:text-stone/70 focus:border-ink focus:outline-none transition-colors duration-300";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col justify-center border-t border-ink py-14">
        <p className="t-heading-sm">Vielen Dank.</p>
        <p className="t-body mt-4 max-w-[46ch] text-stone">
          Dies ist eine Demo-Website ohne echten Formularversand. In der echten Umsetzung würde Ihre
          Anfrage jetzt im Studio eingehen und innerhalb eines Werktags beantwortet.
        </p>
        <button onClick={() => setSent(false)} className="pill mt-8 self-start">
          Formular zurücksetzen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 border-t border-ink pt-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="eyebrow text-stone">
            Name
          </label>
          <input id="cf-name" required type="text" placeholder="Ihr Name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="cf-mail" className="eyebrow text-stone">
            E-Mail
          </label>
          <input
            id="cf-mail"
            required
            type="email"
            placeholder="name@unternehmen.de"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-tel" className="eyebrow text-stone">
          Telefon <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input id="cf-tel" type="tel" placeholder="Für Rückfragen" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="cf-msg" className="eyebrow text-stone">
          Nachricht
        </label>
        <textarea
          id="cf-msg"
          required
          rows={4}
          placeholder="Produkt, gewünschte Leistung, Zeitrahmen"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <label className="flex items-start gap-3">
        <input
          required
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-black"
        />
        <span className="t-caption text-stone">
          Ich habe die{" "}
          <Link href="/datenschutz" className="ulink text-ink">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
          einverstanden.
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" className="pill pill-filled">
          Nachricht senden
          <span aria-hidden>&rarr;</span>
        </button>
        <p className="t-caption text-stone">
          Demo-Formular &middot; es werden keine Daten übertragen oder gespeichert.
        </p>
      </div>
    </form>
  );
}
