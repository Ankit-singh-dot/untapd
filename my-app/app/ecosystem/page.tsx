import type { Metadata } from "next";
import { EcosystemPage } from "@/components/pages/ecosystem";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Ecosystem | Untapd",
  description: "A network of industry leaders. Advisor sessions, partnerships, founder meetups, investor access and first access to in-film opportunities.",
};

export default function Page() {
  return (
    <PageShell>
      <EcosystemPage />
    </PageShell>
  );
}
