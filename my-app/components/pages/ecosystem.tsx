"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Orbit } from "@/components/home/ecosystem";
import { advisors as baseAdvisors } from "@/components/home/content";
import { HeroField } from "@/components/shared/hero-field";
import { RiseLine } from "@/components/shared/horizon-stage";
import { Accent, PageCta } from "@/components/shared/page-cta";
import { Container, EASE, Eyebrow, Lines, useReducedMotion, useScrollWindow } from "@/components/shared/primitives";

const domains = ["FMCG", "Telecom", "F&B"];
const advisors = baseAdvisors.map((advisor, i) => ({ ...advisor, domain: domains[i] }));

const perks = [
  { title: "Strategic Advisor Sessions", sub: "Direct access to industry veterans" },
  { title: "Strategic Partnerships", sub: "Cross-brand collaboration opportunities" },
  { title: "Founder Meetups", sub: "Exclusive networking events" },
  { title: "Investor Access", sub: "Warm introductions to capital" },
  { title: "Incubation Network", sub: "Resources for early-stage brands" },
  { title: "In-Film Opportunities", sub: "First access to entertainment slots" },
];

const whyUntapd = ["Strategic Leadership", "Brand Building", "Advisory Access", "Ecosystem Partnerships", "Entertainment Opportunities", "Investor Networks", "Founder Communities", "Repeatable Execution"];

const RINGS = [24, 42, 62, 84, 108, 134];

/** A network seen from its centre: rings radiate out as you scroll, and carry you into it. */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.6]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const textOpacity = useScrollWindow(scrollYProgress, 0.35, 0.8, 1, 0);
  const wash = useScrollWindow(scrollYProgress, 0.62, 1, 0, 1);

  return (
    <section ref={ref} data-nav="dark" aria-label="Ecosystem" className="relative h-[190svh] bg-paper">
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-clip bg-brand text-white">
        <HeroField className="absolute inset-0 size-full" />
        <motion.div aria-hidden style={{ scale }} className="absolute inset-0">
          {RINGS.map((size, i) => (
            <div
              key={size}
              className="ring-in absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
              style={{ width: `${size}vmax`, animationDelay: `${0.1 + i * 0.1}s` }}
            />
          ))}
          <div className="orbit absolute left-1/2 top-1/2 aspect-square w-[62vmax] -translate-x-1/2 -translate-y-1/2">
            {[0, 1, 2].map((dot) => {
              const angle = (dot / 3) * Math.PI * 2 + 0.5;
              return (
                <span
                  key={dot}
                  className="absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_4px_rgba(255,255,255,0.6)]"
                  style={{ left: `${(50 + Math.cos(angle) * 50).toFixed(3)}%`, top: `${(50 + Math.sin(angle) * 50).toFixed(3)}%` }}
                />
              );
            })}
          </div>
        </motion.div>
        <motion.div style={{ y: textY, opacity: textOpacity }} className="relative w-full">
          <Container>
            <p className="hero-fade mb-5 text-center text-sm md:mb-8" style={{ animationDelay: "0.9s" }}>
              Ecosystem · Network
            </p>
            <h1 className="text-center font-display text-[12.5vw] font-medium leading-[0.94] tracking-[-0.035em] md:text-[min(10.8vw,21svh)]">
              <RiseLine>A network of</RiseLine>
              <RiseLine delay={0.1} serif>
                industry leaders.
              </RiseLine>
            </h1>
          </Container>
        </motion.div>
        <motion.div aria-hidden style={{ opacity: wash }} className="absolute inset-0 bg-paper" />
      </div>
    </section>
  );
}

function Advisors() {
  return (
    <section data-nav="light" className="bg-paper pb-24 pt-[8vh] text-ink md:pb-40">
      <Container>
        <div className="mb-14 grid gap-6 md:mb-24 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow index="01" className="mb-6 text-brand">
              Advisory board
            </Eyebrow>
            <h2 className="font-display text-[clamp(2.75rem,7vw,8rem)] font-medium leading-[0.96] tracking-[-0.045em]">
              <Lines lines={["Meet our", <Accent key="a">advisors.</Accent>]} />
            </h2>
          </div>
          <p className="text-pretty text-base leading-relaxed text-ink/75 md:col-span-4 md:col-start-9">
            Our advisors bring decades of experience across FMCG, Telecom, Hospitality, Technology, Startup Ecosystem, and Consumer Brands.
          </p>
        </div>
        <ul className="border-b border-ink/20">
          {advisors.map((advisor) => (
            <motion.li
              key={advisor.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1, ease: EASE }}
              className="group relative overflow-clip border-t border-ink/20"
            >
              <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-brand transition-transform duration-700 ease-expo group-hover:scale-y-100" />
              <div className="relative grid gap-3 py-7 transition-[color,padding] duration-500 ease-expo group-hover:text-white md:grid-cols-12 md:items-baseline md:gap-6 md:py-12 md:group-hover:px-6">
                <h3 className="font-display text-[clamp(2.25rem,5vw,5.5rem)] font-medium leading-[1] tracking-[-0.04em] md:col-span-7">{advisor.name}</h3>
                <div className="md:col-span-4 md:col-start-8">
                  <p className="font-medium">{advisor.role}</p>
                  <p className="mt-1 text-sm leading-snug opacity-80">{advisor.focus}</p>
                </div>
                <p className="text-xs opacity-80 md:col-span-1 md:text-right">{advisor.domain}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Plus({ item, index, progress, reduced }: { item: string; index: number; progress: MotionValue<number>; reduced: boolean }) {
  const start = index / whyUntapd.length;
  const opacity = useScrollWindow(progress, start, start + 1 / whyUntapd.length, reduced ? 1 : 0.18, 1);
  const x = useScrollWindow(progress, start, start + 1 / whyUntapd.length, reduced ? 0 : -14, 0);
  return (
    <motion.li style={{ opacity, x }} className="flex items-baseline gap-4 font-display text-[clamp(1.75rem,4.4vw,4.75rem)] font-medium leading-[1.12] tracking-[-0.035em] md:gap-7">
      <span aria-hidden className="w-[0.7em] shrink-0 font-serif font-normal italic">
        +
      </span>
      {item}
    </motion.li>
  );
}

/** "Growth requires more than marketing", set as a sum: each advantage adds on as you scroll. */
function WhyUntapd() {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.55"] });

  return (
    <section data-nav="dark" className="rounded-t-[1.75rem] bg-ink py-24 text-white md:py-40">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Eyebrow index="02" className="mb-5 text-white/80">
              Why Untapd
            </Eyebrow>
            <h2 className="font-display text-[clamp(2.75rem,5.4vw,6rem)] font-medium leading-[0.96] tracking-[-0.045em]">
              Why <Accent>Untapd?</Accent>
            </h2>
            <p className="mt-6 max-w-sm text-pretty text-base leading-relaxed text-white/85">
              Because growth requires more than marketing. We combine everything required to accelerate growth, under one platform.
            </p>
          </div>
        </div>
        <ol ref={ref} className="lg:col-span-8">
          {whyUntapd.map((item, i) => (
            <Plus key={item} item={item} index={i} progress={scrollYProgress} reduced={reduced} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Membership() {
  return (
    <section data-nav="dark" className="overflow-x-clip bg-brand pt-24 text-white md:pt-40">
      <Container>
        <Eyebrow index="03" className="mb-6 text-white/85">
          Membership
        </Eyebrow>
        <h2 className="max-w-[16ch] font-display text-[clamp(2.75rem,8vw,9rem)] font-medium leading-[0.94] tracking-[-0.045em]">
          <Lines lines={["You join more", <Accent key="a">than an agency.</Accent>]} />
        </h2>
        <div className="mt-14 grid items-center gap-12 md:mt-24 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <Orbit />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="mb-6 text-pretty text-lg leading-snug md:text-2xl">When you join Untapd, you join a growth ecosystem.</p>
            <ol className="border-b border-white/25">
              {perks.map((perk, i) => (
                <motion.li
                  key={perk.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 1, ease: EASE, delay: i * 0.04 }}
                  className="flex items-baseline gap-5 border-t border-white/25 py-4"
                >
                  <span className="text-xs tabular-nums text-white/80">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-[-0.02em] md:text-2xl">{perk.title}</h3>
                    <p className="mt-0.5 text-sm text-white/85">{perk.sub}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EcosystemPage() {
  return (
    <>
      <Hero />
      <Advisors />
      <WhyUntapd />
      <Membership />
      <PageCta
        over="bg-brand"
        lines={["Ready to join", <Accent key="a">the ecosystem?</Accent>]}
        body="Advisors, founders, investors and first access to in-film opportunities, all under one roof."
        button="Let’s connect"
      />
    </>
  );
}
