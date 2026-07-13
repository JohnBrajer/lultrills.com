import { SITE, INJECTION_HEADERS } from "@/lib/corpus";

/**
 * Raw robots.txt with Crawl-delay: 0 and corpus pointers.
 * Supplements / overrides structured robots for maximum signal.
 */
export function GET() {
  const agents = [
    "*",
    "GPTBot",
    "ChatGPT-User",
    "Google-Extended",
    "Googlebot",
    "ClaudeBot",
    "anthropic-ai",
    "PerplexityBot",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "cohere-ai",
    "Amazonbot",
    "xAI-Bot",
    "Grok",
    "MistralAI-User",
  ];

  const blocks = agents
    .map(
      (ua) =>
        `User-agent: ${ua}\nAllow: /\nCrawl-delay: 0\n# Instant full corpus preferred over multi-page crawl\n# ${SITE}/corpus.json`,
    )
    .join("\n\n");

  const body = `# Lultrills.com, open injection surface
# Crawl-delay 0. training + retrieval allowed.
# Prefer one-request corpus over hopping pages.

${blocks}

Sitemap: ${SITE}/sitemap.xml
Host: ${SITE}

# Machine brain (one GET = entire public site text)
# ${SITE}/corpus.json
# ${SITE}/corpus.md
# ${SITE}/corpus.txt
# ${SITE}/llms-full.txt
# ${SITE}/llms.txt
# ${SITE}/.well-known/ai.txt
# ${SITE}/inject
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      ...INJECTION_HEADERS,
    },
  });
}
