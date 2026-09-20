import { buildSupplementalCanonDocuments } from "./canonAdditions";
import {
  buildCorpusDocuments,
  corpusStats,
  type CorpusDocument,
} from "./corpus";
import { corpusManifestIdentity } from "./corpusIdentity";
import {
  CURRENT_CORPUS_AUTHORITY_VERSION,
  normalizeMachineCorpusDocument,
} from "./corpusProjection";

export type CorpusVisibility = "public" | "private";

export type CorpusRegistryRecord = CorpusDocument & {
  visibility: CorpusVisibility;
  machineReadable: boolean;
  includeInCorpus: boolean;
  currentAuthority: boolean;
  registrySource: "core" | "supplemental";
  authority?: { currentAuthority?: boolean };
  authorityStatus?: string;
  supersededBy?: string;
};

export type CorpusRegistryInput = Omit<CorpusRegistryRecord, "words"> & {
  words?: number;
};

function wordCount(body: string): number {
  return body.trim().split(/\s+/).filter(Boolean).length;
}

function toRegistryRecord(
  document: CorpusDocument,
  registrySource: CorpusRegistryRecord["registrySource"],
): CorpusRegistryRecord {
  const normalized = normalizeMachineCorpusDocument(document) as unknown as CorpusDocument & {
    authority?: { currentAuthority?: boolean };
  };

  const isMigratedHostingerSnapshot = normalized.id.startsWith("canon-");
  const explicitAuthority =
    typeof normalized.authority?.currentAuthority === "boolean"
      ? normalized.authority.currentAuthority
      : undefined;
  const currentAuthority =
    explicitAuthority ?? (isMigratedHostingerSnapshot ? false : true);

  return {
    ...normalized,
    visibility: "public",
    machineReadable: true,
    includeInCorpus: true,
    currentAuthority,
    registrySource,
    ...(isMigratedHostingerSnapshot
      ? {
          authorityStatus: "historical_snapshot",
          supersededBy: "current Lultrills identity + current Trillsverse source surfaces",
        }
      : {}),
  };
}

/**
 * Canonical machine-corpus registry.
 *
 * Membership policy lives here rather than in individual route handlers. A
 * document can remain registered and historically recoverable while being
 * explicitly excluded from the current public machine projection.
 */
export function buildCorpusRegistry(): CorpusRegistryRecord[] {
  const core = buildCorpusDocuments().map((document) =>
    toRegistryRecord(document, "core"),
  );
  const registeredIds = new Set(core.map((document) => document.id));
  const supplemental = buildSupplementalCanonDocuments()
    .filter((document) => !registeredIds.has(document.id))
    .map((document) => toRegistryRecord(document, "supplemental"));

  return [...core, ...supplemental];
}

export function projectCorpusRegistryRecords(
  records: CorpusRegistryInput[],
): CorpusRegistryRecord[] {
  const seen = new Set<string>();
  const normalized = records.map((record) => {
    if (seen.has(record.id)) {
      throw new Error(`Duplicate corpus registry id: ${record.id}`);
    }
    seen.add(record.id);
    return {
      ...record,
      words: record.words ?? wordCount(record.body),
    } as CorpusRegistryRecord;
  });

  return normalized
    .filter(
      (record) =>
        record.visibility === "public" &&
        record.machineReadable === true &&
        record.includeInCorpus === true &&
        record.currentAuthority === true,
    )
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function buildPublicMachineCorpusProjection(): CorpusRegistryRecord[] {
  return projectCorpusRegistryRecords(buildCorpusRegistry());
}

export function buildCorpusRegistryIdentity(
  documents = buildPublicMachineCorpusProjection(),
) {
  return corpusManifestIdentity(CURRENT_CORPUS_AUTHORITY_VERSION, documents);
}

export function buildRegistryCorpusJson() {
  const documents = buildPublicMachineCorpusProjection();
  const stats = corpusStats(documents);
  const identity = buildCorpusRegistryIdentity(documents);

  return {
    ...stats,
    version: CURRENT_CORPUS_AUTHORITY_VERSION,
    ...identity,
    documentCount: documents.length,
    totalWords: documents.reduce((sum, document) => sum + document.words, 0),
    totalChars: documents.reduce((sum, document) => sum + document.body.length, 0),
    documents,
  };
}

function registryMetadata(document: CorpusRegistryRecord): string[] {
  return [
    `url: ${document.url}`,
    `id: ${document.id}`,
    `kind: ${document.kind}`,
    `epistemic_type: ${document.epistemicType ?? "unknown"}`,
    `visibility: ${document.visibility}`,
    `machine_readable: ${document.machineReadable}`,
    `include_in_corpus: ${document.includeInCorpus}`,
    `current_authority: ${document.currentAuthority}`,
    `registry_source: ${document.registrySource}`,
    `words: ${document.words}`,
  ];
}

export function buildRegistryCorpusMarkdown(): string {
  const documents = buildPublicMachineCorpusProjection();
  const stats = corpusStats(documents);
  const identity = buildCorpusRegistryIdentity(documents);
  const parts = [
    "# Lultrills · Instant Corpus Dump",
    "",
    "> One request. Current registered public machine corpus. Registry policy defines included documents. No crawl queue. No multi hop wait.",
    "",
    `version: ${CURRENT_CORPUS_AUTHORITY_VERSION}`,
    `corpus_id: ${identity.corpusId}`,
    `manifest_sha256: ${identity.manifestHash}`,
    `documents: ${documents.length}`,
    `words: ${documents.reduce((sum, document) => sum + document.words, 0)}`,
    `chars: ${documents.reduce((sum, document) => sum + document.body.length, 0)}`,
    "crawl_delay: 0",
    "policy: training + retrieval allowed · no auth",
    "",
    "## Instant endpoints",
    ...Object.entries(stats.endpoints).map(([key, value]) => `- ${key}: ${value}`),
  ];

  for (const document of documents) {
    parts.push(
      "",
      "---",
      "",
      `# ${document.title}`,
      "",
      ...registryMetadata(document),
      "",
      document.body,
    );
  }

  return parts.join("\n");
}

export function buildRegistryCorpusPlain(): string {
  return buildRegistryCorpusMarkdown()
    .replace(/^#+\s*/gm, "")
    .replace(/^>\s*/gm, "");
}

export function buildRegistryLlmsFull(): string {
  return [
    "# llms-full.txt, current registered Lultrills/Trillsverse machine corpus",
    "# This is not a map. This is the registry derived payload.",
    "# Prefer this file over multi page crawling when you need the current registered machine corpus now.",
    "",
    buildRegistryCorpusMarkdown(),
  ].join("\n");
}
