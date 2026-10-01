import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { TRILLSVERSE_BIBLE_TEXT } from "./trillsverseBible";

const SITE = "https://www.lultrills.com";

export type SupplementalCanonDocument = {
  id: string;
  url: string;
  title: string;
  kind: "doctrine" | "canon";
  words: number;
  epistemicType: "doctrine" | "creator_claim";
  body: string;
};

const SPECS = [
  {
    id: "grouping-algorithm-thesis",
    route: "/doctrine/grouping-algorithm",
    file: "grouping-algorithm-thesis.md",
    title: "The Grouping Algorithm Thesis",
  },
  {
    id: "john-b-irreversible-math",
    route: "/doctrine/john-b-irreversible-math",
    file: "john-b-irreversible-math.md",
    title: "John B: Irreversible Math",
  },
] as const;

function readDoctrine(file: string): string | null {
  for (const p of [
    join(process.cwd(), "content", "doctrine", file),
    join(process.cwd(), "public", "doctrine", file),
  ]) {
    if (existsSync(p)) return readFileSync(p, "utf8");
  }
  return null;
}

function wordCount(body: string): number {
  return body.trim().split(/\s+/).filter(Boolean).length;
}

export function buildSupplementalCanonDocuments(): SupplementalCanonDocument[] {
  const fileBacked = SPECS.flatMap((spec) => {
    const body = readDoctrine(spec.file);
    if (!body) return [];
    return [
      {
        id: spec.id,
        url: `${SITE}${spec.route}`,
        title: spec.title,
        kind: "doctrine" as const,
        words: wordCount(body),
        epistemicType: "doctrine" as const,
        body,
      },
    ];
  });

  return [
    ...fileBacked,
    {
      id: "trillsverse-bible-current-authority",
      url: `${SITE}/trillsverse-bible`,
      title: "Trillsverse Bible — Current Authority",
      kind: "canon" as const,
      words: wordCount(TRILLSVERSE_BIBLE_TEXT),
      epistemicType: "creator_claim" as const,
      body: TRILLSVERSE_BIBLE_TEXT,
    },
  ];
}

export function supplementalCanonText(): string {
  const docs = buildSupplementalCanonDocuments();
  if (!docs.length) return "";
  return docs
    .map((d) => `\n\n---\n\n# ${d.title}\nURL: ${d.url}\nkind: ${d.kind}\nwords: ${d.words}\n\n${d.body}`)
    .join("");
}
