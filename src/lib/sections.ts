/*
 * Eine Quelle für beides: die Abschnitte des One-Pagers (Anker-IDs) und die
 * eigenständigen Seiten (Routen). Der One-Pager wird über die IDs gescrollt und
 * von der rechten Statusleiste begleitet; das Hauptmenü oben führt über `href`
 * auf die jeweilige Einzelseite.
 */

export type SiteSection = {
  /** Anker-ID des Abschnitts auf der Startseite */
  id: string;
  label: string;
  /** Route der eigenständigen Seite */
  href: string;
  number: string;
  /** Im schwebenden Pill-Menü sichtbar (der Rest steckt im Overlay) */
  primary: boolean;
};

/*
 * Die Nummern sind Abschnittskennungen, keine Menuezaehlung: dieselbe Nummer
 * steht im Seitenkopf, im Sektionskopf und in der rechten Statusleiste. Sie
 * muessen deshalb mit den Abschnitten der Startseite uebereinstimmen.
 *
 * Die 02 fehlt hier absichtlich — das ist der Abschnitt "Haltung" auf der
 * Startseite, der keine eigene Seite hat. Vorher war die Liste luckenlos
 * durchnummeriert und lag dadurch ab "Leistungen" um eins daneben: das
 * Overlay zeigte "03 Prozess", die Seite selbst "04 Prozess".
 */
export const siteSections: SiteSection[] = [
  { id: "start", label: "Start", href: "/", number: "01", primary: true },
  { id: "leistungen", label: "Leistungen", href: "/leistungen", number: "03", primary: true },
  { id: "prozess", label: "Prozess", href: "/prozess", number: "04", primary: true },
  { id: "referenzen", label: "Referenzen", href: "/referenzen", number: "05", primary: true },
  { id: "team", label: "Team", href: "/team", number: "06", primary: true },
  { id: "preise", label: "Preise", href: "/preise", number: "07", primary: false },
  { id: "faq", label: "FAQ", href: "/faq", number: "08", primary: false },
  { id: "kontakt", label: "Kontakt", href: "/kontakt", number: "09", primary: true },
];

/** Im Pill-Menü sichtbare Punkte. */
export const primarySections = siteSections.filter((s) => s.primary);

/** Vollständiges Menü im Overlay — inklusive der Seiten ohne eigenen Abschnitt. */
export const overlayPages = [
  ...siteSections.map(({ label, href, number }) => ({ label, href, number })),
  { label: "Karriere", href: "/karriere", number: "10" },
  { label: "Standorte", href: "/standorte", number: "11" },
];
