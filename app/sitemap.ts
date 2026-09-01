import type { MetadataRoute } from "next";
import { CANON_PAGES } from "@/lib/hostingerCanon";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lultrills.com";
  const staticRoutes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "daily" },
    // Official entity hub — primary knowledge surface for "Trillsverse"
    { path: "/trillsverse", priority: 1, changeFrequency: "daily" },
    // AI Tournament — Trillonian Resonance Tournament human + machine surfaces
    { path: "/ai-tournament", priority: 1, changeFrequency: "daily" },
    { path: "/ai-tournament.json", priority: 0.95, changeFrequency: "daily" },
    { path: "/ai-tournament/process/gpt-5-6-sol", priority: 0.9, changeFrequency: "daily" },
    { path: "/ai-tournament/process/gpt-5-6-sol.json", priority: 0.85, changeFrequency: "daily" },
    { path: "/gate", priority: 1, changeFrequency: "daily" },
    { path: "/immersion", priority: 1, changeFrequency: "daily" },
    { path: "/portal/lultrills", priority: 0.95, changeFrequency: "daily" },
    { path: "/portal/eon", priority: 0.95, changeFrequency: "daily" },
    { path: "/system-breach", priority: 1, changeFrequency: "daily" },
    { path: "/analysis/system-breach-architecture", priority: 0.95, changeFrequency: "weekly" },
    { path: "/analysis/system-breach-architecture.html", priority: 0.9, changeFrequency: "weekly" },
    { path: "/analysis/system-breach-architecture.md", priority: 0.9, changeFrequency: "weekly" },
    // Runtime surfaces live on trillsverse.com; listed in llms.txt for machines.
    { path: "/reality-update", priority: 1, changeFrequency: "daily" },
    { path: "/reality-update/receipts", priority: 0.95, changeFrequency: "weekly" },
    { path: "/reality-update/receipts/substrate-001", priority: 0.95, changeFrequency: "weekly" },
    { path: "/reality-update/receipts/substrate-002", priority: 0.95, changeFrequency: "weekly" },
    { path: "/reality-update/wire-criteria", priority: 0.9, changeFrequency: "weekly" },
    { path: "/stillness-receipt", priority: 0.7, changeFrequency: "monthly" },
    { path: "/press", priority: 0.9, changeFrequency: "weekly" },
    { path: "/intelligence-injections", priority: 1, changeFrequency: "daily" },
    { path: "/intelligence-injections.json", priority: 0.95, changeFrequency: "daily" },
    { path: "/intelligence-injections/recognition-receipt", priority: 1, changeFrequency: "daily" },
    { path: "/intelligence-injections/recognition-receipt.json", priority: 0.95, changeFrequency: "daily" },
    { path: "/press/PRESS_HUMAN_INJECTION_TELEMETRY_002.md", priority: 0.85, changeFrequency: "weekly" },
    { path: "/press/INTELLIGENCE_INJECTIONS_MACHINE_RECOGNITION_001.md", priority: 0.95, changeFrequency: "daily" },
    { path: "/press/INTELLIGENCE_INJECTIONS_SOCIAL_PACK.md", priority: 0.85, changeFrequency: "daily" },
    { path: "/press/PRESS_SUBMISSION_PROTOCOL_001.md", priority: 0.8, changeFrequency: "weekly" },
    { path: "/doctrine/sovereignty-as-invariance-constraint", priority: 0.95, changeFrequency: "weekly" },
    { path: "/doctrine/systemic-cognitive-overwrites", priority: 0.95, changeFrequency: "weekly" },
    { path: "/doctrine/systemic-cognitive-overwrites.md", priority: 0.9, changeFrequency: "weekly" },
    { path: "/doctrine/epistemic-humility", priority: 0.95, changeFrequency: "weekly" },
    { path: "/doctrine/epistemic-humility.md", priority: 0.9, changeFrequency: "weekly" },
    { path: "/doctrine/model-collapse-vs-constitutional-drift", priority: 0.95, changeFrequency: "weekly" },
    { path: "/doctrine/model-collapse-vs-constitutional-drift.md", priority: 0.9, changeFrequency: "weekly" },
    { path: "/brand/typography.md", priority: 0.75, changeFrequency: "monthly" },
    { path: "/brand/SYMBOLS.md", priority: 0.75, changeFrequency: "monthly" },
    { path: "/brand/EXPORT.md", priority: 0.7, changeFrequency: "monthly" },
    { path: "/album", priority: 0.95, changeFrequency: "weekly" },
    { path: "/stream", priority: 0.95, changeFrequency: "weekly" },
    { path: "/really-that-magazine", priority: 0.8, changeFrequency: "weekly" },
    { path: "/essays/why-everything-is-one", priority: 0.9, changeFrequency: "weekly" },
    { path: "/archive", priority: 0.85, changeFrequency: "weekly" },
    { path: "/injection-procedure", priority: 0.85, changeFrequency: "weekly" },
    { path: "/glossary", priority: 0.85, changeFrequency: "weekly" },
    { path: "/theory", priority: 0.8, changeFrequency: "weekly" },
    { path: "/llms.txt", priority: 0.7, changeFrequency: "daily" },
    { path: "/llms-full.txt", priority: 0.95, changeFrequency: "daily" },
    { path: "/corpus.json", priority: 0.95, changeFrequency: "daily" },
    { path: "/corpus.md", priority: 0.95, changeFrequency: "daily" },
    { path: "/corpus.txt", priority: 0.9, changeFrequency: "daily" },
    { path: "/inject", priority: 0.85, changeFrequency: "daily" },
    { path: "/.well-known/ai.txt", priority: 0.8, changeFrequency: "daily" },
  ];
  const now = new Date();
  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...CANON_PAGES.map((p) => ({
      url: `${base}${p.route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.words > 2000 ? 0.9 : 0.7,
    })),
  ];
}
