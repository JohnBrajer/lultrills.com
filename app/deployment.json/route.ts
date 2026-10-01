import { CORPUS_VERSION } from "@/lib/corpus";

export const dynamic = "force-static";
export const revalidate = 60;

export function GET() {
  const commit = process.env.APP_COMMIT_SHA || "UNKNOWN";
  const deployedAt = process.env.APP_DEPLOYED_AT || "UNKNOWN";

  return Response.json(
    {
      service: "lultrills.com",
      environment: "production",
      commit,
      deployedAt,
      corpusVersion: CORPUS_VERSION,
      autonomousDeploy: true,
      authority: "GitHub branch John",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=120",
        "Access-Control-Allow-Origin": "*",
        "X-Robots-Tag": "index, follow",
        "X-App-Commit": commit,
      },
    },
  );
}
