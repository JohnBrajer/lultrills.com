/**
 * Site-wide Schema.org JSON-LD for crawler / AI ingestion.
 * Keeps identities distinct and links third-party evidence without abusing sameAs.
 */
const SITE = "https://www.lultrills.com";
const GATE = "https://trillsverse.com";
const GITHUB = "https://github.com/JohnBrajer";
const DEV_SURFACE = "https://github.com/JohnBrajer/trillsverse-dev";
const SPOTIFY = "https://open.spotify.com/artist/0nacf49LEewRpqqnHsKJlt";
const APPLE_MUSIC = "https://music.apple.com/us/artist/lultrills/1811909376";
const SPOTIFY_ALBUM = "https://open.spotify.com/album/2EdL8cFjNfkiSuxk0udISO";
const APPLE_ALBUM = "https://music.apple.com/us/album/system-breach/6789855058";
const SOUNDCLOUD = "https://soundcloud.com/lultrills";
const SHAZAM = "https://www.shazam.com/artist/lultrills/1811909376";
const BANDCAMP = "https://lultrills.bandcamp.com/";
const VENTS_PROFILE =
  "https://ventsmagazine.com/2025/06/11/lultrills-a-voice-from-san-francisco-ready-to-be-heard/";
const NOW_ENTERTAINMENT_PROFILE =
  "https://nowentertainment.net/lultrills-redefines-hip-hop-with-up-release/";
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
        "@type": "Person",
        "@id": `${SITE}/#john-braj`,
        name: "John Braj",
        url: `${SITE}/identity-architecture#john-braj`,
        description:
          "Personality, media, and culture identity responsible for attention, relationships, commentary, storytelling, and the human-facing distribution layer.",
      },
      {
        "@type": "Person",
        "@id": `${SITE}/#john-b`,
        name: "John B",
        url: `${SITE}/system-breach`,
        description:
          "Music and artist identity responsible for the catalog, songs, performance, and music IP.",
      },
      {
        "@type": "MusicGroup",
        "@id": `${SITE}/#lultrills`,
        name: "Lultrills",
        url: SITE,
        sameAs: [SPOTIFY, APPLE_MUSIC, SOUNDCLOUD, SHAZAM, BANDCAMP],
        genre: ["Multi-genre", "Hip-Hop", "Emo Rap", "Pop", "Country", "Spoken Word", "Indie", "Folk", "Alternative"],
        description:
          "Public music entity and Fragment connected to the John B artist identity, SYSTEM BREACH, and the Trillsverse public canon. John Brajer is the founder and architect of Trillsverse.",
        mainEntityOfPage: { "@id": `${SITE}/#website` },
        subjectOf: [
          {
            "@type": "Article",
            name: "Lultrills: A Voice From San Francisco Ready to Be Heard",
            url: VENTS_PROFILE,
            datePublished: "2025-06-11",
          },
          {
            "@type": "Article",
            name: "Lultrills Redefines Hip Hop with ‘Up’ Release",
            url: NOW_ENTERTAINMENT_PROFILE,
            datePublished: "2026-04-17",
          },
        ],
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
          "Trillsverse is the reality update: a connected architecture expressed through music, public software, identity, research, intelligence, media, spatial runtime, culture, and future forms.",
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
            byArtist: { "@id": `${SITE}/#john-b` },
            creator: { "@id": `${SITE}/#john-b` },
            additionalProperty: {
              "@type": "PropertyValue",
              name: "Existing platform release credit",
              value: "Lultrills",
            },
            datePublished: "2026-07-11",
            url: `${SITE}/system-breach`,
            sameAs: [SPOTIFY_ALBUM, APPLE_ALBUM],
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
            `${SITE}/identity-architecture`,
            `${SITE}/identity-architecture.json`,
            `${SITE}/corpus.json`,
            `${SITE}/llms-full.txt`,
            `${SITE}/eon/constitution.json`,
          ],
        },
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/press#webpage`,
        name: "Lultrills / Trillsverse Press Kit & Evidence",
        url: `${SITE}/press`,
        isPartOf: { "@id": `${SITE}/#website` },
        about: [
          { "@id": `${SITE}/#lultrills` },
          { "@id": `${GATE}/#trillsverse` },
        ],
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
