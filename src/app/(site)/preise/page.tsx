import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { pricingTiers } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Preise | KONTUR Demo",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        eyebrow="// Preise & Pakete"
        title="Transparente Pakete, klares Angebot."
        subline="Jedes Produkt ist anders. Hier finden Sie eine erste Orientierung, das genaue Angebot folgt immer nach einem kostenlosen Erstgespräch."
        image={img.preiseHero}
        imageAlt="Verpackungskarton auf einem Studiotisch"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <Reveal
                key={tier.title}
                delay={i * 0.08}
                className={`flex flex-col rounded-3xl border p-8 ${
                  tier.highlighted ? "border-signal bg-graphite text-paper" : "border-ink/10 bg-cream text-ink"
                }`}
              >
                <h3 className="font-display text-xl">{tier.title}</h3>
                <p
                  className={`mt-3 font-display text-3xl ${
                    tier.highlighted ? "text-signal-light" : "text-signal-dark"
                  }`}
                >
                  {tier.price}
                </p>
                <p className={`mt-4 text-sm leading-relaxed ${tier.highlighted ? "text-paper/70" : "text-stone"}`}>
                  {tier.description}
                </p>
                <ul className="font-label mt-6 flex flex-col gap-2 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className={tier.highlighted ? "text-signal-light" : "text-signal-dark"}>✓</span>
                      <span className={tier.highlighted ? "text-paper/80" : "text-ink/80"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16 text-center">
            <p className="text-base leading-relaxed text-stone">
              Nicht das Richtige dabei? Jedes Projekt bekommt ein individuelles Angebot.
            </p>
            <Link
              href="/kontakt"
              className="font-label mt-6 inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-signal-light"
            >
              Individuelles Angebot anfragen
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
