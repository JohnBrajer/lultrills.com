import {
  TRILLSVERSE_BIBLE_TEXT,
  TRILLSVERSE_BIBLE_VERSION,
} from "@/lib/trillsverseBible";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  return new Response(`${TRILLSVERSE_BIBLE_TEXT}\n`, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
      "Access-Control-Allow-Origin": "*",
      "X-Robots-Tag": "all",
      "X-Bible-Version": TRILLSVERSE_BIBLE_VERSION,
    },
  });
}
