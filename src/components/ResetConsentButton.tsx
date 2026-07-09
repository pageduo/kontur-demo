"use client";

import { COOKIE_CONSENT_KEY } from "./CookieBanner";

export default function ResetConsentButton() {
  return (
    <button
      onClick={() => {
        window.localStorage.removeItem(COOKIE_CONSENT_KEY);
        window.location.reload();
      }}
      className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-mist"
    >
      Cookie-Einwilligung zurücksetzen
    </button>
  );
}
