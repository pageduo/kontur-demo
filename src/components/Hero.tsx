"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/content";
import { img } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Wortmarke steigt buchstabenweise aus einer Maske — der Auftakt der Seite. */
function RisingWord({ word, delay = 0 }: { word: string; delay?: number }) {
  return (
    <span className="flex" aria-label={word}>
      {word.split("").map((ch, i) => (
        <span key={i} className="block overflow-hidden" aria-hidden>
          <motion.span
            className="block"
            initial={{ y: "108%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.045 }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="start"
      data-rail-section
      data-rail-label="Start"
      data-rail-number="01"
      className="relative overflow-hidden bg-paper pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Kopfzeile über der Wortmarke */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 flex items-baseline justify-between gap-4 border-b border-ink pb-3"
        >
          <span className="t-caption">
            {company.address.city} &middot; seit {company.founded}
          </span>
          <span className="t-caption hidden sm:block">
            Produkt &middot; Verpackung &middot; Marke
          </span>
          <span className="t-caption">DE</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-x-5 gap-y-10">
          {/* Die Wortmarke ist das Markenstatement — nicht das Logo oben links. */}
          <h1 className="col-span-12 lg:col-span-9">
            <span className="t-display block">
              <RisingWord word="KONTUR" delay={0.25} />
            </span>
            <span className="sr-only">{company.fullName}</span>
          </h1>

          {/* Aussage, Fließtext, Aktionen */}
          <div className="col-span-12 flex flex-col gap-7 lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
              className="t-heading max-w-[11ch]"
            >
              {company.claim}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.78 }}
              className="t-body max-w-[46ch] text-stone"
            >
              {company.subline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/referenzen" className="pill pill-filled">
                Arbeiten ansehen
              </Link>
              <Link href="/kontakt" className="pill">
                Projekt anfragen
              </Link>
            </motion.div>
          </div>

          {/* Bildblock: rechteckiger Beschnitt, randlos, ohne Rundung —
              als Teil der Typokomposition, nicht als Banner daneben. */}
          <div className="relative col-span-12 lg:col-span-6 lg:col-start-7">
            {/* Um 90° gedrehtes zweites Wort — die Signatur des Heros. Es sitzt
                in der leeren Gutterspalte direkt links neben dem Bild, oben auf
                dessen Kante ausgerichtet, und schließt unten bündig mit ihr ab.
                Dadurch klammert es Typo- und Bildblock zusammen, statt frei
                über dem Kopfbereich zu schweben und dort mit Menü- und
                Statusleiste zu kollidieren.

                Die Rechnung hinter der Schriftgröße steht bei
                .hero-vertical-mark in globals.css. Erst ab lg, darunter fehlt
                die Breite dafür. */}
            <motion.span
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="hero-vertical-mark pointer-events-none absolute right-full top-0 mr-5 hidden text-stone lg:block"
            >
              Studio &mdash; Hamburg
            </motion.span>

            <motion.figure
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.55 }}
              className="relative aspect-[4/3] w-full"
            >
              <Image
                src={img.hero}
                alt="Arbeitstisch im Studio mit Materialproben, Skizzen und Verpackungsmustern"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="raw-img object-cover"
              />
            </motion.figure>
            <motion.figcaption
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="t-caption mt-3 flex justify-between gap-4 text-stone"
            >
              <span>Studio Große Elbstraße</span>
              <span>Hamburg-Altona</span>
            </motion.figcaption>
          </div>
        </div>

        {/* Kennzahlenzeile schließt den Hero editorial ab */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 grid grid-cols-2 gap-y-6 border-t border-ink pt-5 sm:mt-20 lg:grid-cols-4"
        >
          {[
            ["Gegründet", String(company.founded)],
            ["Sitz", company.address.city],
            ["Disziplinen", "Produkt · Verpackung · Marke"],
            ["Werkstatt", "Modellbau im Haus"],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 pr-4">
              <span className="t-caption text-stone">{k}</span>
              <span className="t-body-sm">{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
