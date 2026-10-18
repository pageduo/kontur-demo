/**
 * Standort als eigene Zeichnung statt als fremde Karte.
 *
 * Vorher hing hier ein Google-Maps-iframe hinter einer Zwei-Klick-Lösung.
 * Die war datenschutzrechtlich sauber, löste aber ein Problem, das diese
 * Demo gar nicht hat: Die Adresse ist frei erfunden. Eine echte Karte hätte
 * entweder auf einen fremden Hauseingang gezeigt oder ins Leere.
 *
 * Kein Screenshot, keine Kacheln, kein externer Request beim Seitenaufruf.
 * Kantig und grau wie das übrige System.
 */

/** Zeigt auf den Ort, nicht auf eine erfundene Hausnummer. */
export function mapsUrl(ort: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ort)}`;
}

export default function MapEmbed({ query, title }: { query: string; title: string }) {
  return (
    <div
      role="img"
      aria-label={title}
      className="relative flex aspect-[16/10] w-full flex-col items-start justify-end gap-4 overflow-hidden bg-newsprint p-6 sm:p-8"
    >
      <svg
        viewBox="0 0 400 200"
        className="pointer-events-none absolute inset-0 h-full w-full text-pewter"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M-10 128 C 60 128, 96 108, 150 108 L 258 108 C 312 108, 348 92, 410 92 L 410 116 C 348 116, 312 132, 258 132 L 150 132 C 96 132, 60 152, -10 152 Z"
          fill="currentColor"
        />
        {["M-10 128 C 60 128, 96 108, 150 108 L 258 108 C 312 108, 348 92, 410 92",
          "M-10 152 C 60 152, 96 132, 150 132 L 258 132 C 312 132, 348 116, 410 116"].map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="text-ink"
          />
        ))}
        <circle cx="150" cy="108" r="5" fill="currentColor" className="text-signal-red" />
      </svg>

      <p className="t-body-sm relative max-w-[42ch] text-stone">
        <span className="text-ink">{query}</span> · Adresse fiktiv. Diese Demo bindet keine Karte
        ein; beim Aufruf der Seite werden keine Daten an Google übertragen.
      </p>
      <a
        href={mapsUrl(query)}
        target="_blank"
        rel="noopener noreferrer"
        className="pill pill-filled pill-sm relative"
      >
        In Google Maps öffnen ↗
      </a>
    </div>
  );
}
