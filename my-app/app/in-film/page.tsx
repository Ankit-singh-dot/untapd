import type { Metadata } from "next";
import { InFilmPage } from "@/components/pages/in-film";
import { PageShell } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "In-Film Branding | Untapd",
  description: "Traditional ads get ignored. Cultural integration gets remembered. Film, OTT, celebrity, sports and IPL integrations.",
};

export default function Page() {
  return (
    <PageShell>
      <InFilmPage />
    </PageShell>
  );
}
