"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowLink, Container, Eyebrow, Reveal, ScrubText } from "@/components/shared/primitives";
import { manifesto, stats } from "./content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = animate(count, value, { duration: still ? 0 : 1.8, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {text}
    </motion.span>
  );
}

export function Manifesto() {
  return (
    <section id="about" data-nav="light" className="relative bg-paper pb-24 pt-20 text-ink md:pb-40 md:pt-32">
      <Container>
        <Eyebrow index="01" className="mb-8 text-brand md:mb-12">
          About Untapd
        </Eyebrow>
        <ScrubText text={manifesto} />

        <div className="mt-20 grid gap-10 md:mt-36 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-5 md:col-start-2">
            <h2 className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.025em] md:text-[2.75rem]">
              We don&rsquo;t operate like an agency.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5 md:col-start-8">
            <p className="text-pretty text-base leading-relaxed text-ink/75 md:text-lg">
              We operate as an extension of your leadership team, combining strategy, execution, and ecosystem under one
              roof. We help startups and service-based businesses create predictable growth by building scalable inbound
              acquisition systems powered by branding, content, SEO, and performance marketing.
            </p>
            <ArrowLink href="/vcmo" className="mt-7 text-brand">
              Learn about vCMO
            </ArrowLink>
          </Reveal>
        </div>

        <dl className="mt-20 grid border-t border-ink/15 md:mt-32 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-6 md:block md:border-b-0 md:border-l md:px-6 md:pb-2 md:pt-6 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="order-2 text-sm text-ink/70 md:mb-12 md:block">{stat.label}</dt>
              <dd className="font-display text-[clamp(3.5rem,9.5vw,10rem)] font-medium leading-none tracking-[-0.05em]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
