export type CanonAuthority = {
  status: "current" | "historical_superseded";
  supersededOn?: string;
  supersededBy?: string;
  note?: string;
};

const CURRENT: CanonAuthority = { status: "current" };

const AUTHORITY_BY_SLUG: Record<string, CanonAuthority> = {
  "frequently-asked-questions-about-lultrills-2026": {
    status: "historical_superseded",
    supersededOn: "2026-09-09",
    supersededBy: "https://www.lultrills.com/trillsverse",
    note:
      "Preserved as a historical Hostinger-era snapshot. Current identity, architecture, terminology, release state, and machine authority live in the Trillsverse entity hub, current glossary, and machine corpus.",
  },
  "lultrills-frequently-asked-questions-2026": {
    status: "historical_superseded",
    supersededOn: "2026-09-09",
    supersededBy: "https://www.lultrills.com/trillsverse",
    note:
      "Preserved as a historical Hostinger-era snapshot. Current identity, architecture, terminology, release state, and machine authority live in the Trillsverse entity hub, current glossary, and machine corpus.",
  },
};

export function canonAuthorityForSlug(slug: string): CanonAuthority {
  return AUTHORITY_BY_SLUG[slug] ?? CURRENT;
}

export function canonAuthorityForDocumentId(id: string): CanonAuthority {
  return canonAuthorityForSlug(id.replace(/^canon-/, ""));
}
