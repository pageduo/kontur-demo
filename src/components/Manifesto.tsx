"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { img } from "@/lib/images";

export default function Manifesto() {
  return (
    <section className="relative flex min-h-[85svh] w-full items-center overflow-hidden bg-ink py-28">
      <Image
        src={img.manifesto}
        alt="Gestapelte, unbedruckte Kartonverpackungen im Studio"
        fill
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/80" />

      <Marquee text="Produktdesign — Verpackungsdesign — Branding — Prototyping — " />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="eyebrow text-signal-light"
        >
          {"// Unsere Haltung"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display-italic mt-6 text-4xl leading-[1.1] text-paper sm:text-6xl lg:text-7xl"
        >
          Gute Verpackung erklärt sich, bevor sie gelesen wird.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper/70"
        >
          Wir glauben an Form vor Dekoration, an Material, das man fühlt, und an Design, das im
          Regal genauso überzeugt wie in der Hand.
        </motion.p>
      </div>
    </section>
  );
}
