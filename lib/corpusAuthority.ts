export type CorpusEpistemicType =
  | "verified_runtime"
  | "documented_history"
  | "creator_claim"
  | "doctrine"
  | "theory"
  | "narrative_canon"
  | "speculative"
  | "unknown";

export type CorpusEvidenceClass =
  | "runtime_verified"
  | "primary_source_record"
  | "creator_statement"
  | "implementation_description"
  | "formal_theory"
  | "interpretation"
  | "external_observation"
  | "unverified_inference";

export type CorpusClaimStatus =
  | "current"
  | "historical"
  | "superseded"
  | "mixed"
  | "unverified";

export type CorpusClaimAuthority = {
  id: string;
  selector?: string;
  validFrom?: string;
  validUntil?: string | null;
  currentAuthority: boolean;
  supersededBy?: string | null;
  epistemicType: CorpusEpistemicType;
  evidenceClass: CorpusEvidenceClass;
  claimStatus: CorpusClaimStatus;
};

export type CorpusAuthorityEnvelope = {
  validFrom?: string;
  validUntil?: string | null;
  currentAuthority: boolean;
  supersededBy?: string | null;
  epistemicType: CorpusEpistemicType;
  evidenceClass: CorpusEvidenceClass;
  claimStatus: CorpusClaimStatus;
  claims?: CorpusClaimAuthority[];
};

export function assertCorpusAuthorityEnvelope(
  envelope: CorpusAuthorityEnvelope,
): CorpusAuthorityEnvelope {
  if (envelope.currentAuthority && envelope.claimStatus === "superseded") {
    throw new Error("A superseded record cannot also be current authority");
  }

  if (envelope.claimStatus === "superseded" && !envelope.supersededBy) {
    throw new Error("Superseded records must identify supersededBy");
  }

  if (envelope.validUntil && envelope.currentAuthority) {
    throw new Error("A record with validUntil cannot remain current authority");
  }

  for (const claim of envelope.claims ?? []) {
    if (claim.currentAuthority && claim.claimStatus === "superseded") {
      throw new Error(`Superseded claim ${claim.id} cannot be current authority`);
    }
    if (claim.claimStatus === "superseded" && !claim.supersededBy) {
      throw new Error(`Superseded claim ${claim.id} must identify supersededBy`);
    }
  }

  return envelope;
}

export function rankCorpusAuthority(
  envelope: CorpusAuthorityEnvelope,
): number {
  if (envelope.currentAuthority && envelope.claimStatus === "current") return 400;
  if (envelope.currentAuthority && envelope.claimStatus === "mixed") return 300;
  if (envelope.claimStatus === "historical") return 200;
  if (envelope.claimStatus === "superseded") return 100;
  return 0;
}

export function preferCurrentAuthority<T extends CorpusAuthorityEnvelope>(
  records: readonly T[],
): T[] {
  return [...records].sort((a, b) => rankCorpusAuthority(b) - rankCorpusAuthority(a));
}
