// Kuratierte, lizenzfreie Unsplash-Motive (Unsplash-Lizenz: kostenlose kommerzielle Nutzung).
// Jede Bild-ID wurde einzeln geprüft (Inhalt passt zur Bildunterschrift, keine fremden
// Firmenlogos/Wahrzeichen sichtbar), bevor sie hier eingetragen wurde. Einige Motive werden
// bewusst zwischen Startseite und Unterseiten-Hero geteilt (siehe Kommentare). Für den echten
// Kundenbetrieb durch eigene / beauftragte Fotografie ersetzen.
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const img = {
  hero: unsplash("1782292932644-6c92ac8d21d6", 2000),
  manifesto: unsplash("1700165644892-3dd6b67b25bc", 2000),

  // Wiederverwendung des Materialstudio-Motivs als ruhiger Einstieg in die Leistungsseite.
  leistungenHero: unsplash("1752321531468-f013a96d30d0", 2000),
  // Wiederverwendung des Regal-Motivs aus dem Prozess-Schritt "Rollout".
  referenzenHero: unsplash("1646066490248-27b984261e3c", 2000),
  // Wiederverwendung des Team-Kollaborations-Motivs aus "Über uns".
  teamHero: unsplash("1690191863988-f685cddde463", 2000),
  // Wiederverwendung des Skizzen-Motivs aus Prozessschritt 2.
  prozessHero: unsplash("1761746395622-5f7e0e7b4ec7", 2000),
  // Wiederverwendung des Whiteboard-Motivs aus "Strategie & Beratung".
  faqHero: unsplash("1532622785990-d2c36a76f5a6", 2000),
  // Wiederverwendung des Verpackungs-Motivs aus "Verpackungsdesign".
  preiseHero: unsplash("1595246135406-803418233494", 2000),
  // Wiederverwendung des Werkstatt-Motivs aus "Karriere".
  karriereHero: unsplash("1761074342668-c38fc2e62e67", 2000),
  // Wiederverwendung des Hauptsitz-Motivs aus "Standorte".
  standorteHero: unsplash("1592517207964-dfdf8ad96016", 2000),

  services: {
    produktdesign: unsplash("1763797833968-1283590a1087"),
    verpackung: unsplash("1595246135406-803418233494"),
    branding: unsplash("1652805363265-b8fbf9bbdfac"),
    prototyping: unsplash("1702863361902-93c51bfbd923"),
    editorial: unsplash("1634150820663-941c2f47b9b6"),
    strategie: unsplash("1532622785990-d2c36a76f5a6"),
  },

  process: [
    unsplash("1562186971-736d2e3ae153"),
    unsplash("1761746395622-5f7e0e7b4ec7"),
    unsplash("1563520239648-a24e51d4b570"),
    unsplash("1646066490248-27b984261e3c"),
  ],

  gallery: {
    "nordlicht-kaffeeroesterei": [unsplash("1685798830559-c116586a0d33")],
    "feld-und-flur-teemanufaktur": [unsplash("1624137527136-66e631bdaa0e")],
    "loop-kuechenmaschine": [unsplash("1512115604213-504760ac3bee")],
    "steinhoff-weingueter": [unsplash("1700893417209-18dc88c989a0")],
    "pure-skinlab-kosmetik": [unsplash("1649005203762-8bbd673468dc")],
    "waldkind-spielwaren": [unsplash("1714618888538-8d15a9228236")],
    "hafenbrand-destillerie": [unsplash("1759006252603-438a2c5ed14b")],
    "studio-lumen-leuchten": [unsplash("1573676386604-78f8ed228e2b")],
  } as Record<string, string[]>,

  team: {
    mara: unsplash("1574281570877-bd815ebb50a4", 900),
    jonte: unsplash("1612242879330-cd06b2696e56", 900),
    nadja: unsplash("1634510979979-4be6881d31bb", 900),
    felix: unsplash("1498798821241-1f327af804fe", 900),
    solveig: unsplash("1606143412458-acc5f86de897", 900),
    timo: unsplash("1558730234-d8b2281b0d00", 900),
  },

  testimonialAvatars: [
    unsplash("1654765437547-6b572f52ee1a", 200),
    unsplash("1598006839649-5588feb1bae0", 200),
    unsplash("1610642434250-392436bd9fba", 200),
  ],

  locations: [
    unsplash("1592517207964-dfdf8ad96016", 1200),
    unsplash("1773517459502-54c3a9b103a4", 1200),
    unsplash("1593853814555-6951885ffa63", 1200),
    unsplash("1630497375297-8d22a0cc852e", 1200),
  ],

  karriere: [
    unsplash("1761074342668-c38fc2e62e67", 1200),
    unsplash("1753162657497-82d7964273bd", 1200),
  ],

  about: unsplash("1690191863988-f685cddde463", 1400),
};
