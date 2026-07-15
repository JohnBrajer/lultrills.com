"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LEGAL,
  getCookieConsent,
  setCookieConsent,
  type CookieConsentValue,
} from "@/lib/legal";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = getCookieConsent();
    setVisible(!existing);
  }, []);

  const choose = (value: CookieConsentValue) => {
    setCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="cookie-banner-panel">
        <p className="cookie-banner-kicker">
          {LEGAL.entity} · Cookies
        </p>
        <p className="cookie-banner-body">
          We use essential cookies to run this site. By clicking{" "}
          <strong>Accept cookies</strong> you agree to our{" "}
          <Link href="/cookies">Cookies Policy</Link>,{" "}
          <Link href="/privacy">Privacy Policy</Link>, and{" "}
          <Link href="/terms">Terms</Link>. Nothing here is medical advice.{" "}
          <Link href="/disclaimer">Disclaimer</Link>.
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn--accept"
            onClick={() => choose("accepted")}
          >
            Accept cookies
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn--essential"
            onClick={() => choose("essential")}
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
