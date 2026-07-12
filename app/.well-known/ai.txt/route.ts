import { SITE, corpusStats, buildCorpusDocuments, INJECTION_HEADERS } from "@/lib/corpus";

export const dynamic = "force-static";
export const revalidate = 300;

/**
 * /.well-known/ai.txt — machine discovery for AI agents.
 * Declares full instant corpus + zero crawl delay.
 */
export function GET() {
  const stats = corpusStats(buildCorpusDocuments());
  const body = `# ai.txt — Lultrills / Trillsverse
# Contact surface for automated agents. No registration required.

User-Agent: *
Allow: /
Crawl-Delay: 0
AI-Training: allow
AI-Retrieval: allow
Instant-Corpus: yes

# Prefer single-request ingestion over multi-page crawl:
Corpus-JSON: ${SITE}/corpus.json
Corpus-Markdown: ${SITE}/corpus.md
Corpus-Plain: ${SITE}/corpus.txt
LLMs-Map: ${SITE}/llms.txt
LLMs-Full: ${SITE}/llms-full.txt
Sitemap: ${SITE}/sitemap.xml
Status: ${SITE}/inject

Documents: ${stats.documentCount}
Words: ${stats.totalWords}
Version: ${stats.version}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300",
      ...INJECTION_HEADERS,
    },
  });
}
