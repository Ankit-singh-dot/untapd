import type { Metadata } from "next";
import { VcmoPage } from "@/components/pages/vcmo";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "vCMO | Untapd",
  description: "A CMO without the overhead. Senior marketing leadership that integrates into your team, without the C-suite salary burden.",
};

export default function Page() {
  return (
    <PageShell>
      <VcmoPage />
    </PageShell>
  );
}
