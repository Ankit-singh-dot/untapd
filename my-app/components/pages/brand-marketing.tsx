"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Brands } from "@/components/home/brands";
import { RiseLine } from "@/components/shared/horizon-stage";
import { Accent, PageCta } from "@/components/shared/page-cta";
import { ArrowLink, Container, Eyebrow, Lines, PillButton, Reveal, ScrubText, useMedia, useReducedMotion } from "@/components/shared/primitives";

const capabilities = [
  {
    title: "Brand Identity",
    tag: "Foundation",
    body: "Positioning, messaging, architecture, and visual systems designed to make you unforgettable.",
    image: "/images/extracted/page_18_img_1.png",
    alt: "The Kitdor identity system: logo, colour, type and packaging",
    caption: "Kitdor — brand identity",
    frame: "bg-white",
  },
  {
    title: "Campaigns",
    tag: "Execution",
    body: "Concept to creative to distribution, handled end-to-end for maximum impact.",
    image: "/images/extracted/page_17_img_2.png",
    alt: "The Tripy app on a phone, with the line Travel that feels like you",
    caption: "Tripy — social-first launch",
    frame: "bg-black",
  },
  {
    title: "Digital Presence",
    tag: "Digital",
    body: "Website, social media, content, and community building that drives loyalty.",
    image: "/images/extracted/page_23_img_1.png",
    alt: "The Yalla Haji Instagram profile",
    caption: "Yalla Haji — community & content",
    frame: "bg-black",
  },
  {
    title: "Growth Marketing",
    tag: "Scale",
    body: "SEO, performance marketing, lifecycle strategies, and CRO to scale revenue.",
    image: "/images/extracted/page_24_img_1.png",
    alt: "A chart of rising organic traffic for Goready",
    caption: "Goready — organic traffic",
    frame: "bg-white",
  },
];

const mantraaStats = [
  { value: "104", label: "New keywords ranked" },
  { value: "1.01K", label: "Monthly organic clicks" },
  { value: "10.3%", label: "Average CTR" },
  { value: "34.5", label: "Average position gain" },
];

/** The opposite of the blue pages: bright as a studio wall, with the name set as large as it will go. */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-9%"]);
  const xBack = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  return (
    <section ref={ref} data-nav="light" className="flex min-h-svh flex-col justify-end overflow-x-clip bg-paper pb-8 pt-24 text-ink md:pb-12 md:pt-28">
      <Container className="flex flex-1 flex-col justify-between gap-10">
        <p className="hero-fade text-sm text-brand" style={{ animationDelay: "0.7s" }}>
          Service 02 · Building brands customers remember
        </p>
        <div>
          <h1 className="font-display text-[20.5vw] font-medium leading-[0.86] tracking-[-0.05em]">
            <motion.span style={{ x }} className="block">
              <RiseLine>Brand</RiseLine>
            </motion.span>
            <motion.span style={{ x: xBack }} className="block text-brand">
              <RiseLine delay={0.1} serif>
                Marketing.
              </RiseLine>
            </motion.span>
          </h1>
          <div className="mt-8 flex flex-col items-start gap-5 md:mt-12 md:flex-row md:items-end md:justify-between">
            <p className="hero-fade max-w-xl text-pretty text-base leading-relaxed text-ink/80 md:text-lg" style={{ animationDelay: "0.8s" }}>
              Growth isn&rsquo;t achieved through isolated campaigns. It&rsquo;s a scalable system.
            </p>
            <div className="hero-fade shrink-0" style={{ animationDelay: "0.95s" }}>
              <PillButton href="/case-studies" tone="brand">
                Case Studies
              </PillButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Statement() {
  return (
    <section data-nav="light" className="bg-paper py-24 text-ink md:py-40">
      <Container>
        <Eyebrow index="01" className="mb-8 text-brand md:mb-12">
          The principle
        </Eyebrow>
        <ScrubText text="Brand growth isn’t achieved through isolated campaigns. It’s a system of identity, campaigns, presence, and growth marketing, working together." />
      </Container>
    </section>
  );
}

/** Four capabilities, one pinned frame: each step lights up its part of the system and shows real work. */
function SystemStory() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const wide = useMedia("(min-width: 1024px)");
  const pinned = wide && !reduced;
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(capabilities.length - 1, Math.floor(p * capabilities.length)));
  });

  if (!pinned) {
    return (
      <section ref={ref} data-nav="light" className="bg-white py-20 text-ink">
        <Container>
          <Eyebrow index="02" className="mb-5 text-brand">
            Capabilities
          </Eyebrow>
          <h2 className="mb-10 font-display text-[clamp(2.75rem,8vw,6rem)] font-medium leading-[0.96] tracking-[-0.045em]">What we do.</h2>
          <ul className="space-y-14">
            {capabilities.map((capability, i) => (
              <li key={capability.title}>
                <div className={`relative aspect-[4/3] overflow-hidden rounded-lg border border-ink/10 ${capability.frame}`}>
                  <Image src={capability.image} alt={capability.alt} fill sizes="100vw" className="object-contain" />
                </div>
                <p className="mt-2 text-xs text-ink/70">{capability.caption}</p>
                <h3 className="mt-5 font-display text-3xl font-medium tracking-[-0.03em]">
                  <span className="mr-3 align-middle font-sans text-xs font-normal tabular-nums tracking-normal text-ink/60">0{i + 1}</span>
                  {capability.title}
                </h3>
                <p className="mt-2 text-pretty text-base leading-relaxed text-ink/75">{capability.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
  }

  return (
    <section ref={ref} data-nav="light" className="relative h-[420svh] rounded-t-[1.75rem] bg-white text-ink">
      <div className="sticky top-0 flex h-svh flex-col overflow-clip pb-10 pt-24">
        <Container className="grid min-h-0 flex-1 grid-cols-12 gap-6">
          <div className="col-span-6 flex flex-col justify-between">
            <div>
              <Eyebrow index="02" className="mb-5 text-brand">
                Capabilities — What we do
              </Eyebrow>
              <ol>
                {capabilities.map((capability, i) => (
                  <li key={capability.title} className="border-t border-ink/15 py-[clamp(0.5rem,1.6svh,1rem)]">
                    <h2
                      className={`font-display text-[clamp(2rem,min(4.6vw,8.4svh),5.25rem)] font-medium leading-[1.02] tracking-[-0.035em] transition-colors duration-500 ${
                        active === i ? "text-brand" : "text-ink/45"
                      }`}
                    >
                      {capability.title}
                    </h2>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid min-h-24 grid-cols-1">
              {capabilities.map((capability, i) => (
                <p
                  key={capability.title}
                  aria-hidden={active !== i}
                  className={`col-start-1 row-start-1 max-w-lg text-pretty text-base leading-relaxed text-ink/80 transition-[opacity,transform] duration-700 ease-expo lg:text-lg ${
                    active === i ? "opacity-100" : "translate-y-3 opacity-0"
                  }`}
                >
                  <span className="mb-1 block text-xs font-medium text-brand">{capability.tag}</span>
                  {capability.body}
                </p>
              ))}
            </div>
          </div>
          <figure className="col-span-6 flex min-h-0 flex-col">
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg border border-ink/10">
              {capabilities.map((capability, i) => (
                <div
                  key={capability.image}
                  className={`absolute inset-0 transition-[opacity,transform] duration-1000 ease-expo ${capability.frame} ${active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
                >
                  <Image src={capability.image} alt={capability.alt} fill sizes="48vw" className="object-contain" />
                </div>
              ))}
            </div>
            <figcaption className="mt-2.5 flex justify-between text-xs text-ink/70">
              <span>{capabilities[active].caption}</span>
              <span className="tabular-nums">
                0{active + 1} / 0{capabilities.length}
              </span>
            </figcaption>
          </figure>
        </Container>
        <Container className="mt-4">
          <div aria-hidden className="h-px bg-ink/15">
            <motion.div style={{ scaleX: bar }} className="h-full origin-left bg-brand" />
          </div>
        </Container>
      </div>
    </section>
  );
}

function Result() {
  return (
    <section data-nav="dark" className="bg-ink py-24 text-white md:py-40">
      <Container>
        <Eyebrow index="04" className="mb-6 text-white/80">
          Brand case study · Mantraa
        </Eyebrow>
        <h2 className="font-display text-[clamp(2.75rem,8vw,9rem)] font-medium leading-[0.96] tracking-[-0.045em]">
          <Lines lines={["SEO & website", <Accent key="a">revamp.</Accent>]} />
        </h2>
        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
          We rebuilt Mantraa&rsquo;s organic engine from the ground up, turning a stagnant site into a measurable growth channel over a
          6-month engagement of content, technical SEO and UX rebuild.
        </p>
        <dl className="mt-14 grid grid-cols-2 border-t border-white/20 md:mt-20 md:grid-cols-4">
          {mantraaStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end gap-3 border-b border-white/20 py-6 pr-4 md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-sm text-white/75">{stat.label}</dt>
              <dd className="font-display text-[clamp(2.75rem,6.6vw,7rem)] font-medium leading-none tracking-[-0.05em]">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <Reveal className="mt-14 max-w-4xl md:mt-20">
          <div className="relative aspect-[920/317] overflow-hidden rounded-lg bg-white">
            <Image src="/images/extracted/page_22_img_2.png" alt="Search Console chart of Mantraa's rising clicks and impressions" fill sizes="(min-width: 896px) 896px, 100vw" className="object-contain" />
          </div>
        </Reveal>
        <ArrowLink href="/case-studies" className="mt-8">
          View all case studies
        </ArrowLink>
      </Container>
    </section>
  );
}

export function BrandMarketingPage() {
  return (
    <>
      <Hero />
      <Statement />
      <SystemStory />
      <div className="bg-paper pt-24 md:pt-40">
        <Brands index="03" />
      </div>
      <Result />
      <PageCta
        over="bg-ink"
        lines={["Ready", <Accent key="a">to scale?</Accent>]}
        body="Let’s build a category-defining brand together. Strategic leadership meets repeatable execution."
        button="Let’s build together"
      />
    </>
  );
}
