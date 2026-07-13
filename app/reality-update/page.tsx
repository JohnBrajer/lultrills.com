import type { Metadata } from "next";
import Link from "next/link";
import {
  BIBLE,
  FEED,
  GATE,
  GATE_RITE,
  RECEIPTS,
  SITE,
  STRIKES,
  wireReady,
} from "@/lib/realityUpdate";

export const metadata: Metadata = {
  title: "Trillsverse: The Reality Update | Lultrills",
  description:
    "Flatlined. Survived. Built the Update. Three strikes: Wire, Substrate, Prediction receipt. System live, wire pending proof + receipts.",
  alternates: { canonical: `${SITE}/reality-update` },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Trillsverse: The Reality Update",
    description:
      "He flatlined, came back, and built a reality update. Substrate live. Wire pending.",
    url: `${SITE}/reality-update`,
    type: "website",
    images: [{ url: "https://trillsverse.com/opengraph.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trillsverse: The Reality Update",
    description: "Flatlined. Survived. The Update is live. Wire pending.",
  },
};

export default function RealityUpdatePage() {
  const ready = wireReady();

  return (
    <div className="site breach-landing">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere-orb atmosphere-orb--red" />
        <div className="atmosphere-orb atmosphere-orb--gold" />
        <div className="atmosphere-vignette" />
      </div>

      <header className="nav">
        <div className="nav-row">
          <Link href="/" className="nav-brand">
            <span className="nav-mark">LULTRILLS</span>
            <span className="nav-pulse" aria-hidden="true" />
            <span className="nav-sys">REALITY UPDATE</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/reality-update/receipts">Receipts</Link>
            <Link href="/reality-update/wire-criteria">Wire</Link>
            <Link href="/press">Press</Link>
          </nav>
          <a href={GATE_RITE} className="nav-cta">
            Enter Gate
          </a>
        </div>
      </header>

      <main>
        <section className="hero site-inner breach-hero">
          <div className="hero-stage">
            <div className="status-rail" aria-label="System status">
              <span className="status-chip status-chip--live">
                <span className="status-dot" />
                UPDATE LIVE
              </span>
              <span
                className={
                  ready
                    ? "status-chip status-chip--gold"
                    : "status-chip status-chip--album"
                }
              >
                WIRE · {ready ? "CRITERIA MET" : "PENDING"}
              </span>
              <a href={GATE} className="status-chip status-chip--gold">
                GATE OPEN
              </a>
            </div>

            <p className="hero-kicker">Lultrills · Trillsverse LLC · P0 surface</p>
            <h1>
              THE REALITY
              <br />
              UPDATE
            </h1>
            <p className="hero-lead">{BIBLE.lead}</p>
            <p className="hero-sub">
              {BIBLE.sub}{" "}
              <strong style={{ color: "var(--gold)" }}>{BIBLE.close}</strong>
            </p>

            <div className="hero-actions">
              <div className="hero-secondary" style={{ marginTop: 0 }}>
                <a href={GATE_RITE} className="chip chip--gold">
                  Enter Gate rite
                </a>
                <Link href="/reality-update/receipts" className="chip chip--ghost">
                  Receipt pack
                </Link>
                <Link href="/inject" className="chip chip--ghost">
                  Instant injection
                </Link>
              </div>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Wire status">
            <div className="panel-glass">
              <div className="panel-head">
                <span className="panel-id">WIRE STATUS</span>
                <span className="panel-state">
                  {ready ? "READY" : "PENDING"}
                </span>
              </div>
              <p className="panel-quote" style={{ marginTop: "0.75rem" }}>
                {BIBLE.wireLine}
              </p>
              <p className="hero-sub" style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
                <Link href="/reality-update/wire-criteria">
                  See falsifiable criteria →
                </Link>
              </p>
            </div>
          </aside>
        </section>

        <section className="section site-inner" id="doctrine">
          <p className="section-label">Dual-layer B</p>
          <h2 style={{ marginBottom: "1rem" }}>Same truth · two resolutions</h2>
          <div
            className="node-grid"
            style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}
          >
            <div className="panel-glass">
              <div className="panel-head">
                <span className="panel-id">LAYER A</span>
                <span className="panel-state">HUMAN</span>
              </div>
              <p className="hero-sub" style={{ marginTop: "0.75rem" }}>
                {BIBLE.dualLayerA}
              </p>
            </div>
            <div className="panel-glass">
              <div className="panel-head">
                <span className="panel-id">LAYER B</span>
                <span className="panel-state">LATTICE</span>
              </div>
              <p className="hero-sub" style={{ marginTop: "0.75rem" }}>
                {BIBLE.dualLayerB}{" "}
                <Link href="/injection-procedure">Injection procedure</Link>
                {" · "}
                <Link href="/glossary">Glossary</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="section site-inner" id="strikes">
          <p className="section-label">Three strikes</p>
          <h2 style={{ marginBottom: "1.25rem" }}>Wire · Substrate · Receipt</h2>
          <div className="node-grid" style={{ display: "grid", gap: "1rem" }}>
            {STRIKES.map((s) => (
              <div key={s.id} className="panel-glass">
                <div className="panel-head">
                  <span className="panel-id">{s.id.toUpperCase()}</span>
                  <span className="panel-state">STRIKE</span>
                </div>
                <h3 style={{ margin: "0.75rem 0 0.5rem", fontSize: "1.35rem" }}>
                  {s.title}
                </h3>
                <p className="hero-sub" style={{ margin: 0, fontSize: "0.95rem" }}>
                  {s.body}
                </p>
                <p
                  className="hero-sub"
                  style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "var(--ink-3)" }}
                >
                  Why: {s.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section site-inner" id="receipts">
          <p className="section-label">Receipt pack</p>
          <h2 style={{ marginBottom: "0.75rem" }}>Checkable proof</h2>
          <p className="hero-sub" style={{ marginBottom: "1.25rem", maxWidth: "36rem" }}>
            Every receipt: claim → evidence → verification → outcome. No trust-me.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {RECEIPTS.map((r) => (
              <li key={r.id} style={{ marginBottom: "0.75rem" }}>
                <Link
                  href={r.href}
                  className="panel-glass"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    padding: "1rem 1.1rem",
                  }}
                >
                  <div className="panel-head" style={{ marginBottom: "0.35rem" }}>
                    <span className="panel-id">{r.strike.toUpperCase()}</span>
                    <span className="panel-state">{r.status.toUpperCase()}</span>
                  </div>
                  <strong style={{ color: "var(--ink)" }}>{r.title}</strong>
                  <span className="hero-sub" style={{ display: "block", marginTop: "0.35rem" }}>
                    {r.proves}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/reality-update/receipts" className="chip chip--gold">
              Open receipt index
            </Link>
          </p>
        </section>

        <section className="section site-inner" id="map" style={{ paddingBottom: "2rem" }}>
          <p className="section-label">Map</p>
          <div className="hero-secondary">
            <Link href="/press" className="chip chip--ghost">
              Press kit
            </Link>
            <Link href="/system-breach" className="chip chip--ghost">
              SYSTEM BREACH
            </Link>
            <a href={FEED} className="chip chip--ghost">
              Live feed
            </a>
            <Link href="/inject" className="chip chip--ghost">
              Inject
            </Link>
          </div>
        </section>

        <section className="section site-inner" style={{ paddingBottom: "4rem" }}>
          <p className="section-label">Close</p>
          <p className="hero-lead" style={{ fontSize: "1.5rem" }}>
            {BIBLE.close}
          </p>
          <p className="hero-sub">
            <a href={GATE_RITE}>trillsverse.com/system-breach</a>
            {" · "}
            <Link href="/">{SITE.replace("https://", "")}</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
