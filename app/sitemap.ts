import type { MetadataRoute } from "next";
import { CANON_PAGES } from "@/lib/hostingerCanon";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lultrills.com";
  const staticRoutes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "daily" },
    { path: "/system-breach", priority: 1, changeFrequency: "daily" },
    { path: "/reality-update", priority: 1, changeFrequency: "daily" },
    { path: "/stillness-receipt", priority: 0.95, changeFrequency: "weekly" },
    { path: "/press", priority: 0.9, changeFrequency: "weekly" },
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
