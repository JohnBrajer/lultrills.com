import { createHash } from "crypto";

export type CorpusIdentityDocument = {
  id: string;
  body: string;
  epistemicType?: string;
};

export function corpusManifestIdentity(
  version: string,
  documents: CorpusIdentityDocument[],
) {
  const manifest = documents.map((doc) => ({
    id: doc.id,
    epistemicType: doc.epistemicType ?? null,
    bodySha256: createHash("sha256").update(doc.body).digest("hex"),
  }));

  const manifestHash = createHash("sha256")
    .update(JSON.stringify(manifest))
    .digest("hex");

  return {
    corpusId: `${version}:${manifestHash.slice(0, 16)}`,
    manifestHash,
  };
}
