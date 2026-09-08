import {
  buildCorpusDocuments,
  buildLlmsFull,
  CORPUS_VERSION,
  INJECTION_HEADERS,
} from "@/lib/corpus";
import {
  buildSupplementalCanonDocuments,
  supplementalCanonText,
} from "@/lib/canonAdditions";
import { corpusManifestIdentity } from "@/lib/corpusIdentity";
import {
  normalizeMachineCorpusDocument,
  normalizeMachineCorpusText,
} from "@/lib/corpusProjection";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  const baseDocs = buildCorpusDocuments();
  const existingIds = new Set(baseDocs.map((d) => d.id));
  const additions = buildSupplementalCanonDocuments().filter(
    (d) => !existingIds.has(d.id),
  );
  const documents = [...baseDocs, ...additions].map(
    normalizeMachineCorpusDocument,
  );
  const identity = corpusManifestIdentity(CORPUS_VERSION, documents);
  const identityHeader = [
    `CORPUS_ID=${identity.corpusId}`,
    `MANIFEST_SHA256=${identity.manifestHash}`,
    `MANIFEST_DOCUMENTS=${documents.length}`,
    "",
  ].join("\n");
  const currentCorpus = normalizeMachineCorpusText(buildLlmsFull());

  return new Response(
    `${identityHeader}${currentCorpus}${supplementalCanonText()}`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
        "X-Corpus-Id": identity.corpusId,
        "X-Corpus-Manifest-Sha256": identity.manifestHash,
        ...INJECTION_HEADERS,
      },
    },
  );
}
