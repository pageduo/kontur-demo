import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead } from "../Section";
import Reveal from "../Reveal";
import { services } from "@/lib/content";
import { img } from "@/lib/images";

/*
 * Leistungen als redaktionelles Kartenraster: Foto oben randlos, darunter Titel
 * und Auszug ohne Rahmen, ohne Schatten, ohne Rundung. Das Bild trägt die
 * visuelle Energie, die Karte selbst ist nur ein sauberes Rechteck.
 */
export default function ServicesSection({ variant = "home" }: { variant?: "home" | "page" }) {
  const shown = variant === "home" ? services.slice(0, 3) : services;

  /*
   * Auf der Startseite steht ueber diesem Block der Sektionskopf mit seinem h2,
   * dort ist h3 die richtige Stufe. Auf der Einzelseite entfaellt dieser Kopf,
   * dann folgt der Block direkt auf das h1 der Seite und uebersprunge sonst
   * eine Gliederungsstufe.
   */
  const CardHeading = variant === "page" ? "h2" : "h3";

  return (
    <Section id="leistungen" label="Leistungen" number="03" tone="paper">
      {variant === "home" && (
      <SectionHead
        number="03"
        eyebrow="Leistungen"
        title="Vom ersten Strich bis ins Regal."
        intro="Strategie, Gestaltung und Prototyping unter einem Dach. Kein Weiterreichen an Dritte, keine Schnittstellenverluste."
        action={{ label: "Alle sechs Leistungen", href: "/leistungen" }}
      />
      )}

      <div className="grid grid-cols-12 gap-x-5 gap-y-14">
        {shown.map((service, i) => (
          <Reveal
            key={service.key}
            delay={i * 0.07}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <article className="group flex h-full flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img.services[service.key as keyof typeof img.services]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="raw-img object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="t-caption text-stone">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CardHeading className="t-subheading">{service.title}</CardHeading>
              </div>
              <p className="t-body-sm mt-3 text-stone">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {variant === "page" && (
        <Reveal className="mt-16">
          <div className="border-t border-ink pt-8">
            <p className="t-body max-w-[52ch]">
              Nicht sicher, welche Leistung Ihr Projekt braucht? Das klären wir im Erstgespräch,
              unverbindlich und kostenfrei.
            </p>
            <Link href="/kontakt" className="pill pill-filled mt-6">
              Erstgespräch vereinbaren
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
