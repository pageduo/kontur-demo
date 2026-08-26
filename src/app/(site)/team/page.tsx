import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StudioSection from "@/components/sections/StudioSection";
import TeamSection from "@/components/sections/TeamSection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Team & Studio | KONTUR Demo",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team & Studio"
        number="06"
        title="Neun Leute, ein Tisch, kurze Wege."
        subline="Wer an Ihrem Projekt arbeitet, sitzt im selben Haus wie die Werkstatt. Sie sprechen mit den Gestaltenden, nicht mit einer Zwischenebene."
        image={img.teamHero}
        imageAlt="Team im Studio bei der Arbeit an Materialproben"
      />
      <StudioSection variant="page" showHead />
      <TeamSection variant="page" />
    </>
  );
}
