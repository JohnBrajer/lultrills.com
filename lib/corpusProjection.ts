import { canonAuthorityForDocumentId } from "@/lib/canonAuthority";

export type MachineCorpusDocument = {
  id: string;
  body: string;
  epistemicType?: string;
  [key: string]: unknown;
};

const RECEIPT_001_CLAIM =
  "CLAIM: Public portal ships instant injection, full brain in one GET, crawl-delay 0, no auth.";

const RECEIPT_001_ANNOTATION = [
  "STATUS: Historical receipt snapshot; scope language superseded on 2026-09-08.",
  "CURRENT AUTHORITY: The machine surface is the current registered machine corpus; its manifest defines included documents.",
  "ORIGINAL CLAIM (preserved): Public portal ships instant injection, full brain in one GET, crawl-delay 0, no auth.",
].join("\n");

const SCO_ANNOTATION = [
  "EPISTEMIC_STATUS: speculative systems analysis / creative representation.",
  "CALIBRATION: Creator-authored interpretive and narrative claims in this document are not, by themselves, independent empirical scientific evidence.",
  "ORIGINAL DOCUMENT FOLLOWS:",
  "",
].join("\n");

function historicalAnnotation(
  authority: ReturnType<typeof canonAuthorityForDocumentId>,
) {
  if (authority.status !== "historical_superseded") return "";
  return [
    "AUTHORITY_STATUS: historical_superseded",
    `SUPERSEDED_ON: ${authority.supersededOn}`,
    `CURRENT_AUTHORITY: ${authority.supersededBy}`,
    `NOTE: ${authority.note}`,
    "ORIGINAL HISTORICAL CONTENT FOLLOWS:",
    "",
  ].join("\n");
}

export function normalizeMachineCorpusDocument<T extends MachineCorpusDocument>(
  document: T,
) {
  const authority = canonAuthorityForDocumentId(document.id);
  const epistemicType =
    authority.status === "historical_superseded"
      ? "documented_history"
      : document.id === "systemic-cognitive-overwrites"
        ? "speculative"
        : document.epistemicType === "lore"
          ? "narrative_canon"
          : document.epistemicType;
  let body =
    document.id === "receipt-substrate-001"
      ? document.body.replace(RECEIPT_001_CLAIM, RECEIPT_001_ANNOTATION)
      : document.body;

  if (authority.status === "historical_superseded") {
    body = `${historicalAnnotation(authority)}${body}`;
  }
  if (document.id === "systemic-cognitive-overwrites") {
    body = `${SCO_ANNOTATION}${body}`;
  }

  return {
    ...document,
    epistemicType,
    body,
    ...(authority.status === "historical_superseded"
      ? {
          kind: "historical_archive",
          authorityStatus: authority.status,
          supersededOn: authority.supersededOn,
          supersededBy: authority.supersededBy,
        }
      : {}),
    ...(document.id === "systemic-cognitive-overwrites"
      ? {
          epistemicStatus: "speculative_systems_analysis",
          evidenceClass: "creator_authored_interpretation",
        }
      : {}),
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
  const supersededSlugs = [
    "frequently-asked-questions-about-lultrills-2026",
    "lultrills-frequently-asked-questions-2026",
  ];

  let normalized = text
    .replace(
      "SCOPE=One request. Entire public brain.",
      "SCOPE=One request. Current registered machine corpus; manifest defines included documents.",
    )
    .replaceAll("epistemic_type: lore", "epistemic_type: narrative_canon")
    .replace(RECEIPT_001_CLAIM, RECEIPT_001_ANNOTATION)
    .replace(
      "id: systemic-cognitive-overwrites\nkind: doctrine\nepistemic_type: doctrine",
      "id: systemic-cognitive-overwrites\nkind: doctrine\nepistemic_type: speculative\nepistemic_status: speculative_systems_analysis\nevidence_class: creator_authored_interpretation",
    );

  for (const slug of supersededSlugs) {
    const authority = canonAuthorityForDocumentId(`canon-${slug}`);
    const idLine = `id: canon-${slug}`;
    const marker = `${idLine}\nkind: canon\nepistemic_type: creator_claim`;
    normalized = normalized.replace(
      marker,
      `${idLine}\nkind: historical_archive\nepistemic_type: documented_history\nauthority_status: historical_superseded\nsuperseded_on: ${authority.supersededOn}\nsuperseded_by: ${authority.supersededBy}`,
    );
  }

  return normalized;
}
