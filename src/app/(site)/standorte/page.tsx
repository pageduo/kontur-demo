import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StandorteMap from "@/components/StandorteMap";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Standorte — KONTUR Demo",
};

export default function StandortePage() {
  return (
    <>
      <PageHero
        eyebrow="// Einzugsgebiet"
        title="Zuhause an der Elbe — im Einsatz im ganzen DACH-Raum."
        subline="Wählen Sie einen Standort und laden Sie die interaktive Karte, um sich die Anfahrt anzusehen."
        image={img.standorteHero}
        imageAlt="Backsteingebäude an der Elbe in Hamburg-Altona"
      />
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <StandorteMap />
        </div>
      </section>
    </>
  );
}
