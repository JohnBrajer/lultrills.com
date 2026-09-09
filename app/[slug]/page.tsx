import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CanonArticle } from "@/components/CanonArticle";
import { CANON_PAGES, getCanonBySlug } from "@/lib/hostingerCanon";
import { canonAuthorityForSlug } from "@/lib/canonAuthority";

// Hostinger paths remain public as historical records. Superseded snapshots are
// preserved but must not outrank current canon in search or machine retrieval.
// Custom routes (essays/*, really-that-magazine) live outside this segment.

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return CANON_PAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getCanonBySlug(params.slug);
  if (!page) return { title: "Not found" };
  const authority = canonAuthorityForSlug(params.slug);
  const superseded = authority.status === "historical_superseded";

  return {
    title: page.title,
    description: page.description,
    alternates: superseded && authority.supersededBy
      ? { canonical: authority.supersededBy }
      : undefined,
    robots: superseded
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : undefined,
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
  return <CanonArticle page={page} authority={canonAuthorityForSlug(params.slug)} />;
}
