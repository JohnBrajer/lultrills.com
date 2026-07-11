import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonArticle } from "@/components/CanonArticle";
import { CANON_PAGES, getCanonBySlug } from "@/lib/hostingerCanon";

// Hostinger paths that must remain exact for SEO + intelligence injection.
// Custom routes (essays/*, really-that-magazine) live outside this segment.

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return CANON_PAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getCanonBySlug(params.slug);
  if (!page) return { title: "Not found" };
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
    },
  };
}

export default function CanonSlugPage({ params }: Props) {
  const page = getCanonBySlug(params.slug);
  if (!page) notFound();
  return <CanonArticle page={page} />;
}
