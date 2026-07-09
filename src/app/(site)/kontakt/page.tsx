import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { company, locations } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Über uns & Kontakt — KONTUR Demo",
};

export default function KontaktPage() {
  const mainLocation = locations.find((l) => l.isMain) ?? locations[0];

  return (
    <>
      <PageHero
        eyebrow="// Über uns & Kontakt"
        title={`${company.fullName} — seit ${company.founded} in ${company.city} verwurzelt.`}
        subline={company.subline}
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <Image
                  src={img.about}
                  alt="Team im Studio bei der Arbeit an Materialproben"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-base leading-relaxed text-stone">
                {company.usp} Was {company.founded} als kleines Ein-Personen-Atelier begann, ist
                heute ein neunköpfiges Team aus Produktdesigner:innen, Grafiker:innen und
                Modellbauer:innen. Geblieben ist der Anspruch: jedes Produkt soll auffallen — aus
                den richtigen Gründen.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow mb-2 text-stone">Adresse</p>
                  <p className="text-sm leading-relaxed text-ink">
                    {company.address.street}
                    <br />
                    {company.address.zip} {company.address.city}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-stone">Kontakt</p>
                  <p className="text-sm leading-relaxed text-ink">
                    <a href={company.phoneHref} className="block hover:text-signal-dark">
                      {company.phone}
                    </a>
                    <a href={`mailto:${company.email}`} className="block hover:text-signal-dark">
                      {company.email}
                    </a>
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="eyebrow mb-2 text-stone">Öffnungszeiten</p>
                  <ul className="text-sm leading-relaxed text-ink">
                    {company.hours.map((h) => (
                      <li key={h.day} className="flex justify-between border-b border-ink/10 py-1.5">
                        <span className="text-stone">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-3 text-stone">Anfahrt</p>
                <MapEmbed query={mainLocation.mapQuery} title={`Anfahrt zu ${company.fullName}`} />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
