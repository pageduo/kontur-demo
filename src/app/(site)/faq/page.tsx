import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ | KONTUR Demo",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Häufige Fragen"
        number="08"
        title="Gut zu wissen, bevor es losgeht."
        subline="Antworten auf die Fragen, die uns am häufigsten erreichen: Ablauf, Dauer, Kosten und Rechte."
        image={img.faqHero}
        imageAlt="Zwei Personen skizzieren gemeinsam an einem Whiteboard"
      />
      <FaqSection variant="page" />
      <ContactSection variant="page" />
    </>
  );
}
