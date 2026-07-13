import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Referenzen | KONTUR Demo",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="// Referenzen"
        title="Ausgewählte Projekte für Marken, die auffallen wollen."
        subline="Von der Kaffeetüte bis zur Küchenmaschine: ein Einblick in unsere Arbeit für Food-, Kosmetik- und Lifestyle-Marken."
        image={img.referenzenHero}
        imageAlt="Verpackungen ordentlich im Regal aufgereiht"
      />
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
