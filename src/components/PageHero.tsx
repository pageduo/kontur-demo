import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Reveal from "./Reveal";

/*
 * Kopf der Einzelseiten. Kein abgedunkeltes Vollbild mehr, sondern derselbe
 * typografische Auftakt wie auf der Startseite: weißes Papier, Nummer und
 * Label als schmale Spalte, die Überschrift trägt die Seite. Das Bild sitzt
 * darunter als roher rechteckiger Beschnitt.
 */
export default function PageHero({
  eyebrow,
  number,
  title,
  subline,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  number?: string;
  title: string;
  subline?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <header className="bg-paper pb-14 pt-28 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-ink pb-3">
          <Link href="/" className="t-caption ulink">
            &larr; Startseite
          </Link>
          <span className="t-caption text-stone">{eyebrow}</span>
        </div>

        <div className="grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-12 flex items-baseline gap-4 lg:col-span-3 lg:flex-col lg:items-start lg:gap-2">
            {number && <span className="sec-num">{number}</span>}
            <span className="eyebrow text-stone">{eyebrow}</span>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <Reveal variant="mask">
              <h1 className="t-heading-lg max-w-[18ch]">{title}</h1>
            </Reveal>
            {subline && (
              <Reveal delay={0.08}>
                <p className="t-body mt-6 max-w-[54ch] text-stone">{subline}</p>
              </Reveal>
            )}
            {children}
          </div>
        </div>

        {image && (
          <Reveal variant="mask" delay={0.12} className="mt-12 sm:mt-16">
            <figure className="relative aspect-[21/9] w-full">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                priority
                sizes="100vw"
                className="raw-img object-cover"
              />
            </figure>
          </Reveal>
        )}
      </div>
    </header>
  );
}
