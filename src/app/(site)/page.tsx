import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StudioSection from "@/components/sections/StudioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessScrolly from "@/components/ProcessScrolly";
import WorkSection from "@/components/sections/WorkSection";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/sections/TeamSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "KONTUR Studio: Design mit Kante | Demo-Website",
};

/*
 * Der One-Pager trägt jeden Abschnitt vollwertig. Dieselben Komponenten laufen
 * auf den Einzelseiten mit variant="page" und zeigen dort die volle Tiefe —
 * hier die verdichtete Fassung.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Produktdesign",
          "Verpackungsdesign",
          "Markenidentität",
          "Prototyping",
          "Editorial",
          "Strategie",
        ]}
      />
      <StudioSection />
      <ServicesSection />
      <ProcessScrolly />
      <WorkSection />
      <Testimonials />
      <TeamSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
