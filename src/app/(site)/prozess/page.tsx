import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProcessScrolly from "@/components/ProcessScrolly";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { processSteps } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Prozess | KONTUR Demo",
};

export default function ProzessPage() {
  return (
    <>
      <PageHero
        eyebrow="Prozess"
        number="04"
        title="Vier Schritte von der Idee ins Regal."
        subline="Jeder Schritt endet mit einem greifbaren Ergebnis, das Sie freigeben. Keine Blackbox, keine Überraschung kurz vor der Produktion."
        image={img.prozessHero}
        imageAlt="Handskizzen und Entwurfsvarianten auf dem Zeichentisch"
      />
      <ProcessScrolly variant="page" />

      {/*
       * Die Bühne darüber zeigt pro Schritt bewusst nur einen Satz, damit sie
       * im Scrollen lesbar bleibt. Ohne eine zweite Ebene stünde auf dieser
       * Seite aber nicht mehr als auf der Startseite. Deshalb hier die Tiefe:
       * was im Schritt passiert, was am Ende herauskommt, wie lange er dauert
       * und was wir dafür von Ihnen brauchen.
       *
       * Bewusst ohne data-rail-*: die Seite behält damit einen einzigen
       * gemeldeten Abschnitt, die rechte Statusleiste bleibt aus. Genau wie
       * auf den anderen Einzelseiten mit nur einem Thema.
       */}
      <section className="bg-paper py-20 sm:py-28 lg:py-[100px]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHead
            number="04"
            eyebrow="Im Detail"
            title="Was in jedem Schritt tatsächlich passiert."
            intro="Jeder Schritt endet mit einem Ergebnis, das Sie prüfen und freigeben. Hier steht, was dahintersteckt, wie lange es dauert und was wir dafür von Ihnen brauchen."
          />

          <div className="flex flex-col">
            {processSteps.map((step, i) => (
              <Reveal key={step.key} delay={0.05}>
                <article className="grid grid-cols-12 gap-x-5 gap-y-6 border-t border-ink py-10 sm:py-12">
                  <div className="col-span-12 lg:col-span-3">
                    <p className="sec-num">Schritt {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="t-heading-sm mt-3">{step.title}</h3>
                  </div>

                  <div className="col-span-12 lg:col-span-5">
                    <p className="t-body text-stone">{step.detail}</p>
                  </div>

                  <dl className="col-span-12 flex flex-col gap-6 lg:col-span-3 lg:col-start-10">
                    <div>
                      <dt className="eyebrow text-stone">Ergebnis</dt>
                      <dd className="t-body-sm mt-2">{step.result}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-stone">Dauer</dt>
                      <dd className="t-body-sm mt-2">{step.duration}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-stone">Ihr Beitrag</dt>
                      <dd className="t-body-sm mt-2">{step.contribution}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="border-t border-ink pt-8">
            <p className="t-body head-measure">
              Die Schritte greifen ineinander, laufen aber nicht stur nacheinander ab. Zeigt der
              Prototyp etwas Unerwartetes, gehen wir einen Schritt zurück, statt das Problem in die
              Produktion mitzunehmen.
            </p>
            <Link href="/kontakt" className="pill pill-filled mt-6">
              Projekt besprechen
              <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
