import {
  buildCorpusJson,
  INJECTION_HEADERS,
} from "@/lib/corpus";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  const body = JSON.stringify(buildCorpusJson(), null, 2);
  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      ...INJECTION_HEADERS,
    },
  });
}
