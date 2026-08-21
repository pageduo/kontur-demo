/*
 * Schriftband über die volle Breite. Der Streifen wird einmal dupliziert und
 * per CSS-Keyframe endlos nach links geschoben, sodass keine Lücke entsteht.
 * Beim Hover hält er an — die einzige Spielerei, die sich das System erlaubt.
 */
export default function Marquee({
  items,
  tone = "paper",
}: {
  items: string[];
  tone?: "paper" | "ink";
}) {
  const group = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center whitespace-nowrap">
          <span className="t-heading-sm px-6 sm:px-9">{item}</span>
          {/* Trenner bewusst in Tinte, nicht in Rot: zwölf rote Rauten
              gleichzeitig im Bild wären die Überdosis, die das System verbietet. */}
          <span aria-hidden className="block h-[7px] w-[7px] rotate-45 bg-current opacity-70" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden
      className={`marquee-host overflow-hidden border-y py-5 sm:py-7 ${
        tone === "ink" ? "border-paper/25 bg-ink text-paper" : "border-ink bg-paper text-ink"
      }`}
    >
      <div className="flex w-max animate-marquee">
        {group}
        {group}
      </div>
    </div>
  );
}
