// Kuratierte, lizenzfreie Unsplash-Motive (Unsplash-Lizenz: kostenlose kommerzielle Nutzung).
//
// Auswahlkriterien nach dem Bildbriefing des Design-Systems: dokumentarisch statt
// dekorativ — Werkstatt, Material, Maschine, Objekt in Situation. Volle Sättigung,
// keine Filter, rechteckiger Beschnitt. Bewusst KEINE Produkt-Mockups auf
// Farbflächen und keine gestellte Lifestyle-Fotografie: genau diese beiden
// Gattungen erzeugen den generischen Eindruck, den wir hier loswerden wollen.
//
// Jede ID wurde einzeln gesichtet: Inhalt passt zur Bildunterschrift, keine
// fremden Firmenlogos oder Wahrzeichen im Bild. Einige Motive werden bewusst
// zwischen Startseite und Unterseiten geteilt (siehe Kommentare).
// Für den echten Kundenbetrieb durch eigene / beauftragte Fotografie ersetzen.

function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const img = {
  // Arbeitsplatz mit Referenzwand — das Studio bei der Arbeit, nicht inszeniert.
  hero: unsplash("1574856049959-d3134a3e592f", 2000),
  // Materialmuster in Schwarz, Weiß und Textur — trägt die Haltungssektion.
  manifesto: unsplash("1752321531399-1e2b66043b52", 2000),
  // Werkstatthalle, dokumentarisch.
  about: unsplash("1591285687558-632ddc5e026a", 1600),

  leistungenHero: unsplash("1756267317751-3b740c2f6840", 2000),
  referenzenHero: unsplash("1606824722920-4c652a70f348", 2000),
  teamHero: unsplash("1628586431263-44040b966252", 2000),
  prozessHero: unsplash("1600697395543-ef3ee6e9af7b", 2000),
  faqHero: unsplash("1719529216596-d7c76431ee0d", 2000),
  preiseHero: unsplash("1700165644892-3dd6b67b25bc", 2000),
  // Wiederverwendung der Werkstatthalle aus "Über uns".
  karriereHero: unsplash("1591285687558-632ddc5e026a", 2000),
  standorteHero: unsplash("1581508512961-0e3b9524db40", 2000),

  services: {
    // Kante zwischen weißer Fläche und Holz — Formfindung als Geometrie.
    produktdesign: unsplash("1534094830444-3a1e21f7e3e7"),
    // Kartoneinsätze im Raster — Strukturdesign pur.
    verpackung: unsplash("1700165644892-3dd6b67b25bc"),
    // Farbmusterfächer — Farbsystem einer Marke.
    branding: unsplash("1624516268152-1e48624026ed"),
    // Reihe von 3D-Druckern in der Werkstatt.
    prototyping: unsplash("1611117775350-ac3950990985"),
    // Leeres Fotostudio mit Setzung — Packshot-Produktion.
    editorial: unsplash("1554941829-202a0b2403b8"),
    // Schreibtisch mit technischer Zeichnung.
    strategie: unsplash("1599420187429-774dbfc6ba5d"),
  },

  // Die vier Prozessschritte: Analyse, Konzept, Prototyp, Serie.
  process: [
    unsplash("1581092160562-40aa08e78837", 2000),
    unsplash("1611241893603-3c359704e0ee", 2000),
    unsplash("1611505908502-5b67e53e3a76", 2000),
    unsplash("1717386255773-1e3037c81788", 2000),
  ],

  gallery: {
    // Kraftpapier-Beutel ohne Markenaufdruck.
    "nordlicht-kaffeeroesterei": [unsplash("1651761483492-7d2e26dd3455")],
    // Unbedruckter Kraftkarton — passt zur Graspapier-Verpackung.
    "feld-und-flur-teemanufaktur": [unsplash("1585221330389-24fb30535ec7")],
    // Gebürstete Metallkante — CMF-Konzept eines Geräts.
    "loop-kuechenmaschine": [unsplash("1635800199270-128c26680ed5")],
    // Druckmaschine — Etikettenserie in Produktion.
    "steinhoff-weingueter": [unsplash("1581508512961-0e3b9524db40")],
    // Keramikflasche auf grauem Grund — Tiegel- und Flaschensystem.
    "pure-skinlab-kosmetik": [unsplash("1523263889714-d345f8119047")],
    // Holzobjekt mit Deckel — Formholzserie mit Verpackung.
    "waldkind-spielwaren": [unsplash("1770816307472-945144576a1f")],
    // Braunglasflaschen — Flaschendesign der Destillerie.
    "hafenbrand-destillerie": [unsplash("1765572805990-d88cba7abdea")],
    // Fotostudio-Setup — Katalog und Kampagnenbilder.
    "studio-lumen-leuchten": [unsplash("1615458509633-f15b61bdacb8")],
  } as Record<string, string[]>,

  // Porträts bleiben aus dem Bestand: die dokumentarischen Werkstattporträts
  // auf Unsplash zeigen durchweg ältere Handwerker und passen nicht zum
  // beschriebenen Team. Die Sektion legt stattdessen eine Graustufen-
  // Behandlung darüber, die bei Hover in Farbe aufgeht — das ist der
  // editoriale Griff, der die Bilder aus dem Stockfoto-Eindruck holt.
  team: {
    mara: unsplash("1574281570877-bd815ebb50a4", 900),
    jonte: unsplash("1612242879330-cd06b2696e56", 900),
    nadja: unsplash("1634510979979-4be6881d31bb", 900),
    felix: unsplash("1498798821241-1f327af804fe", 900),
    solveig: unsplash("1606143412458-acc5f86de897", 900),
    timo: unsplash("1558730234-d8b2281b0d00", 900),
  },

  locations: [
    unsplash("1591285687558-632ddc5e026a", 1200),
    unsplash("1611117775350-ac3950990985", 1200),
    unsplash("1628586431263-44040b966252", 1200),
    unsplash("1606824722920-4c652a70f348", 1200),
  ],

  karriere: [
    unsplash("1611117775350-ac3950990985", 1200),
    unsplash("1756267317751-3b740c2f6840", 1200),
  ],
};
