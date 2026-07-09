"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Reveal from "./Reveal";
import { processSteps } from "@/lib/content";
import { img } from "@/lib/images";

// Apple-artiges Scrollytelling: das Hintergrundbild bleibt gepinnt (sticky),
// während beim Weiterscrollen für jeden Prozessschritt ein neuer Textblock
// einmalig ins Bild "hineinflattert" (Rotation + Versatz + Opacity → federnd
// in Position) statt seitlich in einer zweiten Spalte zu stehen.
export default function ProcessScrolly() {
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

  const step = processSteps[active];

  return (
    <section className="bg-graphite">
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="eyebrow text-signal-light">{"// Unser Prozess"}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-paper sm:text-5xl">
            Vier Schritte von der Idee zum Regal.
          </h2>
        </Reveal>
      </div>

      <div ref={containerRef} style={{ height: `${processSteps.length * 100}vh` }} className="relative mt-16">
        <div className="sticky top-0 h-screen overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={img.process[active]}
                alt={step.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/50" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-8 px-5 pb-16 sm:px-8 sm:pb-24">
            <div className="font-label flex gap-3">
              {processSteps.map((s, i) => (
                <span
                  key={s.key}
                  className={`h-1.5 flex-1 max-w-16 rounded-full transition-colors duration-500 ${
                    i <= active ? "bg-signal" : "bg-paper/20"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 48, rotate: -3 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 190, damping: 18 },
                }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
                className="max-w-2xl"
              >
                <span className="font-label eyebrow text-signal-light">
                  Schritt 0{active + 1} / 0{processSteps.length}
                </span>
                <h3 className="mt-3 font-display text-3xl text-paper sm:text-5xl">{step.title}</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/75 sm:text-lg">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
