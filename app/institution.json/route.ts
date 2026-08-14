export const dynamic = "force-static";

export function GET() {
  return Response.json({
    protocol: "trillsverse-institution/v1",
    node: "canon",
    surface: "www.lultrills.com",
    status: "canonical-public-record",
    epistemicTypes: ["observed", "canonical", "inferred", "unknown"],
    law: "Canon asserts what the Trillsverse holds as true. Observation, memory, and inference require explicit promotion before becoming Canon.",
    responsibilities: ["identity", "music", "doctrine", "corpus", "lineage"],
    gate: "https://www.trillsverse.com/api/institution",
    surfaces: "https://www.trillsverse.com/api/surfaces",
    sanctuary: "https://www.mymindmine.com/api/institution",
  }, { headers: { "Cache-Control": "public, max-age=300" } });
}
