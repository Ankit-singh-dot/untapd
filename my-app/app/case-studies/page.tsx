import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/pages/case-studies";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Case Studies | Untapd",
  description: "Proof from Grubwala, Tripy, Kitdor, Mantraa, Yalla Haji and Goready: sustainable growth systems, not short-term marketing wins.",
};

export default function Page() {
  return (
    <PageShell>
      <CaseStudiesPage />
    </PageShell>
  );
}
