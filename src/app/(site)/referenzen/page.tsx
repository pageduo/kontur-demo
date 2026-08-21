import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import Testimonials from "@/components/Testimonials";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Referenzen | KONTUR Demo",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        number="05"
        title="Arbeiten, die im Regal bestehen."
        subline="Acht Projekte aus Produktdesign, Verpackung, Branding und Editorial: von der Kaffeetüte bis zur Küchenmaschine."
        image={img.referenzenHero}
        imageAlt="Verpackungen aufgereiht im Regal"
      />

      <section
        id="projekte"
        data-rail-section
        data-rail-label="Projekte"
        data-rail-number="01"
        className="bg-paper py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <GalleryGrid />
        </div>
      </section>

      <section
        id="stimmen"
        data-rail-section
        data-rail-label="Stimmen"
        data-rail-number="02"
        className="bg-newsprint pt-20 sm:pt-28"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="t-heading-lg max-w-[16ch]">Was Kundinnen und Kunden sagen.</h2>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
