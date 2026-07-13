import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ | KONTUR Demo",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="// Häufige Fragen"
        title="Gut zu wissen, bevor es losgeht."
        subline="Antworten auf die Fragen, die uns am häufigsten erreichen."
        image={img.faqHero}
        imageAlt="Zwei Personen skizzieren gemeinsam an einem Whiteboard"
      />
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
