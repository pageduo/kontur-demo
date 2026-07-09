"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Klassischer Scroll-Parallax-Effekt: der Bildinhalt bewegt sich langsamer als
// die Seite selbst. Der äußere Rahmen bleibt exakt auf die Sektionsgröße
// begrenzt (für eine korrekte Scroll-Fortschrittsmessung), der innere Layer
// ist bewusst überdimensioniert, damit beim Verschieben keine Ränder sichtbar werden.
export default function Parallax({
  children,
  strength = 70,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength / 2, strength / 2]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}
