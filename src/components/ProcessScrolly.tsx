"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Reveal from "./Reveal";
import { SectionHead } from "./Section";
import { processSteps } from "@/lib/content";
import { img } from "@/lib/images";

const STEP_COUNT = processSteps.length;

/* Breite eines Schrittfensters im Scrollfortschritt (0 bis 1). */
const SPAN = 1 / STEP_COUNT;

/*
 * Scrollstrecke pro Schritt. Vorher lag ein voller Viewport auf jedem Schritt:
 * man scrollte lange, ohne dass sich etwas rührte, und dann sprang die Bühne
 * hart um. 55vh sind kurz genug, dass der Widerstand nicht mehr im Weg steht,
 * und lang genug, dass sich jeder Schritt noch nach und nach aufbaut.
 */
const STEP_TRAVEL_VH = 55;

/* Anteil eines Schrittfensters, über den ein- und ausgeblendet wird. */
const FADE = 0.22;

/* Höhe der fixierten Kopfleiste — Sprungziele müssen darunter landen. */
const HEADER_OFFSET = 88;

const stepLabel = (i: number) => `Schritt ${String(i + 1).padStart(2, "0")}`;

/*
 * Bildebene. Die Ebenen liegen gestapelt statt nebeneinander: Ebene i blendet
 * über allem darunter ein und bleibt danach deckend stehen. Bei einer echten
 * Kreuzblende wären beide Ebenen kurz halbtransparent und der schwarze Grund
 * würde durchschlagen — die Bühne würde im Übergang sichtbar absacken.
 */
function StepImage({
  progress,
  index,
  src,
}: {
  progress: MotionValue<number>;
  index: number;
  src: string;
}) {
  const opacity = useTransform(
    progress,
    [index * SPAN - FADE * SPAN, index * SPAN + FADE * SPAN],
    [0, 1]
  );

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0"
      style={{ opacity: index === 0 ? 1 : opacity, zIndex: index }}
    >
      <Image src={src} alt="" fill sizes="100vw" className="raw-img object-cover" />
    </motion.div>
  );
}

/*
 * Textebene. Anders als die Bilder überlappen sich die Texte bewusst nicht:
 * jeder Schritt blendet am Ende seines Fensters aus, bevor der nächste
 * einblendet. Zwei übereinanderliegende Absätze wären sonst unlesbar.
 */
function StepText({
  progress,
  index,
  active,
  title,
  description,
}: {
  progress: MotionValue<number>;
  index: number;
  active: boolean;
  title: string;
  description: string;
}) {
  const first = index === 0;
  const last = index === STEP_COUNT - 1;
  const from = index * SPAN;
  const to = (index + 1) * SPAN;
  const stops = [from, from + FADE * SPAN, to - FADE * SPAN, to];

  const opacity = useTransform(progress, stops, [first ? 1 : 0, 1, 1, last ? 1 : 0]);
  const y = useTransform(progress, stops, [first ? 0 : 20, 0, 0, last ? 0 : -14]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0" aria-hidden={!active}>
      <p className="sec-num sec-num--invert">{stepLabel(index)}</p>
      <h3 className="t-heading mt-4">{title}</h3>
      <p className="t-body mt-5 text-paper/75">{description}</p>
    </motion.div>
  );
}

/*
 * Fortschrittsbalken eines Schritts. Er füllt sich am Scrollfortschritt statt
 * in einem Rutsch umzuspringen — dadurch ist jederzeit sichtbar, wie weit der
 * laufende Schritt schon ist und wie viel Strecke noch vor einem liegt.
 */
function StepBar({
  progress,
  index,
  active,
}: {
  progress: MotionValue<number>;
  index: number;
  active: boolean;
}) {
  const width = useTransform(progress, [index * SPAN, (index + 1) * SPAN], ["0%", "100%"]);

  return (
    <li className="flex flex-col gap-2">
      <span className="relative block h-px w-full bg-paper/30">
        <motion.span className="absolute inset-y-0 left-0 block bg-paper" style={{ width }} />
      </span>
      <span
        className={`t-caption transition-colors duration-500 ${
          active ? "text-paper" : "text-paper/45"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </li>
  );
}

/*
 * Fallback für prefers-reduced-motion: dieselben Inhalte ohne gepinnte Bühne
 * und ohne Scroll-Übernahme. Wer Bewegung reduziert hat, bekommt den lesbaren
 * Endzustand direkt untereinander gestellt.
 */
function StaticSteps() {
  return (
    <div className="mx-auto grid max-w-[1400px] gap-x-5 gap-y-14 px-5 pb-4 pt-6 sm:grid-cols-2 sm:px-8">
      {processSteps.map((step, i) => (
        <div key={step.key} className="flex flex-col gap-5">
          <figure className="relative aspect-[4/3] w-full">
            <Image
              src={img.process[i]}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="raw-img object-cover"
            />
          </figure>
          <div>
            <p className="sec-num sec-num--invert">{stepLabel(i)}</p>
            <h3 className="t-heading-sm mt-3">{step.title}</h3>
            <p className="t-body mt-4 text-paper/75">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/*
 * Gepinnte Bühne: der Abschnitt ist mehrere Viewporthöhen hoch, die Bühne
 * bleibt stehen und der Scrollfortschritt schaltet die Prozessschritte weiter.
 *
 * Alles, was sich bewegt, hängt direkt am Scrollfortschritt statt an einer
 * eigenen Laufzeit. Dadurch reagiert die Bühne auf jede Radumdrehung sofort,
 * statt erst umzuspringen und dann eine Animation hinterherzuziehen.
 *
 * Der Text steht auf abgedunkeltem Grund über dem Bild statt in einer zweiten
 * Spalte daneben: dadurch bleibt die Typografie die Hauptsache.
 */
export default function ProcessScrolly({ variant = "home" }: { variant?: "home" | "page" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  /*
   * Bewusst über einen Effekt statt direkt beim ersten Rendern gelesen: der
   * Server kennt die Einstellung nicht, und da unten der ganze Teilbaum daran
   * hängt, würde ein sofort gelesener Wert die Hydration auseinanderlaufen
   * lassen. Der erste Rahmen zeigt also die Bühne, danach wird umgeschaltet.
   */
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
   * Leichte Feder auf dem Fortschritt. Mausrad und Trackpad liefern grobe
   * Sprünge; die Feder bügelt sie aus. Sie ist bewusst steif und leicht
   * eingestellt, damit die Bühne dabei nicht hinter dem Scrollen herläuft.
   */
  const progress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.25,
    restDelta: 0.001,
  });

  useMotionValueEvent(progress, "change", (value) => {
    setActive(Math.min(STEP_COUNT - 1, Math.max(0, Math.floor(value * STEP_COUNT))));
  });

  /*
   * Sprungziel des Pfeils. Innerhalb der Strecke landet er in der Mitte des
   * nächsten Schrittfensters, dort steht der Schritt sicher deckend. Nach dem
   * letzten Schritt führt er aus der Bühne heraus.
   */
  const goToStep = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;

      const behavior: ScrollBehavior = reduced ? "auto" : "smooth";
      const top = container.getBoundingClientRect().top + window.scrollY;

      if (index >= STEP_COUNT) {
        window.scrollTo({ top: top + container.offsetHeight - HEADER_OFFSET, behavior });
        return;
      }

      const travel = container.offsetHeight - window.innerHeight;
      window.scrollTo({ top: top + travel * (index + 0.5) * SPAN, behavior });
    },
    [reduced]
  );

  const isLast = active === STEP_COUNT - 1;

  return (
    <section
      id="prozess"
      data-rail-section
      data-rail-label="Prozess"
      data-rail-number="04"
      className="bg-ink text-paper"
    >
      <div className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 sm:pt-28 lg:pt-[100px]">
        {variant === "home" && (
          <SectionHead
            number="04"
            eyebrow="Prozess"
            title="Vier Schritte von der Idee ins Regal."
            intro="Jeder Schritt endet mit einem greifbaren Ergebnis, das Sie freigeben. Keine Blackbox, keine Überraschung kurz vor der Produktion."
            action={{ label: "Prozess im Detail", href: "/prozess" }}
            invert
          />
        )}
      </div>

      {reduced ? (
        <StaticSteps />
      ) : (
        <div
          ref={containerRef}
          style={{ height: `${100 + STEP_COUNT * STEP_TRAVEL_VH}svh` }}
          className="relative"
        >
          {/*
             * data-scrolly nimmt die Bühne von der noscript-Regel in layout.tsx
             * aus. Ihre Ebenen liegen gestapelt und leben davon, dass immer nur
             * eine sichtbar ist. Würde die Regel hier alles auf opacity 1
             * setzen, lägen alle vier Schritttexte übereinander. Ohne Skript
             * bleibt die Bühne von selbst brauchbar: ausgeliefert wird Schritt
             * 01 deckend, die übrigen auf 0.
             */}
          <div data-scrolly className="sticky top-0 h-[100svh] overflow-hidden">
            {processSteps.map((step, i) => (
              <StepImage key={step.key} progress={progress} index={i} src={img.process[i]} />
            ))}

            {/* Abdunklung: das System erlaubt Verläufe nur als Bildüberlagerung,
                nicht als Flächendekoration. */}
            <div
              aria-hidden
              className="absolute inset-0 z-[5] bg-gradient-to-r from-black/85 via-black/55 to-black/20"
            />

            <div className="relative z-10 flex h-full flex-col justify-between py-24 sm:py-28">
              {/* Schrittleiste */}
              <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
                <ul className="grid grid-cols-4 gap-3">
                  {processSteps.map((step, i) => (
                    <StepBar key={step.key} progress={progress} index={i} active={i === active} />
                  ))}
                </ul>
              </div>

              {/* Textebene und Weiterschalter */}
              <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:px-8">
                <div className="relative min-h-[16rem] w-full max-w-[34rem] sm:min-h-[18rem]">
                  {processSteps.map((step, i) => (
                    <StepText
                      key={step.key}
                      progress={progress}
                      index={i}
                      active={i === active}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </div>

                {/*
                 * Weiterschalter. Die Bühne setzt sonst voraus, dass man das
                 * Scrollen als Bedienung erkennt — der Pfeil macht denselben
                 * Weg klickbar und führt nach dem letzten Schritt hinaus.
                 */}
                <button
                  type="button"
                  onClick={() => goToStep(active + 1)}
                  className="pill pill-invert pill-sm group shrink-0 self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper sm:self-end"
                >
                  <span>{isLast ? "Weiter" : "Nächster Schritt"}</span>
                  <span
                    aria-hidden
                    className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0.5"
                  >
                    &darr;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === "page" && (
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="border-t border-paper/25 pt-8">
              <p className="t-body max-w-[56ch] text-paper/75">
                Die Dauer hängt vom Umfang ab: ein fokussierter Sprint läuft in zwei bis drei
                Wochen, ein komplettes Produkt inklusive Serienvorbereitung in vier bis sechs
                Monaten.
              </p>
              <Link href="/kontakt" className="pill pill-invert mt-6">
                Zeitplan besprechen
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
