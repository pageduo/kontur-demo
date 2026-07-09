import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { galleryProjects } from "@/lib/content";
import { img } from "@/lib/images";

export default function HomeReferenzenTeaser() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-signal-dark">{"// Referenzen"}</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-5xl">
              Ausgewählte Projekte für Marken, die auffallen wollen.
            </h2>
          </div>
          <Link
            href="/referenzen"
            className="font-label shrink-0 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            Alle Referenzen
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryProjects.slice(0, 3).map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                href={`/referenzen/${project.slug}`}
                data-cursor="Projekt ansehen"
                className="group relative block aspect-[4/5] cursor-none overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.gallery[project.slug][0]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-70 transition group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="eyebrow text-signal-light">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-paper">{project.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
