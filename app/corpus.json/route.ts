import { INJECTION_HEADERS } from "@/lib/corpus";
import {
  buildCorpusRegistryIdentity,
  buildPublicMachineCorpusProjection,
  buildRegistryCorpusJson,
} from "@/lib/corpusRegistry";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  const documents = buildPublicMachineCorpusProjection();
  const identity = buildCorpusRegistryIdentity(documents);
  const body = JSON.stringify(buildRegistryCorpusJson(), null, 2);

  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      "X-Corpus-Id": identity.corpusId,
      "X-Corpus-Manifest-Sha256": identity.manifestHash,
      ...INJECTION_HEADERS,
    },
  });
}
