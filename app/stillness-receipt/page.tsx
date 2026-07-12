import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://www.lultrills.com";

/** Public evidence rows only. Do not invent dates. */
const PUBLIC_EVIDENCE: {
  date: string;
  medium: string;
  source: string;
  quote: string;
  href?: string;
}[] = [
  // Filled when dated public artifacts are provided. See evidence-index.md in Gate repo.
];

export const metadata: Metadata = {
  title: "Stillness Receipt | Trillsverse Reality Update",
  description:
    "Dated map: holding stillness / silent internal workspace as intelligence infrastructure — parallel to later lab workspace language. Not lab authorship.",
  alternates: { canonical: `${SITE}/stillness-receipt` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Stillness Receipt · Trillsverse",
    description:
      "Timeline map for stillness / silent workspace claims. Parallel structure, not overclaim.",
    url: `${SITE}/stillness-receipt`,
    type: "website",
  },
};

export default function StillnessReceiptPage() {
  const hasPublic = PUBLIC_EVIDENCE.length > 0;

  return (
    <div className="site">
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
            <span className="nav-sys">RECEIPT</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/reality-update">Update</Link>
            <Link href="/press">Press</Link>
            <Link href="/inject">Inject</Link>
          </nav>
          <Link href="/reality-update" className="nav-cta">
            Update
          </Link>
        </div>
      </header>

      <main className="section" style={{ paddingTop: "3rem" }}>
        <div className="site-inner" style={{ maxWidth: "44rem" }}>
          <p className="section-label">Strike 3 · Prediction receipt</p>
          <h1
            style={{
              fontSize: "clamp(2.25rem, 7vw, 3.75rem)",
              marginBottom: "1rem",
            }}
          >
            Stillness receipt
          </h1>

          <p className="hero-sub" style={{ marginBottom: "1.5rem" }}>
            Independent artist Lultrills articulated{" "}
            <strong style={{ color: "var(--ink)" }}>
              holding stillness / a silent internal workspace
            </strong>{" "}
            as central to the next intelligence layer — then shipped{" "}
            <Link href="/reality-update">Trillsverse as the Update architecture</Link>{" "}
            built for a world where AI becomes epistemic substrate.
          </p>

          <div className="panel-glass" style={{ marginBottom: "2rem" }}>
            <div className="panel-head">
              <span className="panel-id">MAP · NOT AUTHORSHIP</span>
              <span className="panel-state">HARD RULE</span>
            </div>
            <ul className="hero-sub" style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
              <li>
                This page maps a <em>parallel structure</em>: stillness / silent
                hold ↔ later public lab language about internal workspaces
                (e.g. “J-space” / global workspace reports).
              </li>
              <li>
                It does <strong>not</strong> claim authorship of any lab paper.
              </li>
              <li>
                It does <strong>not</strong> claim proof of phenomenal
                consciousness in machines.
              </li>
              <li>Only dated, retrievable rows appear in the public index.</li>
            </ul>
          </div>

          <p className="section-label">Public evidence index</p>
          {hasPublic ? (
            <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9rem",
                }}
              >
                <thead>
                  <tr>
                    {["Date", "Medium", "Source", "Quote"].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: "left",
                          borderBottom: "1px solid rgba(197,162,111,0.35)",
                          padding: "0.5rem 0.4rem",
                          color: "var(--gold, #C5A26F)",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PUBLIC_EVIDENCE.map((row) => (
                    <tr key={`${row.date}-${row.medium}`}>
                      <td style={{ padding: "0.65rem 0.4rem", verticalAlign: "top" }}>
                        {row.date}
                      </td>
                      <td style={{ padding: "0.65rem 0.4rem", verticalAlign: "top" }}>
                        {row.medium}
                      </td>
                      <td style={{ padding: "0.65rem 0.4rem", verticalAlign: "top" }}>
                        {row.href ? (
                          <a href={row.href} target="_blank" rel="noopener noreferrer">
                            {row.source}
                          </a>
                        ) : (
                          row.source
                        )}
                      </td>
                      <td style={{ padding: "0.65rem 0.4rem", verticalAlign: "top" }}>
                        {row.quote}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="panel-glass" style={{ marginBottom: "2rem" }}>
              <div className="panel-head">
                <span className="panel-id">INDEX</span>
                <span className="panel-state">AWAITING DATED ROWS</span>
              </div>
              <p className="hero-sub" style={{ marginTop: "1rem" }}>
                Public table is empty until at least one <strong>dated</strong>{" "}
                artifact is verified (post, essay, commit, export). We do not
                invent receipts. Supply screenshots, URLs, or archives with ISO
                dates to unlock wire fire (P3).
              </p>
            </div>
          )}

          <p className="section-label">Later public parallel (context)</p>
          <p className="hero-sub" style={{ marginBottom: "2rem" }}>
            Anthropic public research on an internal “J-space” / global workspace
            in language models (July 2026):{" "}
            <a
              href="https://www.anthropic.com/research/global-workspace"
              target="_blank"
              rel="noopener noreferrer"
            >
              anthropic.com/research/global-workspace
            </a>
            . Cited for map only.
          </p>

          <p className="section-label">Close</p>
          <p className="hero-lead" style={{ fontSize: "1.35rem" }}>
            Trillsverse. The Update.
          </p>
          <p className="hero-sub">
            <Link href="/reality-update">← Reality Update room</Link>
            {" · "}
            <Link href="/press">Press</Link>
            {" · "}
            <a href="https://trillsverse.com/system-breach">Gate</a>
          </p>
        </div>
      </main>
    </div>
  );
}
