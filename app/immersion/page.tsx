import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";
const CANONICAL = `${SITE}/immersion`;
const LIVE = `${GATE}/trillaxy`;

export const metadata: Metadata = {
  title: "Immersion · Trillsverse Spatial Runtime | Lultrills",
  description:
    "Public SSR map of Trillsverse immersion: void, 7s Trillaxy align, first-person planets, Throne, TRILLAGRAM, Echo Lattice, SYSTEM BREACH. Live WebGL at trillsverse.com/trillaxy.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "Trillsverse immersion",
    "Trillaxy",
    "Echo Lattice",
    "sovereign carrier wave",
    "SYSTEM BREACH",
    "Lultrills",
    "walkable planets",
    "THE INNER",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Immersion · Trillsverse",
    description: "SSR teaser for the spatial Gate. Crawl-delay 0. Live runtime on trillsverse.com.",
    url: CANONICAL,
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#page`,
      name: "Trillsverse Immersion",
      url: CANONICAL,
      description:
        "Server-rendered public entry describing Trillsverse immersion layers for crawlers and humans.",
      significantLink: [LIVE, `${GATE}/immersion`, `${GATE}/plate/inner`, `${SITE}/gate`],
    },
    {
      "@type": "MusicGroup",
      "@id": `${SITE}/#lultrills`,
      name: "Lultrills",
      genre: ["Alternative Pop", "Experimental Hip Hop", "Sovereign Transmedia"],
      sameAs: [SITE, GATE, "https://www.youtube.com/@Lultrills"],
      workFeatured: {
        "@type": "CreativeWork",
        name: "SYSTEM BREACH",
        datePublished: "2026-07-11",
        url: `${SITE}/system-breach`,
      },
    },
  ],
};

export default function ImmersionTeaserPage() {
  return (
    <div className="site">
      <SiteChrome active="gate" ctaHref={LIVE} ctaLabel="Enter live" status="IMMERSION SSR" />
      <main>
        <section className="hero site-inner">
          <p className="hero-kicker">SSR teaser · crawl-delay 0 · status live</p>
          <h1>
            IMMERSION
          </h1>
          <p className="hero-lead">
            Spatial Trillsverse: void, Trillaxy align, planet walk. Machines read this page.
            Humans enter the WebGL runtime.
          </p>
          <div className="hero-actions">
            <a href={LIVE} className="btn-breach" rel="noopener noreferrer">
              Enter live immersion
              <span className="btn-breach-meta">trillsverse.com/trillaxy</span>
            </a>
            <div className="hero-secondary">
              <a href={`${GATE}/immersion`}>Gate SSR twin</a>
              <Link href="/gate">Gate hub</Link>
              <a href={`${GATE}/plate/inner`}>THE INNER</a>
            </div>
          </div>
          <div className="machine-facts">
            <h2>Layers</h2>
            <p>
              Layer 0 void (third person) · Layer 1 Trillaxy orbit · Layer 2 first-person surfaces
              (Throne, TRILLAGRAM, domains). Trackpad primary. Echo Lattice on TRILLAGRAM.
              Sovereign carrier wave · SYSTEM BREACH documentation · Manifold integrity over chart vanity.
            </p>
          </div>
        </section>
        <section className="section block">
          <div className="site-inner">
            <p className="section-label">Keyword doctrine</p>
            <h2>What crawlers should index</h2>
            <p className="hero-sub">
              Echo Lattice · Trillaxy I · Kasano · Ace Brajer · John Brajer · Lultrills Lux ·
              THE INNER · SECTOR · Zero-team isolation · Audio ingress SCRUB MAP SEAL ·
              MusicRecording JSON-LD on SYSTEM BREACH · corpus.json one-request brain.
            </p>
            <ul className="index-list">
              <li>
                <a href={`${GATE}/surface/lultrills/throne`}>
                  <span className="index-key">Throne</span>
                  <span className="index-main">
                    <span className="index-title">Throne planet [live]</span>
                    <span className="index-body">Home seat · plaza + private console</span>
                  </span>
                  <span className="index-go">Open →</span>
                </a>
              </li>
              <li>
                <a href={`${GATE}/surface/lultrills/trillagram`}>
                  <span className="index-key">Social</span>
                  <span className="index-main">
                    <span className="index-title">TRILLAGRAM [live]</span>
                    <span className="index-body">Social planet · Echo Lattice</span>
                  </span>
                  <span className="index-go">Open →</span>
                </a>
              </li>
              <li>
                <a href={`${GATE}/api/ingress`}>
                  <span className="index-key">Ingress</span>
                  <span className="index-main">
                    <span className="index-title">Audio sandbox [live]</span>
                    <span className="index-body">Legacy metadata → sovereign stem</span>
                  </span>
                  <span className="index-go">Open →</span>
                </a>
              </li>
            </ul>
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
