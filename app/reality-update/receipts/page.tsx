import type { Metadata } from "next";
import Link from "next/link";
import { RECEIPTS, SITE } from "@/lib/realityUpdate";

export const metadata: Metadata = {
  title: "Receipt Pack | Trillsverse Reality Update",
  description:
    "Checkable receipts for the Reality Update: claim, evidence, verification, outcome. Substrate live; wire pending.",
  alternates: { canonical: `${SITE}/reality-update/receipts` },
  robots: { index: true, follow: true },
};

export default function ReceiptsIndexPage() {
  return (
    <div className="site">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere-orb atmosphere-orb--red" />
        <div className="atmosphere-orb atmosphere-orb--gold" />
        <div className="atmosphere-vignette" />
      </div>

      <header className="nav">
        <div className="nav-row">
          <Link href="/reality-update" className="nav-brand">
            <span className="nav-mark">LULTRILLS</span>
            <span className="nav-pulse" aria-hidden="true" />
            <span className="nav-sys">RECEIPTS</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/reality-update">Update</Link>
            <Link href="/reality-update/wire-criteria">Wire criteria</Link>
            <Link href="/press">Press</Link>
          </nav>
          <Link href="/reality-update" className="nav-cta">
            Update
          </Link>
        </div>
      </header>

      <main className="section" style={{ paddingTop: "3rem" }}>
        <div className="site-inner" style={{ maxWidth: "44rem" }}>
          <p className="section-label">Reality Update · Strike evidence</p>
          <h1
            style={{
              fontSize: "clamp(2.25rem, 7vw, 3.5rem)",
              marginBottom: "1rem",
            }}
          >
            Receipt pack
          </h1>
          <p className="hero-sub" style={{ marginBottom: "2rem" }}>
            Each receipt is inspectable: claim, evidence, verification steps,
            outcome. Status labels are honest.
          </p>

          <div style={{ display: "grid", gap: "1rem" }}>
            {RECEIPTS.map((r) => (
              <Link
                key={r.id}
                href={r.href}
                className="panel-glass"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div className="panel-head">
                  <span className="panel-id">{r.strike.toUpperCase()}</span>
                  <span className="panel-state">{r.status.toUpperCase()}</span>
                </div>
                <h2 style={{ fontSize: "1.25rem", margin: "0.75rem 0 0.35rem" }}>
                  {r.title}
                </h2>
                <p className="hero-sub" style={{ margin: 0 }}>
                  {r.proves}
                </p>
                <p
                  className="hero-sub"
                  style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "var(--ink-3)" }}
                >
                  {r.id}
                </p>
              </Link>
            ))}
          </div>

          <p className="hero-sub" style={{ marginTop: "2.5rem" }}>
            <Link href="/reality-update">← Reality Update</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
