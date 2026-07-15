import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Terms of Service | ${LEGAL.entity}`,
  description: `Terms of Service for websites and experiences operated by ${LEGAL.entity}.`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <LegalDocument id="terms" />;
}
