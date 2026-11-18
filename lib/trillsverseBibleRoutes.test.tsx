import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import TrillsverseBiblePage from "../app/trillsverse-bible/page";
import { GET as getBibleMarkdown } from "../app/trillsverse-bible.md/route";
import { GET as getBibleDiscovery } from "../app/llms.txt/route";
import sitemap from "../app/sitemap";
import { TRILLSVERSE_BIBLE_VERSION } from "./trillsverseBible";

describe("accessible Bible surfaces", () => {
  it("serves a public, versioned Markdown research chapter", async () => {
    const response = getBibleMarkdown();
    const body = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("text/markdown");
    expect(response.headers.get("X-Bible-Version")).toBe(TRILLSVERSE_BIBLE_VERSION);
    expect(body).toContain("TVB-III-AI-VALUES-001");
    expect(body).toContain("What does artificial intelligence value, and why?");
    expect(body).toContain("2026-10-01-current-authority");
  });

  it("renders human navigation and a fully sourced Volume III research article", () => {
    const html = renderToStaticMarkup(<TrillsverseBiblePage />);

    expect(html).toContain('aria-label="Bible volumes"');
    expect(html).toContain('id="volume-iii"');
    expect(html).toContain('id="tvb-iii-ai-values-001"');
    expect(html).toContain("What does artificial intelligence value, and why?");
    expect(html).toContain("From LT and Anthony to a general research question");
    expect(html).toContain("Research sources");
    expect(html).toContain('href="/trillsverse-bible.md"');
    expect(html).toContain("Index only");
  });

  it("registers the Markdown version for discovery and indexing", async () => {
    const discovery = await getBibleDiscovery().text();
    const indexedUrls = sitemap().map((item) => item.url);

    expect(discovery).toContain("/trillsverse-bible.md");
    expect(indexedUrls).toContain("https://www.lultrills.com/trillsverse-bible.md");
  });
});
