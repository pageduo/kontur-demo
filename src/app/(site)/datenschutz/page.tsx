import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import ResetConsentButton from "@/components/ResetConsentButton";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung (Platzhalter) | KONTUR Demo",
};

export default function DatenschutzPage() {
  return (
    <>
      <LegalHero eyebrow="// Rechtliches" title="Datenschutzerklärung" />
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 text-sm leading-relaxed text-stone">
          <section>
            <h2 className="mb-3 font-display text-xl text-ink">1. Verantwortlicher</h2>
            <p>
              {company.fullName} (fiktiv), {company.address.street}, {company.address.zip}{" "}
              {company.address.city}. E-Mail: {company.email}. Diese Angaben sind Platzhalter für
              eine Demo-Website und beziehen sich auf kein reales Unternehmen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-ink">2. Hosting & Server-Logfiles</h2>
            <p>
              Diese Demo wird auf einer Vercel-Subdomain gehostet. Beim Aufruf der Seite werden
              technisch notwendige Zugriffsdaten (u. a. IP-Adresse, Datum, aufgerufene Seite)
              temporär verarbeitet, um die Auslieferung der Seite zu ermöglichen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-ink">3. Schriftarten</h2>
            <p>
              Die verwendeten Schriftarten (Instrument Serif, Space Grotesk, Inter) werden über{" "}
              <code>next/font</code> lokal ausgeliefert. Es findet keine Verbindung zu
              Google-Servern statt, es werden keine Daten an Google übertragen.
            </p>
          </section>

          <section id="cookies">
            <h2 className="mb-3 font-display text-xl text-ink">4. Cookies & Einwilligung</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies sowie einen
              lokalen Speichereintrag (Local Storage), um Ihre Cookie-Auswahl zu merken. Für die
              Einbindung der Google-Maps-Karten auf den Seiten „Kontakt“ und „Standorte“ fragen wir
              vor dem Laden separat Ihre Zustimmung ab, da hierbei Ihre IP-Adresse an Google
              übertragen wird.
            </p>
            <div className="mt-4">
              <ResetConsentButton />
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-ink">5. Google Maps</h2>
            <p>
              Nach Ihrer Zustimmung wird eine Karte des Anbieters Google Ireland Limited eingebunden.
              Dabei kann Google Daten wie Ihre IP-Adresse verarbeiten und ggf. in die USA
              übertragen. Weitere Informationen finden Sie in der Datenschutzerklärung von Google.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-ink">6. Kontaktformular</h2>
            <p>
              Das Kontaktformular auf dieser Demo-Website versendet keine echten Daten. Es ist
              rein zu Demonstrationszwecken funktionsfähig gestaltet. In einer echten Umsetzung
              würden hier eingegebene Daten (Name, E-Mail, Nachricht) ausschließlich zur
              Bearbeitung Ihrer Anfrage verarbeitet und nach Erledigung gelöscht.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl text-ink">7. Ihre Rechte</h2>
            <p>
              Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
              personenbezogenen Daten nach Art. 15–21 DSGVO zu.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
