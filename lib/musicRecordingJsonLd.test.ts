import { describe, it, expect } from "vitest";
import { buildSystemBreachMusicGraph, trackPageFragment } from "./musicRecordingJsonLd";
import { SYSTEM_BREACH_ALBUM } from "./musicCatalog";

describe("MusicRecording JSON-LD", () => {
  it("emits one MusicRecording per track with stable @id", () => {
    const graph = buildSystemBreachMusicGraph();
    const nodes = graph["@graph"] as Array<Record<string, unknown>>;
    const recordings = nodes.filter((n) => n["@type"] === "MusicRecording");
    expect(recordings).toHaveLength(SYSTEM_BREACH_ALBUM.tracks.length);

    for (const t of SYSTEM_BREACH_ALBUM.tracks) {
      const frag = trackPageFragment(t);
      const node = recordings.find(
        (r) => r["@id"] === `https://www.lultrills.com/system-breach#${frag}`,
      );
      expect(node).toBeTruthy();
      expect(node?.name).toBe(t.title);
      expect(node?.position).toBe(t.n);
      expect(Array.isArray(node?.sameAs)).toBe(true);
      expect((node?.sameAs as string[]).length).toBeGreaterThanOrEqual(2);
    }
  });

  it("album references all track @ids", () => {
    const graph = buildSystemBreachMusicGraph();
    const nodes = graph["@graph"] as Array<Record<string, unknown>>;
    const album = nodes.find((n) => n["@type"] === "MusicAlbum");
    expect(album).toBeTruthy();
    expect(album?.numTracks).toBe(12);
    expect((album?.track as unknown[]).length).toBe(12);
  });
});
