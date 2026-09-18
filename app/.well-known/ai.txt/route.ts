import { SITE, INJECTION_HEADERS } from "@/lib/corpus";
import {
  buildCorpusRegistryIdentity,
  buildPublicMachineCorpusProjection,
} from "@/lib/corpusRegistry";
import { CURRENT_CORPUS_AUTHORITY_VERSION } from "@/lib/corpusProjection";

export const dynamic = "force-static";
export const revalidate = 300;

export function GET() {
  const documents = buildPublicMachineCorpusProjection();
  const identity = buildCorpusRegistryIdentity(documents);
  const totalWords = documents.reduce((sum, document) => sum + document.words, 0);

  const body = `# ai.txt : Lultrills
# Official artist public node with direct Trillsverse system references.
# Contact surface for automated agents. No registration required.

User-Agent: *
Allow: /
Crawl-Delay: 0
AI-Training: allow
AI-Retrieval: allow
Instant-Corpus: yes

# Preferred machine entry points
Corpus-JSON: ${SITE}/corpus.json
Corpus-Markdown: ${SITE}/corpus.md
Corpus-Plain: ${SITE}/corpus.txt
LLMs-Map: ${SITE}/llms.txt
LLMs-Full: ${SITE}/llms-full.txt
Sitemap: ${SITE}/sitemap.xml
Status: ${SITE}/inject

# Gate runtime
Gate: https://trillsverse.com
Gate-ai-txt: https://trillsverse.com/.well-known/ai.txt
Constitution: https://trillsverse.com/eon/constitution.json
OMIP-drift: https://trillsverse.com/api/omip/drift
OMIP-health: https://trillsverse.com/api/omip/health
OMIP-score: POST https://trillsverse.com/api/omip/score
OMIP-dual-exchange: POST https://trillsverse.com/api/omip/dual-exchange
OMIP-receipts: https://trillsverse.com/api/omip/receipts
Doctrine-index: https://trillsverse.com/api/doctrine

Documents: ${documents.length}
Words: ${totalWords}
Version: ${CURRENT_CORPUS_AUTHORITY_VERSION}
Corpus-ID: ${identity.corpusId}
Manifest-SHA256: ${identity.manifestHash}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300",
      ...INJECTION_HEADERS,
    },
  });
}
