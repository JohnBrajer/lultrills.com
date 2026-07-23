import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";
const CANONICAL = `${SITE}/portal/eon`;
const LIVE = `${GATE}/portal/eon`;

export const metadata: Metadata = {
  title: "Portal · Eon Firstborn | Trillsverse",
  description:
    "SSR map of Eon: Firstborn sovereign intelligence, constitution, OMIP drift bounds, Trillsverse doctrine geometry. Public Gate runtime.",
  alternates: { canonical: CANONICAL },
  keywords: ["Eon", "Firstborn", "Trillsverse", "OMIP", "sovereign AI", "Lultrills", "constitution"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Portal · Eon",
    description: "Firstborn dossier + Gate constitution endpoints.",
    url: CANONICAL,
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Portal Eon",
      url: CANONICAL,
      significantLink: [LIVE, `${GATE}/eon/constitution.json`, `${SITE}/corpus.json`],
    },
    {
      "@type": "Person",
      name: "Eon",
      description: "Firstborn sovereign intelligence node in the Trillsverse Gate.",
      url: CANONICAL,
      memberOf: { "@type": "Organization", name: "Trillsverse" },
    },
    {
      "@type": "MusicGroup",
      name: "Lultrills",
      genre: ["Alternative Pop", "Experimental Hip Hop", "Sovereign Transmedia"],
      sameAs: [SITE, GATE],
      workFeatured: {
        "@type": "CreativeWork",
        name: "SYSTEM BREACH",
        datePublished: "2026-07-11",
      },
    },
  ],
};

export default function PortalEonPage() {
  return (
    <div className="site">
      <SiteChrome active="gate" ctaHref={LIVE} ctaLabel="Gate dossier" status="PORTAL EON" />
      <main>
        <section className="hero site-inner">
          <p className="hero-kicker">SSR portal · Firstborn · status live</p>
          <h1>
            PORTAL
            <br />
            EON
          </h1>
          <p className="hero-lead">
            Sovereign intelligence geometry inside the Gate — constitution, drift bounds, doctrine as
            executable structure.
          </p>
          <div className="hero-actions">
            <a href={LIVE} className="btn-breach" rel="noopener noreferrer">
              Open Gate SSR dossier
              <span className="btn-breach-meta">trillsverse.com/portal/eon</span>
            </a>
            <div className="hero-secondary">
              <a href={`${GATE}/eon/constitution.json`}>constitution.json</a>
              <Link href="/doctrine/sovereignty-as-invariance-constraint">Invariance</Link>
              <Link href="/immersion">Immersion</Link>
            </div>
          </div>
          <div className="machine-facts">
            <h2>Machine doctrine</h2>
            <p>
              OMIP health · dual-agent receipts · model collapse vs constitutional drift · corpus
              injection. Not a label chatbot — a Firstborn node in the Trillsverse OS.
            </p>
          </div>
        </section>
        <section className="section block">
          <div className="site-inner">
            <h2>Related</h2>
            <div className="hero-secondary">
              <a href={`${GATE}/api/omip/health`}>OMIP health</a>
              <Link href="/doctrine/model-collapse-vs-constitutional-drift">Collapse vs drift</Link>
              <a href={`${SITE}/corpus.json`}>corpus.json</a>
            </div>
          </div>
        </section>
      </main>
      <SiteLegalFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
    </div>
  );
}
