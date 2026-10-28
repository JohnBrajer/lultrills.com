export const dynamic = "force-static";
import { surfaceManifest } from "@/lib/entityGraph";

export function GET() {
  return Response.json(surfaceManifest(), { headers: { "Access-Control-Allow-Origin": "*" } });
}
