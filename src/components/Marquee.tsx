// Läuft als schmales, gekipptes Schriftband quer über ein Bild — der
// Textstreifen wird einmal dupliziert und per CSS-Keyframe (globals.css,
// .animate-marquee) endlos nach links verschoben, sodass keine Lücke entsteht.
export default function Marquee({ text, repeat = 6 }: { text: string; repeat?: number }) {
  const items = Array.from({ length: repeat });

  return (
    <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 -rotate-2 overflow-hidden border-y border-paper/70 py-3 mix-blend-difference">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="font-label flex shrink-0 items-center">
            {items.map((_, i) => (
              <span
                key={i}
                className="mx-4 flex shrink-0 items-center gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-paper"
              >
                {text}
                <span aria-hidden>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
