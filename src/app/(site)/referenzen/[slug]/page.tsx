import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { galleryProjects } from "@/lib/content";
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

  const image = img.gallery[project.slug][0];

  return (
    <article>
      <div className="relative h-[60svh] min-h-[420px] w-full overflow-hidden bg-ink">
        <Image src={image} alt={project.title} fill sizes="100vw" className="object-cover" priority />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-10 sm:px-8">
          <p className="eyebrow text-signal-light">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl text-paper sm:text-5xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <p className="text-lg leading-relaxed text-stone">{project.description}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/referenzen"
            className="font-label rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            ← Zurück zu allen Referenzen
          </Link>
          <Link
            href="/kontakt"
            className="font-label rounded-full bg-signal px-6 py-3 text-sm font-semibold text-paper transition hover:bg-signal-light"
          >
            Ähnliches Projekt anfragen
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
