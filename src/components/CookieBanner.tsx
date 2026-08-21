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
    // Kein Schatten, kein Radius, kein Glaseffekt: ein schwarzes Band, das sich
    // unten über die Seite legt — im System ist Kontrast die Erhebung.
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-paper/25 bg-ink text-paper">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="t-body-sm max-w-[70ch] text-paper/75">
          Diese Demo-Website verwendet nur technisch notwendige Cookies. Für die Kartenanzeige
          fragen wir separat Ihre Zustimmung ab.{" "}
          <Link href="/datenschutz" className="ulink text-paper">
            Datenschutzerklärung
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button onClick={() => decide("declined")} className="pill pill-sm pill-invert">
            Ablehnen
          </button>
          <button onClick={() => decide("accepted")} className="pill pill-sm">
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
