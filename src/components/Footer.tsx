import Link from "next/link";
import { company, navPages } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-label text-xl font-semibold">
              {company.name}
              <span className="text-signal-light">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{company.subline}</p>
            <div className="font-label mt-6 flex gap-4 text-sm text-paper/60">
              {company.social.map((s) => (
                <span key={s.label} title="Demo-Website ohne echtes Social-Media-Profil">
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-paper/40">Sitemap</p>
            <ul className="flex flex-col gap-2 text-sm">
              {navPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-paper/70 hover:text-paper">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-paper/40">Kontakt</p>
            <ul className="flex flex-col gap-2 text-sm text-paper/70">
              <li>
                {company.address.street}, {company.address.zip} {company.address.city}
              </li>
              <li>
                <a href={company.phoneHref} className="hover:text-paper">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-paper">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-paper/40">Rechtliches</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/impressum" className="text-paper/70 hover:text-paper">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-paper/70 hover:text-paper">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a href="/datenschutz#cookies" className="text-paper/70 hover:text-paper">
                  Cookie-Einstellungen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.fullName}
          </p>
          <p>Demo-Vorlage für Akquisezwecke — kein echtes Unternehmen, keine echten Leistungen.</p>
          <a href="/api/auth/logout" className="hover:text-paper/70">
            Abmelden
          </a>
        </div>
      </div>
    </footer>
  );
}
