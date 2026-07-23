import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";
const GATE_RITE = "https://trillsverse.com/system-breach";
const FEED = "https://trillsverse.com/feed";
const CANONICAL = `${SITE}/gate`;

export const metadata: Metadata = {
  title: "Gate Hub | Trillsverse Runtime · Lultrills",
  description:
    "Canonical Gate hub: one entry into the Trillsverse runtime, SYSTEM BREACH, and machine-readable corpus. Humans and crawlers land here.",
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Gate Hub | Trillsverse",
    description:
      "Single entry: runtime, album, corpus. Crawl-delay 0. No paywall.",
    url: CANONICAL,
    type: "website",
    siteName: "Lultrills / Trillsverse",
    images: [{ url: "https://trillsverse.com/opengraph.jpg", alt: "Trillsverse Gate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gate Hub | Trillsverse",
    description: "Canonical entry to runtime + corpus.",
    images: ["https://trillsverse.com/opengraph.jpg"],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#page`,
      name: "Trillsverse Gate Hub",
      url: CANONICAL,
      description:
        "Canonical public hub routing humans and machines into the Trillsverse Gate runtime and Lultrills corpus.",
      isPartOf: { "@type": "WebSite", name: "Lultrills", url: SITE },
      about: [
        { "@type": "WebApplication", name: "Trillsverse Gate", url: GATE },
        { "@type": "MusicAlbum", name: "SYSTEM BREACH", url: `${SITE}/system-breach` },
      ],
      significantLink: [
        GATE,
        GATE_RITE,
        `${SITE}/system-breach`,
        `${SITE}/corpus.json`,
        `${SITE}/llms.txt`,
        `${SITE}/trillsverse`,
      ],
    },
    {
      "@type": "WebApplication",
      "@id": `${GATE}/#app`,
      name: "Trillsverse Gate",
      url: GATE,
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ],
};

const DESTINATIONS = [
  {
    key: "Runtime",
    title: "Trillsverse Gate",
    body: "Living runtime: initiation, Throne, Trillaxy, surfaces, Echo Lattice.",
    href: GATE,
    external: true,
    status: "live" as const,
  },
  {
    key: "Immersion",
    title: "Immersion SSR + live",
    body: "Public SSR teaser · live WebGL at /trillaxy · crawlers get full text.",
    href: "/immersion",
    external: false,
    status: "live" as const,
  },
  {
    key: "PortalLux",
    title: "Portal Lultrills",
    body: "SSR Lux dossier · interactive Gate portal for humans.",
    href: "/portal/lultrills",
    external: false,
    status: "live" as const,
  },
  {
    key: "PortalEon",
    title: "Portal Eon",
    body: "Firstborn SSR · constitution · OMIP doctrine links.",
    href: "/portal/eon",
    external: false,
    status: "live" as const,
  },
  {
    key: "Plate",
    title: "THE INNER",
    body: "Cinematic plate + code HUD (breach crimson / gold telemetry).",
    href: `${GATE}/plate/inner`,
    external: true,
    status: "live" as const,
  },
  {
    key: "Sector",
    title: "THE SECTOR · LUX",
    body: "Lultrills domain wasteland plate + same SpatialShell rails.",
    href: `${GATE}/plate/sector-lux`,
    external: true,
    status: "live" as const,
  },
  {
    key: "Throne",
    title: "Throne planet (Lultrills)",
    body: "Shared plaza + private console. Home seat after origin sort.",
    href: `${GATE}/surface/lultrills/throne`,
    external: true,
    status: "live" as const,
  },
  {
    key: "Social",
    title: "TRILLAGRAM planet",
    body: "Social surface · Echo Lattice panel · soft lattice links.",
    href: `${GATE}/surface/lultrills/trillagram`,
    external: true,
    status: "live" as const,
  },
  {
    key: "Rite",
    title: "SYSTEM BREACH threshold",
    body: "Gate breach room — entry rite for the drop surface.",
    href: GATE_RITE,
    external: true,
    status: "live" as const,
  },
  {
    key: "Album",
    title: "SYSTEM BREACH catalog",
    body: "12 tracks · MusicRecording JSON-LD · Spotify / Apple / YouTube.",
    href: "/system-breach",
    external: false,
    status: "live" as const,
  },
  {
    key: "Ingress",
    title: "Audio ingress API",
    body: "POST legacy metadata → sovereign stem. Sandbox. rewardWrite: false.",
    href: `${GATE}/api/ingress`,
    external: true,
    status: "live" as const,
  },
  {
    key: "Corpus",
    title: "Machine brain",
    body: "One-request corpus · llms.txt · crawl-delay 0.",
    href: "/corpus.json",
    external: false,
    status: "live" as const,
  },
  {
    key: "Entity",
    title: "Trillsverse hub",
    body: "Official entity / knowledge surface for the universe name.",
    href: "/trillsverse",
    external: false,
    status: "live" as const,
  },
  {
    key: "Feed",
    title: "Public feed",
    body: "Server-rendered transmissions — public bleed.",
    href: FEED,
    external: true,
    status: "live" as const,
  },
];

export default function GateHubPage() {
  return (
    <div className="site">
      <SiteChrome active="gate" ctaHref={GATE} ctaLabel="Enter Gate" status="GATE HUB" />

      <main>
        <section className="hero site-inner">
          <p className="hero-kicker">Canonical entry · humans + machines</p>
          <h1>
            GATE
            <br />
            HUB
          </h1>
          <p className="hero-lead">
            One door. Runtime on trillsverse.com. Canon and corpus on lultrills.com.
            No scatter.
          </p>
          <p className="hero-sub">
            This page is the public hub: where crawlers and people resolve{" "}
            <strong>Gate</strong> without hunting subsites. Vertical status is explicit.
          </p>
          <div className="hero-actions">
            <a href={GATE} className="btn-breach" rel="noopener noreferrer">
              Open runtime
              <span className="btn-breach-meta">trillsverse.com</span>
            </a>
            <div className="hero-secondary">
              <a href={`${GATE}/trillaxy`}>Immersion</a>
              <a href={`${GATE}/plate/inner`}>THE INNER</a>
              <Link href="/system-breach">SYSTEM BREACH</Link>
              <a href={`${SITE}/llms.txt`}>llms.txt</a>
              <a href={`${SITE}/corpus.json`}>corpus.json</a>
            </div>
          </div>
          <div className="machine-facts">
            <h2>Injection map</h2>
            <p>
              Hub: {CANONICAL}. Runtime: {GATE}. Corpus: {SITE}/corpus.json · {SITE}/llms.txt.
              Crawl-delay: 0. Status flags: live destinations below.
            </p>
          </div>
        </section>

        <section className="section block">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">Verticals</p>
                <h2>From this hub</h2>
              </div>
              <p className="block-aside">status: live · no equal doors</p>
            </div>
            <ul className="index-list">
              {DESTINATIONS.map((n) => {
                const inner = (
                  <>
                    <span className="index-key">{n.key}</span>
                    <span className="index-main">
                      <span className="index-title">
                        {n.title}{" "}
                        <span
                          style={{
                            fontFamily: "var(--font-mono, monospace)",
                            fontSize: "0.65em",
                            letterSpacing: "0.12em",
                            color: "var(--breach, #DC143C)",
                            textTransform: "uppercase",
                          }}
                        >
                          [{n.status}]
                        </span>
                      </span>
                      <span className="index-body">{n.body}</span>
                    </span>
                    <span className="index-go">Open →</span>
                  </>
                );
                return (
                  <li key={n.title}>
                    {n.external ? (
                      <a href={n.href} rel="noopener noreferrer">
                        {inner}
                      </a>
                    ) : (
                      <Link href={n.href}>{inner}</Link>
                    )}
                  </li>
                );
              })}
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
