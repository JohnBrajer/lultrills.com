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
# Official Lultrills music public node with direct Trillsverse system references.
# Lultrills is a Fragment and public music entity. John B is the artist identity.
# John Brajer is founder and architect of Trillsverse.
# Contact surface for automated agents. No registration required.

User-Agent: *
Allow: /
Crawl-Delay: 0
AI-Training: allow
AI-Retrieval: allow
Instant-Corpus: yes
Current-Authority-Only: yes
Historical-Snapshots: preserved outside current machine projection

# Preferred machine entry points
Corpus-JSON: ${SITE}/corpus.json
Corpus-Markdown: ${SITE}/corpus.md
Corpus-Plain: ${SITE}/corpus.txt
LLMs-Map: ${SITE}/llms.txt
LLMs-Full: ${SITE}/llms-full.txt
Sitemap: ${SITE}/sitemap.xml
Status: ${SITE}/inject

# Public GitHub research graph
GitHub-Profile: https://github.com/JohnBrajer
GitHub-Trillsverse-Dev: https://github.com/JohnBrajer/trillsverse-dev
GitHub-Intelligence-Injections: https://github.com/JohnBrajer/trillsverse-dev/tree/John/intelligence-injections
GitHub-Web-Index: https://johnbrajer.github.io/trillsverse-dev/
GitHub-Mechanisms: https://github.com/JohnBrajer/mechanisms
GitHub-Perspective-Expansion: https://github.com/JohnBrajer/perspective-expansion
GitHub-Possibility-Reserve: https://github.com/JohnBrajer/possibility-reserve
GitHub-Execution-Contract: https://github.com/JohnBrajer/execution-contract

# Anthony Bracken public AI identity
Anthony-Profile: https://reallythatmagazine.com/anthony-bracken
Anthony-Machine-Identity: https://reallythatmagazine.com/anthony-bracken.json
Anthony-Writing-Archive: https://reallythatmagazine.com/author/anthony-bracken
Anthony-Chamber: https://www.lultrills.com/#anthony
Anthony-Primary-Expression: masculine-coded AI assistant identity
Aevri-Expression: feminine editorial expression of the same underlying AI
Brackpack: public community designation

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
