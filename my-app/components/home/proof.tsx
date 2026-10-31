"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLink, Container, Eyebrow, Lines, useMedia, useReducedMotion } from "@/components/shared/primitives";
import { cases } from "./content";

function CaseCard({ item, index }: { item: (typeof cases)[number]; index: number }) {
  return (
    <article className="flex w-full shrink-0 flex-col overflow-hidden rounded-xl bg-white lg:h-full lg:w-[min(80vw,1280px)] lg:flex-row">
      <div className="flex flex-1 flex-col justify-between gap-10 p-6 md:p-8 lg:p-10">
        <header className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-medium tracking-[-0.02em] md:text-3xl">{item.brand}</h3>
          <p className="text-xs text-ink/70">
            <span className="tabular-nums">0{index + 1}</span> · {item.tag}
          </p>
        </header>
        <div>
          <p className="font-display text-[clamp(3.25rem,8.4vw,10rem)] font-medium leading-[0.95] tracking-[-0.05em] text-brand">{item.hero}</p>
          <p className="mt-2 text-base font-medium md:text-lg">{item.heroLabel}</p>
        </div>
        <div>
          <p className="mb-5 max-w-md text-pretty text-[15px] leading-relaxed text-ink/75">{item.line}</p>
          <dl className="grid grid-cols-3 gap-4 border-t border-ink/15 pt-4">
            {item.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse justify-end gap-0.5">
                <dt className="text-xs leading-snug text-ink/70">{metric.label}</dt>
                <dd className="font-display text-xl font-medium tracking-[-0.02em] md:text-2xl">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-black lg:aspect-auto lg:w-[42%]">
        <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-contain p-5 lg:p-8" />
      </div>
    </article>
  );
}

export function Proof() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const wide = useMedia("(min-width: 1024px)");
  const pinned = wide && !reduced;

  const distance = useMotionValue(0);
  const [height, setHeight] = useState<number>();
  const { scrollYProgress: progress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform([progress, distance], (values) => {
    const [p, d] = values as number[];
    return -p * d;
  });
  const bar = useTransform(progress, [0, 1], [0, 1]);

  useEffect(() => {
    if (!pinned || !track.current) return;
    const node = track.current;
    const measure = () => {
      const travel = node.scrollWidth - window.innerWidth;
      distance.set(travel);
      setHeight(travel + window.innerHeight);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned, distance]);

  return (
    <section ref={section} id="proof" data-nav="light" style={pinned ? { height } : undefined} className="relative bg-paper text-ink">
      <div className={pinned ? "sticky top-0 h-svh overflow-clip pb-8 pt-24" : "py-20"}>
        <motion.div
          ref={track}
          style={pinned ? { x } : undefined}
          className={pinned ? "flex h-full w-max gap-4 px-10" : "mx-auto flex max-w-3xl flex-col gap-4 px-5"}
        >
          <div className="flex shrink-0 flex-col justify-between gap-10 pb-6 lg:h-full lg:w-[min(46vw,720px)] lg:pr-10">
            <div>
              <Eyebrow index="04" className="mb-6 text-brand">
                Proof
              </Eyebrow>
              <h2 className="font-display text-[clamp(2.75rem,7vw,8rem)] font-medium leading-[0.94] tracking-[-0.045em]">
                <Lines lines={["Built for", "sustainable", <span key="g" className="font-serif font-normal italic tracking-[-0.03em]">growth.</span>]} />
              </h2>
            </div>
            <p className="max-w-md text-pretty text-base leading-relaxed text-ink/75">
              Over the years we&rsquo;ve worked with startups, consumer brands, technology companies, and emerging businesses
              across multiple sectors. Our focus has always remained the same: sustainable growth systems, not short-term
              marketing wins.
            </p>
          </div>

          {cases.map((item, i) => (
            <CaseCard key={item.brand} item={item} index={i} />
          ))}

          <div className="flex shrink-0 flex-col justify-end gap-6 py-6 lg:h-full lg:w-[34vw] lg:pl-10 lg:pb-6">
            <p className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.03em] lg:text-5xl">
              Well, there&rsquo;s a lot more to show.
            </p>
            <ArrowLink href="/case-studies" className="text-brand">
              View all case studies
            </ArrowLink>
          </div>
        </motion.div>

        {pinned && (
          <Container className="pointer-events-none absolute inset-x-0 bottom-3">
            <div aria-hidden className="h-px bg-ink/15">
              <motion.div style={{ scaleX: bar }} className="h-full origin-left bg-brand" />
            </div>
          </Container>
        )}
      </div>
    </section>
  );
}
