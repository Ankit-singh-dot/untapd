import { Brands } from "@/components/home/brands";
import { Closing } from "@/components/home/closing";
import { Ecosystem } from "@/components/home/ecosystem";
import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { Outcomes } from "@/components/home/outcomes";
import { People } from "@/components/home/people";
import { Pillars } from "@/components/home/pillars";
import { Proof } from "@/components/home/proof";
import { Shift } from "@/components/home/shift";
import { PageShell } from "@/components/shared/page-shell";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Manifesto />
      <Shift />
      <Pillars />
      <Brands />
      <Proof />
      <Outcomes />
      <People />
      <Ecosystem />
      <Closing />
    </PageShell>
  );
}
