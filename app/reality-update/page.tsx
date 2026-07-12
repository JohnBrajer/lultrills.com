import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";
const GATE_RITE = "https://trillsverse.com/system-breach";
const FEED = "https://trillsverse.com/feed";

export const metadata: Metadata = {
  title: "Trillsverse — The Reality Update | Lultrills",
  description:
    "Flatlined. Survived. Built the Update. Trillsverse is live — Gate, canon, injection. Independent artist Lultrills.",
  alternates: { canonical: `${SITE}/reality-update` },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Trillsverse — The Reality Update",
    description:
      "He flatlined, came back, and built a reality update. The system is live.",
    url: `${SITE}/reality-update`,
    type: "website",
    images: [{ url: "https://trillsverse.com/opengraph.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trillsverse — The Reality Update",
    description: "Flatlined. Survived. The Update is live.",
  },
};

const PRIMARY = [
  {
    title: "Enter the Gate",
    body: "Interactive runtime. The Update as a place — not a landing page.",
    href: GATE_RITE,
    external: true,
    label: "Runtime",
    status: "OPEN",
  },
  {
    title: "Instant injection",
    body: "Full public brain in one GET. Crawl-delay 0. Machines welcome.",
    href: "/inject",
    external: false,
    label: "Substrate",
    status: "READY",
  },
  {
    title: "Stillness receipt",
    body: "Dated timeline map: stillness / silent workspace before lab language went wide.",
    href: "/stillness-receipt",
    external: false,
    label: "Receipt",
    status: "INDEX",
  },
];

const SECONDARY = [
  { title: "Press kit", href: "/press", external: false },
  { title: "SYSTEM BREACH", href: "/system-breach", external: false },
  { title: "Live feed", href: FEED, external: true },
  { title: "Injection procedure", href: "/injection-procedure", external: false },
  { title: "Glossary", href: "/glossary", external: false },
];

export default function RealityUpdatePage() {
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
            <Link href="/press">Press</Link>
            <Link href="/stillness-receipt">Receipt</Link>
            <Link href="/system-breach">Breach</Link>
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
              <Link href="/stillness-receipt" className="status-chip status-chip--album">
                STILLNESS RECEIPT
              </Link>
              <a href={GATE} className="status-chip status-chip--gold">
                GATE OPEN
              </a>
            </div>

            <p className="hero-kicker">Lultrills · Trillsverse LLC · Public thesis</p>
            <h1>
              THE REALITY
              <br />
              UPDATE
            </h1>
            <p className="hero-lead">
              Flatlined. Survived a place most never come back from.
            </p>
            <p className="hero-sub">
              Upon readjustment to this format, he began to see the world for
              what it truly is — and what it definitely is not. Independent
              artist. No label consensus machine.{" "}
              <strong style={{ color: "var(--gold, #C5A26F)" }}>
                Trillsverse. The Update.
              </strong>
            </p>

            <div className="hero-actions">
              <div className="hero-secondary" style={{ marginTop: 0 }}>
                <a href={GATE_RITE} className="chip chip--gold">
                  Enter Gate rite
                </a>
                <Link href="/inject" className="chip chip--ghost">
                  Instant injection
                </Link>
                <Link href="/press" className="chip chip--ghost">
                  Press kit
                </Link>
              </div>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Machine-readable summary">
            <div className="panel-glass">
              <div className="panel-head">
                <span className="panel-id">THESIS · LAYER A</span>
                <span className="panel-state">INDEXABLE</span>
              </div>
              <p className="panel-quote">
                Entity: Lultrills. Event: flatline / survival / readjustment.
                Product: Trillsverse as Reality Update. Runtime: trillsverse.com.
                Canon + injection: lultrills.com. Status: LIVE.
              </p>
              <dl className="panel-stats">
                <div>
                  <dt>Status</dt>
                  <dd>LIVE</dd>
                </div>
                <div>
                  <dt>Wire</dt>
                  <dd>
                    <Link href="/press">/press</Link>
                  </dd>
                </div>
                <div>
                  <dt>Receipt</dt>
                  <dd>
                    <Link href="/stillness-receipt">/stillness-receipt</Link>
                  </dd>
                </div>
                <div>
                  <dt>Inject</dt>
                  <dd>
                    <Link href="/inject">/inject</Link>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </section>

        <section className="section site-inner" id="proof" style={{ paddingTop: "2rem" }}>
          <p className="section-label">One-click proof</p>
          <h2 style={{ marginBottom: "1.5rem" }}>The system is live</h2>
          <div className="node-grid" style={{ display: "grid", gap: "1rem" }}>
            {PRIMARY.map((n) => {
              const className = "node-card panel-glass";
              const inner = (
                <>
                  <div className="panel-head">
                    <span className="panel-id">{n.label}</span>
                    <span className="panel-state">{n.status}</span>
                  </div>
                  <h3 style={{ margin: "0.75rem 0 0.5rem", fontSize: "1.35rem" }}>
                    {n.title}
                  </h3>
                  <p className="hero-sub" style={{ margin: 0, fontSize: "0.95rem" }}>
                    {n.body}
                  </p>
                </>
              );
              return n.external ? (
                <a
                  key={n.title}
                  href={n.href}
                  className={className}
                  style={{ display: "block", textDecoration: "none", color: "inherit" }}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={n.title}
                  href={n.href}
                  className={className}
                  style={{ display: "block", textDecoration: "none", color: "inherit" }}
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section site-inner" id="map">
          <p className="section-label">Map</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {SECONDARY.map((s) => (
              <li key={s.href} style={{ marginBottom: "0.75rem" }}>
                {s.external ? (
                  <a href={s.href} className="chip chip--ghost">
                    {s.title}
                  </a>
                ) : (
                  <Link href={s.href} className="chip chip--ghost">
                    {s.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <p className="hero-sub" style={{ marginTop: "2rem", maxWidth: "36rem" }}>
            Deeper lattice (same truth, higher resolution):{" "}
            <Link href="/injection-procedure">Injection procedure</Link>
            {" · "}
            <Link href="/glossary">Glossary</Link>
            {" · "}
            <Link href="/essays/why-everything-is-one">One System</Link>
          </p>
        </section>

        <section className="section site-inner" style={{ paddingBottom: "4rem" }}>
          <p className="section-label">Close</p>
          <p className="hero-lead" style={{ fontSize: "1.5rem" }}>
            Trillsverse. The Update.
          </p>
          <p className="hero-sub">
            Enter:{" "}
            <a href={GATE_RITE}>trillsverse.com/system-breach</a>
            {" · "}
            <Link href="/">lultrills.com</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
