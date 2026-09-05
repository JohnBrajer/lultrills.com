import {
  buildCorpusJson,
  INJECTION_HEADERS,
} from "@/lib/corpus";
import { buildSupplementalCanonDocuments } from "@/lib/canonAdditions";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  const corpus = buildCorpusJson();
  const existingIds = new Set(corpus.documents.map((d) => d.id));
  const additions = buildSupplementalCanonDocuments().filter(
    (d) => !existingIds.has(d.id),
  );
  const documents = [...corpus.documents, ...additions];
  const body = JSON.stringify(
    {
      ...corpus,
      documentCount: documents.length,
      totalWords: corpus.totalWords + additions.reduce((sum, d) => sum + d.words, 0),
      totalChars: corpus.totalChars + additions.reduce((sum, d) => sum + d.body.length, 0),
      documents,
    },
    null,
    2,
  );

  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      ...INJECTION_HEADERS,
    },
  });
}
