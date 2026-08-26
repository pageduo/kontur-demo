"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

/*
 * Editorial-Reveal statt Fade-up: der Inhalt wird von unten aus einer Maske
 * herausgeschoben, wie ein Satz, der auf Papier belichtet wird. Die Kurve
 * (0.22, 1, 0.36, 1) läuft lange aus — ruhig, nicht federnd.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

const riseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/*
 * Der Endzustand der Maske klemmt bewusst weit unterhalb der Unterkante.
 * Grund: die Überschriften laufen mit line-height 1, die Schrift braucht aber
 * rund 1.21em. Die Unterlängen von g, j, p, q ragen dadurch etwa 8% einer
 * Zeile unter die Zeilenbox. Bei 50px sind das 4px, vorher gab -2% aber nur
 * 1px frei, und genau darum wurden die Unterlängen gekappt.
 *
 * Der Prozentwert bezieht sich auf die Elementhöhe, der nötige Überstand
 * dagegen auf eine einzelne Zeile. Der ungünstigste Fall ist deshalb die
 * einzeilige Überschrift: dort sind 18% rund 9px bei 4px Bedarf. Bei mehr
 * Zeilen wächst der Puffer von allein. Nach unten zu weit zu klemmen kostet
 * nichts, weil unterhalb des Elements ohnehin nichts zu verbergen ist.
 */
const maskVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 12 },
  visible: {
    clipPath: "inset(0 0 -18% 0)",
    y: 0,
    transition: { duration: 0.95, ease: EASE },
  },
};

export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  variant = "rise",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
  /** "mask" schiebt aus einer Maske heraus — für Überschriften und Bilder. */
  variant?: "rise" | "mask";
}) {
  const MotionTag = as === "span" ? motion.span : motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -12% 0px" }}
      variants={variant === "mask" ? maskVariants : riseVariants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
