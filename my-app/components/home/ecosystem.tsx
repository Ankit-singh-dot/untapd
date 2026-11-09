"use client";

import { AnimatePresence, motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLink, Container, EASE, Eyebrow, Lines, Reveal, useMedia, useReducedMotion } from "@/components/shared/primitives";
import { advisors, ecosystem, ecosystemPerks } from "./content";

/** Six benefits orbiting a shared centre: the ecosystem drawn as what it is. */
export function Orbit() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[34rem]">
      {[100, 68, 36].map((size) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
          style={{ width: `${size}%`, height: `${size}%` }}
        />
      ))}
      <div className="orbit absolute inset-0">
        {ecosystem.map((_, i) => {
          const angle = (i / ecosystem.length) * Math.PI * 2 - Math.PI / 2;
          const radius = i % 2 === 0 ? 50 : 34;
          return (
            <span
              key={i}
              className="absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs font-medium tabular-nums text-brand"
              style={{ left: `${(50 + Math.cos(angle) * radius).toFixed(3)}%`, top: `${(50 + Math.sin(angle) * radius).toFixed(3)}%` }}
            >
              <span className="orbit-counter block">0{i + 1}</span>
            </span>
          );
        })}
      </div>
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-xl italic md:text-2xl">you</p>
    </div>
  );
}

const COUNT = ecosystemPerks.length;
/** Steps 0–6 bring the six benefits in one by one; 6–6.8 is the payoff, where they join into a network. */
const LAST = COUNT + 0.8;

/** Where each benefit settles, in % of the stage: alternating outer and middle rings. */
const spots = ecosystemPerks.map((_, i) => {
  const angle = (i / COUNT) * Math.PI * 2 - Math.PI / 2;
  const radius = i % 2 === 0 ? 46 : 31;
  return { angle, radius, x: 50 + Math.cos(angle) * radius, y: 50 + Math.sin(angle) * radius };
});

const pad = (n: number) => String(n).padStart(2, "0");

/** One benefit: drifts in from outside the frame, settles on its ring and draws a spoke back to the centre. */
function Node({ i, step, spin, active }: { i: number; step: MotionValue<number>; spin: MotionValue<number>; active: boolean }) {
  const { angle, radius } = spots[i];
  const arrive = useTransform(step, [i, i + 0.75], [0, 1]);
  const ease = useTransform(arrive, (a) => 1 - Math.pow(1 - a, 3));
  const left = useTransform(ease, (a) => `${50 + Math.cos(angle) * radius * (1 + (1 - a) * 1.1)}%`);
  const top = useTransform(ease, (a) => `${50 + Math.sin(angle) * radius * (1 + (1 - a) * 1.1)}%`);
  const opacity = useTransform(arrive, [0, 0.35], [0, 1]);
  const upright = useTransform(spin, (r) => -r);
  // The label opens towards the centre, so it never runs off the edge of the stage.
  const right = Math.cos(angle) > 0.2;

  return (
    <motion.div style={{ left, top, opacity }} className="absolute size-0">
      <motion.div style={{ rotate: upright }} className="relative">
        <span
          className={`absolute top-1/2 flex -translate-y-1/2 items-center whitespace-nowrap rounded-full bg-white text-brand transition-all duration-700 ease-expo ${
            right ? "right-0 flex-row-reverse" : "left-0"
          } ${active ? `py-1.5 shadow-[0_0_40px_rgba(255,255,255,0.35)] ${right ? "pl-4 pr-1.5" : "pl-1.5 pr-4"}` : "p-0"}`}
          style={{ [right ? "marginRight" : "marginLeft"]: active ? "-1.5rem" : "-1.125rem" }}
        >
          <span
            className={`grid shrink-0 place-items-center rounded-full text-xs font-medium tabular-nums transition-all duration-700 ease-expo ${
              active ? "size-9 bg-brand text-white" : "size-9"
            }`}
          >
            {pad(i + 1)}
          </span>
          <span
            className={`overflow-hidden text-sm font-medium transition-[max-width,opacity,margin] duration-700 ease-expo ${
              active ? `max-w-48 opacity-100 ${right ? "mr-2" : "ml-2"}` : "max-w-0 opacity-0"
            }`}
          >
            {ecosystemPerks[i].short}
          </span>
        </span>
      </motion.div>
    </motion.div>
  );
}

function Spoke({ i, step }: { i: number; step: MotionValue<number> }) {
  const draw = useTransform(step, [i + 0.3, i + 0.9], [0, 1]);
  return (
    <motion.line
      x1={50}
      y1={50}
      x2={spots[i].x}
      y2={spots[i].y}
      style={{ pathLength: draw, opacity: draw }}
      stroke="white"
      strokeOpacity={0.45}
      strokeWidth={0.15}
    />
  );
}

/** Once all six are in, neighbours link up and the orbit becomes a network. */
function Bond({ i, step }: { i: number; step: MotionValue<number> }) {
  const from = spots[i];
  const to = spots[(i + 1) % COUNT];
  const draw = useTransform(step, [COUNT + i * 0.08, COUNT + 0.3 + i * 0.08], [0, 1]);
  return (
    <motion.line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      style={{ pathLength: draw }}
      stroke="white"
      strokeWidth={0.22}
    />
  );
}

function ProgressRow({ i, step, active }: { i: number; step: MotionValue<number>; active: boolean }) {
  const fill = useTransform(step, [i, i + 1], [0, 1]);
  return (
    <li className={`transition-colors duration-500 ${active ? "text-white" : "text-white/55"}`}>
      <span className="block pb-2 text-xs tabular-nums">
        {pad(i + 1)}
        <span className="sr-only"> {ecosystemPerks[i].title}</span>
      </span>
      <span className="block h-px bg-white/25">
        <motion.span style={{ scaleX: fill }} className="block h-full origin-left bg-white" />
      </span>
    </li>
  );
}

/** Pinned scene: scrolling pulls each benefit into orbit around "you", then wires them into one network. */
function Constellation() {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  const step = useTransform(scrollYProgress, [0.04, 0.94], [0, LAST]);
  const spin = useTransform(scrollYProgress, [0, 1], [-18, 30]);
  const core = useTransform(step, [0, LAST], [0.82, 1.12]);
  const [active, setActive] = useState(0);
  const [done, setDone] = useState(false);

  useMotionValueEvent(step, "change", (s) => {
    setActive(Math.min(COUNT - 1, Math.max(0, Math.floor(s))));
    setDone(s >= COUNT);
  });

  const perk = ecosystemPerks[active];

  return (
    <div ref={track} style={{ height: `${COUNT * 75 + 100}svh` }} className="relative">
      <div className="sticky top-0 flex h-svh items-center overflow-clip">
        <Container className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-7">
            <div className="relative mx-auto aspect-square w-full max-w-[min(100%,80svh)]">
              {/* Rings stay still; the constellation turns slowly inside them as you scroll. */}
              {[92, 62, 30].map((size) => (
                <div
                  key={size}
                  aria-hidden
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                  style={{ width: `${size}%`, height: `${size}%` }}
                />
              ))}
              <motion.div aria-hidden style={{ rotate: spin }} className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible">
                  {spots.map((_, i) => (
                    <Spoke key={i} i={i} step={step} />
                  ))}
                  {spots.map((_, i) => (
                    <Bond key={i} i={i} step={step} />
                  ))}
                </svg>
                {spots.map((_, i) => (
                  <Node key={i} i={i} step={step} spin={spin} active={!done && i === active} />
                ))}
              </motion.div>

              <motion.div
                style={{ scale: core }}
                className="absolute left-1/2 top-1/2 grid size-[22%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-[0_0_80px_rgba(255,255,255,0.25)]"
              >
                {/* A ripple leaves the centre each time something new joins. */}
                <motion.span
                  key={done ? "done" : active}
                  aria-hidden
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.4, ease: EASE }}
                  className="absolute inset-0 rounded-full border border-white"
                />
                <span className="font-serif text-[clamp(1.25rem,2.4vw,2.5rem)] italic">you</span>
              </motion.div>
            </div>
          </div>

          <div className="col-span-5 flex flex-col">
            <p className="mb-10 max-w-sm text-pretty text-lg leading-snug text-white/85">When you join Untapd, you join a growth ecosystem.</p>

            <p className="mb-4 flex items-baseline gap-2 font-display font-medium tracking-[-0.04em]">
              <span className="text-[clamp(3rem,5vw,5.5rem)] leading-none tabular-nums">{done ? pad(COUNT) : pad(active + 1)}</span>
              <span className="text-xl text-white/55">/ {pad(COUNT)}</span>
            </p>

            <div className="relative h-[2.1em] overflow-clip font-display text-[clamp(2rem,3.4vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.035em]">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.h3
                  key={done ? "done" : active}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-105%" }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="absolute inset-x-0 top-0 text-balance"
                >
                  {done ? (
                    <>
                      All of it, <span className="font-serif font-normal italic tracking-[-0.02em]">around you.</span>
                    </>
                  ) : (
                    perk.title
                  )}
                </motion.h3>
              </AnimatePresence>
            </div>

            <AnimatePresence initial={false} mode="wait">
              <motion.p
                key={done ? "done" : active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="mt-4 text-base text-white/80"
              >
                {done ? "Six doors, opened the day you start." : perk.sub}
              </motion.p>
            </AnimatePresence>

            <ol className="mt-12 grid grid-cols-6 gap-3" aria-label="Ecosystem benefits">
              {ecosystemPerks.map((item, i) => (
                <ProgressRow key={item.title} i={i} step={step} active={done || i === active} />
              ))}
            </ol>
          </div>
        </Container>
      </div>
    </div>
  );
}

/** Phones and reduced motion: the finished picture, no pinning. */
function StaticEcosystem() {
  return (
    <Container className="mt-14 grid items-center gap-12 md:mt-24 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-5">
        <Orbit />
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <p className="mb-6 text-pretty text-lg leading-snug md:text-2xl">When you join Untapd, you join a growth ecosystem.</p>
        <ol className="border-b border-white/25">
          {ecosystemPerks.map((item, i) => (
            <li key={item.title} className="flex items-baseline gap-5 border-t border-white/25 py-4">
              <span className="text-xs tabular-nums text-white/80">{pad(i + 1)}</span>
              <span>
                <span className="block text-base md:text-lg">{item.title}</span>
                <span className="mt-0.5 block text-sm text-white/70">{item.sub}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}

export function Ecosystem() {
  const reduced = useReducedMotion();
  const wide = useMedia("(min-width: 1024px)");

  return (
    <section id="ecosystem" data-nav="dark" className="overflow-x-clip rounded-t-[1.75rem] bg-brand py-20 text-white md:py-32">
      <Container>
        <Eyebrow index="08" className="mb-6 text-white/85">
          The Untapd ecosystem
        </Eyebrow>
        <h2 className="max-w-[16ch] font-display text-[clamp(2.75rem,8vw,9rem)] font-medium leading-[0.94] tracking-[-0.045em]">
          <Lines lines={["You join more", <span key="b" className="font-serif font-normal italic tracking-[-0.03em]">than an agency.</span>]} />
        </h2>
      </Container>

      {wide && !reduced ? <Constellation /> : <StaticEcosystem />}

      <Container>
        <div className="mt-20 md:mt-32">
          <Reveal>
            <h3 className="font-display text-3xl font-medium tracking-[-0.03em] md:text-5xl">A network of industry leaders.</h3>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85">
              Our advisors bring decades of experience across FMCG, Telecom, Hospitality, Technology, Startup Ecosystem,
              and Consumer Brands.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/25 md:grid-cols-3">
            {advisors.map((advisor) => (
              <li key={advisor.name} className="flex flex-col justify-between gap-12 bg-brand p-6 md:min-h-64 md:p-8">
                <p className="font-display text-2xl font-medium tracking-[-0.02em] md:text-3xl">{advisor.name}</p>
                <div>
                  <p className="text-sm font-medium">{advisor.role}</p>
                  <p className="mt-1 text-sm leading-snug text-white/85">{advisor.focus}</p>
                </div>
              </li>
            ))}
          </ul>
          <ArrowLink href="/ecosystem" className="mt-8">
            Explore the ecosystem
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
