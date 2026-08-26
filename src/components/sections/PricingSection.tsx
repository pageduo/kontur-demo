import Link from "next/link";
import { Section, SectionHead } from "../Section";
import Reveal from "../Reveal";
import { pricingTiers } from "@/lib/content";

/*
 * Preise als Spaltensatz, nicht als Karten: getrennt durch Haarlinien statt
 * durch Rahmen oder Flächen. Die hervorgehobene Stufe bekommt keine Farbe,
 * sondern eine schwarze Fläche — Kontrast statt Akzentton.
 */
export default function PricingSection({ variant = "home" }: { variant?: "home" | "page" }) {
  return (
    <Section id="preise" label="Preise" number="07" tone="gray">
      {variant === "home" && (
      <SectionHead
        number="07"
        eyebrow="Investition"
        title="Drei Wege, mit uns zu arbeiten."
        intro="Jedes Projekt bekommt ein individuelles Angebot. Diese Rahmen geben Ihnen vorab eine belastbare Größenordnung."
        action={{ label: "Preise im Detail", href: "/preise" }}
      />
      )}

      <div className="grid grid-cols-12 gap-x-5 gap-y-10">
        {pricingTiers.map((tier, i) => (
          <Reveal
            key={tier.title}
            delay={i * 0.08}
            className="col-span-12 lg:col-span-4"
          >
            <div
              className={`flex h-full flex-col p-6 sm:p-8 ${
                tier.highlighted ? "bg-ink text-paper" : "border-t border-ink pt-8"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="t-subheading">{tier.title}</h3>
                {tier.highlighted && (
                  <span className="t-caption rounded-[500px] border border-paper px-3 py-1">
                    Meistgewählt
                  </span>
                )}
              </div>

              <p className="t-heading-sm mt-4">{tier.price}</p>

              <p className={`t-body-sm mt-4 ${tier.highlighted ? "text-paper/70" : "text-stone"}`}>
                {tier.description}
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span
                      aria-hidden
                      className={`mt-[9px] h-px w-4 shrink-0 ${
                        tier.highlighted ? "bg-paper/50" : "bg-ink"
                      }`}
                    />
                    <span className="t-body-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className={`pill mt-8 self-start ${tier.highlighted ? "pill-invert" : ""}`}
              >
                Anfragen
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <p className="t-caption text-stone">
          Alle Angaben netto zzgl. USt. Produktionskosten, Lizenzen und Reisen werden separat
          ausgewiesen.
        </p>
      </Reveal>
    </Section>
  );
}
