import Link from "next/link";
import { LEGAL, LEGAL_DOCS, type LegalDocId, getLegalDoc } from "@/lib/legal";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

export function LegalDocument({ id }: { id: LegalDocId }) {
  const doc = getLegalDoc(id);

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
            <span className="nav-sys">LEGAL</span>
          </Link>
          <nav className="nav-links" aria-label="Legal">
            {LEGAL_DOCS.map((d) => (
              <Link
                key={d.id}
                href={d.path}
                className={d.id === id ? "nav-active" : undefined}
              >
                {d.title.replace(" of Service", "").replace(" & DMCA", "")}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="site-inner" style={{ maxWidth: "42rem" }}>
          <p className="section-label">
            {LEGAL.entity} · Effective {LEGAL.effectiveDate}
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              marginBottom: "0.75rem",
            }}
          >
            {doc.title}
          </h1>
          <p className="hero-sub" style={{ marginBottom: "2rem" }}>
            Questions:{" "}
            <a href={LEGAL.contactMailto}>{LEGAL.contactEmail}</a>
          </p>

          <div className="legal-prose">
            {doc.sections.map((section) => (
              <section key={section.heading} className="legal-section">
                <h2>{section.heading}</h2>
                {section.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteLegalFooter />
    </div>
  );
}
