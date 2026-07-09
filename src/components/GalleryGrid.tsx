"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryFilters, galleryProjects } from "@/lib/content";
import { img } from "@/lib/images";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("Alle");

  const items = useMemo(
    () => galleryProjects.map((project) => ({ ...project, cover: img.gallery[project.slug][0] })),
    []
  );

  const filtered = filter === "Alle" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <div className="font-label flex flex-wrap gap-3">
        {galleryFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
              filter === f
                ? "border-graphite bg-graphite text-paper"
                : "border-ink/15 text-ink/70 hover:border-graphite hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Link
                href={`/referenzen/${item.slug}`}
                data-cursor="Projekt ansehen"
                className="absolute inset-0 block cursor-none"
              >
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-70 transition group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="eyebrow text-signal-light">
                    {item.category} · {item.year}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-paper">{item.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
