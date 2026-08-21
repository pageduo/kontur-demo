import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/sections/ServicesSection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Leistungen | KONTUR Demo",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        number="03"
        title="Von der Formfindung bis zur Serienreife."
        subline="Sechs Disziplinen, die im Studio ineinandergreifen. Die meisten Projekte kombinieren mehrere davon, ohne dass Sie dafür mehrere Dienstleister koordinieren müssen."
        image={img.leistungenHero}
        imageAlt="Materialproben und Texturen auf einem Studiotisch"
      />
      <ServicesSection variant="page" />
    </>
  );
}
