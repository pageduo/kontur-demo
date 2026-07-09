export const company = {
  name: "KONTUR",
  fullName: "KONTUR Studio für Produkt- & Verpackungsdesign",
  founded: 2013,
  city: "Hamburg",
  claim: "Design mit Kante.",
  subline:
    "Produkt-, Verpackungs- und Markendesign für Unternehmen, die im Regal auffallen und in der Hand überzeugen wollen.",
  usp: "Strategie, Gestaltung und Prototyping unter einem Dach — vom ersten Skizzenstrich bis zur serienreifen Verpackung.",
  phone: "+49 40 555 891 30",
  phoneHref: "tel:+494055589130",
  email: "studio@kontur-demo.de",
  address: {
    street: "Große Elbstraße 145",
    zip: "22767",
    city: "Hamburg",
  },
  hours: [
    { day: "Montag – Freitag", time: "9:00 – 18:00 Uhr" },
    { day: "Samstag", time: "nach Vereinbarung" },
    { day: "Sonntag", time: "geschlossen" },
  ],
  social: [{ label: "Instagram" }, { label: "Behance" }, { label: "LinkedIn" }],
};

export const navPages = [
  { href: "/", label: "Start", number: "01" },
  { href: "/leistungen", label: "Leistungen", number: "02" },
  { href: "/referenzen", label: "Referenzen", number: "03" },
  { href: "/prozess", label: "Prozess", number: "04" },
  { href: "/team", label: "Team", number: "05" },
  { href: "/preise", label: "Preise", number: "06" },
  { href: "/faq", label: "FAQ", number: "07" },
  { href: "/karriere", label: "Karriere", number: "08" },
  { href: "/standorte", label: "Standorte", number: "09" },
  { href: "/kontakt", label: "Kontakt", number: "10" },
] as const;

export const primaryNavHrefs = ["/", "/leistungen", "/referenzen", "/team", "/kontakt"];

export const stats = [
  { value: 12, suffix: "", label: "Jahre Studio-Erfahrung" },
  { value: 210, suffix: "+", label: "realisierte Projekte" },
  { value: 96, suffix: "%", label: "Kundenzufriedenheit" },
  { value: 9, suffix: "", label: "Gestalter:innen im Team" },
];

export const services = [
  {
    key: "produktdesign",
    title: "Produktdesign",
    description:
      "Formfindung, Ergonomie und Materialwahl für Produkte, die auf den ersten Griff überzeugen — von der Konzeptskizze bis zur Serienzeichnung.",
  },
  {
    key: "verpackung",
    title: "Verpackungsdesign",
    description:
      "Strukturdesign, Displaylösungen und Materialkonzepte, die im Regal auffallen, sich gut anfühlen und Herstellung sowie Logistik mitdenken.",
  },
  {
    key: "branding",
    title: "Markenidentität & Branding",
    description:
      "Logo, Corporate Design und Markenwelten, die aus einem Produkt eine wiedererkennbare Haltung machen.",
  },
  {
    key: "prototyping",
    title: "Prototyping & Modellbau",
    description:
      "3D-Druck, Handmuster und Serienvorbereitung in unserer eigenen Werkstatt — greifbar, bevor produziert wird.",
  },
  {
    key: "editorial",
    title: "Editorial & Kampagne",
    description:
      "Packshots, Kataloge und Kampagnenmotive, die Produkt und Verpackung in ihrem besten Licht zeigen.",
  },
  {
    key: "strategie",
    title: "Strategie & Beratung",
    description:
      "Marktanalyse, Positionierung und Workshops — für Entscheidungen, die vor dem ersten Entwurf getroffen werden müssen.",
  },
] as const;

export const processSteps = [
  {
    key: "kickoff",
    title: "Kickoff & Analyse",
    description:
      "Wir sichten Markt, Zielgruppe und bestehende Markenwelt und definieren gemeinsam das kreative Briefing.",
  },
  {
    key: "konzept",
    title: "Konzept & Skizzen",
    description:
      "Aus ersten Moodboards und Handskizzen entstehen mehrere Gestaltungsrichtungen, die wir gemeinsam schärfen.",
  },
  {
    key: "prototyp",
    title: "Gestaltung & Prototyp",
    description:
      "Die favorisierte Richtung wird verfeinert und als Handmuster oder 3D-Druck greifbar gemacht.",
  },
  {
    key: "rollout",
    title: "Serienreife & Rollout",
    description:
      "Reinzeichnung, Druckdaten und Produktionsbegleitung bis zum fertigen Produkt im Regal.",
  },
] as const;

export const galleryFilters = ["Alle", "Produktdesign", "Verpackungsdesign", "Branding", "Editorial"] as const;

export const galleryProjects = [
  {
    slug: "nordlicht-kaffeeroesterei",
    title: "Nordlicht Kaffeerösterei",
    category: "Verpackungsdesign",
    year: 2025,
    description:
      "Für eine Hamburger Kaffeerösterei entwickelten wir eine modulare Tütenverpackung mit wiederverschließbarem Ventil und einem Farbleitsystem für sechs Röstprofile.",
  },
  {
    slug: "feld-und-flur-teemanufaktur",
    title: "Feld & Flur Teemanufaktur",
    category: "Branding",
    year: 2024,
    description:
      "Ein komplettes Markenrelaunch für eine Bio-Teemanufaktur: Wortmarke, Illustrationssystem und Verpackungsfamilie aus Graspapier.",
  },
  {
    slug: "loop-kuechenmaschine",
    title: "LOOP Küchenmaschine",
    category: "Produktdesign",
    year: 2025,
    description:
      "Formgebung und CMF-Konzept für eine kompakte Küchenmaschine mit Fokus auf Reparierbarkeit und Materialreduktion.",
  },
  {
    slug: "steinhoff-weingueter",
    title: "Weingut Steinhoff",
    category: "Editorial",
    year: 2023,
    description:
      "Etikettenserie, Packshots und Kampagnenmotive für eine Jahrgangslinie aus der Weinregion an der Elbe.",
  },
  {
    slug: "pure-skinlab-kosmetik",
    title: "Pure Skinlab",
    category: "Verpackungsdesign",
    year: 2024,
    description:
      "Nachfüllbare Tiegel- und Flaschensysteme für eine nachhaltige Kosmetiklinie, inklusive Displaykonzept für den Einzelhandel.",
  },
  {
    slug: "waldkind-spielwaren",
    title: "Waldkind Spielwaren",
    category: "Produktdesign",
    year: 2022,
    description:
      "Formholz-Spielzeugserie mit abgestimmtem Verpackungssystem aus einem einzigen Kartonzuschnitt.",
  },
  {
    slug: "hafenbrand-destillerie",
    title: "Hafenbrand Destillerie",
    category: "Branding",
    year: 2023,
    description:
      "Markenauftritt und Flaschendesign für eine kleine Hamburger Gin-Destillerie mit Fokus auf regionale Botanicals.",
  },
  {
    slug: "studio-lumen-leuchten",
    title: "Studio Lumen Leuchten",
    category: "Editorial",
    year: 2025,
    description:
      "Produktkatalog und Kampagnenbilder für eine Leuchtenkollektion aus mundgeblasenem Glas.",
  },
] as const;

export const pricingTiers = [
  {
    title: "Sprint",
    price: "ab 4.900 €",
    description:
      "Ein fokussierter Verpackungs- oder Etikettenrefresh in zwei bis drei Wochen — ideal für einzelne Produkte oder kleine Sortimente.",
    features: ["Moodboard & 2 Entwurfsrichtungen", "Ein Korrekturlauf inklusive", "Druckfertige Reinzeichnung"],
    highlighted: false,
  },
  {
    title: "Studio-Projekt",
    price: "ab 18.500 €",
    description:
      "Vollständiges Produkt- oder Verpackungsdesign von der Analyse bis zur Serienreife, inklusive Prototyp aus unserer Werkstatt.",
    features: ["Strategie- & Konzeptphase", "Physischer Prototyp / Handmuster", "Produktionsbegleitung bis Rollout"],
    highlighted: true,
  },
  {
    title: "Partnerschaft",
    price: "auf Anfrage",
    description:
      "Laufende Zusammenarbeit als ausgelagertes Design-Team — für Marken mit regelmäßigem Sortiments- und Kampagnenbedarf.",
    features: ["Fester Ansprechpartner im Studio", "Priorisierte Kapazität", "Quartalsweise Markenreview"],
    highlighted: false,
  },
] as const;

export const team = [
  {
    key: "mara",
    name: "Mara Lindqvist",
    role: "Gründerin & Creative Direction",
    bio: "Industriedesignerin mit Stationen in Mailand und Kopenhagen, führt KONTUR seit 2013.",
  },
  {
    key: "jonte",
    name: "Jonte Reimers",
    role: "Leitung Produktdesign",
    bio: "Verantwortet Formfindung und CMF-Konzepte — vom ersten Sketch bis zur technischen Konstruktion.",
  },
  {
    key: "nadja",
    name: "Nadja Ostermann",
    role: "Verpackungs- & Strukturdesign",
    bio: "Entwickelt Faltschachteln, Displays und Materialkonzepte, die Produktion und Logistik von Anfang an mitdenken.",
  },
  {
    key: "felix",
    name: "Felix Ahrensburg",
    role: "Markenidentität & Grafik",
    bio: "Gestaltet Wortmarken, Schriftsysteme und Verpackungsgrafik mit klarer visueller Haltung.",
  },
  {
    key: "solveig",
    name: "Solveig Brandt",
    role: "Prototyping & Modellbau",
    bio: "Baut Handmuster und 3D-Drucke in der studioeigenen Werkstatt — bevor produziert wird.",
  },
  {
    key: "timo",
    name: "Timo Sievers",
    role: "Projektsteuerung & Client Services",
    bio: "Ihr fester Ansprechpartner während der gesamten Projektlaufzeit.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Aus einer vagen Idee wurde in drei Monaten eine Verpackung, die unsere Umsätze im Einzelhandel sichtbar verändert hat.",
    name: "L. Anders",
    context: "Gründerin, Pure Skinlab",
  },
  {
    quote:
      "Das Studio denkt Produktion und Logistik von Anfang an mit — keine bösen Überraschungen kurz vor dem Rollout.",
    name: "T. Marquardt",
    context: "Category Manager, Feld & Flur",
  },
  {
    quote:
      "Der Prototyp aus der eigenen Werkstatt hat uns überzeugt, bevor auch nur eine Verpackung gedruckt war.",
    name: "H. Kruse",
    context: "Gründer, Nordlicht Kaffeerösterei",
  },
] as const;

export const faqs = [
  {
    question: "Wie läuft ein erstes Gespräch ab und was kostet es?",
    answer:
      "Das Erstgespräch ist unverbindlich und kostenfrei. Wir sichten Ihr Produkt bzw. Ihre Marke, besprechen Ziele und geben eine erste Einschätzung zu Umfang und Investition.",
  },
  {
    question: "Wie lange dauert ein Verpackungs- oder Produktdesign-Projekt?",
    answer:
      "Je nach Umfang zwischen zwei Wochen für einen fokussierten Sprint und vier bis sechs Monaten für ein komplettes Produkt inklusive Prototyping und Serienvorbereitung.",
  },
  {
    question: "Bauen Sie auch physische Prototypen?",
    answer:
      "Ja, in unserer eigenen Werkstatt entstehen 3D-Drucke und Handmuster — so lässt sich jedes Design anfassen, bevor produziert wird.",
  },
  {
    question: "Arbeiten Sie auch mit kleinen Marken und Start-ups?",
    answer:
      "Ja, unser Sprint-Paket ist speziell für kleinere Sortimente und knappere Budgets gedacht, ohne bei Qualität und Sorgfalt Abstriche zu machen.",
  },
  {
    question: "Wem gehören die Design-Rechte nach Projektabschluss?",
    answer:
      "Nach vollständiger Bezahlung gehen alle Nutzungsrechte am finalen Design vollständig auf Sie über — das regeln wir transparent im Angebot.",
  },
  {
    question: "Denken Sie Nachhaltigkeit bei Verpackungen mit?",
    answer:
      "Materialwahl, Recyclingfähigkeit und Reduktion sind fester Bestandteil jedes Verpackungskonzepts, nicht ein Zusatzmodul.",
  },
] as const;

export const jobs = [
  {
    title: "Senior Produktdesigner:in",
    type: "Vollzeit",
    description:
      "Formfindung und technische Umsetzung für Konsumgüter- und Haushaltsprodukte in enger Abstimmung mit unserer Werkstatt.",
  },
  {
    title: "Grafikdesigner:in Verpackung",
    type: "Vollzeit",
    description:
      "Reinzeichnung, Druckvorstufe und Gestaltung von Verpackungsfamilien für wechselnde Kunden aus Food, Kosmetik und Lifestyle.",
  },
  {
    title: "Praktikum Industrial Design",
    type: "Praktikum",
    description:
      "Sechsmonatiges Praktikum mit Einblick in Konzept, Prototyping und Modellbau — ideal parallel zum Studium.",
  },
] as const;

export const locations = [
  {
    name: "Studio Große Elbstraße",
    area: "Hamburg-Altona",
    isMain: true,
    mapQuery: "Große Elbstraße 145, 22767 Hamburg",
    description:
      "Unser Hauptsitz mit Gestaltungsateliers, Materialbibliothek und Kundenlounge liegt direkt an der Elbe — hier laufen alle Projekte zusammen.",
  },
  {
    name: "Modellbau-Werkstatt Bahrenfeld",
    area: "Hamburg-Bahrenfeld",
    isMain: false,
    mapQuery: "Bahrenfeld, Hamburg",
    description:
      "3D-Drucker, Fräsen und Handwerkzeug für Prototypen und Handmuster — fußläufig vom Hauptstudio entfernt.",
  },
  {
    name: "Studio Berlin",
    area: "Berlin-Friedrichshain",
    isMain: false,
    mapQuery: "Friedrichshain, Berlin",
    description: "Ein kleines Team betreut von hier aus Kund:innen aus Berlin und dem süddeutschen Raum.",
  },
  {
    name: "Einsatzgebiet DACH",
    area: "Deutschland · Österreich · Schweiz",
    isMain: false,
    mapQuery: "Deutschland",
    description:
      "Für Workshops, Fotoshootings und Produktionsbegleitung sind wir regelmäßig auch bei Kunden und Herstellern im gesamten deutschsprachigen Raum vor Ort.",
  },
] as const;
