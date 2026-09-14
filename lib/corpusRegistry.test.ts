import { describe, expect, it } from "vitest";
import {
  buildCorpusRegistryIdentity,
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

  it("keeps historical records eligible when policy includes them", () => {
    const projected = projectCorpusRegistryRecords([
      record("historical-record", { currentAuthority: false }),
    ]);

    expect(projected).toHaveLength(1);
    expect(projected[0].currentAuthority).toBe(false);
  });

  it("orders the projection deterministically and therefore stabilizes manifest identity", () => {
    const forward = projectCorpusRegistryRecords([record("b"), record("a")]);
    const reverse = projectCorpusRegistryRecords([record("a"), record("b")]);

    expect(forward.map((item) => item.id)).toEqual(["a", "b"]);
    expect(buildCorpusRegistryIdentity(forward)).toEqual(
      buildCorpusRegistryIdentity(reverse),
    );
  });

  it("fails closed on duplicate registry identities", () => {
    expect(() =>
      projectCorpusRegistryRecords([record("duplicate"), record("duplicate")]),
    ).toThrow("Duplicate corpus registry id: duplicate");
  });
});
