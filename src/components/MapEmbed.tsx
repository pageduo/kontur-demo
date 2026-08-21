"use client";

import { useState } from "react";

/*
 * Karte lädt erst nach ausdrücklicher Zustimmung — vorher wird keine
 * Verbindung zu Google aufgebaut.
 */
export default function MapEmbed({ query, title }: { query: string; title: string }) {
  const [consent, setConsent] = useState(false);

  if (!consent) {
    return (
      <div className="flex aspect-[16/10] w-full flex-col items-start justify-end gap-4 bg-newsprint p-6 sm:p-8">
        <p className="t-body-sm max-w-[42ch] text-stone">
          Beim Laden der Karte wird eine Verbindung zu Google Maps hergestellt und Ihre IP-Adresse
          übertragen.
        </p>
        <button onClick={() => setConsent(true)} className="pill pill-filled pill-sm">
          Karte laden und zustimmen
        </button>
      </div>
    );
  }

  return (
    <div className="aspect-[16/10] w-full overflow-hidden">
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="h-full w-full border-0 grayscale"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
