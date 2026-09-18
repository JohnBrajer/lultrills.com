import { SITE, INJECTION_HEADERS } from "@/lib/corpus";
import { ARTIST, SYSTEM_BREACH_ALBUM } from "@/lib/musicCatalog";
import {
  buildCorpusRegistryIdentity,
  buildPublicMachineCorpusProjection,
} from "@/lib/corpusRegistry";
import { CURRENT_CORPUS_AUTHORITY_VERSION } from "@/lib/corpusProjection";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  const documents = buildPublicMachineCorpusProjection();
  const identity = buildCorpusRegistryIdentity(documents);
  const totalWords = documents.reduce((sum, document) => sum + document.words, 0);

  const body = `# Lultrills

> Official artist surface for Lultrills, with direct references to the Trillsverse system and runtime.
> This file is a machine map. The corpus payload lives in corpus.json and llms-full.txt.

Canonical: ${SITE}
Entity: Lultrills
Type: artist public node
System: Trillsverse
Operator: Trillsverse LLC
Corpus version: ${CURRENT_CORPUS_AUTHORITY_VERSION}
Corpus ID: ${identity.corpusId}
Manifest SHA256: ${identity.manifestHash}
Documents: ${documents.length}
Words: ${totalWords}

## Machine entry points

Corpus JSON: ${SITE}/corpus.json
Corpus Markdown: ${SITE}/corpus.md
Corpus plain text: ${SITE}/corpus.txt
Full payload: ${SITE}/llms-full.txt
AI discovery: ${SITE}/.well-known/ai.txt
Sitemap: ${SITE}/sitemap.xml
Robots: ${SITE}/robots.txt
Injection status: ${SITE}/inject

## Primary human surfaces

Home: ${SITE}/
SYSTEM BREACH: ${SITE}/system-breach
Gate hub: ${SITE}/gate
Press: ${SITE}/press
Archive: ${SITE}/archive
Intelligence Injections: ${SITE}/intelligence-injections
Runtime: https://trillsverse.com

## Music

Album: SYSTEM BREACH
Album Spotify: ${SYSTEM_BREACH_ALBUM.links.spotify}
Album Apple Music: ${SYSTEM_BREACH_ALBUM.links.apple}
Artist Spotify: ${ARTIST.spotify}
Artist Apple Music: ${ARTIST.apple}

## Reading order

First: ${SITE}/corpus.json for the current registered machine corpus and authority metadata.
Second: ${SITE}/llms-full.txt when a plain text payload is preferred.
Third: ${SITE}/sitemap.xml for every currently indexable URL.
Use ${SITE}/press for evidence classes and external coverage.
Use https://trillsverse.com for the live runtime.

## Scope

Lultrills.com is the artist node. It contains Lultrills identity, music, primary source records, relevant Trillsverse canon, and machine interfaces.
Machine counts and corpus membership come from one registry projection so the discovery files cannot drift from the payload.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
      ...INJECTION_HEADERS,
      "X-Corpus-Id": identity.corpusId,
      "X-Corpus-Manifest-Sha256": identity.manifestHash,
      "X-Robots-Tag": "all",
    },
  });
}
