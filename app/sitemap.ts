import type { MetadataRoute } from "next";
import { CANON_PAGES } from "@/lib/hostingerCanon";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lultrills.com";
  const staticRoutes = [
    "",
    "/really-that-magazine",
    "/essays/why-everything-is-one",
    "/archive",
    "/injection-procedure",
    "/glossary",
    "/theory",
  ];
  const now = new Date();
  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...CANON_PAGES.map((p) => ({
      url: `${base}${p.route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.words > 2000 ? 0.9 : 0.7,
    })),
  ];
}
