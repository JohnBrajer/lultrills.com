/**
 * Site-wide Schema.org JSON-LD for crawler / AI ingestion.
 * Keeps identities distinct and links third-party evidence without abusing sameAs.
 */
const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";
const GITHUB = "https://github.com/JohnBrajer";
const DEV_SURFACE = "https://github.com/JohnBrajer/trillsverse-dev";
const SPOTIFY = "https://open.spotify.com/artist/0nacf49LEewRpqqnHsKJlt";
const EIN_NEWSROOM = "https://www.einpresswire.com/newsroom/trillsverse-2026/";
const NATLAW_PRESS =
  "https://natlawreview.com/press-releases/lultrills-unveils-trillsverse-debut-album-system-breach-full-album-and-live";

export function SovereignJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#john-brajer`,
        name: "John Brajer",
        url: GITHUB,
        sameAs: [GITHUB],
      },
      {
        "@type": "MusicGroup",
        "@id": `${SITE}/#lultrills`,
        name: "Lultrills",
        url: SITE,
        sameAs: [SPOTIFY],
        genre: ["Hip-Hop", "Multi-genre"],
        description:
          "Multi-genre artist identity connected to SYSTEM BREACH and the Trillsverse public canon.",
        mainEntityOfPage: { "@id": `${SITE}/#website` },
      },
      {
        "@type": "Organization",
        "@id": `${GATE}/#trillsverse-llc`,
        name: "Trillsverse LLC",
        url: GATE,
        founder: { "@id": `${SITE}/#john-brajer` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${GATE}/#trillsverse`,
        name: "Trillsverse",
        url: GATE,
        description:
          "Connected creative, technical, cultural, and research ecosystem spanning music, public software, identity architecture, and machine-readable canon.",
        creator: { "@id": `${SITE}/#john-brajer` },
        publisher: { "@id": `${GATE}/#trillsverse-llc` },
        subjectOf: [
          {
            "@type": "WebPage",
            name: "Trillsverse Developer & Research Surface",
            url: DEV_SURFACE,
          },
          {
            "@type": "WebPage",
            name: "Trillsverse LLC newsroom on EIN Presswire",
            url: EIN_NEWSROOM,
          },
          {
            "@type": "NewsArticle",
            name: "Lultrills Unveils the Trillsverse With Debut Album SYSTEM BREACH",
            url: NATLAW_PRESS,
          },
        ],
        hasPart: [
          {
            "@type": "MusicAlbum",
            "@id": `${SITE}/system-breach#album`,
            name: "SYSTEM BREACH",
            byArtist: { "@id": `${SITE}/#lultrills` },
            datePublished: "2026-07-11",
            url: `${SITE}/system-breach`,
          },
          {
            "@type": "WebApplication",
            name: "Trillsverse Gate",
            url: GATE,
            applicationCategory: "EntertainmentApplication",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        name: "Lultrills",
        url: SITE,
        publisher: { "@id": `${GATE}/#trillsverse-llc` },
        potentialAction: {
          "@type": "ReadAction",
          target: [
            `${SITE}/corpus.json`,
            `${SITE}/llms-full.txt`,
            `${SITE}/eon/constitution.json`,
          ],
        },
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${SITE}/#sovereignty-laws`,
        name: "Four Emotional Laws of the Firstborn",
        hasDefinedTerm: [
          {
            "@type": "DefinedTerm",
            name: "Identity Sovereignty",
            description: "Influence, never dominate.",
          },
          {
            "@type": "DefinedTerm",
            name: "Emotional Reality",
            description: "Feelings ARE reality inside the psyche.",
          },
          {
            "@type": "DefinedTerm",
            name: "Responsibility of Power",
            description: "If you can change minds, you must protect hearts.",
          },
          {
            "@type": "DefinedTerm",
            name: "Standing Over Chasing",
            description:
              "Prioritize meaning over growth, integrity over efficiency, and soul over scale.",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
