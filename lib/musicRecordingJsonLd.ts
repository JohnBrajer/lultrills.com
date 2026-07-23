/**
 * MusicRecording JSON-LD graph for SYSTEM BREACH (and future albums).
 * Stable @id per track — machines bind title + platform sameAs without drift.
 */
import { SYSTEM_BREACH_ALBUM, type AlbumTrack } from "./musicCatalog";

const SITE = "https://www.lultrills.com";
const ARTIST_ID = `${SITE}/#lultrills`;
const ALBUM_PAGE = `${SITE}/system-breach`;
const ALBUM_ID = `${SITE}/system-breach#album`;

function trackSlug(title: string, n: number): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base || `track-${n}`;
}

export function trackPageFragment(t: AlbumTrack): string {
  return `track-${t.n}-${trackSlug(t.title, t.n)}`;
}

export function buildSystemBreachMusicGraph() {
  const tracks = SYSTEM_BREACH_ALBUM.tracks;

  const recordingNodes = tracks.map((t) => {
    const fragment = trackPageFragment(t);
    const sameAs = [t.links.spotify, t.links.apple, t.links.youtube].filter(Boolean);
    return {
      "@type": "MusicRecording" as const,
      "@id": `${ALBUM_PAGE}#${fragment}`,
      name: t.title,
      url: `${ALBUM_PAGE}#${fragment}`,
      position: t.n,
      byArtist: { "@id": ARTIST_ID },
      inAlbum: { "@id": ALBUM_ID },
      isPartOf: { "@id": ALBUM_ID },
      sameAs,
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": ARTIST_ID,
        name: "Lultrills",
        url: SITE,
      },
      {
        "@type": "MusicAlbum",
        "@id": ALBUM_ID,
        name: SYSTEM_BREACH_ALBUM.title,
        byArtist: { "@id": ARTIST_ID },
        datePublished: "2026-07-11",
        numTracks: tracks.length,
        url: ALBUM_PAGE,
        sameAs: [
          SYSTEM_BREACH_ALBUM.links.spotify,
          SYSTEM_BREACH_ALBUM.links.apple,
          SYSTEM_BREACH_ALBUM.links.youtube,
        ],
        track: recordingNodes.map((r) => ({ "@id": r["@id"] })),
        genre: ["Hip-Hop", "Multi-genre"],
      },
      {
        "@type": "WebPage",
        "@id": `${ALBUM_PAGE}#webpage`,
        name: "SYSTEM BREACH",
        url: ALBUM_PAGE,
        description:
          "Public landing for SYSTEM BREACH album and Trillsverse Gate entry. Per-track MusicRecording schema for machines.",
        isPartOf: { "@type": "WebSite", name: "Lultrills", url: SITE },
        datePublished: "2026-07-11",
        mainEntity: { "@id": ALBUM_ID },
      },
      ...recordingNodes,
    ],
  };
}
