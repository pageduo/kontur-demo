import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import DemoHinweis from "@/components/DemoHinweis";
import { PAGEDUO_EMAIL, PAGEDUO_NAME, PAGEDUO_PARTNERS, PAGEDUO_URL } from "@/lib/pageduo";

export const metadata: Metadata = {
  title: "Impressum | KONTUR – Demo",
};

/*
 * Das Impressum nennt den Anbieter dieser Website, und das ist nicht das
 * dargestellte Studio - das gibt es nicht. Anbieter ist die Agentur, die die
 * Demo betreibt. Die frueheren Abschnitte (fiktive Anschrift, USt-IdNr.,
 * EU-Streitschlichtung) sind ersatzlos entfallen: Eine erfundene
 * Pflichtangabe ist keine Pflichtangabe, sondern eine falsche Angabe.
 */
export default function ImpressumPage() {
  return (
    <>
      <LegalHero eyebrow="Rechtliches" title="Impressum" />
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <DemoHinweis className="mb-10" />

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-stone">
          <section>
            <h2 className="t-subheading mb-3 text-ink">Anbieter dieser Website</h2>
            <p>
              {PAGEDUO_NAME} – Webdesign, Hamburg
              <br />
              Vertreten durch die Gesellschafter {PAGEDUO_PARTNERS.replace(", ", " und ")}
              <br />
              E-Mail:{" "}
              <a href={`mailto:${PAGEDUO_EMAIL}`} className="ulink text-ink">
                {PAGEDUO_EMAIL}
              </a>
            </p>
          </section>

          <section>
            <a
              href={`${PAGEDUO_URL}/impressum`}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-filled"
            >
              Vollständiges Impressum von PageDuo →
            </a>
          </section>

          <section>
            <h2 className="t-subheading mb-3 text-ink">Bildnachweise</h2>
            <p>
              Die Fotografien dieser Demo stammen von Unsplash, im Rahmen der kostenfreien Lizenz
              zu Demonstrationszwecken genutzt.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
