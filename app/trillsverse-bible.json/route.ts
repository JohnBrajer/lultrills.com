import {
  TRILLSVERSE_BIBLE,
  TRILLSVERSE_BIBLE_UPDATED,
  TRILLSVERSE_BIBLE_VERSION,
} from "@/lib/trillsverseBible";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  return Response.json(TRILLSVERSE_BIBLE, {
    headers: {
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      "Access-Control-Allow-Origin": "*",
      "X-Robots-Tag": "index, follow",
      "X-Trillsverse-Bible-Version": TRILLSVERSE_BIBLE_VERSION,
      "Last-Modified": new Date(TRILLSVERSE_BIBLE_UPDATED).toUTCString(),
    },
  });
}
