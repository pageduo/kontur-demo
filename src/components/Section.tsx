import Link from "next/link";
import { ReactNode } from "react";
import Reveal from "./Reveal";

type Tone = "paper" | "gray" | "ink";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  gray: "bg-newsprint text-ink",
  ink: "bg-ink text-paper",
};

/*
 * Bandsektion. Der Rhythmus des Systems entsteht ausschließlich über den
 * Wechsel der Flächen (weiß ↔ #e8e8e8 ↔ schwarz) und über vertikalen Raum —
 * es gibt keine Trennlinien zwischen Sektionen.
 *
 * Jede Sektion meldet sich per data-rail-* bei der rechten Statusleiste an.
 */
export function Section({
  id,
  label,
  number,
  tone = "paper",
  children,
  className = "",
}: {
  id: string;
  label: string;
  number: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-rail-section
      data-rail-label={label}
      data-rail-number={number}
      className={`${toneClass[tone]} py-20 sm:py-28 lg:py-[100px] ${className}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

/*
 * Sektionskopf im Editorial-Satz: Nummer und Label als schmale Spalte links,
 * die große Überschrift daneben. Die Nummer ist die einzige Stelle im Layout,
 * an der Rot auftaucht.
 */
export function SectionHead({
  number,
  eyebrow,
  title,
  intro,
  action,
  invert = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
  action?: { label: string; href: string };
  invert?: boolean;
}) {
  return (
    <div className={`grid grid-cols-12 gap-x-5 gap-y-8 border-t pb-12 pt-5 sm:pb-16 ${invert ? "border-paper/25" : "border-ink"}`}>
      <div className="col-span-12 flex items-baseline gap-4 lg:col-span-3 lg:flex-col lg:items-start lg:gap-2">
        <span className={`sec-num ${invert ? "sec-num--invert" : ""}`}>{number}</span>
        <span className={`eyebrow ${invert ? "text-paper/60" : "text-stone"}`}>{eyebrow}</span>
      </div>

      <div className="col-span-12 lg:col-span-9">
        <Reveal variant="mask">
          <h2 className="t-heading-lg head-measure">{title}</h2>
        </Reveal>

        {intro && (
          <Reveal delay={0.08}>
            <p className={`t-body head-measure mt-6 ${invert ? "text-paper/70" : "text-stone"}`}>
              {intro}
            </p>
          </Reveal>
        )}

        {action && (
          <Reveal delay={0.14}>
            <Link
              href={action.href}
              className={`pill mt-8 ${invert ? "pill-invert" : ""}`}
            >
              {action.label}
              <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        )}
      </div>
    </div>
  );
}
