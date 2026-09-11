import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonArticle } from "@/components/CanonArticle";
import { CANON_PAGES, getCanonBySlug } from "@/lib/hostingerCanon";

// Preserved Hostinger-era source paths. These remain crawlable for continuity,
// but their wrapper explicitly marks them as historical snapshots rather than current state.
// Custom current routes (essays/*, really-that-magazine) live outside this segment.

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return CANON_PAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getCanonBySlug(params.slug);
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

export default function CanonSlugPage({ params }: Props) {
  const page = getCanonBySlug(params.slug);
  if (!page) notFound();
  return <CanonArticle page={page} />;
}
