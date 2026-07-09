"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MapEmbed from "./MapEmbed";
import { locations } from "@/lib/content";
import { img } from "@/lib/images";

export default function StandorteMap() {
  const [active, setActive] = useState(0);
  const current = locations[active];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col gap-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-graphite-light">
          <AnimatePresence mode="sync">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={img.locations[active]}
                alt={current.name}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
            <div>
              <span className="eyebrow text-signal-light">{current.area}</span>
              <p className="mt-1 font-display text-xl text-paper">{current.name}</p>
            </div>
            {current.isMain && (
              <span className="font-label shrink-0 rounded-full bg-signal px-3 py-1 text-xs font-semibold text-paper">
                Hauptsitz
              </span>
            )}
          </div>
        </div>

        <div className="font-label flex flex-col gap-2">
          {locations.map((loc, i) => (
            <button
              key={loc.name}
              onClick={() => setActive(i)}
              className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                active === i ? "border-signal bg-cream" : "border-ink/10 hover:border-ink/25"
              }`}
            >
              <span>
                <span className="block font-display text-base text-ink">{loc.name}</span>
                <span className="text-xs text-stone">{loc.area}</span>
              </span>
              {loc.isMain && (
                <span className="rounded-full bg-signal px-3 py-1 text-xs font-semibold text-paper">
                  Hauptsitz
                </span>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={current.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-sm leading-relaxed text-stone"
          >
            {current.description}
          </motion.p>
        </AnimatePresence>
      </div>

      <div>
        <p className="eyebrow mb-4 text-signal-dark">{"// Interaktive Karte"}</p>
        <MapEmbed query={current.mapQuery} title={`Karte: ${current.name}`} />
      </div>
    </div>
  );
}
