"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, SectionHead } from "../Section";
import Reveal from "../Reveal";
import { faqs } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

/*
 * FAQ als Liste mit Haarlinien. Kein Rahmen, keine Fläche, keine Rundung —
 * das Aufklappen ist die einzige Bewegung.
 */
/*
 * showHead trennt zwei Faelle, die vorher beide an der Variante hingen.
 *
 * Traegt die Sektion das Thema der Seite, kommt die Ueberschrift vom
 * Seitenkopf und der Sektionskopf entfaellt, sonst stuende dasselbe zweimal
 * untereinander. Steht die Sektion dagegen als Ergaenzung auf einer fremden
 * Seite, hat sie ohne eigenen Kopf gar keine Ueberschrift mehr: auf /preise
 * folgte auf die Preistabelle unvermittelt eine nackte Frageliste.
 */
export default function FaqSection({
  variant = "home",
  showHead = variant === "home",
}: {
  variant?: "home" | "page";
  showHead?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const shown = variant === "home" ? faqs.slice(0, 4) : faqs;

  return (
    <Section id="faq" label="FAQ" number="08" tone="paper">
      {showHead && (
      <SectionHead
        number="08"
        eyebrow="Häufige Fragen"
        title="Was Kund:innen zuerst fragen."
        action={{ label: "Alle Fragen", href: "/faq" }}
      />
      )}

      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-9 lg:col-start-4">
          <ul className="border-t border-ink">
            {shown.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.question} className="border-b border-ink">
                  <Reveal delay={i * 0.05}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="t-subheading max-w-[46ch]">{faq.question}</span>
                      <span
                        aria-hidden
                        className="relative mt-2 block h-4 w-4 shrink-0"
                      >
                        <span className="absolute left-0 top-1/2 h-px w-4 bg-ink" />
                        <span
                          className={`absolute left-1/2 top-0 h-4 w-px bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="t-body max-w-[62ch] pb-7 text-stone">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
