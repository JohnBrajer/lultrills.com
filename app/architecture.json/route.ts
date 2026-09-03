export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  return Response.json(
    {
      protocol: "trillsverse-architecture/v1",
      node: "canon",
      surface: "https://www.lultrills.com/architecture",
      json: "https://www.lultrills.com/architecture.json",
      status: "canonical-public-record",
      updated: "2026-09-03",
      domains: {
        canon: {
          host: "https://www.lultrills.com",
          role: "public artist identity, music, doctrine, machine-readable source records",
        },
        gate: {
          host: "https://trillsverse.com",
          role: "runtime: continuity, authority, intelligence surfaces, action, witness",
          health: "https://trillsverse.com/api/health",
        },
        sanctuary: {
          host: "https://www.mymindmine.com",
          role: "personal intelligence node",
          health: "https://www.mymindmine.com/api/health",
        },
      },
      evidenceClass: "documented-deployment-relationship",
      doesNotClaim: [
        "shared production databases across domains",
        "private model behavior",
        "metaphysical effects",
      ],
      related: {
        corpus: "https://www.lultrills.com/corpus.json",
        machineEntry: "https://www.lultrills.com/machine-entry",
        gateAtlas: "https://trillsverse.com/atlas",
        gateObservatory: "https://trillsverse.com/observatory",
        gateWellKnownAi: "https://trillsverse.com/.well-known/ai.txt",
      },
    },
    {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
