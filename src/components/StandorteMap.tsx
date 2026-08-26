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
    <div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <div className="relative aspect-[4/3] overflow-hidden bg-pewter">
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
                className="raw-img object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
            <div>
              <span className="eyebrow text-paper/70">{current.area}</span>
              <p className="t-subheading mt-1 text-paper">{current.name}</p>
            </div>
            {current.isMain && (
              <span className="t-caption shrink-0 rounded-[500px] border border-paper px-3 py-1 text-paper">
                Hauptsitz
              </span>
            )}
          </div>
        </div>

        {/* Auswahl als Haarlinienliste statt als Rahmenkaesten: dieselbe Bauform
            wie die FAQ und die Stellenliste. Der aktive Standort wird nicht
            durch eine Flaeche markiert, sondern durch den roten Strich rechts. */}
        <ul className="border-t border-ink">
          {locations.map((loc, i) => (
            <li key={loc.name} className="border-b border-ink">
              <button
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span>
                  <span className={`t-body block ${active === i ? "text-ink" : "text-stone"}`}>
                    {loc.name}
                  </span>
                  <span className="t-caption mt-1 block text-stone">{loc.area}</span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  {loc.isMain && (
                    <span className="t-caption rounded-[500px] border border-ink px-3 py-1">
                      Hauptsitz
                    </span>
                  )}
                  <span
                    aria-hidden
                    className={`block h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active === i ? "w-10 bg-accent" : "w-4 bg-ink"
                    }`}
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <AnimatePresence mode="wait">
          <motion.p
            key={current.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="t-body-sm text-stone"
          >
            {current.description}
          </motion.p>
        </AnimatePresence>
      </div>

      <div>
        <p className="eyebrow mb-4 text-stone">Interaktive Karte</p>
        <MapEmbed query={current.mapQuery} title={`Karte: ${current.name}`} />
      </div>
    </div>
  );
}
