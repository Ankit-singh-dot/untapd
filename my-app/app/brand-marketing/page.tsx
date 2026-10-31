import type { Metadata } from "next";
import { BrandMarketingPage } from "@/components/pages/brand-marketing";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Brand Marketing | Untapd",
  description: "Building brands customers remember: identity, campaigns, digital presence and growth marketing, working as one system.",
};

export default function Page() {
  return (
    <PageShell>
      <BrandMarketingPage />
    </PageShell>
  );
}
