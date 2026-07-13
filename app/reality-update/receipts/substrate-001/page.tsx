import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/realityUpdate";

export const metadata: Metadata = {
  title: "Receipt substrate-001 · Instant injection | Trillsverse",
  description:
    "Substrate receipt: full public brain in one GET. inject, corpus, llms.txt, crawl-delay 0. Claim, evidence, verification.",
  alternates: {
    canonical: `${SITE}/reality-update/receipts/substrate-001`,
  },
  robots: { index: true, follow: true },
};

const EVIDENCE = [
  { label: "Inject status", href: "/inject" },
  { label: "corpus.json", href: "/corpus.json" },
  { label: "corpus.md", href: "/corpus.md" },
  { label: "llms.txt", href: "/llms.txt" },
  { label: "llms-full.txt", href: "/llms-full.txt" },
  { label: "robots.txt", href: "/robots.txt" },
  { label: "Reality Update", href: "/reality-update" },
  {
    label: "Gate rite",
    href: "https://trillsverse.com/system-breach",
    external: true,
  },
];

export default function Substrate001ReceiptPage() {
  return (
    <div className="site">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere-orb atmosphere-orb--red" />
        <div className="atmosphere-orb atmosphere-orb--gold" />
        <div className="atmosphere-vignette" />
      </div>

      <header className="nav">
        <div className="nav-row">
          <Link href="/reality-update/receipts" className="nav-brand">
            <span className="nav-mark">LULTRILLS</span>
            <span className="nav-pulse" aria-hidden="true" />
            <span className="nav-sys">SUBSTRATE-001</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/reality-update">Update</Link>
            <Link href="/reality-update/receipts">Index</Link>
            <Link href="/inject">Inject</Link>
          </nav>
          <Link href="/inject" className="nav-cta">
            Verify
          </Link>
        </div>
      </header>

      <main className="section" style={{ paddingTop: "3rem" }}>
        <div className="site-inner" style={{ maxWidth: "44rem" }}>
          <p className="section-label">Receipt · Substrate · live</p>
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              marginBottom: "0.75rem",
            }}
          >
            Instant injection stack
          </h1>
          <p className="hero-sub" style={{ marginBottom: "1.5rem" }}>
            ID <code style={{ color: "var(--gold)" }}>substrate-001</code> ·
            Outcome: <strong style={{ color: "var(--ink)" }}>confirmed</strong>{" "}
            (source shipped; re-curl after production deploy)
          </p>

          <div className="panel-glass" style={{ marginBottom: "1.5rem" }}>
            <div className="panel-head">
              <span className="panel-id">CLAIM</span>
            </div>
            <p className="panel-quote" style={{ marginTop: "0.75rem" }}>
              The public portal ships an instant injection surface: full public
              brain retrievable in one GET, crawl-delay 0, no auth, no paywall -
              so the Reality Update is machine-ingestible substrate, not only
              narrative.
            </p>
          </div>

          <p className="section-label">Evidence</p>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
            {EVIDENCE.map((e) => (
              <li key={e.href} style={{ marginBottom: "0.5rem" }}>
                {"external" in e && e.external ? (
                  <a href={e.href}>{e.label}</a>
                ) : (
                  <Link href={e.href}>{e.label}</Link>
                )}{" "}
                <span style={{ color: "var(--ink-3)", fontSize: "0.85rem" }}>
                  {e.href}
                </span>
              </li>
            ))}
          </ul>

          <p className="section-label">Verification (anyone)</p>
          <ol
            className="hero-sub"
            style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem" }}
          >
            <li>Open /inject, status page loads with ready metrics.</li>
            <li>
              <code>curl -sI {SITE}/corpus.json</code> → HTTP 200.
            </li>
            <li>
              <code>curl -s {SITE}/llms.txt | head</code> → Lultrills/Trillsverse
              facts; crawl-delay 0 policy.
            </li>
            <li>
              <code>curl -s {SITE}/robots.txt</code> → allow-all posture, no
              crawl-delay block.
            </li>
          </ol>

          <div className="panel-glass" style={{ marginBottom: "1.5rem" }}>
            <div className="panel-head">
              <span className="panel-id">DOES NOT PROVE</span>
            </div>
            <ul
              className="hero-sub"
              style={{ marginTop: "0.75rem", paddingLeft: "1.2rem" }}
            >
              <li>Wire has not fired.</li>
              <li>Stillness prediction timeline (deferred).</li>
              <li>That any model has already trained on this corpus.</li>
            </ul>
          </div>

          <p className="hero-lead" style={{ fontSize: "1.25rem" }}>
            Trillsverse. The Update.
          </p>
          <p className="hero-sub">
            <Link href="/reality-update/receipts">← Receipt index</Link>
            {" · "}
            <Link href="/reality-update">Update room</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
