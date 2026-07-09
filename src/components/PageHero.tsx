import Image from "next/image";
import { ReactNode } from "react";
import Parallax from "./Parallax";

export default function PageHero({
  eyebrow,
  title,
  subline,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  subline?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-graphite pb-16 pt-32 sm:pt-40">
      {image && (
        <>
          <Parallax strength={40}>
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/85 to-graphite/40" />
        </>
      )}
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow text-signal-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-3xl text-paper sm:text-5xl">{title}</h1>
        {subline && <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70">{subline}</p>}
        {children}
      </div>
    </div>
  );
}
