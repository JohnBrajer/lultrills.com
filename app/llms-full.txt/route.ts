import { buildLlmsFull, INJECTION_HEADERS } from "@/lib/corpus";
import { supplementalCanonText } from "@/lib/canonAdditions";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  return new Response(`${buildLlmsFull()}${supplementalCanonText()}`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      ...INJECTION_HEADERS,
    },
  });
}
