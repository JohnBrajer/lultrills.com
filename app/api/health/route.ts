export const dynamic = "force-dynamic";
export const revalidate = 0;

export function GET() {
  const deployedCommit = process.env.APP_COMMIT_SHA || "UNKNOWN";
  const deployedAt = process.env.APP_DEPLOYED_AT || "UNKNOWN";

  return Response.json(
    {
      status: "ok",
      service: "lultrills.com",
      authority: "JohnBrajer/lultrills.com",
      canonicalBranch: "John",
      deployedCommit,
      deployedAt,
      releaseIdentityKnown: deployedCommit !== "UNKNOWN",
      evidenceClass:
        deployedCommit !== "UNKNOWN"
          ? "runtime-release-identity"
          : "runtime-health-with-unknown-release-identity",
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
