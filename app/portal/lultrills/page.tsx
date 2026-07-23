import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";
const CANONICAL = `${SITE}/portal/lultrills`;
const LIVE = `${GATE}/portal/lultrills`;

export const metadata: Metadata = {
  title: "Portal · Lultrills / Lux Trillaxy | Trillsverse",
  description:
    "SSR portal map for Planet Lultrills (Lux): Throne, TRILLAGRAM, Music domain, SYSTEM BREACH artifacts, Firstborn geometry. Live interactive portal on the Gate.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "Planet Lultrills",
    "Lux Trillaxy",
    "Lultrills",
    "SYSTEM BREACH",
    "Throne",
    "TRILLAGRAM",
    "Trillsverse",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Portal · Lultrills",
    description: "Lux Trillaxy dossier + live Gate portal.",
    url: CANONICAL,
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Portal Lultrills",
      url: CANONICAL,
      significantLink: [LIVE, `${GATE}/seo/portal/lultrills`, `${SITE}/system-breach`],
    },
    {
      "@type": "MusicGroup",
      name: "Lultrills",
      genre: ["Alternative Pop", "Experimental Hip Hop", "Sovereign Transmedia"],
      sameAs: [SITE, GATE, "https://www.youtube.com/@Lultrills"],
      workFeatured: {
        "@type": "MusicAlbum",
        name: "SYSTEM BREACH",
        datePublished: "2026-07-11",
        url: `${SITE}/system-breach`,
      },
    },
    {
      "@type": "Place",
      name: "Planet Lultrills / Lux",
      description: "Home Trillaxy mass: Throne, TRILLAGRAM, Music and domain worlds.",
    },
  ],
};

export default function PortalLultrillsPage() {
  return (
    <div className="site">
      <SiteChrome active="gate" ctaHref={LIVE} ctaLabel="Live portal" status="PORTAL LUX" />
      <main>
        <section className="hero site-inner">
          <p className="hero-kicker">SSR portal · Lux Trillaxy · status live</p>
          <h1>
            PORTAL
            <br />
            LULTRILLS
          </h1>
          <p className="hero-lead">
            Time moves slow. Signals return. Music is the audible layer of a sovereignty architecture.
          </p>
          <div className="hero-actions">
            <a href={LIVE} className="btn-breach" rel="noopener noreferrer">
              Open interactive portal
              <span className="btn-breach-meta">SPA on Gate</span>
            </a>
            <div className="hero-secondary">
              <a href={`${GATE}/seo/portal/lultrills`}>Always-SSR twin</a>
              <Link href="/system-breach">SYSTEM BREACH</Link>
              <Link href="/immersion">Immersion</Link>
            </div>
          </div>
          <div className="machine-facts">
            <h2>Structural planets</h2>
            <p>
              Throne [live] · TRILLAGRAM [live] · Music [live] · Fashion / Sports / Cinematic / Hotel
              domain cells. Immersion: align 7s on the gold Trillaxy mass.
            </p>
          </div>
        </section>
        <section className="section block">
          <div className="site-inner">
            <h2>Audio + doctrine</h2>
            <p className="hero-sub">
              SYSTEM BREACH (12 tracks, MusicRecording schema) is the public rupture of this Trillaxy.
              Corpus and llms.txt on this domain feed agents; Gate runs the living surface.
            </p>
            <div className="hero-secondary" style={{ marginTop: "1.5rem" }}>
              <a href={`${GATE}/surface/lultrills/throne`}>Walk Throne</a>
              <a href={`${GATE}/surface/lultrills/trillagram`}>Walk TRILLAGRAM</a>
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
