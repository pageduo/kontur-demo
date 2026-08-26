import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import { company, jobs } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Karriere | KONTUR Demo",
};

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="Karriere"
        number="10"
        title="Werden Sie Teil unseres Studios."
        subline="Wir suchen Gestalter:innen, die Wert auf saubere Arbeit, Materialgefühl und ein gutes Miteinander im Studio legen."
        image={img.karriereHero}
        imageAlt="Werkzeugwand in der Modellbau-Werkstatt"
      />

      {/* Bild links, Aussage rechts — derselbe Aufbau wie die Studio-Sektion. */}
      <Section id="arbeiten" label="Arbeiten" number="01" tone="paper">
        <div className="grid grid-cols-12 gap-x-5 gap-y-12">
          <Reveal variant="mask" className="col-span-12 lg:col-span-7">
            <figure className="relative aspect-[4/3] w-full">
              <Image
                src={img.karriere[1]}
                alt="Gestalter:in bei der Arbeit an einer Skizze"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="raw-img object-cover"
              />
            </figure>
          </Reveal>

          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="t-heading-sm head-measure">Gestaltung mit Perspektive.</h2>
              <p className="t-body mt-5 text-stone">
                Bei {company.name} arbeiten Sie in kleinen Teams mit erfahrenen Kolleg:innen, einer
                eigenen Modellbau-Werkstatt und Kund:innen, die Gestaltung ernst nehmen. Ob
                Berufseinstieg oder Praktikum: Wir bilden aus, statt nur einzustellen.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Stellen als Haarlinienliste, eingerückt wie die FAQ-Liste. */}
      <Section id="stellen" label="Offene Stellen" number="02" tone="gray">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9 lg:col-start-4">
            <p className="eyebrow text-stone">Offene Stellen</p>

            <ul className="mt-6 border-t border-ink">
              {jobs.map((job, i) => (
                <li key={job.title} className="border-b border-ink">
                  <Reveal
                    delay={i * 0.06}
                    className="flex flex-col gap-5 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
                  >
                    <div>
                      <h3 className="t-subheading">{job.title}</h3>
                      <p className="t-body-sm mt-2 max-w-[54ch] text-stone">{job.description}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="pill pill-sm cursor-default">{job.type}</span>
                      <a
                        href={`mailto:${company.email}?subject=Bewerbung%20${encodeURIComponent(job.title)}`}
                        className="pill pill-filled pill-sm"
                      >
                        Bewerben
                        <span aria-hidden>&rarr;</span>
                      </a>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <p className="t-body-sm mt-8 text-stone">
                Nichts Passendes dabei? Initiativbewerbungen sind willkommen, schreiben Sie uns an{" "}
                <a href={`mailto:${company.email}`} className="ulink text-ink">
                  {company.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
