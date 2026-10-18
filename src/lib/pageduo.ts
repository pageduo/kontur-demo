/**
 * Anbieter dieser Demo-Website.
 *
 * Das dargestellte Studio ist frei erfunden. Rechtlich verantwortlich für
 * diese Seite ist die Agentur, die die Demo betreibt — Impressum und
 * Datenschutz verweisen deshalb hierher und nicht auf das erfundene Studio.
 *
 * Die Angaben des Studios stehen in `src/lib/content.ts` und sind
 * anonymisiert: `.example` als Domain, eine nicht vergebene Postleitzahl,
 * eine Rufnummer aus Nullen. Wer dort etwas ändert, prüft bitte vorher, ob
 * der neue Wert zufällig einen echten Betrieb oder eine echte Person trifft.
 */

export const PAGEDUO_NAME = "PageDuo GbR";
export const PAGEDUO_PARTNERS = "Nick Neukirchner, Benedikt Kaiser";
export const PAGEDUO_EMAIL = "info@pageduo.de";
// TODO: auf https://pageduo.de umstellen, sobald die Domain live ist
export const PAGEDUO_URL = "https://pageduo-new.vercel.app";

/** Kurzname dieser Demo. Trägt die Platzhalter-Domain `<slug>.example`. */
export const DEMO_SLUG = "kontur";

/** Name des dargestellten, frei erfundenen Unternehmens. */
export const DEMO_FIRMA = "KONTUR Studio für Produkt- & Verpackungsdesign";

/** Steht wortgleich im Impressum, im Datenschutz und im Cookie-Banner. */
export const DEMO_HINWEIS =
  `Dies ist eine Demo-Website. ${DEMO_FIRMA} ist ein fiktives Unternehmen. ` +
  "Alle Namen, Adressen, Kontaktdaten, Personen, Bewertungen und Inhalte sind frei erfunden.";

/** Antwort auf jeden Klick, der in der Demo ins Leere laufen würde. */
export const DEMO_DEAKTIVIERT = "In der Demo deaktiviert";
