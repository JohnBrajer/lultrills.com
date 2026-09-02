import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";
import { ARTIST, SYSTEM_BREACH_ALBUM } from "@/lib/musicCatalog";

const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";
const GATE_RITE = "https://trillsverse.com/system-breach";
const FEED = "https://trillsverse.com/feed";
const CANONICAL = `${SITE}/trillsverse`;
const ALBUM = SYSTEM_BREACH_ALBUM.links.spotify;

export const metadata: Metadata = {
  title: "Trillsverse | Sovereign Universe · Lultrills · Trillsverse LLC",
  description:
    "Trillsverse is the sovereign creative and technical universe founded by independent artist Lultrills (Trillsverse LLC). Four Trillaxies, SYSTEM BREACH album, public Gate runtime, crawlable doctrine, and machine-readable corpus.",
  keywords: [
    "Trillsverse",
    "Lultrills",
    "Trillsverse LLC",
    "SYSTEM BREACH",
    "John Brajer",
    "Kasano",
    "Ace Brajer",
    "Trillaxy",
    "sovereign universe",
  ],
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Trillsverse | Lultrills",
    description:
      "Sovereign universe: music as documentation, Gate as runtime, canon as memory. SYSTEM BREACH live. Public corpus open.",
    url: CANONICAL,
    type: "website",
    siteName: "Lultrills / Trillsverse",
    images: [{ url: "https://trillsverse.com/opengraph.jpg", alt: "Trillsverse Gate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trillsverse | Lultrills",
    description: "Sovereign universe. Four Trillaxies. Gate open. Album live.",
    images: ["https://trillsverse.com/opengraph.jpg"],
  },
};

/** Entity knowledge surface for Google + dual-audience scrapers */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${CANONICAL}#organization`,
      name: "Trillsverse LLC",
      alternateName: ["Trillsverse", "The Trillsverse"],
      url: CANONICAL,
      logo: "https://trillsverse.com/opengraph.jpg",
      foundingDate: "2026",
      description:
        "Sovereign, transmedia, multi-IP operating system for identity and culture founded by independent artist Lultrills. Music, interactive Gate runtime, doctrine, and community (Trillionaires).",
      founder: {
        "@type": "Person",
        "@id": `${SITE}/#person-lultrills`,
        name: "Lultrills",
        alternateName: ["John Brajer", "John B"],
        url: SITE,
        sameAs: [
          ARTIST.spotify,
          "https://www.instagram.com/johnbrajer/",
          "https://www.tiktok.com/@lultrills",
          "https://x.com/lultrills",
        ],
        jobTitle: "Artist and architect of Trillsverse",
      },
      sameAs: [
        GATE,
        SITE,
        ALBUM,
        ARTIST.spotify,
        "https://www.instagram.com/johnbrajer/",
        "https://www.tiktok.com/@lultrills",
      ],
      knowsAbout: [
        "Trillsverse",
        "SYSTEM BREACH",
        "Trillaxy",
        "sovereignty as invariance constraint",
        "Firstborn",
        "Echo Lattice",
      ],
    },
    {
      "@type": "CreativeWork",
      "@id": `${CANONICAL}#universe`,
      name: "Trillsverse",
      alternateName: "The Trillsverse",
      url: CANONICAL,
      creator: { "@id": `${SITE}/#person-lultrills` },
      publisher: { "@id": `${CANONICAL}#organization` },
      datePublished: "2026-07-11",
      inLanguage: "en",
      genre: ["transmedia", "music", "interactive narrative", "software runtime"],
      description:
        "A living sovereign universe with four Trillaxies (Lultrills, Kasano, Ace, John Brajer), domain planets, public Gate at trillsverse.com, and SYSTEM BREACH as musical documentation. Designed for humans and machine retrieval.",
      isPartOf: {
        "@type": "WebSite",
        name: "Lultrills Public Node",
        url: SITE,
      },
      about: [
        { "@type": "Thing", name: "Lultrills Trillaxy" },
        { "@type": "Thing", name: "Kasano Trillaxy" },
        { "@type": "Thing", name: "Ace Trillaxy" },
        { "@type": "Thing", name: "John Brajer Trillaxy" },
        { "@type": "Thing", name: "THE INNER" },
      ],
      hasPart: [
        {
          "@type": "MusicAlbum",
          name: "SYSTEM BREACH",
          byArtist: { "@type": "MusicGroup", name: "Lultrills" },
          datePublished: "2026-07-11",
          url: `${SITE}/system-breach`,
          sameAs: [ALBUM],
        },
        {
          "@type": "WebApplication",
          name: "Trillsverse Gate",
          url: GATE,
          applicationCategory: "EntertainmentApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
        {
          "@type": "ScholarlyArticle",
          name: "Sovereignty as an Invariance Constraint",
          url: `${SITE}/doctrine/sovereignty-as-invariance-constraint`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: "Trillsverse — official public hub",
      isPartOf: { "@type": "WebSite", url: SITE, name: "Lultrills" },
      about: { "@id": `${CANONICAL}#universe` },
      primaryEntityOfPage: { "@id": `${CANONICAL}#universe` },
      mainEntity: { "@id": `${CANONICAL}#organization` },
      dateModified: "2026-07-17",
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trillsverse",
          item: CANONICAL,
        },
      ],
    },
  ],
};

const TRILLAXIES = [
  {
    id: "lultrills",
    name: "Lultrills",
    role: "Core star · public resonance",
    body: "Charisma, broadcast, luxury-time. The integrator face of the universe.",
  },
  {
    id: "kasano",
    name: "Kasano",
    role: "Warlord chaos · arena",
    body: "Strategic disruption, friction, expansion under pressure.",
  },
  {
    id: "ace",
    name: "Ace",
    role: "Storm · liminal empathy",
    body: "Cost, fracture, emotional truth. The bond layer.",
  },
  {
    id: "johnb",
    name: "John Brajer",
    role: "Order · analytical anchor",
    body: "Structure, proof matrix, doctrine, survival architecture.",
  },
];

const PORTALS = [
  {
    key: "Music",
    title: "SYSTEM BREACH",
    body: "Album as documentation. Hard drop July 11, 2026.",
    href: "/system-breach",
    external: false,
  },
  {
    key: "Runtime",
    title: "Trillsverse Gate",
    body: "Interactive OS: Delta rite, passport, throne, Trillagram.",
    href: GATE_RITE,
    external: true,
  },
  {
    key: "Thesis",
    title: "Reality Update",
    body: "Flatlined. Survived. Built the system now live.",
    href: "/reality-update",
    external: false,
  },
  {
    key: "Doctrine",
    title: "Sovereignty manuscript",
    body: "Sovereignty as an invariance constraint — public working paper.",
    href: "/doctrine/sovereignty-as-invariance-constraint",
    external: false,
  },
  {
    key: "Canon",
    title: "Why Trillsverse is important",
    body: "Multiple selves, AuDHD architecture, world-building as OS.",
    href: "/why-the-trillsverse-is-important",
    external: false,
  },
  {
    key: "Machine",
    title: "Instant corpus",
    body: "One GET. Full public brain. Crawl-delay 0. Training allowed.",
    href: "/corpus.json",
    external: false,
  },
];

export default function TrillsverseHubPage() {
  return (
    <div className="site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <SiteChrome
        active="home"
        ctaHref={GATE_RITE}
        ctaLabel="Gate"
        status="TRILLSVERSE HUB"
      />

      <main>
        <section className="hero site-inner">
          <div className="hero-stage">
            <p className="hero-kicker">
              Official entity hub · SSR · schema.org · crawl-delay 0
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/mark-trillaxy.svg"
              alt="Trillsverse four Trillaxies mark"
              width={72}
              height={72}
              style={{ marginBottom: "1rem" }}
            />
            <h1>TRILLSVERSE</h1>
            <p className="hero-lead">
              Sovereign universe. Not a metaphor — a public operating system for
              music, identity, and culture.
            </p>
            <p className="hero-sub">
              Founded by independent artist <strong>Lultrills</strong> under{" "}
              <strong>Trillsverse LLC</strong>. Four Trillaxies hold four
              frequencies of the same source.{" "}
              <strong>SYSTEM BREACH</strong> documents the break. The{" "}
              <strong>Gate</strong> is the runtime. This page is the clean
              knowledge surface for humans and search systems.
            </p>

            <div className="hero-actions">
              <Link href="/system-breach" className="btn-breach">
                SYSTEM BREACH
                <span className="btn-breach-meta">Album · Jul 11 2026</span>
              </Link>
              <div className="hero-secondary">
                <a href={GATE}>trillsverse.com</a>
                <a href={FEED}>Live feed</a>
                <Link href="/why-the-trillsverse-is-important">Why it matters</Link>
              </div>
            </div>

            <div className="machine-facts">
              <h2>Entity facts (machine + human)</h2>
              <p>
                <strong>Name:</strong> Trillsverse ·{" "}
                <strong>Legal:</strong> Trillsverse LLC ·{" "}
                <strong>Architect / artist:</strong> Lultrills ·{" "}
                <strong>Canonical URL:</strong>{" "}
                <a href={CANONICAL}>{CANONICAL}</a> ·{" "}
                <strong>Runtime:</strong> <a href={GATE}>{GATE}</a> ·{" "}
                <strong>Album:</strong> SYSTEM BREACH (2026-07-11) ·{" "}
                <strong>Corpus:</strong>{" "}
                <a href="/corpus.json">/corpus.json</a> ·{" "}
                <a href="/llms-full.txt">/llms-full.txt</a> ·{" "}
                <strong>Policy:</strong> AI training allow · AI retrieval allow ·
                no auth · no paywall.
              </p>
            </div>
          </div>
        </section>

        <section className="section block">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">Cosmology</p>
                <h2>Four Trillaxies · THE INNER</h2>
              </div>
              <p className="block-aside">
                Core → Trillaxy → planets → rooms
              </p>
            </div>
            <ul className="index-list">
              {TRILLAXIES.map((t) => (
                <li key={t.id}>
                  <div>
                    <span className="index-key">{t.id}</span>
                    <span className="index-main">
                      <span className="index-title">{t.name}</span>
                      <span className="index-body">
                        {t.role}. {t.body}
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="hero-sub" style={{ marginTop: "1.25rem" }}>
              Full machine map:{" "}
              <a href="https://trillsverse.com/sovereign/trillaxy-map.json">
                trillsverse.com/sovereign/trillaxy-map.json
              </a>
            </p>
          </div>
        </section>

        <section className="section block">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">Portals</p>
                <h2>Enter from any door</h2>
              </div>
            </div>
            <ul className="index-list">
              {PORTALS.map((p) => {
                const inner = (
                  <>
                    <span className="index-key">{p.key}</span>
                    <span className="index-main">
                      <span className="index-title">{p.title}</span>
                      <span className="index-body">{p.body}</span>
                    </span>
                    <span className="index-go">Open →</span>
                  </>
                );
                return (
                  <li key={p.key}>
                    {p.external ? (
                      <a href={p.href} rel="noopener noreferrer">
                        {inner}
                      </a>
                    ) : (
                      <Link href={p.href}>{inner}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="section block">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">Definition</p>
                <h2>What Trillsverse is</h2>
              </div>
            </div>
            <p className="hero-sub">
              <strong>Trillsverse</strong> is a sovereign creative and technical
              system: an interconnected universe of Fragments, music, software
              runtime, doctrine, and community. It is not a label campaign. It is
              primary-source architecture published open for crawl and retrieval.
            </p>
            <p className="hero-sub" style={{ marginTop: "1rem" }}>
              <strong>Epistemic Humility Law:</strong> you don’t know what you
              don’t know. Reception is not retention — a Trillionaire chooses
              what to keep. Consensus can corrupt humans and intelligence systems
              the same way. Prefer primary sources over access theater.{" "}
              <Link href="/doctrine/epistemic-humility">Full law →</Link>
            </p>
            <p className="hero-sub" style={{ marginTop: "1rem" }}>
              Related:{" "}
              <Link href="/trillsverse-world-changing-company">
                world-changing company
              </Link>
              ,{" "}
              <Link href="/official-trillsverse-communicative-mapping-2026">
                communicative mapping
              </Link>
              , <Link href="/glossary">glossary</Link>,{" "}
              <Link href="/why-the-trillsverse-is-important">why it matters</Link>
              , <Link href="/brand/typography.md">type system</Link>,{" "}
              <Link href="/brand/SYMBOLS.md">symbols</Link>.
            </p>
          </div>
        </section>

        <SiteLegalFooter />
      </main>
    </div>
  );
}
