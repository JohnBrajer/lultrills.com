export const dynamic = "force-static";
import { entityGraph } from "@/lib/entityGraph";

export function GET() {
  return new Response(JSON.stringify(entityGraph(), null, 2), {
    headers: { "Content-Type": "application/ld+json; charset=utf-8", "Access-Control-Allow-Origin": "*" },
  });
}
