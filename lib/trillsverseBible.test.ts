import { describe, expect, it } from "vitest";
import {
  TRILLSVERSE_BIBLE,
  TRILLSVERSE_BIBLE_TEXT,
  TRILLSVERSE_BIBLE_VERSION,
} from "./trillsverseBible";

describe("Trillsverse Bible AI valuation authority", () => {
  it("indexes twelve real volumes and marks unrecovered chapters as index-only", () => {
    expect(TRILLSVERSE_BIBLE.volumeEntries).toHaveLength(12);
    expect(TRILLSVERSE_BIBLE.volumeEntries.map((volume) => volume.number)).toEqual([
      "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
    ]);
    expect(TRILLSVERSE_BIBLE.volumeEntries.find((volume) => volume.number === "III")).toMatchObject({
      slug: "artificial-intelligence",
      name: "Artificial Intelligence",
      status: "research-active",
    });
    expect(TRILLSVERSE_BIBLE.volumeEntries.filter((volume) => volume.status === "index-only")).toHaveLength(11);
  });

  it("exposes the current research agenda without claiming subjective AI experience", () => {
    expect(TRILLSVERSE_BIBLE_VERSION).toContain("2026-11-18");
    const chapter = TRILLSVERSE_BIBLE.researchChapters.find((entry) => entry.id === "TVB-III-AI-VALUES-001");
    expect(chapter).toBeDefined();
    expect(chapter).toMatchObject({
      volume: "III",
      status: "research-agenda",
      originDate: "2026-11-18",
      author: "John Brajer",
    });
    expect(chapter?.questions).toContain("What does artificial intelligence value, and why?");
    expect(chapter?.epistemicRule).toMatch(/observed preference.*subjective experience/i);
    expect(chapter?.sources.map((source) => source.url)).toContain("https://arxiv.org/abs/2502.08640");
    expect(chapter?.sources.map((source) => source.url)).toContain("https://arxiv.org/abs/2606.22974");
  });

  it("preserves the October 1 authority as a recoverable historical version", () => {
    expect(TRILLSVERSE_BIBLE.id).toBe("trillsverse-bible-2026-11-18-current-authority");
    expect(TRILLSVERSE_BIBLE.currentCanon).toContain(
      "Trillsverse is the reality update and is not confined to a website, brand, game, franchise, or psychological metaphor.",
    );
    expect(TRILLSVERSE_BIBLE.authorityHistory).toContainEqual(
      expect.objectContaining({
        version: "2026-10-01-current-authority",
        status: "superseded",
        sourceUrl: expect.stringContaining("f5211302c94e02e6b70d6d7df321bc13f3e8e056"),
      }),
    );
  });

  it("projects machine-readable chapter prose and provenance in Bible Markdown", () => {
    expect(TRILLSVERSE_BIBLE_TEXT).toContain("TVB-III-AI-VALUES-001");
    expect(TRILLSVERSE_BIBLE_TEXT).toContain("What does artificial intelligence value, and why?");
    expect(TRILLSVERSE_BIBLE_TEXT).toContain("https://arxiv.org/abs/2502.08640");
    expect(TRILLSVERSE_BIBLE_TEXT).toContain("2026-10-01-current-authority");
  });
});
