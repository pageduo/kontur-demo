import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { company, jobs } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Karriere — KONTUR Demo",
};

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="// Karriere"
        title="Werden Sie Teil unseres Studios."
        subline="Wir suchen Gestalter:innen, die Wert auf saubere Arbeit, Materialgefühl und ein gutes Miteinander im Studio legen."
        image={img.karriereHero}
        imageAlt="Werkzeugwand in der Modellbau-Werkstatt"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={img.karriere[1]}
                alt="Gestalter:in bei der Arbeit an einer Skizze"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">Gestaltung mit Perspektive.</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
                Bei {company.name} arbeiten Sie in kleinen Teams mit erfahrenen Kolleg:innen, einer
                eigenen Modellbau-Werkstatt und Kund:innen, die Gestaltung ernst nehmen. Ob
                Berufseinstieg oder Praktikum — wir bilden aus, statt nur einzustellen.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 flex flex-col gap-6">
            <Reveal>
              <p className="eyebrow text-signal-dark">{"// Offene Stellen"}</p>
            </Reveal>
            {jobs.map((job, i) => (
              <Reveal
                key={job.title}
                delay={i * 0.06}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-ink/10 p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-display text-lg text-ink">{job.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone">{job.description}</p>
                </div>
                <div className="font-label flex shrink-0 items-center gap-4">
                  <span className="eyebrow rounded-full bg-mist px-4 py-2 text-stone">{job.type}</span>
                  <a
                    href={`mailto:${company.email}?subject=Bewerbung%20${encodeURIComponent(job.title)}`}
                    className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-signal-light"
                  >
                    Bewerben
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
