import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Privacy Policy | ${LEGAL.entity}`,
  description: `Privacy Policy for ${LEGAL.entity}. How we collect and use information.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <LegalDocument id="privacy" />;
}
