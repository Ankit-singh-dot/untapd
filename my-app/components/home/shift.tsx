"use client";

import { motion, MotionValue, useScroll } from "framer-motion";
import { Fragment, useRef } from "react";
import { Container, Eyebrow, useReducedMotion, useScrollWindow } from "@/components/shared/primitives";
import { shift } from "./content";

const ROW_TEXT = "font-display text-[clamp(1.6rem,4.7vw,5rem)] font-medium leading-[1.08] tracking-[-0.03em]";

function Row({ from, to, index, progress }: { from: string; to: string; index: number; progress: MotionValue<number> }) {
  // Rows resolve one after another across the pin, leaving a beat at the end to read the result.
  const start = (index / shift.length) * 0.88;
  const end = ((index + 1) / shift.length) * 0.88;
  const swap = start + (end - start) * 0.45;

  const strike = useScrollWindow(progress, start, swap, 0, 1);
  const oldY = useScrollWindow(progress, swap, end, "0%", "-115%");
  const newY = useScrollWindow(progress, swap, end, "115%", "0%");

  return (
    <li className="grid grid-cols-[2.5rem_1fr] items-baseline gap-2 border-t border-white/15 py-[clamp(0.6rem,1.7svh,1.25rem)] md:grid-cols-[5rem_1fr]">
      <span className="text-xs tabular-nums text-white/60">0{index + 1}</span>
      <div className={`grid overflow-clip pb-[0.1em] ${ROW_TEXT}`}>
        <motion.span style={{ y: oldY }} className="col-start-1 row-start-1 text-white/55">
          <span className="relative inline-block">
            <span className="sr-only">Not </span>
            {from}
            <motion.span aria-hidden style={{ scaleX: strike }} className="absolute inset-x-0 top-[55%] h-[0.05em] origin-left bg-white/70" />
          </span>
        </motion.span>
        <motion.span style={{ y: newY }} className="col-start-1 row-start-1">
          {to}
        </motion.span>
      </div>
    </li>
  );
}

function StaticComparison() {
  return (
    <dl className="grid gap-x-8 gap-y-4 md:grid-cols-2">
      <dt className="text-sm text-white/70 max-md:hidden">Traditional agencies</dt>
      <dd className="text-sm text-white/70 max-md:hidden">Growth partner</dd>
      {shift.map((row) => (
        <Fragment key={row.to}>
          <dt className={`${ROW_TEXT} text-white/55 line-through decoration-[0.05em]`}>{row.from}</dt>
          <dd className={ROW_TEXT}>{row.to}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

export function Shift({ index = "02" }: { index?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress: progress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const oldHeader = useScrollWindow(progress, 0.4, 0.5, "0%", "-110%");
  const newHeader = useScrollWindow(progress, 0.4, 0.5, "110%", "0%");
  const bar = useScrollWindow(progress, 0, 0.88, 0, 1);

  return (
    <div className="bg-paper">
      {/* The same horizon as the hero, now in ink: each big change of state arrives over a curve. */}
      <div aria-hidden className="h-[9vw] rounded-t-[50%_100%] bg-ink" />
      <section ref={ref} data-nav="dark" className={`relative bg-ink text-white ${reduced ? "py-20" : "h-[420svh]"}`}>
        <div className={reduced ? "" : "sticky top-0 flex h-svh flex-col justify-center overflow-clip pt-16"}>
          <Container>
            <div className="mb-[clamp(1.25rem,5svh,4rem)] flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow index={index} className="mb-4 text-white/80">
                  Why we&rsquo;re different
                </Eyebrow>
                <h2 className="font-display text-[clamp(1.25rem,2.4vw,2.5rem)] font-medium leading-tight tracking-[-0.02em]">
                  From tasks to <span className="font-serif font-normal italic">business outcomes.</span>
                </h2>
              </div>
              {!reduced && (
                <div className="grid overflow-clip text-sm md:text-right">
                  <motion.p style={{ y: oldHeader }} className="col-start-1 row-start-1 text-white/70">
                    The old way — Traditional agencies
                  </motion.p>
                  <motion.p style={{ y: newHeader }} className="col-start-1 row-start-1">
                    The Untapd way — Growth partner
                  </motion.p>
                </div>
              )}
            </div>

            {reduced ? (
              <StaticComparison />
            ) : (
              <>
                <ol className="border-b border-white/15">
                  {shift.map((row, i) => (
                    <Row key={row.to} {...row} index={i} progress={progress} />
                  ))}
                </ol>
                <div aria-hidden className="mt-4 h-px bg-white/10">
                  <motion.div style={{ scaleX: bar }} className="h-full origin-left bg-white" />
                </div>
              </>
            )}
          </Container>
        </div>
      </section>
    </div>
  );
}
