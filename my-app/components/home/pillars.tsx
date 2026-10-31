"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { ArrowLink, Container, Eyebrow, Lines, Reveal, useMedia } from "@/components/shared/primitives";
import { brandCapabilities, filmOpportunities, filmPosters, filmWork, vcmoScope } from "./content";

/**
 * Full-screen panel that pins on large screens. The bottom margin is the dwell: 60svh of scroll where
 * the panel holds still to be read, before the next one slides over it and it recedes.
 */
function Panel({ nav, className, children, last }: { nav: "light" | "dark"; className: string; children: ReactNode; last?: boolean }) {
  // Sticky elements report a moving offset, so progress is measured from a static marker in the flow.
  const marker = useRef<HTMLDivElement>(null);
  const wide = useMedia("(min-width: 1024px)");
  const { scrollYProgress } = useScroll({ target: marker, offset: ["0.6 0", "1.6 0"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, wide && !last ? 0.93 : 1]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, last ? 0 : 0.55]);

  return (
    <>
      <div ref={marker} aria-hidden className="-mb-[100svh] h-svh" />
      <div data-nav={nav} className={`lg:sticky lg:top-0 lg:h-svh ${last ? "" : "lg:mb-[60svh]"}`}>
        <motion.div style={{ scale }} className={`relative flex min-h-svh flex-col overflow-clip rounded-t-[1.75rem] pb-14 pt-24 lg:h-full lg:pb-10 lg:pt-24 ${className}`}>
          {children}
          <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 hidden bg-ink lg:block" />
        </motion.div>
      </div>
    </>
  );
}

function ScopeColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-3 border-b border-white/30 pb-2 text-xs font-medium tracking-wide text-white/80">{title}</h4>
      <ul className="space-y-1 text-[15px] leading-snug">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Pillars() {
  return (
    <section id="services" aria-label="What we do" className="relative bg-ink">
      <Container className="pb-16 pt-10 text-white md:pb-24 md:pt-6">
        <Eyebrow index="03" className="mb-5 text-white/80">
          What we do
        </Eyebrow>
        <h2 className="font-display text-[clamp(2.25rem,6vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.04em]">
          <Lines lines={["Three pillars.", <span key="b" className="font-serif font-normal italic tracking-[-0.03em]">One growth engine.</span>]} />
        </h2>
      </Container>

      {/* 01 — vCMO: the boardroom. Pure brand colour, a structured table of responsibility. */}
      <Panel nav="dark" className="bg-brand text-white">
        <Container className="flex flex-1 flex-col justify-between gap-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <Eyebrow index="01" className="mb-5 text-white/85">
                Virtual CMO
              </Eyebrow>
              <h3 className="font-display text-[min(30vw,40svh)] font-medium leading-[0.86] tracking-[-0.05em] lg:text-[min(23vw,40svh)]">vCMO</h3>
            </div>
            <p className="mt-1 hidden max-w-xs text-right font-serif text-2xl italic leading-tight md:block lg:text-[2rem]">
              A CMO without the overhead.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <p className="max-w-md text-pretty text-base leading-relaxed text-white/90 lg:text-lg">
                Every client receives a dedicated vCMO: a single point of accountability for all marketing, working
                directly with founders, leadership, internal teams and external agencies.
              </p>
              <ArrowLink href="/vcmo" className="mt-6">
                Explore vCMO
              </ArrowLink>
            </div>
            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
              {vcmoScope.map((column) => (
                <ScopeColumn key={column.title} {...column} />
              ))}
            </div>
          </div>
        </Container>
      </Panel>

      {/* 02 — Brand Marketing: the studio. Bright paper, the work itself on the wall. */}
      <Panel nav="light" className="bg-white text-ink">
        <Container className="grid flex-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col justify-between gap-10 lg:col-span-7">
            <div>
              <Eyebrow index="02" className="mb-5 text-brand">
                Building brands customers remember
              </Eyebrow>
              <h3 className="font-display text-[clamp(3.25rem,8.2vw,9.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                Brand
                <br />
                Marketing
              </h3>
            </div>
            <div>
              <p className="mb-6 max-w-lg text-pretty text-base leading-relaxed text-ink/80 lg:text-lg">
                Brand growth isn&rsquo;t achieved through isolated campaigns. It&rsquo;s a system.
              </p>
              <dl className="grid gap-x-6 gap-y-5 border-t border-ink/15 pt-5 sm:grid-cols-2 xl:grid-cols-4">
                {brandCapabilities.map((capability) => (
                  <div key={capability.title}>
                    <dt className="font-medium">{capability.title}</dt>
                    <dd className="mt-1 text-sm leading-snug text-ink/70">{capability.desc}</dd>
                  </div>
                ))}
              </dl>
              <ArrowLink href="/brand-marketing" className="mt-6 text-brand">
                Explore Brand Marketing
              </ArrowLink>
            </div>
          </div>
          <figure className="flex min-h-0 flex-col justify-end lg:col-span-5">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-paper">
              <Image
                src="/images/extracted/page_18_img_1.png"
                alt="The Kitdor brand identity system: logo, colour, type and packaging"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-2.5 flex justify-between text-xs text-ink/70">
              <span>Kitdor — brand identity</span>
              <span>A curated kitchen marketplace</span>
            </figcaption>
          </figure>
        </Container>
      </Panel>

      {/* 03 — In-Film: the cinema. Lights down, posters up. */}
      <Panel last nav="dark" className="bg-black text-white">
        <Container className="grid flex-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col justify-between gap-10 lg:col-span-6">
            <div>
              <Eyebrow index="03" className="mb-5 text-white/85">
                Cultural integration
              </Eyebrow>
              <h3 className="font-display text-[clamp(3.25rem,8.2vw,9.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                In-Film
                <br />
                <span className="font-serif font-normal italic tracking-[-0.03em]">Branding</span>
              </h3>
            </div>
            <div>
              <p className="mb-6 max-w-xl text-pretty text-lg leading-snug lg:text-2xl">
                Traditional ads get ignored. Cultural integration gets remembered.
              </p>
              <ul className="flex flex-wrap gap-2">
                {filmOpportunities.map((item) => (
                  <li key={item} className="rounded-full border border-white/30 px-3.5 py-1.5 text-[13px]">
                    {item}
                  </li>
                ))}
              </ul>
              <ArrowLink href="/in-film" className="mt-6">
                Explore In-Film
              </ArrowLink>
            </div>
          </div>
          <div className="grid min-h-0 grid-cols-6 content-end gap-2.5 lg:col-span-6">
            {filmPosters.map((poster, i) => (
              <Reveal key={poster.src} delay={i * 0.1} className="col-span-3">
                <figure>
                  <div className="relative aspect-[4/5] max-h-[46svh] w-full overflow-hidden rounded-md bg-white/5 max-lg:max-h-none">
                    <Image src={poster.src} alt={poster.alt} fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover object-top" />
                  </div>
                  <figcaption className="mt-1.5 text-xs text-white/75">{poster.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
            {filmWork.map((work, i) => (
              <Reveal key={work.src} delay={0.15 + i * 0.08} className="col-span-2">
                <figure>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white/5">
                    <Image src={work.src} alt={work.alt} fill sizes="(min-width: 1024px) 16vw, 33vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-1.5 text-xs text-white/75">{work.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Panel>
    </section>
  );
}
