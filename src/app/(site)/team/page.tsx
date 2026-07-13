import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Team | KONTUR Demo",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="// Das Team"
        title="Die Menschen hinter jedem Produkt."
        subline="Gestalter:innen, Modellbauer:innen und Strateg:innen unter einem Dach."
        image={img.teamHero}
        imageAlt="Design-Team im Gespräch an einem Holztisch"
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => {
              const portrait = img.team[member.key as keyof typeof img.team];
              return (
                <Reveal key={member.name} delay={i * 0.08}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src={portrait}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-ink">{member.name}</h3>
                  <p className="font-label text-sm font-medium text-signal-dark">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{member.bio}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
