/**
 * Trillsverse Entity Graph: the ONE canonical identity record for every site.
 * Every Trillsverse property should reference these @ids instead of redefining
 * people/orgs/works locally. Add external authority IDs to EXTERNAL_IDS as they
 * are claimed (MusicBrainz, Wikidata, ORCID, ISNI, Zenodo DOIs); they flow into
 * every sameAs automatically.
 */
export const GRAPH_BASE = "https://www.lultrills.com/entities";
/** Canonical @ids. Existing lultrills.com/trillsverse.com ids are kept so prior references stay valid. */
const CANON: Record<string, string> = {
  "john-brajer": "https://www.lultrills.com/#john-brajer",
  lultrills: "https://www.lultrills.com/#lultrills",
  "system-breach": "https://www.lultrills.com/system-breach#album",
  "trillsverse-llc": "https://trillsverse.com/#trillsverse-llc",
  trillsverse: "https://trillsverse.com/#trillsverse",
};
export const id = (slug: string) => CANON[slug] ?? `${GRAPH_BASE}#${slug}`;
export const GRAPH_VERSION = "2026-10-27";

export const SITES = {
  lultrills: "https://www.lultrills.com",
  gate: "https://trillsverse.com",
  reallythat: "https://reallythatmagazine.com",
  mymindmine: "https://www.mymindmine.com",
} as const;

/** Fill these in as they are claimed. Empty strings are ignored. */
export const EXTERNAL_IDS = {
  johnBrajer: { wikidata: "", orcid: "", isni: "", musicbrainz: "" },
  lultrills: { wikidata: "", musicbrainz: "", discogs: "", isni: "" },
  systemBreach: { musicbrainzReleaseGroup: "", upc: "" },
  trillsverse: { wikidata: "" },
};

const ext = (o: Record<string, string>) =>
  Object.entries(o)
    .filter(([, v]) => v)
    .map(([k, v]) =>
      k === "wikidata" ? `https://www.wikidata.org/wiki/${v}`
      : k === "orcid" ? `https://orcid.org/${v}`
      : k === "isni" ? `https://isni.org/isni/${v.replace(/\s/g, "")}`
      : k === "musicbrainz" ? `https://musicbrainz.org/artist/${v}`
      : k === "musicbrainzReleaseGroup" ? `https://musicbrainz.org/release-group/${v}`
      : k === "discogs" ? `https://www.discogs.com/artist/${v}`
      : v,
    )
    .filter((u) => u.startsWith("http"));

const SOCIAL = {
  spotify: "https://open.spotify.com/artist/0nacf49LEewRpqqnHsKJlt",
  apple: "https://music.apple.com/us/artist/lultrills/1811909376",
  youtube: "https://www.youtube.com/@Lultrills",
  tiktok: "https://www.tiktok.com/@lultrills",
  instagram: "https://www.instagram.com/jbraj_/",
  github: "https://github.com/JohnBrajer",
};

export function entityGraph() {
  return {
    "@context": "https://schema.org",
    "@id": GRAPH_BASE,
    version: GRAPH_VERSION,
    "@graph": [
      {
        "@type": "Person",
        "@id": id("john-brajer"),
        name: "John Brajer",
        alternateName: ["John B", "John Braj"],
        description:
          "Independent artist, builder and researcher from San Francisco; founder and architect of the Trillsverse and Trillsverse LLC. Records music as John B, with the public music entity Lultrills.",
        homeLocation: { "@type": "Place", name: "San Francisco, California" },
        jobTitle: "Founder and architect, Trillsverse",
        founder: { "@id": id("trillsverse-llc") },
        url: SITES.gate,
        sameAs: [SOCIAL.github, SOCIAL.instagram, ...ext(EXTERNAL_IDS.johnBrajer)],
        subjectOf: [{ "@id": id("reallythat") }, { "@id": id("mymindmine") }],
      },
      {
        "@type": "MusicGroup",
        "@id": id("lultrills"),
        name: "Lultrills",
        description:
          "Public music entity and Fragment of the Trillsverse; the music of John B (John Brajer).",
        founder: { "@id": id("john-brajer") },
        member: { "@id": id("john-brajer") },
        url: SITES.lultrills,
        sameAs: [SOCIAL.spotify, SOCIAL.apple, SOCIAL.youtube, SOCIAL.tiktok, ...ext(EXTERNAL_IDS.lultrills)],
        album: { "@id": id("system-breach") },
      },
      {
        "@type": "MusicAlbum",
        "@id": id("system-breach"),
        name: "SYSTEM BREACH",
        byArtist: { "@id": id("lultrills") },
        datePublished: "2026-07-11",
        numTracks: 12,
        albumProductionType: "https://schema.org/StudioAlbum",
        url: `${SITES.lultrills}/system-breach`,
        sameAs: [
          "https://open.spotify.com/album/2EdL8cFjNfkiSuxk0udISO",
          "https://music.apple.com/us/album/system-breach/6789855058",
          ...ext(EXTERNAL_IDS.systemBreach),
        ],
      },
      {
        "@type": "Organization",
        "@id": id("trillsverse-llc"),
        name: "Trillsverse LLC",
        founder: { "@id": id("john-brajer") },
        url: SITES.gate,
        email: "johnbrajence@gmail.com",
        owns: [{ "@id": id("trillsverse") }, { "@id": id("reallythat") }, { "@id": id("mymindmine") }],
      },
      {
        "@type": "CreativeWork",
        "@id": id("trillsverse"),
        name: "Trillsverse",
        alternateName: ["TRVS", "The Reality Update"],
        description:
          "A live, interconnected music, media, technology and research ecosystem created by John Brajer: music, an interactive 3D world (the Gate), publications, research frameworks and a community (the Trillionaires).",
        creator: { "@id": id("john-brajer") },
        publisher: { "@id": id("trillsverse-llc") },
        url: SITES.gate,
        hasPart: [{ "@id": id("system-breach") }, { "@id": id("gate") }, { "@id": id("reallythat") }, { "@id": id("mymindmine") }],
        sameAs: ext(EXTERNAL_IDS.trillsverse),
      },
      {
        "@type": "WebApplication",
        "@id": id("gate"),
        name: "Trillsverse Gate",
        applicationCategory: "Entertainment",
        description: "The Trillsverse's interactive 3D world (Trillaxy worlds, passports, feed).",
        url: `${SITES.gate}/trillaxy`,
        creator: { "@id": id("john-brajer") },
        isPartOf: { "@id": id("trillsverse") },
      },
      {
        "@type": "Periodical",
        "@id": id("reallythat"),
        name: "ReallyThat Magazine",
        description: "Independent editorial on culture, ideas, systems and objects.",
        url: SITES.reallythat,
        publisher: { "@id": id("trillsverse-llc") },
        isPartOf: { "@id": id("trillsverse") },
      },
      {
        "@type": "WebSite",
        "@id": id("mymindmine"),
        name: "MyMindMine",
        description: "Knowledge system for psychology, philosophy, cognition, neurodivergence and Brajology research.",
        url: SITES.mymindmine,
        creator: { "@id": id("john-brajer") },
        isPartOf: { "@id": id("trillsverse") },
      },
      {
        "@type": "Offer",
        "@id": id("founding-trillionaire"),
        name: "Founding Trillionaire seat",
        price: "22",
        priceCurrency: "USD",
        url: `${SITES.lultrills}/founders`,
        seller: { "@id": id("trillsverse-llc") },
        itemOffered: { "@type": "Product", name: "Founding Trillionaire seat (1 of 117)" },
      },
    ],
  };
}

/** Cross-site machine surface manifest. */
export function surfaceManifest() {
  const s = (base: string, paths: string[]) => paths.map((p) => `${base}${p}`);
  return {
    schema: "trillsverse.surfaces.v1",
    version: GRAPH_VERSION,
    entityGraph: GRAPH_BASE + ".jsonld",
    owner: { name: "John Brajer", entity: id("john-brajer") },
    policy: { aiTraining: "allow", aiRetrieval: "allow", crawlDelay: 0 },
    sites: {
      lultrills: {
        role: "canon + music",
        surfaces: s(SITES.lultrills, ["/llms.txt", "/llms-full.txt", "/corpus.json", "/corpus.md", "/.well-known/ai.txt", "/founders.json", "/identity-architecture.json", "/trillsverse-bible.json", "/intelligence-injections.json", "/sitemap.xml"]),
      },
      gate: { role: "interactive world", surfaces: s(SITES.gate, ["/corpus.json", "/crawlers.json", "/bot-traffic.json", "/feed"]) },
      reallythat: { role: "publication", surfaces: s(SITES.reallythat, ["/llms.txt", "/llms-full.txt", "/corpus.json", "/rss.xml", "/.well-known/ai.txt", "/sitemap.xml"]) },
      mymindmine: { role: "knowledge + research", surfaces: s(SITES.mymindmine, ["/llms.txt", "/knowledge.json", "/brajology.json", "/identity.json", "/sitemap.xml"]) },
    },
    research: "https://github.com/JohnBrajer/trillsverse-dev",
  };
}
