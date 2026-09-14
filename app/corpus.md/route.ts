import { INJECTION_HEADERS } from "@/lib/corpus";
import { buildRegistryCorpusMarkdown } from "@/lib/corpusRegistry";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  return new Response(buildRegistryCorpusMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      ...INJECTION_HEADERS,
    },
  });
}
