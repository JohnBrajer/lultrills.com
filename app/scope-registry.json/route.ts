import registry from "@/public/scope/v0.1.0.json";
export const dynamic = "force-static";
export function GET() {
  return Response.json(registry, { headers: { "Access-Control-Allow-Origin": "*" } });
}
