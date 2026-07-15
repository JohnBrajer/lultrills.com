import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Copyright & DMCA | ${LEGAL.entity}`,
  description: `Copyright and DMCA notice procedure for ${LEGAL.entity}.`,
  robots: { index: true, follow: true },
};

export default function CopyrightPage() {
  return <LegalDocument id="copyright" />;
}
