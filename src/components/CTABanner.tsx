import Link from "next/link";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { company } from "@/lib/content";

export default function CTABanner() {
  return (
    <section className="bg-signal py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-paper sm:text-5xl">
            Ein Produkt, das im Regal auffällt?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/85 sm:text-lg">
            Schreiben Sie uns oder rufen Sie an, wir melden uns in der Regel innerhalb eines
            Werktags mit einem ersten Termin.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Link
                href="/kontakt"
                className="font-label rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-graphite"
              >
                Jetzt Kontakt aufnehmen
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href={company.phoneHref}
                className="font-label rounded-full border border-paper/50 px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-paper/10"
              >
                {company.phone}
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
