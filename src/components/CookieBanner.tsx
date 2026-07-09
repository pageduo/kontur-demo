"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const COOKIE_CONSENT_KEY = "kontur-demo-cookie-consent";
export const COOKIE_CONSENT_EVENT = "kontur-demo-cookie-consent-change";

export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage isn't available during SSR, so the initial (hidden) render
    // must match the server, then correct itself once mounted on the client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!getStoredConsent());
  }, []);

  const decide = (value: "accepted" | "declined") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-mist bg-paper/95 p-5 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-stone">
          Diese Demo-Website verwendet nur technisch notwendige Cookies. Für die Kartenanzeige
          (Google Maps) fragen wir separat Ihre Zustimmung ab.{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => decide("declined")}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition hover:bg-mist"
          >
            Ablehnen
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-full bg-graphite px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
