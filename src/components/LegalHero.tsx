import { company } from "@/lib/content";

export default function LegalHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="bg-graphite pb-16 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="eyebrow text-signal-light">{eyebrow}</p>
        <h1 className="mt-4 font-display text-3xl text-paper sm:text-5xl">{title}</h1>
        <div className="mt-6 rounded-2xl border border-signal-light/30 bg-signal/10 px-5 py-4 text-sm leading-relaxed text-paper/80">
          Diese Seite ist Teil einer <strong>Demo-Website</strong> zu Präsentationszwecken.{" "}
          {company.fullName} ist kein reales Unternehmen, alle Angaben sind Platzhalter. Für eine
          echte Kundenseite müssen diese Inhalte durch geprüfte, individuelle Angaben ersetzt
          werden.
        </div>
      </div>
    </div>
  );
}
