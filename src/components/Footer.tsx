import Link from "next/link";
import { company } from "@/lib/content";
import { overlayPages } from "@/lib/sections";

/*
 * Footer als Fortsetzung der schwarzen Kontaktfläche. Die Wortmarke steht ein
 * letztes Mal groß — im System ist die Typografie die Signatur, nicht ein Logo.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-x-5 gap-y-12 border-t border-paper/25 py-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="t-body max-w-[34ch] text-paper/70">{company.subline}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {company.social.map((s) => (
                <span
                  key={s.label}
                  title="Demo-Website ohne echtes Social-Media-Profil"
                  className="pill pill-sm pill-invert cursor-default opacity-60"
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          <nav className="col-span-6 lg:col-span-3" aria-label="Sitemap">
            <p className="eyebrow mb-5 text-paper/60">Seiten</p>
            <ul className="flex flex-col">
              {overlayPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="t-body-sm ulink block py-2 text-paper/75">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow mb-5 text-paper/60">Kontakt</p>
            <ul className="flex flex-col text-paper/75">
              <li className="t-body-sm">
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </li>
              <li>
                <a href={company.phoneHref} className="t-body-sm ulink block py-2">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="t-body-sm ulink block break-all py-2">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2">
            <p className="eyebrow mb-5 text-paper/60">Rechtliches</p>
            <ul className="flex flex-col">
              <li>
                <Link href="/impressum" className="t-body-sm ulink block py-2 text-paper/75">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="t-body-sm ulink block py-2 text-paper/75">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a href="/datenschutz#cookies" className="t-body-sm ulink block py-2 text-paper/75">
                  Cookie-Einstellungen
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Wortmarke als Abschluss, randlos über die Spaltenbreite */}
        <div aria-hidden className="overflow-hidden pb-8">
          <span className="t-display block whitespace-nowrap text-[clamp(3rem,15vw,190px)] leading-[0.85] text-paper/15">
            KONTUR
          </span>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/25 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-caption text-paper/50">
            © {year} {company.fullName}
          </p>
          <p className="t-caption text-paper/50">
            Demo-Vorlage für Akquisezwecke &middot; kein echtes Unternehmen
          </p>
          <a href="/api/auth/logout" className="t-caption ulink text-paper/50">
            Abmelden
          </a>
        </div>
      </div>
    </footer>
  );
}
