import { DEMO_HINWEIS } from "@/lib/pageduo";

/**
 * Der Hinweis-Kasten, der auf beiden Rechtsseiten gleich lautet.
 *
 * Gleicher Wortlaut an beiden Stellen und nur eine Quelle dafür: Zwei
 * Fassungen desselben Hinweises laufen mit der Zeit auseinander, und beim
 * Satz „ist ein fiktives Unternehmen“ will man das nicht riskieren.
 *
 * Kantig und ohne Radius, wie alles in diesem System: Kontrast ist hier die
 * Erhebung, nicht der Schatten.
 */
export default function DemoHinweis({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-ink bg-newsprint p-6 ${className}`}>
      <p className="t-body-sm text-stone">
        <strong className="text-ink">Hinweis:</strong> {DEMO_HINWEIS}
      </p>
    </div>
  );
}
