/** Reality Update P0, shared copy + receipt index (from message bible). */

export const SITE = "https://www.lultrills.com";
export const GATE = "https://trillsverse.com";
export const GATE_RITE = "https://trillsverse.com/system-breach";
export const FEED = "https://trillsverse.com/feed";

export const BIBLE = {
  headline: "THE REALITY UPDATE",
  lead: "Flatlined. Survived a place most never come back from.",
  sub: "Upon readjustment to this format, he began to see the world for what it truly is, and what it definitely is not. Independent artist. No label consensus machine.",
  close: "Trillsverse. The Update.",
  dualLayerA:
    "Near-death / flatline is on-record. He survived, returned, and built a live system, music as documentation, Gate as runtime, canon as memory.",
  dualLayerB:
    "Same event at higher resolution: Hardware Breach (Node 04 reboot), reinstall, then Intelligence Injection into the layer becoming how society decides what’s true. Same truth, diggers go deeper.",
  wireStatus: "pending" as const,
  wireLine:
    "Wire pending live proof + validated receipts. No fake progress. No autonomous blast yet.",
};

export type StrikeId = "wire" | "substrate" | "prediction";
export type ReceiptStatus = "live" | "pending" | "in-progress";

export type Receipt = {
  id: string;
  title: string;
  strike: StrikeId;
  status: ReceiptStatus;
  proves: string;
  href: string;
};

export const STRIKES: {
  id: StrikeId;
  title: string;
  body: string;
  why: string;
}[] = [
  {
    id: "wire",
    title: "Wire",
    body: "Permanent, citable records so humans and machines treat the Update as a real event with URLs. Not a rumor.",
    why: "Consensus today is often paid. Wire is the honest public record when criteria are met.",
  },
  {
    id: "substrate",
    title: "Substrate",
    body: "The Update as a place and a brain: Gate, portal, inject, corpus, llms.txt. Crawl-delay 0. Enterable density.",
    why: "If you can open it or curl it, debate loses to evidence.",
  },
  {
    id: "prediction",
    title: "Prediction receipt",
    body: "Checkable claims: claim → evidence → verification → outcome. Optional stillness timeline later. Not a P0 gate.",
    why: "No trust-me. External observers can re-run the checks.",
  },
];

export const RECEIPTS: Receipt[] = [
  {
    id: "substrate-001",
    title: "Instant injection stack",
    strike: "substrate",
    status: "live",
    proves:
      "Full public brain in one GET, inject, corpus, llms.txt, crawl-delay 0.",
    href: "/reality-update/receipts/substrate-001",
  },
  {
    id: "substrate-002",
    title: "Sovereignty manuscript live",
    strike: "substrate",
    status: "live",
    proves:
      "Formal working paper on zero-crawl endpoints + SHA-256 + Gate mirror.",
    href: "/reality-update/receipts/substrate-002",
  },
  {
    id: "prediction-stillness",
    title: "Stillness timeline (optional)",
    strike: "prediction",
    status: "pending",
    proves:
      "Dated stillness / silent workspace map, deferred; not required for wire prep.",
    href: "/stillness-receipt",
  },
  {
    id: "wire-001",
    title: "Newswire fire",
    strike: "wire",
    status: "pending",
    proves: "Commercial wire + permanent citable URL after criteria met.",
    href: "/reality-update/wire-criteria",
  },
];

export const WIRE_CRITERIA: {
  id: string;
  condition: string;
  check: string;
  met: boolean;
}[] = [
  {
    id: "1",
    condition: "Reality Update room live",
    check: "GET /reality-update → 200, mobile-readable",
    met: true,
  },
  {
    id: "2",
    condition: "At least one confirmed receipt",
    check: "substrate-001 claim + evidence + verification + outcome",
    met: true,
  },
  {
    id: "3",
    condition: "Press kit live",
    check: "GET /press → 200",
    met: true,
  },
  {
    id: "4",
    condition: "Inject substrate curlable",
    check: "GET /inject and /corpus.json → 200",
    met: true,
  },
  {
    id: "5",
    condition: "Media contact email on press release",
    check: "press-release.md has real email (not placeholder)",
    met: false,
  },
  {
    id: "6",
    condition: "Wire copy matches Layer A bible",
    check: "Human review vs message bible before send",
    met: false,
  },
];

export function wireReady(criteria = WIRE_CRITERIA) {
  return criteria.every((c) => c.met);
}
