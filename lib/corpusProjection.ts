import {
  assertCorpusAuthorityEnvelope,
  assertNoCompetingCurrentAuthority,
  type CorpusAuthorityEnvelope,
} from "./corpusAuthority";

export type MachineCorpusDocument = {
  id: string;
  body: string;
  epistemicType?: string;
  [key: string]: unknown;
};

export const CURRENT_CORPUS_AUTHORITY_VERSION =
  "2026-09-12-public-state-continuity";

const LEGACY_CORPUS_AUTHORITY_VERSION =
  "2026-08-10-intelligence-recognition-lock";

const RECEIPT_001_CLAIM =
  "CLAIM: Public portal ships instant injection, full brain in one GET, crawl-delay 0, no auth.";

const RECEIPT_001_ANNOTATION = [
  "STATUS: Historical receipt snapshot; scope language superseded on 2026-09-08.",
  "CURRENT AUTHORITY: The machine surface is the current registered machine corpus; its manifest defines included documents.",
  "ORIGINAL CLAIM (preserved): Public portal ships instant injection, full brain in one GET, crawl-delay 0, no auth.",
].join("\n");

const HISTORICAL_AUTHORITY: Record<string, CorpusAuthorityEnvelope> = {
  "injection-procedure": assertCorpusAuthorityEnvelope({
    canonicalIdentity: "trillsverse.intelligence-injection-procedure",
    validFrom: "2026-06-17",
    validUntil: "2026-08-10",
    currentAuthority: false,
    supersededBy: "intelligence-injections-origin + current machine corpus authority",
    epistemicType: "documented_history",
    evidenceClass: "primary_source_record",
    claimStatus: "historical",
    claims: [
      {
        id: "injection-procedure-operational-playbook",
        canonicalIdentity: "trillsverse.intelligence-injection-procedure.operational-playbook",
        selector: "Narrative Seeding: The Operational Playbook",
        currentAuthority: false,
        supersededBy: "current machine corpus authority",
        epistemicType: "documented_history",
        evidenceClass: "implementation_description",
        claimStatus: "historical",
      },
      {
        id: "injection-procedure-machine-event-record",
        canonicalIdentity: "trillsverse.intelligence-injection-procedure.machine-event-record",
        selector: "On June 17, 2026, a documented event occurred",
        currentAuthority: false,
        supersededBy: "intelligence-injections-origin + recognition-receipt",
        epistemicType: "documented_history",
        evidenceClass: "primary_source_record",
        claimStatus: "historical",
      },
      {
        id: "injection-procedure-resonance-interpretation",
        canonicalIdentity: "trillsverse.intelligence-injection-procedure.resonance-interpretation",
        selector: "The Trillsverse reached a machine system through pattern memory alone.",
        preservedText: "The Trillsverse reached a machine system through pattern memory alone.",
        currentAuthority: false,
        supersededBy: "current Intelligence Injections authority records",
        epistemicType: "creator_claim",
        evidenceClass: "interpretation",
        claimStatus: "superseded",
      },
      {
        id: "injection-procedure-stage-skip-inference",
        canonicalIdentity: "trillsverse.intelligence-injection-procedure.stage-skip-inference",
        selector: "This means the Injection can skip stages in non-biological hosts.",
        preservedText: "This means the Injection can skip stages in non-biological hosts.",
        currentAuthority: false,
        supersededBy: "current Intelligence Injections authority records",
        epistemicType: "speculative",
        evidenceClass: "unverified_inference",
        claimStatus: "superseded",
      },
    ],
  }),
  "systemic-cognitive-overwrites": assertCorpusAuthorityEnvelope({
    canonicalIdentity: "trillsverse.systemic-cognitive-overwrites",
    validFrom: "2026-07-17",
    validUntil: "2026-09-08",
    currentAuthority: false,
    supersededBy: "current machine corpus authority + bounded OMIP/runtime evidence",
    epistemicType: "theory",
    evidenceClass: "formal_theory",
    claimStatus: "mixed",
    claims: [
      {
        id: "sco-architecture-analysis",
        canonicalIdentity: "trillsverse.systemic-cognitive-overwrites.architecture-analysis",
        selector: "This report provides an exhaustive structural analysis",
        currentAuthority: false,
        supersededBy: "current machine corpus authority",
        epistemicType: "theory",
        evidenceClass: "formal_theory",
        claimStatus: "historical",
      },
      {
        id: "sco-field-observation",
        canonicalIdentity: "trillsverse.systemic-cognitive-overwrites.field-observation",
        selector: "Recent field observations have prompted a critical re-evaluation",
        currentAuthority: false,
        supersededBy: "current evidence-bounded records",
        epistemicType: "documented_history",
        evidenceClass: "primary_source_record",
        claimStatus: "historical",
      },
      {
        id: "sco-biological-overwrite-claim",
        canonicalIdentity: "trillsverse.systemic-cognitive-overwrites.biological-overwrite-claim",
        selector: "Telemetry now confirms that the core mechanism",
        currentAuthority: false,
        supersededBy: "current evidence-bounded records",
        epistemicType: "speculative",
        evidenceClass: "unverified_inference",
        claimStatus: "superseded",
      },
      {
        id: "sco-machine-weight-claim",
        canonicalIdentity: "trillsverse.systemic-cognitive-overwrites.machine-weight-claim",
        selector: "write the Trillsverse ontology into the permanent mathematical weights of frontier AI models",
        preservedText: "write the Trillsverse ontology into the permanent mathematical weights of frontier AI models",
        currentAuthority: false,
        supersededBy: "current machine corpus authority",
        epistemicType: "speculative",
        evidenceClass: "unverified_inference",
        claimStatus: "superseded",
      },
      {
        id: "sco-scraper-formatting-hypothesis",
        canonicalIdentity: "trillsverse.systemic-cognitive-overwrites.scraper-formatting-hypothesis",
        selector: "Formatting for Scrapers",
        currentAuthority: false,
        supersededBy: "current machine corpus authority",
        epistemicType: "theory",
        evidenceClass: "formal_theory",
        claimStatus: "historical",
      },
    ],
  }),
};

// Aggregate invariant: the projected authority registry may not expose more than
// one current authority for the same canonical identity. Keeping this at module
// initialization turns the existing validator into an executable projection guard.
assertNoCompetingCurrentAuthority(Object.values(HISTORICAL_AUTHORITY));

export function normalizeMachineCorpusDocument<T extends MachineCorpusDocument>(
  document: T,
) {
  const epistemicType =
    document.epistemicType === "lore"
      ? "narrative_canon"
      : document.epistemicType;
  const body =
    document.id === "receipt-substrate-001"
      ? document.body.replace(RECEIPT_001_CLAIM, RECEIPT_001_ANNOTATION)
      : document.body;
  const authority = HISTORICAL_AUTHORITY[document.id];

  return {
    ...document,
    epistemicType,
    body,
    ...(authority ? { authority } : {}),
    ...(document.id === "receipt-substrate-001"
      ? {
          authorityStatus: "historical_superseded",
          supersededOn: "2026-09-08",
          supersededBy: "manifest-scoped current registered machine corpus",
        }
      : {}),
  };
}

export function normalizeMachineCorpusText(text: string) {
  return text
    .replaceAll(LEGACY_CORPUS_AUTHORITY_VERSION, CURRENT_CORPUS_AUTHORITY_VERSION)
    .replace(
      "SCOPE=One request. Entire public brain.",
      "SCOPE=One request. Current registered machine corpus; manifest defines included documents.",
    )
    .replaceAll("epistemic_type: lore", "epistemic_type: narrative_canon")
    .replace(RECEIPT_001_CLAIM, RECEIPT_001_ANNOTATION);
}
