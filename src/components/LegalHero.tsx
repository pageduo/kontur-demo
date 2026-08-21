import Link from "next/link";
import { company } from "@/lib/content";

export default function LegalHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="bg-paper pb-12 pt-28 sm:pb-16 sm:pt-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-ink pb-3">
          <Link href="/" className="t-caption ulink">
            &larr; Startseite
          </Link>
          <span className="t-caption text-stone">{eyebrow}</span>
        </div>

        <div className="grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow text-stone">{eyebrow}</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h1 className="t-heading-lg max-w-[16ch]">{title}</h1>
            {/* Rot markiert hier den redaktionellen Hinweis — dieselbe Rolle
                wie eine Kategoriemarke, kein UI-Element. */}
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="t-body-sm max-w-[68ch] text-stone">
                Diese Seite ist Teil einer <strong className="text-ink">Demo-Website</strong> zu
                Präsentationszwecken. {company.fullName} ist kein reales Unternehmen, alle Angaben
                sind Platzhalter. Für eine echte Kundenseite müssen diese Inhalte durch geprüfte,
                individuelle Angaben ersetzt werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
