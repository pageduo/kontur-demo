# Medien-Audit — KONTUR

Stand: 31.10.2026 · Branch `legal/medien-audit` · Prüfer: Claude Opus 5 im Auftrag von PageDuo

Geprüft wurden alle Bilder, Videos, Grafiken, Schriften und Icon-Bibliotheken
dieses Repositorys auf Herkunft, Lizenzlage und Kennzeichnungspflicht nach
Art. 50 Abs. 4 EU AI Act (in Kraft seit 02.08.2026).

**Grundregel dieses Dokuments: Es wird nichts geraten.** Wo die Herkunft nicht
belegbar ist, steht „unklar" — nicht die wahrscheinlichste Vermutung.

---

## Überblick

| Ampel | Anzahl | |
|---|---|---|
| 🟢 GRÜN | 1 | die Schriften |
| 🟡 GELB | 32 | Unsplash-Motive: Quelle belegt, Lizenz und KI-Status nicht |
| 🔴 ROT | 0 | — |

Kein Medium wurde gekennzeichnet, gelöscht oder ausgetauscht. Das war in
diesem Schritt so vorgesehen.

---

## Der eine Befund, der alles andere trägt

Die Unsplash-Fotoseiten sind **nicht erreichbar**. Die lange Zahlenkette in
`images.unsplash.com/photo-1600880292203-757bb62b4baf` ist die Kennung des
Bildservers, nicht der Adressteil der Fotoseite; `unsplash.com/photos/<diese ID>`
antwortet mit 404. Ohne die Fotoseite lässt sich je Bild nicht feststellen:

- wer es aufgenommen hat,
- ob die freie Unsplash-Lizenz oder die abweichende **Unsplash+**-Lizenz gilt,
- ob Unsplash es als **KI-generiert** ausweist.

Der Dateikopf von `src/lib/images.ts` nennt die Unsplash-Lizenz und hält fest, die Motive seien
visuell geprüft worden. Das ist eine Angabe im Repo und zählt als Hinweis —
aber nicht als Nachweis gegenüber einem Rechteinhaber. Deshalb stehen alle
Unsplash-Motive auf 🟡, nicht auf 🟢.

**Was 🟢 daraus machen würde:** je Motiv die Fotoseite über die Bildersuche von
Unsplash auflösen und Fotograf, Lizenzart und KI-Kennzeichnung notieren. Oder
die Motive durch eigene beziehungsweise beauftragte Fotografie ersetzen — was
der Dateikopf für den echten Kundenbetrieb ohnehin vorsieht.

---

## Inventar

### Extern eingebundene Fotos (Unsplash)

Alle 32 Motive werden vom Bildserver `images.unsplash.com` geladen und liegen
**nicht** im Repository. Für sie gilt durchgehend: Quelle Unsplash (durch den
Auslieferungshost belegt), Fotograf **unklar**, Lizenzart **unklar**, KI
**unklar**, fotorealistisch ja, Ampel 🟡, keine Kennzeichnung gesetzt.

| Einsatzort im Code | Unsplash-ID | Motiv laut Repo |
|---|---|---|
| `hero` | `1574856049959-d3134a3e592f` | Arbeitsplatz mit Referenzwand — das Studio bei der Arbeit, nicht inszeniert. |
| `manifesto` | `1752321531399-1e2b66043b52` | Materialmuster in Schwarz, Weiß und Textur — trägt die Haltungssektion. |
| `about, karriereHero, locations` | `1591285687558-632ddc5e026a` | Werkstatthalle, dokumentarisch. |
| `leistungenHero, karriere` | `1756267317751-3b740c2f6840` | *(im Repo nicht beschrieben)* |
| `referenzenHero, locations` | `1606824722920-4c652a70f348` | *(im Repo nicht beschrieben)* |
| `teamHero, locations` | `1628586431263-44040b966252` | *(im Repo nicht beschrieben)* |
| `prozessHero` | `1600697395543-ef3ee6e9af7b` | *(im Repo nicht beschrieben)* |
| `faqHero` | `1719529216596-d7c76431ee0d` | *(im Repo nicht beschrieben)* |
| `preiseHero, services.verpackung` | `1700165644892-3dd6b67b25bc` | Kartoneinsätze im Raster — Strukturdesign pur. |
| `standorteHero, gallery` | `1581508512961-0e3b9524db40` | Druckmaschine — Etikettenserie in Produktion. |
| `services.produktdesign` | `1534094830444-3a1e21f7e3e7` | Kante zwischen weißer Fläche und Holz — Formfindung als Geometrie. |
| `services.branding` | `1624516268152-1e48624026ed` | Farbmusterfächer — Farbsystem einer Marke. |
| `services.prototyping, locations, karriere` | `1611117775350-ac3950990985` | Reihe von 3D-Druckern in der Werkstatt. |
| `services.editorial` | `1554941829-202a0b2403b8` | Leeres Fotostudio mit Setzung — Packshot-Produktion. |
| `services.strategie` | `1599420187429-774dbfc6ba5d` | Schreibtisch mit technischer Zeichnung. |
| `process` | `1581092160562-40aa08e78837` | *(im Repo nicht beschrieben)* |
| `process` | `1611241893603-3c359704e0ee` | *(im Repo nicht beschrieben)* |
| `process` | `1611505908502-5b67e53e3a76` | *(im Repo nicht beschrieben)* |
| `process` | `1717386255773-1e3037c81788` | *(im Repo nicht beschrieben)* |
| `gallery` | `1651761483492-7d2e26dd3455` | Kraftpapier-Beutel ohne Markenaufdruck. |
| `gallery` | `1585221330389-24fb30535ec7` | Unbedruckter Kraftkarton — passt zur Graspapier-Verpackung. |
| `gallery` | `1635800199270-128c26680ed5` | Gebürstete Metallkante — CMF-Konzept eines Geräts. |
| `gallery` | `1523263889714-d345f8119047` | Keramikflasche auf grauem Grund — Tiegel- und Flaschensystem. |
| `gallery` | `1770816307472-945144576a1f` | Holzobjekt mit Deckel — Formholzserie mit Verpackung. |
| `gallery` | `1765572805990-d88cba7abdea` | Braunglasflaschen — Flaschendesign der Destillerie. |
| `gallery` | `1615458509633-f15b61bdacb8` | Fotostudio-Setup — Katalog und Kampagnenbilder. |
| `team.mara` | `1574281570877-bd815ebb50a4` | *(im Repo nicht beschrieben)* |
| `team.jonte` | `1612242879330-cd06b2696e56` | *(im Repo nicht beschrieben)* |
| `team.nadja` | `1634510979979-4be6881d31bb` | *(im Repo nicht beschrieben)* |
| `team.felix` | `1498798821241-1f327af804fe` | *(im Repo nicht beschrieben)* |
| `team.solveig` | `1606143412458-acc5f86de897` | *(im Repo nicht beschrieben)* |
| `team.timo` | `1558730234-d8b2281b0d00` | *(im Repo nicht beschrieben)* |

### Schriften

Eingebunden über `next/font/google`. Next.js lädt die Schriftdateien zur
Bauzeit herunter und liefert sie von der eigenen Domain aus; beim Seitenaufruf
entsteht **kein Aufruf an Google**. Google Fonts stehen unter der SIL Open
Font License. 🟢

### Icon-Bibliotheken

Keine. Die Symbole sind Inline-SVG im Quelltext. 🟢

---

## Zusätzliche Prüfungen

### Öffentliches Repository und Weitergabe der Originaldateien

`pageduo/kontur-demo` ist auf GitHub **öffentlich**. Jede im Repository liegende
Bilddatei wird damit als Originaldatei zum Download angeboten.

Im Repository liegen keine Fotos — die Unsplash-Motive werden extern geladen.
Betroffen sind nur die Gerüstgrafiken aus der Next.js-Vorlage (MIT) und das
Favicon. Beide dürfen weitergegeben werden. **Kein Befund.**

### Externe Aufrufe beim Seitenaufruf

Beim Laden der Live-Seite werden die Motive von `images.unsplash.com` geholt.
Dabei erfährt Unsplash die **IP-Adresse jedes Besuchers**, dazu Zeitpunkt,
Browser und die verweisende Seite. Eine Einwilligung wird nicht eingeholt, und
die Datenschutzerklärung der Demo verweist auf PageDuo, deren Erklärung sagt:
„Beim Aufruf werden keine Inhalte von Drittanbietern geladen."

**Das deckt sich nicht.** Entweder die Bilder wandern ins Repository (sofern die
Lizenz das erlaubt — siehe oben, derzeit ungeklärt), oder die Datenschutz-
erklärung muss den Abruf benennen. Hier wurde nichts umgebaut.

---

## KI-Kennzeichnung

**Es wurde keine gesetzt.** Art. 50 Abs. 4 EU AI Act verlangt die Offenlegung bei
KI-erzeugten Medien, die echt wirken. Ob eines der Motive KI-erzeugt ist, lässt
sich ohne die Unsplash-Fotoseiten nicht feststellen — und die Regel aus dem
Prüfauftrag lautet: Bei „unklar" **nicht** kennzeichnen, sondern melden.

Eine Kennzeichnung auf Verdacht wäre nicht die sichere Seite, sondern eine
falsche Angabe über ein möglicherweise von Hand fotografiertes Bild.

## Bildnachweise

Keine erforderlich. Die Unsplash-Lizenz verlangt keine Namensnennung. Sollte sich
bei der Klärung herausstellen, dass ein Motiv unter Unsplash+ steht, ist dessen
Lizenz gesondert zu prüfen.

---

## Klärung nötig

| Was | Wie viele | Warum offen |
|---|---|---|
| KI-Status der Unsplash-Motive | 32 | Fotoseite nicht erreichbar |
| Lizenzart (frei oder Unsplash+) | 32 | dito |

---

## Werkzeuge und Methode

`exiftool`, `ffprobe` und ImageMagick stehen auf diesem Rechner nicht zur
Verfügung. Die Metadaten wurden deshalb direkt aus den Dateien gelesen: JPEG-
Segmente (EXIF, XMP, IPTC, Kommentar, C2PA), PNG-Textkammern und die Kopf-Atome
von MP4. Gesucht wurde nach `Software`, `Artist`, `Creator`, `Credit`,
`Copyright`, `DigitalSourceType` sowie nach Spuren bekannter KI-Werkzeuge.

Dazu: Git-Historie der Dateien, Kommentare und Dokumente im Repo, Sichtprüfung,
und für die externen Aufrufe eine Aufzeichnung aller Netzwerk-Anfragen der
Live-Seite.
