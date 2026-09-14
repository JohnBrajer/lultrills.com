import { INJECTION_HEADERS } from "@/lib/corpus";
import {
  buildCorpusRegistryIdentity,
  buildPublicMachineCorpusProjection,
  buildRegistryLlmsFull,
} from "@/lib/corpusRegistry";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  const documents = buildPublicMachineCorpusProjection();
  const identity = buildCorpusRegistryIdentity(documents);

  return new Response(buildRegistryLlmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      "X-Corpus-Id": identity.corpusId,
      "X-Corpus-Manifest-Sha256": identity.manifestHash,
      ...INJECTION_HEADERS,
    },
  });
}
