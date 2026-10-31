"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { filmOpportunities, filmPosters } from "@/components/home/content";
import { RiseLine } from "@/components/shared/horizon-stage";
import { Accent } from "@/components/shared/page-cta";
import { Container, EASE, Eyebrow, Lines, PillButton, Reveal, ScrubText, useScrollWindow } from "@/components/shared/primitives";

const benefits = [
  { title: "Higher recall", body: "Higher brand recall and credibility through context." },
  { title: "Scale", body: "Access to large, highly engaged entertainment audiences." },
  { title: "Emotion", body: "Stronger emotional and cultural connection." },
  { title: "Amplification", image: "/images/extracted/page_29_img_1.jpeg", body: "Extended visibility via digital & PR amplification." },
];

const steps = [
  { title: "Brand Assessment", image: "/images/in-film/opp_1.png", body: "We begin by evaluating your brand’s core values, target audience, and overarching business objectives to identify the right cultural moments." },
  { title: "Property Identification", image: "/images/in-film/opp_2.png", body: "Using our network and data, we match your brand with the perfect upcoming entertainment property, be it a blockbuster film, OTT series, or music video." },
  { title: "Negotiation", image: "/images/in-film/work_1.png", body: "We secure optimal placement and deal terms, ensuring your investment buys meaningful screen time rather than fleeting background exposure." },
  { title: "Integration", image: "/images/extracted/page_29_img_3.png", body: "Our creative team works with directors and writers to seamlessly weave the brand into the narrative, making it feel organic and crucial to the story." },
  { title: "Amplification", image: "/images/extracted/page_29_img_1.jpeg", body: "We don’t stop at the screen. We build 360-degree digital, PR, and social campaigns around the integration to extend reach and maximize buzz." },
  { title: "Measurement", image: "/images/extracted/page_28_img_1.jpeg", body: "Post-release, we track brand recall, audience sentiment, reach, and tangible ROI to prove the impact of the integration on your bottom line." },
];

const onScreen = [
  { brand: "KFC", body: "Campaign partnerships designed to maximize cultural relevance and reach.", image: "/images/extracted/page_29_img_2.png", alt: "KFC campaign partnership", className: "md:col-span-7", ratio: "aspect-[928/438]" },
  { brand: "ONLY", body: "Strategic integrations that amplified brand visibility and audience engagement at scale.", image: "/images/extracted/page_29_img_3.png", alt: "ONLY campaign featuring Ananya Panday", className: "md:col-span-5 md:mt-24", ratio: "aspect-[772/592]" },
  { brand: "Hardik’s Favourite", body: "Noodles & Pasta: a celebrity-led product association built for recall.", image: "/images/extracted/page_29_img_1.jpeg", alt: "Hardik's Favourite noodles and pasta", className: "md:col-span-5 md:col-start-3 md:-mt-10", ratio: "aspect-square" },
];

/** Full-screen opening. As you scroll the house lights go down: letterbox bars close and the next scene opens from black. */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const bars = useScrollWindow(scrollYProgress, 0.2, 1, 0, 0.5);
  const glow = useScrollWindow(scrollYProgress, 0, 0.7, 0.6, 0.1);
  const textOpacity = useScrollWindow(scrollYProgress, 0.25, 0.65, 1, 0);
  const textScale = useScrollWindow(scrollYProgress, 0, 0.9, 1, 0.92);

  return (
    <section ref={ref} data-nav="dark" aria-label="In-Film Branding" className="relative h-[170svh] bg-black">
      <div className="sticky top-0 flex h-svh items-center overflow-clip text-white">
        <motion.div aria-hidden style={{ opacity: glow }} className="absolute inset-0">
          <Image src={filmPosters[0].src} alt="" fill loading="eager" sizes="50vw" className="scale-110 object-cover blur-3xl saturate-150" />
        </motion.div>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_95%)]" />

        <motion.div style={{ opacity: textOpacity, scale: textScale }} className="relative w-full">
          <Container>
            <p className="hero-fade mb-6 text-center text-sm md:mb-8" style={{ animationDelay: "0.8s" }}>
              Service 03 · In-Film Branding
            </p>
            <h1 className="text-center font-display text-[13vw] font-medium leading-[0.94] tracking-[-0.04em] md:text-[min(10.6vw,20svh)]">
              <RiseLine>Don&rsquo;t just</RiseLine>
              <RiseLine delay={0.09} serif>
                interrupt.
              </RiseLine>
              <RiseLine delay={0.18}>Become the</RiseLine>
              <RiseLine delay={0.27} serif>
                story.
              </RiseLine>
            </h1>
          </Container>
        </motion.div>

        <motion.div aria-hidden style={{ scaleY: bars }} className="pointer-events-none absolute inset-x-0 top-0 h-full origin-top bg-black" />
        <motion.div aria-hidden style={{ scaleY: bars }} className="pointer-events-none absolute inset-x-0 bottom-0 h-full origin-bottom bg-black" />
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section data-nav="dark" className="bg-black pb-24 pt-4 text-white md:pb-40">
      <Container>
        <Eyebrow index="01" className="mb-8 text-white/80 md:mb-12">
          Cultural integration
        </Eyebrow>
        <ScrubText text="Traditional ads get ignored. Cultural integration gets remembered. In-film marketing makes brands part of the story, rather than another ad." />
        <dl className="mt-20 grid gap-x-6 sm:grid-cols-2 md:mt-32 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.07} className="border-t border-white/25 py-6">
              <dt className="mb-10 font-display text-3xl font-medium tracking-[-0.03em] md:mb-20 md:text-4xl">{benefit.title}</dt>
              <dd className="text-pretty text-base leading-relaxed text-white/80">{benefit.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Slate() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const down = useTransform(scrollYProgress, [0, 1], ["-3%", "9%"]);

  return (
    <section data-nav="dark" className="bg-black pb-10 text-white md:pb-16">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Eyebrow index="02" className="mb-5 text-white/80">
              Opportunities
            </Eyebrow>
            <h2 className="font-display text-[clamp(2.75rem,6vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.045em]">
              <Lines lines={["Where brands", <Accent key="a">can show up.</Accent>]} />
            </h2>
            <ol className="mt-10 border-b border-white/25 md:mt-14">
              {filmOpportunities.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 border-t border-white/25 py-3.5 text-lg md:text-xl">
                  <span className="text-xs tabular-nums text-white/70">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div ref={ref} className="grid grid-cols-2 gap-3 lg:col-span-6 lg:col-start-7">
          {filmPosters.map((poster, i) => (
            <motion.figure key={poster.src} style={{ y: i === 0 ? up : down }}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white/5">
                <Image src={poster.src} alt={poster.alt} fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover object-top" />
              </div>
              <figcaption className="mt-2 text-xs text-white/80">{poster.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * The process as end credits: the text scrolls past while the work fills the screen behind it, changing
 * with each step. Each image sits sharp at its own size over a blurred copy of itself, so it fills
 * the frame without being stretched past its resolution.
 */
function Credits() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActive(Number((hit.target as HTMLElement).dataset.step));
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    document.querySelectorAll("[data-step]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section data-nav="dark" className="relative bg-black text-white">
      <div aria-hidden className="sticky top-0 -mb-[100svh] h-svh overflow-clip">
        {steps.map((step, i) => (
          <div key={step.image} className={`absolute inset-0 transition-opacity duration-[1.2s] ease-out ${active === i ? "opacity-100" : "opacity-0"}`}>
            <Image src={step.image} alt="" fill sizes="40vw" className="scale-110 object-cover blur-2xl brightness-50 saturate-150" />
            <div className={`absolute inset-x-[6vw] inset-y-[9svh] transition-transform duration-[2.4s] ease-expo motion-reduce:transition-none ${active === i ? "scale-100" : "scale-[1.07]"}`}>
              <Image src={step.image} alt="" fill sizes="(min-width: 768px) 70vw, 100vw" className="object-contain brightness-[0.62]" />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div aria-hidden className="pointer-events-none sticky top-0 z-20 -mb-[100svh] h-svh bg-[linear-gradient(#000,transparent_20%,transparent_80%,#000)]" />

      <ol className="relative z-10 mx-auto max-w-3xl px-5 text-center [text-shadow:0_2px_30px_rgba(0,0,0,0.75)]">
        <li data-step={0} className="flex min-h-svh flex-col items-center justify-center">
          <Eyebrow index="03" className="mb-5 justify-center">
            Process
          </Eyebrow>
          <h2 className="font-display text-[clamp(3.25rem,9vw,9.5rem)] font-medium leading-[0.96] tracking-[-0.045em]">
            How it <Accent>works.</Accent>
          </h2>
        </li>
        {steps.map((step, i) => (
          <li key={step.title} data-step={i} className="flex min-h-svh flex-col items-center justify-center">
            <p className="mb-3 text-xs tabular-nums">0{i + 1}</p>
            <h3 className="font-display text-[clamp(2.5rem,6vw,6.5rem)] font-medium leading-[1] tracking-[-0.035em]">{step.title}</h3>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed md:text-lg">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function OnScreen() {
  return (
    <section data-nav="light" className="rounded-t-[1.75rem] bg-paper py-24 text-ink md:py-40">
      <Container>
        <Eyebrow index="04" className="mb-6 text-brand">
          Past successes
        </Eyebrow>
        <h2 className="mb-14 font-display text-[clamp(2.75rem,8vw,9rem)] font-medium leading-[0.96] tracking-[-0.045em] md:mb-24">
          <Lines lines={["Brands we’ve", <Accent key="a">put on screen.</Accent>]} />
        </h2>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
          {onScreen.map((work) => (
            <motion.article
              key={work.brand}
              className={work.className}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              <div className={`group relative overflow-hidden rounded-lg bg-ink/5 ${work.ratio}`}>
                <Image src={work.image} alt={work.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.03]" />
              </div>
              <h3 className="mt-4 font-display text-3xl font-medium tracking-[-0.03em] md:text-4xl">{work.brand}</h3>
              <p className="mt-1.5 max-w-md text-pretty text-base leading-relaxed text-ink/75">{work.body}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <div className="bg-paper">
      <div aria-hidden className="h-[9vw] rounded-t-[50%_100%] bg-brand" />
      <section data-nav="dark" className="overflow-x-clip bg-brand pb-24 pt-8 text-white md:pb-40">
        <div aria-hidden className="marquee flex w-max whitespace-nowrap font-display text-[clamp(3rem,9vw,10rem)] font-medium tracking-[-0.04em]">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex">
              {filmOpportunities.map((item) => (
                <span key={item} className="px-6 md:px-10">
                  {item} <Accent>/</Accent>
                </span>
              ))}
            </span>
          ))}
        </div>
        <Container className="mt-10 flex flex-col items-start gap-8 md:mt-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-[1] tracking-[-0.035em] md:text-6xl">Opportunities exist everywhere.</h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              From blockbuster film integrations to OTT originals and IPL associations. We match your brand with the perfect cultural moment.
            </p>
          </div>
          <PillButton href="#contact" className="shrink-0">
            Explore inventory
          </PillButton>
        </Container>
      </section>
    </div>
  );
}

export function InFilmPage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Slate />
      <Credits />
      <OnScreen />
      <FinalCta />
    </>
  );
}
