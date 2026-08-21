"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Section, SectionHead } from "../Section";
import Reveal from "../Reveal";
import { company, stats } from "@/lib/content";
import { img } from "@/lib/images";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="t-heading-sm block tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

/*
 * Haltung des Studios plus Kennzahlen. Auf dem Grauband, damit der Wechsel
 * vom weißen Hero spürbar wird — der Tonwechsel ist im System der Trenner.
 */
export default function StudioSection({ variant = "home" }: { variant?: "home" | "page" }) {
  return (
    <Section id="studio" label="Studio" number="02" tone="gray">
      {variant === "home" && (
      <SectionHead
        number="02"
        eyebrow="Haltung"
        title="Gutes Design hält der Hand stand, nicht nur dem Moodboard."
        intro={company.usp}
      />
      )}

      <div className="grid grid-cols-12 gap-x-5 gap-y-12">
        <Reveal variant="mask" className="col-span-12 lg:col-span-7">
          <figure className="relative aspect-[16/10] w-full">
            <Image
              src={img.manifesto}
              alt="Materialbibliothek des Studios mit Karton-, Papier- und Kunststoffmustern"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="raw-img object-cover"
            />
          </figure>
        </Reveal>

        <div className="col-span-12 flex flex-col justify-between gap-10 lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="t-body">
              Wir entwerfen nichts, was wir nicht auch produzieren lassen würden. Deshalb sitzt der
              Modellbau bei uns im Haus: Was auf dem Bildschirm funktioniert, muss die Prüfung in
              der Hand bestehen, bevor es in Serie geht.
            </p>
            <p className="t-body mt-5 text-stone">
              Das kostet in der Konzeptphase mehr Zeit und spart sie vor dem Rollout doppelt ein.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="grid grid-cols-2 gap-x-5 gap-y-8 border-t border-ink pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <span className="t-caption mt-2 block text-stone">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {variant === "page" && (
        <Reveal className="mt-16 border-t border-ink pt-8">
          <p className="t-body max-w-[60ch]">
            KONTUR wurde {company.founded} in {company.address.city} gegründet und arbeitet heute mit
            neun Gestalterinnen und Gestaltern für Marken aus Food, Kosmetik, Haushalt und Lifestyle.
          </p>
        </Reveal>
      )}
    </Section>
  );
}
