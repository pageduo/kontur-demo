import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Preise | KONTUR Demo",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        eyebrow="Investition"
        number="07"
        title="Drei Wege, mit uns zu arbeiten."
        subline="Jedes Projekt bekommt ein individuelles Angebot. Diese drei Rahmen geben Ihnen vorab eine belastbare Größenordnung, damit das Erstgespräch nicht bei null beginnt."
        image={img.preiseHero}
        imageAlt="Verpackungsmuster und Materialproben nebeneinander"
      />
      <PricingSection variant="page" />
      <FaqSection variant="page" />
    </>
  );
}
