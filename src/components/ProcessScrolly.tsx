"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Reveal from "./Reveal";
import { SectionHead } from "./Section";
import { processSteps } from "@/lib/content";
import { img } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

/*
 * Gepinnte Bühne: der Abschnitt ist vier Viewporthöhen hoch, die Bühne bleibt
 * stehen und der Scrollfortschritt schaltet die vier Prozessschritte weiter.
 * Bild und Text wechseln per Überblendung — kein Zoom, kein Parallax-Geflacker.
 *
 * Der Text steht auf schwarzem Grund über dem Bild statt in einer zweiten
 * Spalte daneben: dadurch bleibt die Typografie die Hauptsache.
 */
export default function ProcessScrolly({ variant = "home" }: { variant?: "home" | "page" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(value * processSteps.length))
    );
    setActive(index);
  });

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
          action={variant === "home" ? { label: "Prozess im Detail", href: "/prozess" } : undefined}
          invert
        />
        )}
      </div>

      {/* Vier Viewporthöhen Scrollstrecke für vier Schritte */}
      <div
        ref={containerRef}
        style={{ height: `${processSteps.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {/* Bildebenen */}
          {processSteps.map((step, i) => (
            <motion.div
              key={step.key}
              aria-hidden={i !== active}
              initial={false}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src={img.process[i]}
                alt=""
                fill
                sizes="100vw"
                className="raw-img object-cover"
              />
            </motion.div>
          ))}

          {/* Abdunklung: das System erlaubt Verläufe nur als Bildüberlagerung,
              nicht als Flächendekoration. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20"
          />

          <div className="relative flex h-full flex-col justify-between py-24 sm:py-28">
            {/* Schrittleiste */}
            <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
              <ul className="grid grid-cols-4 gap-3">
                {processSteps.map((step, i) => (
                  <li key={step.key} className="flex flex-col gap-2">
                    <span className="relative block h-px w-full bg-paper/30">
                      <motion.span
                        className="absolute inset-y-0 left-0 block bg-paper"
                        initial={false}
                        animate={{ width: i <= active ? "100%" : "0%" }}
                        transition={{ duration: 0.6, ease: EASE }}
                      />
                    </span>
                    <span
                      className={`t-caption transition-colors duration-500 ${
                        i === active ? "text-paper" : "text-paper/45"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Textebene */}
            <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
              <div className="relative min-h-[16rem] max-w-[34rem] sm:min-h-[18rem]">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.key}
                    initial={false}
                    animate={{
                      opacity: i === active ? 1 : 0,
                      y: i === active ? 0 : 18,
                    }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="absolute inset-0"
                    aria-hidden={i !== active}
                  >
                    <p className="sec-num sec-num--invert">
                      Schritt {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="t-heading mt-4">{step.title}</h3>
                    <p className="t-body mt-5 text-paper/75">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
