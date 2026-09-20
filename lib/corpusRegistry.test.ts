import { describe, expect, it } from "vitest";
import {
  buildCorpusRegistryIdentity,
  buildPublicMachineCorpusProjection,
  projectCorpusRegistryRecords,
  type CorpusRegistryInput,
} from "./corpusRegistry";

function record(
  id: string,
  overrides: Partial<CorpusRegistryInput> = {},
): CorpusRegistryInput {
  return {
    id,
    url: `https://www.lultrills.com/${id}`,
    title: id,
    kind: "doctrine",
    body: `body:${id}`,
    epistemicType: "doctrine",
    visibility: "public",
    machineReadable: true,
    includeInCorpus: true,
    currentAuthority: true,
    registrySource: "core",
    ...overrides,
  };
}

describe("registry-derived public machine corpus", () => {
  it("automatically includes eligible registered records and excludes private or disabled records", () => {
    const projected = projectCorpusRegistryRecords([
      record("eligible-new-record"),
      record("private-record", { visibility: "private" }),
      record("human-only-record", { machineReadable: false }),
      record("explicitly-excluded-record", { includeInCorpus: false }),
    ]);

    expect(projected.map((item) => item.id)).toEqual(["eligible-new-record"]);
  });

  it("keeps historical records out of the current machine projection", () => {
    const projected = projectCorpusRegistryRecords([
      record("historical-record", { currentAuthority: false }),
    ]);

    expect(projected).toHaveLength(0);
  });

  it("orders the projection deterministically and therefore stabilizes manifest identity", () => {
    const forward = projectCorpusRegistryRecords([record("b"), record("a")]);
    const reverse = projectCorpusRegistryRecords([record("a"), record("b")]);

    expect(forward.map((item) => item.id)).toEqual(["a", "b"]);
    expect(buildCorpusRegistryIdentity(forward)).toEqual(
      buildCorpusRegistryIdentity(reverse),
    );
  });

  it("keeps migrated editorial and duplicate aliases out of the current machine corpus", () => {
    const ids = new Set(buildPublicMachineCorpusProjection().map((item) => item.id));

    expect(ids.has("canon-really-that-magazine")).toBe(false);
    expect(ids.has("canon-really-that-magazine-audhd-insights")).toBe(false);
    expect(ids.has("canon-lultrills-frequently-asked-questions-2026")).toBe(false);
    expect(ids.has("canon-the-constitutional-update-2026-copy")).toBe(false);
    expect(ids.has("canon-frequently-asked-questions-about-lultrills-2026")).toBe(false);
    expect(ids.has("canon-the-constitutional-update-2026")).toBe(false);
    expect([...ids].some((id) => id.startsWith("canon-"))).toBe(false);
    expect(ids.has("injection-procedure")).toBe(false);
    expect(ids.has("systemic-cognitive-overwrites")).toBe(false);
  });

  it("fails closed on duplicate registry identities", () => {
    expect(() =>
      projectCorpusRegistryRecords([record("duplicate"), record("duplicate")]),
    ).toThrow("Duplicate corpus registry id: duplicate");
  });
});
