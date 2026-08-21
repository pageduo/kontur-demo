import Link from "next/link";
import { Section, SectionHead } from "../Section";
import Reveal from "../Reveal";
import { company } from "@/lib/content";

/*
 * Abschluss auf schwarzer Fläche — der stärkste Tonwechsel der Seite und
 * gleichzeitig der Übergang in den Footer.
 */
export default function ContactSection({ variant = "home" }: { variant?: "home" | "page" }) {
  return (
    <Section id="kontakt" label="Kontakt" number="09" tone="ink">
      {variant === "home" && (
      <SectionHead
        number="09"
        eyebrow="Kontakt"
        title="Erzählen Sie uns von Ihrem Produkt."
        intro="Das Erstgespräch ist unverbindlich und kostenfrei. Wir sichten Produkt und Markt und geben eine erste Einschätzung zu Umfang und Investition."
        action={variant === "home" ? { label: "Zum Kontaktformular", href: "/kontakt" } : undefined}
        invert
      />
      )}

      <div className="grid grid-cols-12 gap-x-5 gap-y-10">
        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3">
          <p className="eyebrow text-paper/55">Telefon</p>
          <a href={company.phoneHref} className="t-subheading ulink mt-3 block">
            {company.phone}
          </a>
        </Reveal>

        <Reveal delay={0.06} className="col-span-12 sm:col-span-6 lg:col-span-4">
          <p className="eyebrow text-paper/55">E-Mail</p>
          <a href={`mailto:${company.email}`} className="t-subheading ulink mt-3 block break-all">
            {company.email}
          </a>
        </Reveal>

        <Reveal delay={0.12} className="col-span-12 sm:col-span-6 lg:col-span-3">
          <p className="eyebrow text-paper/55">Studio</p>
          <p className="t-body mt-3">
            {company.address.street}
            <br />
            {company.address.zip} {company.address.city}
          </p>
        </Reveal>

        <Reveal delay={0.18} className="col-span-12 sm:col-span-6 lg:col-span-2">
          <p className="eyebrow text-paper/55">Zeiten</p>
          <ul className="mt-3 flex flex-col gap-1">
            {company.hours.map((h) => (
              <li key={h.day} className="t-caption text-paper/70">
                {h.day}
                <br />
                {h.time}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {variant === "home" && (
        <Reveal className="mt-16 border-t border-paper/25 pt-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <p className="t-heading-sm max-w-[20ch]">Oder direkt einen Termin im Studio?</p>
            <Link href="/kontakt" className="pill pill-invert">
              Termin vorschlagen
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
