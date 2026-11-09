"use client";

import { motion, MotionValue, useScroll } from "framer-motion";
import { useRef } from "react";
import { vcmoScope } from "@/components/home/content";
import { Shift } from "@/components/home/shift";
import { HeroField } from "@/components/shared/hero-field";
import { HorizonStage, RiseLine } from "@/components/shared/horizon-stage";
import { Accent, PageCta } from "@/components/shared/page-cta";
import { Container, EASE, Eyebrow, Lines, PillButton, Reveal, ScrubText, useReducedMotion, useScrollWindow } from "@/components/shared/primitives";

const reasons = [
  { title: "What is a vCMO?", body: "Senior marketing leadership without full-time overhead. We integrate into your team to drive strategy without the C-suite salary burden." },
  { title: "Why it matters", body: "Fast-moving markets demand agile, expert-led GTM. Speed of execution and strategic clarity are the only unfair advantages left." },
  { title: "Our goal", body: "Optimize & measure ROI of every marketing rupee spent. Moving from vanity metrics to tangible revenue growth and efficiency." },
];

const stakeholders = ["Founders", "Leadership Team", "Internal Marketing Team", "External Agencies", "Untapd Specialists"];

const ledger = ["Channel Allocation", "Performance Tracking", "Agency & Vendor Costs", "ROI Monitoring", "Monthly Reviews", "Quarterly Growth Planning"];

function Hero() {
  return (
    <HorizonStage label="vCMO" backdrop={<HeroField className="absolute inset-0 size-full" />}>
      {() => (
        <Container className="flex flex-1 flex-col justify-between">
          <p className="hero-fade hidden text-sm md:block [@media(max-height:760px)]:hidden" style={{ animationDelay: "0.9s" }}>
            Service 01 · Virtual CMO
          </p>
          <div className="relative mt-auto">
            <h1 className="font-display text-[12.8vw] font-medium leading-[0.92] tracking-[-0.03em] md:text-[min(12.8vw,23svh)]">
              <RiseLine>A CMO</RiseLine>
              <RiseLine delay={0.09}>without the</RiseLine>
              <RiseLine delay={0.18} serif>
                <span className="relative inline-block">
                  overhead.
                  <span aria-hidden className="hero-strike absolute inset-x-0 top-[58%] h-[0.035em] origin-left bg-white" />
                </span>
              </RiseLine>
            </h1>
            <div className="mt-6 flex flex-col items-start gap-5 md:mt-8 lg:absolute lg:bottom-[0.6vw] lg:right-0 lg:mt-0 lg:w-[min(32vw,32rem)]">
              <p className="hero-fade text-pretty text-[15px] leading-relaxed text-white/90 md:text-base" style={{ animationDelay: "0.8s" }}>
                High-level marketing leadership at a fraction of the cost. We integrate into your team to drive strategy, without the C-suite salary burden.
              </p>
              <div className="hero-fade" style={{ animationDelay: "1s" }}>
                <PillButton href="#contact">Let&rsquo;s talk</PillButton>
              </div>
            </div>
          </div>
        </Container>
      )}
    </HorizonStage>
  );
}

function Reasons() {
  return (
    <section data-nav="light" className="bg-paper pb-24 pt-20 text-ink md:pb-40 md:pt-28">
      <Container>
        <Eyebrow index="01" className="mb-8 text-brand md:mb-12">
          Introducing vCMO
        </Eyebrow>
        <ScrubText text="Speed of execution and strategic clarity are the only unfair advantages left." />
        <ul className="mt-20 md:mt-36">
          {reasons.map((reason, i) => (
            <motion.li
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: EASE }}
              className="grid gap-3 border-t border-ink/15 py-7 last:border-b md:grid-cols-12 md:gap-6 md:py-12"
            >
              <span className="text-xs tabular-nums text-ink/60 md:col-span-1 md:pt-3">0{i + 1}</span>
              <h2 className="font-display text-3xl font-medium tracking-[-0.03em] md:col-span-5 md:text-5xl">{reason.title}</h2>
              <p className="text-pretty text-base leading-relaxed text-ink/75 md:col-span-5 md:col-start-8 md:pt-2 md:text-lg">{reason.body}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Thread({ index, progress, reduced }: { index: number; progress: MotionValue<number>; reduced: boolean }) {
  const y = ((index + 0.5) / stakeholders.length) * 100;
  const start = (index / stakeholders.length) * 0.75;
  const length = useScrollWindow(progress, start, start + 0.3, 0, 1);
  const d = `M0,${y} C50,${y} 50,50 100,50`;
  return (
    <>
      <path d={d} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <motion.path d={d} fill="none" stroke="#fff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" style={{ pathLength: reduced ? 1 : length }} />
    </>
  );
}

function StakeholderLabel({ name, index, progress }: { name: string; index: number; progress: MotionValue<number> }) {
  const start = (index / stakeholders.length) * 0.75;
  const opacity = useScrollWindow(progress, start, start + 0.08, 0.55, 1);
  return (
    <motion.li style={{ opacity }} className="flex items-center font-display text-[clamp(1rem,2.7vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.025em]">
      {name}
    </motion.li>
  );
}

/** Five relationships become one line: the single point of accountability, drawn as you scroll. */
function Accountability() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const nodeScale = useScrollWindow(scrollYProgress, 0.72, 0.92, reduced ? 1 : 0.35, 1);
  const nodeOpacity = useScrollWindow(scrollYProgress, 0.72, 0.85, reduced ? 1 : 0.35, 1);

  return (
    <section ref={ref} data-nav="dark" className={`rounded-t-[1.75rem] bg-brand text-white ${reduced ? "py-20" : "h-[340svh]"}`}>
      <div className={reduced ? "" : "sticky top-0 flex h-svh flex-col overflow-clip pb-8 pt-24 md:pb-12"}>
        <Container className="flex min-h-0 flex-1 flex-col">
          <div className="mb-6 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow index="02" className="mb-4 text-white/85">
                The vCMO engagement
              </Eyebrow>
              <h2 className="font-display text-[clamp(1.9rem,4.6vw,5rem)] font-medium leading-[1] tracking-[-0.035em]">
                Every client receives <Accent>a dedicated vCMO.</Accent>
              </h2>
            </div>
          </div>
          <div className={`grid grid-cols-[minmax(0,5fr)_minmax(0,4fr)_auto] gap-2 md:gap-4 ${reduced ? "h-[28rem]" : "min-h-0 flex-1"}`}>
            <ul className="grid grid-rows-5">
              {stakeholders.map((name, i) => (
                <StakeholderLabel key={name} name={name} index={i} progress={scrollYProgress} />
              ))}
            </ul>
            <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="size-full overflow-visible">
              {stakeholders.map((name, i) => (
                <Thread key={name} index={i} progress={scrollYProgress} reduced={reduced} />
              ))}
            </svg>
            <div className="flex items-center">
              <motion.div
                style={{ scale: nodeScale, opacity: nodeOpacity }}
                className="grid size-[24vw] max-h-[44svh] max-w-[44svh] place-items-center rounded-full bg-paper p-2 text-center text-brand shadow-[0_0_60px_10px_rgba(190,210,255,0.45)] md:size-[17vw]"
              >
                <p className="font-serif text-[clamp(0.95rem,2.5vw,2.75rem)] italic leading-none">
                  Your
                  <br />
                  vCMO
                </p>
              </motion.div>
            </div>
          </div>
          <p className="mt-5 max-w-lg text-pretty text-sm leading-relaxed text-white/90 md:mt-8 md:text-base">
            A single point of accountability for all marketing, working directly with everyone who touches it.
          </p>
        </Container>
      </div>
    </section>
  );
}

/** Budget management set as what it is: a ruled statement, closed with an accountant's double rule. */
function Ledger() {
  return (
    <section data-nav="light" className="bg-paper py-24 text-ink md:py-40">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Eyebrow index="03" className="mb-5 text-brand">
              Marketing budget management
            </Eyebrow>
            <h2 className="font-display text-[clamp(2.75rem,6.4vw,7rem)] font-medium leading-[0.96] tracking-[-0.045em]">
              <Lines lines={["We manage", <Accent key="a">every line.</Accent>]} />
            </h2>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ol>
            {ledger.map((item, i) => (
              <li key={item} className="relative flex items-baseline gap-5 py-4 font-display text-[clamp(1.35rem,2.6vw,2.5rem)] font-medium tracking-[-0.025em] md:py-5">
                <motion.span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left bg-ink/25"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 1.2, ease: EASE, delay: i * 0.05 }}
                />
                <span className="w-7 font-sans text-xs font-normal tabular-nums tracking-normal text-ink/60">L{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className="border-y-[3px] border-double border-ink py-4 text-pretty text-base font-medium leading-snug md:text-lg">
            To maximize growth while maintaining financial discipline.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Scope() {
  return (
    <section data-nav="light" className="bg-white py-24 text-ink md:py-40">
      <Container>
        <Eyebrow index="05" className="mb-6 text-brand">
          Scope of work
        </Eyebrow>
        <h2 className="mb-14 font-display text-[clamp(2.75rem,8vw,9rem)] font-medium leading-[0.96] tracking-[-0.045em] md:mb-24">
          <Lines lines={["What a", <Accent key="a">vCMO does.</Accent>]} />
        </h2>
        <div className="grid gap-12 md:grid-cols-3 md:gap-6">
          {vcmoScope.map((column, i) => (
            <Reveal key={column.title} delay={i * 0.08}>
              <h3 className="mb-4 border-b border-ink pb-3 font-display text-3xl font-medium tracking-[-0.03em] md:text-4xl">{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item} className="border-b border-ink/15 py-3 text-base md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VcmoPage() {
  return (
    <>
      <Hero />
      <Reasons />
      <Accountability />
      <Ledger />
      <Shift index="04" />
      <Scope />
      <PageCta
        over="bg-white"
        lines={["Ready to scale", <Accent key="a">with strategic leadership?</Accent>]}
        body="A CMO without the overhead. Senior marketing brainpower, a single point of accountability, and every marketing rupee measured."
        button="Let’s talk"
      />
    </>
  );
}
