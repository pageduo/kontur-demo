"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { DEMO_DEAKTIVIERT } from "@/lib/pageduo";

/**
 * Ein Bedienelement, das in der Demo bewusst nirgendwohin führt.
 *
 * Anrufen und Schreiben sind auf einer Betriebsseite die wichtigsten
 * Handlungen überhaupt, und genau deshalb bleiben die Knöpfe stehen — eine
 * Vorlage ohne sie zeigt nicht, wie die fertige Seite wirkt. Was fehlen
 * muss, ist das Ziel dahinter: Eine Nummer, die wählt, gehört irgendwann
 * jemandem.
 *
 * `children` und `hinweis` sind einfache Knoten, keine Funktionen: Die
 * Aufrufer sind teils Server-Komponenten, und über diese Grenze lässt React
 * keine Funktionen durch.
 */
export default function DemoAction({
  className,
  ariaLabel,
  children,
  hinweis = DEMO_DEAKTIVIERT,
}: {
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
  hinweis?: ReactNode;
}) {
  const [zeigeHinweis, setZeigeHinweis] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => {
        setZeigeHinweis(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setZeigeHinweis(false), 2600);
      }}
      className={className}
    >
      {zeigeHinweis ? hinweis : children}
    </button>
  );
}
