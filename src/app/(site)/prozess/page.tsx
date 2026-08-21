import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessScrolly from "@/components/ProcessScrolly";
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
    </>
  );
}
