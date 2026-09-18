import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { CanonArticle } from "@/components/CanonArticle";
import { CANON_PAGES, getCanonBySlug } from "@/lib/hostingerCanon";

// Preserved Hostinger-era source paths. These remain crawlable for continuity,
// but their wrapper explicitly marks them as historical snapshots rather than current state.
// Custom current routes live outside this segment.

const LEGACY_REDIRECTS: Record<string, string> = {
  "lultrills-frequently-asked-questions-2026": "/frequently-asked-questions-about-lultrills-2026",
  "really-that-magazine-audhd-insights":
    "https://reallythatmagazine.com/article/understanding-audhd-and-neurodivergence",
  "the-constitutional-update-2026-copy": "/the-constitutional-update-2026",
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CANON_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getCanonBySlug(slug);
  if (!page) return { title: "Not found" };
  const description = `Historical Lultrills source snapshot preserved for continuity. Time-sensitive claims reflect the original page state. ${page.description}`;
  return {
    title: `${page.title.split("|")[0].trim()} | Historical Lultrills Archive`,
    description,
    robots: { index: true, follow: true },
    openGraph: {
      title: `${page.title.split("|")[0].trim()} | Historical Lultrills Archive`,
      description,
      type: "article",
    },
  };
}

export default async function CanonSlugPage({ params }: Props) {
  const { slug } = await params;
  const redirectTarget = LEGACY_REDIRECTS[slug];
  if (redirectTarget) permanentRedirect(redirectTarget);
  const page = getCanonBySlug(slug);
  if (!page) notFound();
  return <CanonArticle page={page} />;
}
