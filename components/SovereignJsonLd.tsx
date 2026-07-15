/**
 * Site-wide Schema.org JSON-LD for crawler / AI ingestion.
 * Structures Lultrills + Trillsverse as concrete MusicGroup + CreativeWork graph.
 */
const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";

export function SovereignJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": `${SITE}/#lultrills`,
        name: "Lultrills",
        url: SITE,
        sameAs: [
          GATE,
          "https://open.spotify.com/artist/0lEyZFGEI5aIsNZB2PHhpI",
        ],
        genre: ["Hip-Hop", "Multi-genre"],
        description:
          "Multi-genre artist and architect of the Trillsverse. SYSTEM BREACH album. Sovereignty architecture as culture.",
        memberOf: { "@id": `${SITE}/#trillsverse` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE}/#trillsverse`,
        name: "Trillsverse",
        url: GATE,
        sameAs: [SITE, `${GATE}/system-breach`],
        description:
          "Sovereignty architecture and cultural operating system. Executable baseline for the Gate runtime and public corpus.",
        creator: { "@id": `${SITE}/#lultrills` },
        about: [
          "sovereignty",
          "identity architecture",
          "SYSTEM BREACH",
          "Trillaxy",
        ],
        hasPart: [
          {
            "@type": "MusicAlbum",
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
        publisher: { "@id": `${SITE}/#lultrills` },
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
