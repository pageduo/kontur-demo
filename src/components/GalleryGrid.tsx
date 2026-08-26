"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryFilters, galleryProjects } from "@/lib/content";
import { img } from "@/lib/images";

/*
 * Projektraster mit Pill-Filtern. Karten folgen dem Artikelkarten-Muster des
 * Systems: randloses Foto oben, Text darunter auf der Fläche — kein Verlauf
 * über dem Bild, keine Rundung, kein Schatten.
 */
export default function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("Alle");

  const items = useMemo(
    () =>
      galleryProjects.map((project) => ({
        ...project,
        cover: img.gallery[project.slug]?.[0] ?? img.hero,
      })),
    []
  );

  const filtered = filter === "Alle" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`pill pill-sm ${filter === f ? "pill-filled" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-12 gap-x-5 gap-y-14">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 sm:col-span-6 lg:col-span-4"
            >
              <Link href={`/referenzen/${item.slug}`} className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-pewter">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="raw-img object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <p className="tag-red mt-5">{item.category}</p>
                {/* h2, nicht h3: das Raster laeuft nur auf /referenzen und
                    folgt dort direkt auf das h1 des Seitenkopfs. */}
                <h2 className="t-subheading mt-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                  {item.title}
                </h2>
                <p className="t-body-sm mt-2 line-clamp-3 text-stone">{item.description}</p>
                <p className="t-caption mt-3 text-stone">{item.year}</p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
