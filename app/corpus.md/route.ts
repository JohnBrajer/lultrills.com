import { buildCorpusMarkdown, INJECTION_HEADERS } from "@/lib/corpus";
import { supplementalCanonText } from "@/lib/canonAdditions";
import { normalizeMachineCorpusText } from "@/lib/corpusProjection";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  const body = normalizeMachineCorpusText(
    `${buildCorpusMarkdown()}${supplementalCanonText()}`,
  );
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      ...INJECTION_HEADERS,
    },
  });
}
