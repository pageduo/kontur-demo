"use client";

import { COOKIE_CONSENT_KEY } from "./CookieBanner";

export default function ResetConsentButton() {
  return (
    <button
      onClick={() => {
        window.localStorage.removeItem(COOKIE_CONSENT_KEY);
        window.location.reload();
      }}
      className="pill pill-sm"
    >
      Cookie-Einwilligung zurücksetzen
    </button>
  );
}
