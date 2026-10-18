import { PAGEDUO_URL } from "@/lib/pageduo";

/**
 * Dauerhafte Kennzeichnung als Demo, unten links.
 *
 * Der Footer sagt es auch, aber den liest man am Ende — falls man so weit
 * kommt. Wer über eine Unterseite einsteigt und nach dreißig Sekunden zum
 * Telefon greift, hat den Hinweis nie gesehen. Deshalb steht er fest im
 * Bild, von der ersten Sekunde an.
 *
 * Unten links, weil unten rechts auf Mobilgeräten der Daumen liegt und dort
 * die Handlungsknöpfe stehen. Die Ebene liegt über dem Cookie-Balken: Sonst
 * verschwindet beim ersten Aufruf genau der Hinweis, der immer sichtbar
 * sein soll.
 */
export default function DemoBadge() {
  return (
    <div className="pointer-events-none fixed bottom-3 left-3 z-[100] sm:bottom-5 sm:left-5">
      <a
        data-demo-badge
        href={PAGEDUO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-1.5 border border-paper/40 bg-ink/95 px-2.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-paper shadow-xl backdrop-blur transition-colors hover:border-paper hover:text-pewter sm:gap-2 sm:px-3.5 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.2em]"
      >
        <span aria-hidden className="h-1.5 w-1.5 bg-signal-red" />
        Demo
        <span aria-hidden className="text-paper/30">·</span>
        PageDuo
      </a>
    </div>
  );
}
