import { NextResponse } from "next/server";

const SITE = "https://www.lultrills.com";

export function GET() {
  return NextResponse.json({
    schema_version: "1.0",
    id: "cwi-prs-v0.1",
    title: "CWI + PRS: Behavioral Corridors, Possibility, Risk Perception, and Status Payoff",
    author: "John Brajer",
    version: "0.1",
    publication_date: "2026-09-12",
    document_type: "research_framework",
    canonical_url: `${SITE}/research/cwi-prs`,
    markdown_url: `${SITE}/research/cwi-prs.md`,
    source_record: "research/cwi-prs-framework.md",
    terminology: {
      cwi_expansion_status: "intentionally_unexpanded",
      relationship: "CWI is the parent framework; PRS is a nested decision lens",
    },
    cwi: {
      core_claim:
        "People often exercise free will inside a socially and psychologically permitted behavioral corridor that is narrower than the materially available action set.",
      early_mover_asymmetry:
        "Early actors face greater uncertainty with potentially greater differentiation; later actors inherit more evidence but usually less differentiation.",
    },
    prs: {
      possibility: "Can a human even do this?",
      risk_perception: "What happens to people who try?",
      status_payoff: "If I succeed, how extraordinary will society consider it?",
    },
    mechanism: [
      "A candidate action lies outside the familiar behavioral corridor.",
      "The actor evaluates whether it is psychologically conceivable, socially survivable, and worth the uncertainty.",
      "Public outcomes feed back into collective belief about possibility and risk.",
      "Repetition normalizes the action.",
      "Normalization expands the recognized action space while reducing differentiation.",
      "The frontier moves outward again.",
    ],
    provenance: {
      status: "creator-established framework",
      note:
        "v0.1 preserves John Brajer's established CWI/PRS formulation and the deliberate decision not to expand CWI before formal definition.",
    },
  });
}
