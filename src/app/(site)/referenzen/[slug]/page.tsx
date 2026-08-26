import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { galleryProjects, services } from "@/lib/content";
import { img } from "@/lib/images";

export function generateStaticParams() {
  return galleryProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = galleryProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} | KONTUR Referenzen (Demo)` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = galleryProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const image = img.gallery[project.slug]?.[0] ?? img.hero;
  const index = galleryProjects.findIndex((p) => p.slug === project.slug);
  const next = galleryProjects[(index + 1) % galleryProjects.length];

  return (
    <article>
      {/* Kopf im Editorial-Satz: Typografie auf Papier, das Bild darunter roh. */}
      <header className="bg-paper pb-14 pt-28 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <Link href="/referenzen" className="t-caption ulink">
              &larr; Alle Referenzen
            </Link>
            <span className="t-caption text-stone">{project.year}</span>
          </div>

          <div className="grid grid-cols-12 gap-x-5 gap-y-8">
            <div className="col-span-12 lg:col-span-3">
              <p className="tag-red">{project.category}</p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <Reveal variant="mask">
                <h1 className="t-heading-lg head-measure">{project.title}</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="t-body head-measure mt-6 text-stone">{project.description}</p>
              </Reveal>
            </div>
          </div>

          <Reveal variant="mask" delay={0.12} className="mt-12 sm:mt-16">
            <figure className="relative aspect-[21/9] w-full">
              <Image
                src={image}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="raw-img object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </header>

      {/* Projektdaten als Tabelle mit Haarlinien */}
      <section className="bg-newsprint py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <dl className="grid grid-cols-12 gap-x-5 gap-y-8 border-t border-ink pt-8">
            {[
              ["Kategorie", project.category],
              ["Jahr", String(project.year)],
              ["Studio", "KONTUR, Hamburg"],
              ["Leistungen", "Konzept · Gestaltung · Reinzeichnung"],
            ].map(([k, v]) => (
              <div key={k} className="col-span-6 lg:col-span-3">
                <dt className="eyebrow text-stone">{k}</dt>
                <dd className="t-body mt-2">{v}</dd>
              </div>
            ))}
          </dl>

          <Reveal className="mt-16">
            <p className="t-heading-sm max-w-[22ch]">
              Ein Demo-Projekt: Text und Bild stehen stellvertretend für eine echte Fallstudie.
            </p>
            <p className="t-body mt-6 max-w-[56ch] text-stone">
              In der echten Umsetzung stünde hier die Fallstudie: Ausgangslage, Entscheidungen,
              Materialwahl und das Ergebnis am Regal &ndash; mit eigener Fotografie aus dem Studio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Weiterführung statt Sackgasse */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8 border-t border-ink pt-8">
            <div>
              <p className="eyebrow text-stone">Nächstes Projekt</p>
              <Link href={`/referenzen/${next.slug}`} className="group mt-3 block">
                <span className="t-heading transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                  {next.title}
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/referenzen" className="pill">
                Alle Referenzen
              </Link>
              <Link href="/kontakt" className="pill pill-filled">
                Ähnliches Projekt anfragen
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>

          <p className="t-caption mt-10 text-stone">
            {services.length} Leistungen im Studio &middot; {galleryProjects.length} Projekte im
            Archiv
          </p>
        </div>
      </section>
    </article>
  );
}
