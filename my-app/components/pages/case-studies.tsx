"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HorizonStage, RiseLine } from "@/components/shared/horizon-stage";
import { Accent, PageCta } from "@/components/shared/page-cta";
import { Container, EASE, Eyebrow, Reveal } from "@/components/shared/primitives";
import { cn } from "@/lib/utils";

type CaseImage = { src: string; alt: string; ratio: string; className?: string; fit?: "contain" };

const cases: {
  id: string;
  brand: string;
  tag: string;
  line: string;
  hero?: { value: string; label: string };
  problem: string;
  solutionLabel?: string;
  solution: string[];
  resultsLabel?: string;
  results: string[];
  images: CaseImage[];
}[] = [
  {
    id: "grubwala",
    brand: "Grubwala",
    tag: "D2C · Food",
    line: "Your everyday food partner — D2C launch in Mumbai.",
    hero: { value: "₹2L → ₹8L", label: "MRR scaled" },
    problem: "A new D2C food brand entering a hyper-competitive Mumbai market with no recognition, no acquisition funnel, and limited onboarding automation.",
    solution: ["Defined brand strategy, positioning & communication", "Managed social media and content production", "Achieved CPL as low as ₹0.17", "Automated WhatsApp & email onboarding with n8n", "Distributed 7,000+ flyers across Mumbai"],
    results: ["5,200+ app downloads in 45 days", "7,000+ flyers distributed", "800+ daily email leads", "3 PG & 2 corporate partnerships", "5× growth in daily orders"],
    images: [{ src: "/images/extracted/page_16_img_2.png", alt: "The n8n workflow behind Grubwala's WhatsApp and email onboarding", ratio: "aspect-[816/412]", className: "md:col-span-12" }],
  },
  {
    id: "tripy",
    brand: "Tripy",
    tag: "Travel · Community",
    line: "Carving a niche in a saturated travel category.",
    hero: { value: "10K+", label: "App downloads at launch" },
    problem: "Entered a saturated travel market without clear positioning, resulting in weak brand recall and inefficient user acquisition.",
    solution: ["Repositioned Tripy around group travel", "Focused on community-led growth", "Social-first content and influencer collaborations", "Organic brand building"],
    results: ["19 influencers onboarded", "Strong organic social presence", "Built early brand recall", "Scalable content-led growth", "Consistent engagement, zero paid ads"],
    images: [
      { src: "/images/extracted/page_17_img_1.png", alt: "The Tripy app on two phones", ratio: "aspect-[4/3]", className: "md:col-span-7" },
      { src: "/images/extracted/page_17_img_2.png", alt: "The Tripy home screen with the line Travel that feels like you", ratio: "aspect-[4/3]", className: "md:col-span-5" },
    ],
  },
  {
    id: "kitdor",
    brand: "Kitdor",
    tag: "Marketplace",
    line: "A curated kitchen marketplace for every kind of decision-maker.",
    problem: "A fragmented kitchen marketplace category with low buyer trust, scattered SKUs, and no clear value proposition for end customers.",
    solution: ["Shifted to a D2C-first growth strategy", "Positioned as a kitchenware marketplace", "Built a mission-led brand narrative", "Focused content on trust, lifestyle & community"],
    resultsLabel: "The outcome",
    results: ["Curated Selection", "Trusted Brands", "Easy Returns", "Secure Payments", "Always Here to Help"],
    images: [{ src: "/images/extracted/page_18_img_1.png", alt: "The Kitdor identity system: logo, colour, type and packaging", ratio: "aspect-[1076/717]", className: "md:col-span-10" }],
  },
  {
    id: "mantraa",
    brand: "Mantraa",
    tag: "Finance · SEO",
    line: "A financial advisory firm offering expert-led services in M&A, financial planning and strategic consulting.",
    hero: { value: "10×", label: "Growth in organic traffic" },
    problem: "A business financial advisory firm serving growing enterprises, which needed SEO and a website revamp to turn a stagnant site into a growth channel.",
    solution: ["6-month engagement across content, technical SEO and UX rebuild", "Rebuilt the organic engine from the ground up", "Generated 100+ high-quality organic backlinks"],
    results: ["104 new keywords ranked", "1.01K monthly organic clicks", "10.3% average CTR", "34.5 average position gain"],
    images: [
      { src: "/images/extracted/page_22_img_2.png", alt: "Search Console chart of Mantraa's rising clicks and impressions", ratio: "aspect-[920/317]", className: "md:col-span-12" },
    ],
  },
  {
    id: "yalla-haji",
    brand: "Yalla Haji",
    tag: "Travel · Organic",
    line: "Organic, faith-led growth. A category-defining content engine for Hajj & Umrah audiences.",
    hero: { value: "4M+", label: "Users reached organically" },
    problem: "A specialist travel brand serving a deeply trust-driven audience needed to build credibility, community, and discovery without traditional paid push.",
    solution: ["Established Yalla Haji as a trusted category voice"],
    results: ["Grew to 26.7K organic followers in 6 months", "Built a 10K+ pre-launch audience", "Established strong trust and brand recall within the community"],
    images: [
      { src: "/images/extracted/page_23_img_1.png", alt: "The Yalla Haji Instagram profile", ratio: "aspect-[9/16]", className: "col-span-1 md:col-span-3" },
      { src: "/images/extracted/page_23_img_2.jpeg", alt: "A second view of the Yalla Haji Instagram profile", ratio: "aspect-[9/16]", className: "col-span-1 md:col-span-3" },
    ],
  },
  {
    id: "goready",
    brand: "Goready",
    tag: "Beauty · SEO",
    line: "SEO and website revamp of your neighbourhood beauty parlour.",
    hero: { value: "20%", label: "Estimated increase in sales" },
    problem: "Low organic traffic, poor search rankings, limited content, and weak off-page SEO hindered early growth.",
    solution: ["Optimized service pages and resolved technical SEO issues", "Built high-quality backlinks to strengthen domain authority"],
    results: ["Improved visibility in search", "An estimated 20% increase in sales"],
    images: [
      { src: "/images/extracted/page_24_img_1.png", alt: "Goready's organic traffic rising over two years", ratio: "aspect-[814/285]", className: "md:col-span-7" },
      { src: "/images/extracted/page_24_img_2.png", alt: "Goready ranking in search results for forehead threading", ratio: "aspect-[557/285]", className: "md:col-span-5" },
    ],
  },
];

const ticker = [
  { value: "₹8L", label: "Grubwala MRR, from ₹2L" },
  { value: "10×", label: "Mantraa organic traffic" },
  { value: "4M+", label: "Yalla Haji users reached" },
  { value: "10K+", label: "Tripy downloads at launch" },
  { value: "5×", label: "Grubwala daily orders" },
];

/** The results keep turning over in the hero, so the page opens on proof rather than a promise. */
function MetricTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % ticker.length), 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div aria-hidden className="hero-fade" style={{ animationDelay: "0.8s" }}>
      <div className="grid overflow-clip">
        <AnimatePresence initial={false}>
          <motion.div
            key={ticker[index].value}
            className="col-start-1 row-start-1"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            exit={{ y: "-105%" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="font-display text-[clamp(4rem,13vw,15rem)] font-medium leading-[0.95] tracking-[-0.05em] lg:text-right">{ticker[index].value}</p>
            <p className="text-sm text-white/85 md:text-base lg:text-right">{ticker[index].label}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <HorizonStage label="Case studies" height="h-[190svh]" stageClassName="bg-ink">
      {() => (
        <Container className="flex flex-1 flex-col justify-between gap-6">
          <p className="hero-fade hidden text-sm md:block [@media(max-height:760px)]:hidden" style={{ animationDelay: "0.9s" }}>
            Proof · Results
          </p>
          <div className="mt-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-display text-[19vw] font-medium leading-[0.9] tracking-[-0.04em] lg:text-[min(13.5vw,28svh)]">
              <RiseLine>Case</RiseLine>
              <RiseLine delay={0.1} serif>
                Studies.
              </RiseLine>
            </h1>
            <MetricTicker />
          </div>
        </Container>
      )}
    </HorizonStage>
  );
}

function CaseFile({ item, index }: { item: (typeof cases)[number]; index: number }) {
  return (
    <article id={item.id} className="scroll-mt-24 border-t border-ink/20 pb-20 pt-6 md:pb-32">
      <header className="mb-12 md:mb-20">
        <p className="mb-8 flex justify-between text-xs text-ink/70 md:mb-14">
          <span className="tabular-nums">Case study · 0{index + 1}</span>
          <span>{item.tag}</span>
        </p>
        <h2 className="font-display text-[clamp(3.5rem,10.5vw,12rem)] font-medium leading-[0.92] tracking-[-0.05em]">{item.brand}</h2>
        <p className="mt-4 max-w-2xl text-pretty font-serif text-xl italic leading-snug md:text-3xl">{item.line}</p>
      </header>

      {item.hero && (
        <Reveal className="mb-12 md:mb-20">
          <p className="font-display text-[clamp(3.5rem,9vw,10rem)] font-medium leading-[0.95] tracking-[-0.05em] text-brand">{item.hero.value}</p>
          <p className="mt-2 text-base font-medium md:text-lg">{item.hero.label}</p>
        </Reveal>
      )}

      <div className="grid gap-10 md:grid-cols-3 md:gap-6">
        <Reveal>
          <h3 className="mb-3 border-b border-ink pb-2 text-sm font-medium">The problem</h3>
          <p className="text-pretty text-[15px] leading-relaxed text-ink/80">{item.problem}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h3 className="mb-3 border-b border-ink pb-2 text-sm font-medium">What we did</h3>
          <ul className="space-y-2 text-[15px] leading-snug text-ink/80">
            {item.solution.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.12}>
          <h3 className="mb-3 border-b border-ink pb-2 text-sm font-medium">{item.resultsLabel ?? "Results"}</h3>
          <ul className="space-y-2 text-[15px] leading-snug text-ink/80">
            {item.results.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-12">
        {item.images.map((image) => (
          <motion.figure
            key={image.src}
            className={cn("col-span-2", image.className)}
            initial={{ clipPath: "inset(14% 0 0 0 round 10px)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0 0 0 round 10px)", opacity: 1 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <div className={cn("relative overflow-hidden rounded-[10px] bg-black", image.ratio)}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-contain" />
            </div>
          </motion.figure>
        ))}
      </div>
    </article>
  );
}

/** A sticky table of contents that follows the reader through the six files. */
function CaseIndex({ active }: { active: string }) {
  return (
    <nav aria-label="Case studies" className="sticky top-28 hidden lg:block">
      <p className="mb-4 text-xs text-ink/70">Index</p>
      <ol className="space-y-1">
        {cases.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "flex items-baseline gap-3 py-1 text-sm transition-[color,transform] duration-500 ease-expo",
                active === item.id ? "translate-x-1.5 font-medium text-brand" : "text-ink/70 hover:text-ink",
              )}
            >
              <span className="text-xs tabular-nums">0{i + 1}</span>
              {item.brand}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Library() {
  const [active, setActive] = useState(cases[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    cases.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section data-nav="light" aria-label="All case studies" className="bg-paper pt-[10vh] text-ink">
      <Container className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <CaseIndex active={active} />
        </div>
        <div className="min-w-0 lg:col-span-10">
          <Eyebrow className="mb-6 text-brand">Six brands, one focus: sustainable growth systems, not short-term marketing wins.</Eyebrow>
          {cases.map((item, i) => (
            <CaseFile key={item.id} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CaseStudiesPage() {
  return (
    <>
      <Hero />
      <Library />
      <PageCta
        lines={["Stop guessing.", <Accent key="a">There’s a lot more to show.</Accent>]}
        body="How about we connect over a call and show you how we can help make your brand one of the best in your industry."
        button="Let’s connect"
      />
    </>
  );
}
