"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type RailItem = { id: string; label: string; number: string };

/*
 * Statusleiste am rechten Rand.
 *
 * Sie liest die Abschnitte selbst aus dem DOM: jede Sektion markiert sich über
 * `data-rail-section` plus Label und Nummer. Dadurch funktioniert dieselbe
 * Leiste auf dem langen One-Pager wie auf den kürzeren Einzelseiten, ohne dass
 * irgendwo eine zweite Liste gepflegt werden muss.
 *
 * Aktiver Abschnitt ist der, dessen Oberkante zuletzt oberhalb von 45% der
 * Viewporthöhe lag — das entspricht dem, was man beim Lesen tatsächlich ansieht.
 */
export default function ScrollRail() {
  const pathname = usePathname();
  const [items, setItems] = useState<RailItem[]>([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const elements = useRef<HTMLElement[]>([]);

  const scan = useCallback(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rail-section]")
    );
    elements.current = nodes;
    setItems(
      nodes.map((n, i) => ({
        id: n.id,
        label: n.dataset.railLabel ?? n.id,
        number: n.dataset.railNumber ?? String(i + 1).padStart(2, "0"),
      }))
    );
  }, []);

  useEffect(() => {
    // Nach dem Routenwechsel einen Frame warten, bis die neue Seite steht.
    const t = window.setTimeout(scan, 60);
    return () => window.clearTimeout(t);
  }, [pathname, scan]);

  useEffect(() => {
    if (!items.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.innerHeight * 0.45;
      let current = 0;
      elements.current.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= marker) current = i;
      });
      setActive(current);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav
      aria-label="Position auf der Seite"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      {/* Durchgehende Spur mit Fortschrittsfüllung */}
      <div className="absolute right-0 top-0 h-full w-px bg-pewter" aria-hidden>
        <div
          className="h-full w-px origin-top bg-ink transition-transform duration-150 ease-linear"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>

      <ul className="relative flex flex-col gap-5">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <li key={item.id} className="group flex items-center justify-end gap-3">
              {/* Label erscheint beim Hover oder wenn aktiv */}
              <span
                className={`t-caption whitespace-nowrap transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "translate-x-0 opacity-100"
                    : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                }`}
              >
                <span className={isActive ? "accent-ink" : "text-stone"}>{item.number}</span>{" "}
                {item.label}
              </span>

              <a
                href={`#${item.id}`}
                aria-label={`Zu Abschnitt ${item.label}`}
                aria-current={isActive ? "true" : undefined}
                className="relative flex h-4 w-[11px] items-center justify-end"
              >
                <span
                  className={`block transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "h-[7px] w-[11px] bg-accent" : "h-px w-[11px] bg-ink group-hover:h-[3px]"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
