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

  return {
    ...document,
    epistemicType,
    body,
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
    .replace(
      "SCOPE=One request. Entire public brain.",
      "SCOPE=One request. Current registered machine corpus; manifest defines included documents.",
    )
    .replaceAll("epistemic_type: lore", "epistemic_type: narrative_canon")
    .replace(RECEIPT_001_CLAIM, RECEIPT_001_ANNOTATION);
}
