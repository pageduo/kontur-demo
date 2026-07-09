import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import Manifesto from "@/components/Manifesto";
import HomeServicesTeaser from "@/components/HomeServicesTeaser";
import ProcessScrolly from "@/components/ProcessScrolly";
import HomeReferenzenTeaser from "@/components/HomeReferenzenTeaser";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "KONTUR Studio — Design mit Kante | Demo-Website",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <Manifesto />
      <HomeServicesTeaser />
      <ProcessScrolly />
      <HomeReferenzenTeaser />
      <Testimonials />
      <CTABanner />
    </>
  );
}
