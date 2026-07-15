import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Cookies Policy | ${LEGAL.entity}`,
  description: `How ${LEGAL.entity} uses cookies and your choices.`,
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return <LegalDocument id="cookies" />;
}
