import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Leistungen — KONTUR Demo",
};

const serviceImages: Record<string, string> = {
  produktdesign: img.services.produktdesign,
  verpackung: img.services.verpackung,
  branding: img.services.branding,
  prototyping: img.services.prototyping,
  editorial: img.services.editorial,
  strategie: img.services.strategie,
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="// Leistungen"
        title="Von der Formfindung bis zur Serienreife."
        subline="Vom ersten Sketch bis zur Produktionsbegleitung: unser Studio deckt alle Gestaltungsschritte rund um Produkt und Verpackung ab."
        image={img.leistungenHero}
        imageAlt="Materialproben und Texturen auf einem Studiotisch"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-16 px-5 sm:px-8">
          {services.map((service, i) => (
            <Reveal
              key={service.key}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={serviceImages[service.key]}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="eyebrow text-signal-dark">0{i + 1}</span>
                <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">{service.title}</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Nicht sicher, welche Leistung passt?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">
              Im kostenlosen Erstgespräch finden wir gemeinsam heraus, welcher Umfang zu Ihrem
              Produkt und Ihrem Budget passt.
            </p>
            <Link
              href="/kontakt"
              className="font-label mt-8 inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-signal-light"
            >
              Projekt anfragen
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
