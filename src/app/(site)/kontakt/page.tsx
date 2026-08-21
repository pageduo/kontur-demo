import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { Section } from "@/components/Section";
import { company, locations } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kontakt | KONTUR Demo",
};

export default function KontaktPage() {
  const mainLocation = locations.find((l) => l.isMain) ?? locations[0];

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        number="09"
        title="Erzählen Sie uns von Ihrem Produkt."
        subline="Das Erstgespräch ist unverbindlich und kostenfrei. Wir sichten Produkt und Markt und geben eine erste Einschätzung zu Umfang und Investition."
        image={img.about}
        imageAlt="Team im Studio bei der Arbeit an Materialproben"
      />

      <Section id="anfrage" label="Anfrage" number="01" tone="paper">
        <div className="grid grid-cols-12 gap-x-5 gap-y-16">
          <Reveal className="col-span-12 lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col gap-10 border-t border-ink pt-10">
              <div>
                <p className="eyebrow text-stone">Studio</p>
                <p className="t-body mt-3">
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </p>
              </div>

              <div>
                <p className="eyebrow text-stone">Direkt</p>
                <p className="mt-3 flex flex-col gap-1">
                  <a href={company.phoneHref} className="t-body ulink">
                    {company.phone}
                  </a>
                  <a href={`mailto:${company.email}`} className="t-body ulink break-all">
                    {company.email}
                  </a>
                </p>
              </div>

              <div>
                <p className="eyebrow text-stone">Zeiten</p>
                <ul className="mt-3">
                  {company.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 border-b border-pewter py-2 last:border-b-0"
                    >
                      <span className="t-body-sm text-stone">{h.day}</span>
                      <span className="t-body-sm">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="anfahrt" label="Anfahrt" number="02" tone="gray">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 border-t border-ink pt-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="t-heading-sm max-w-[14ch]">{mainLocation.name}</h2>
            <p className="t-body-sm mt-4 max-w-[40ch] text-stone">{mainLocation.description}</p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <MapEmbed query={mainLocation.mapQuery} title={`Anfahrt zu ${company.fullName}`} />
          </div>
        </div>
      </Section>
    </>
  );
}
