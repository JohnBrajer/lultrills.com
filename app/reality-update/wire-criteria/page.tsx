import type { Metadata } from "next";
import Link from "next/link";
import { SITE, WIRE_CRITERIA, wireReady } from "@/lib/realityUpdate";

export const metadata: Metadata = {
  title: "Wire Criteria | Trillsverse Reality Update",
  description:
    "Falsifiable conditions before Wire fires. No autonomous blast. No fake progress.",
  alternates: { canonical: `${SITE}/reality-update/wire-criteria` },
  robots: { index: true, follow: true },
};

export default function WireCriteriaPage() {
  const ready = wireReady();

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
            <span className="nav-sys">WIRE</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/reality-update">Update</Link>
            <Link href="/reality-update/receipts">Receipts</Link>
            <Link href="/press">Press</Link>
          </nav>
          <Link href="/press" className="nav-cta">
            Press kit
          </Link>
        </div>
      </header>

      <main className="section" style={{ paddingTop: "3rem" }}>
        <div className="site-inner" style={{ maxWidth: "44rem" }}>
          <p className="section-label">Strike 1 · prep only</p>
          <h1
            style={{
              fontSize: "clamp(2.25rem, 7vw, 3.5rem)",
              marginBottom: "1rem",
            }}
          >
            Wire criteria
          </h1>

          <div className="panel-glass" style={{ marginBottom: "1.5rem" }}>
            <div className="panel-head">
              <span className="panel-id">STATUS</span>
              <span className="panel-state">
                {ready ? "ALL MET: MAY FIRE" : "PENDING"}
              </span>
            </div>
            <p className="panel-quote" style={{ marginTop: "0.75rem" }}>
              Wire is the public newswire + outreach record. It is{" "}
              <strong>not</strong> live automation. It does{" "}
              <strong>not</strong> fire until every condition below is met. No
              moving targets after lock.
            </p>
          </div>

          <p className="section-label">What Wire will do when live</p>
          <ul
            className="hero-sub"
            style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem" }}
          >
            <li>Publish the master press release to a permanent newswire.</li>
            <li>Point all links at live Update room, receipts, Gate, inject.</li>
            <li>Send outreach batch 1 from the owned list (no bot farms).</li>
            <li>Log wire URL + time in campaign publication log.</li>
          </ul>

          <p className="section-label">Falsifiable conditions</p>
          <div style={{ display: "grid", gap: "0.75rem", marginBottom: "2rem" }}>
            {WIRE_CRITERIA.map((c) => (
              <div key={c.id} className="panel-glass">
                <div className="panel-head">
                  <span className="panel-id">#{c.id}</span>
                  <span className="panel-state">
                    {c.met ? "MET" : "OPEN"}
                  </span>
                </div>
                <p
                  style={{
                    margin: "0.65rem 0 0.35rem",
                    color: "var(--ink)",
                    fontWeight: 600,
                  }}
                >
                  {c.condition}
                </p>
                <p className="hero-sub" style={{ margin: 0, fontSize: "0.9rem" }}>
                  Check: {c.check}
                </p>
              </div>
            ))}
          </div>

          <p className="section-label">Explicit non-conditions</p>
          <ul
            className="hero-sub"
            style={{ paddingLeft: "1.2rem", marginBottom: "2rem" }}
          >
            <li>Stillness / J-space dated rows (deferred).</li>
            <li>Wikipedia live.</li>
            <li>Trillonian as product rename.</li>
            <li>Bot metrics or paid placement.</li>
          </ul>

          <p className="hero-lead" style={{ fontSize: "1.25rem" }}>
            Trillsverse. The Update.
          </p>
          <p className="hero-sub">
            <Link href="/reality-update">← Update room</Link>
            {" · "}
            <Link href="/reality-update/receipts">Receipts</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
