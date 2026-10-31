"use client";

import { motion } from "framer-motion";
import { Container, EASE, Eyebrow } from "@/components/shared/primitives";
import { outcomes } from "./content";

/** A sentence that finishes itself: "We help brands" stays put while its six endings pass by. */
export function Outcomes() {
  return (
    <section data-nav="light" className="bg-paper py-24 text-ink md:py-40">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Eyebrow index="05" className="mb-5 text-brand">
              Outcomes
            </Eyebrow>
            <h2 className="font-serif text-[clamp(2.5rem,4.6vw,5rem)] font-normal italic leading-none tracking-[-0.02em]">We help brands</h2>
          </div>
        </div>
        <ol className="lg:col-span-8">
          {outcomes.map((outcome, i) => (
            <motion.li
              key={outcome}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="group flex items-baseline gap-4 border-t border-ink/15 py-5 transition-colors duration-300 last:border-b hover:text-brand md:gap-8 md:py-7"
            >
              <span className="w-6 shrink-0 text-xs tabular-nums text-ink/60 md:w-10">0{i + 1}</span>
              <span className="font-display text-[clamp(1.75rem,4.2vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.035em] transition-transform duration-700 ease-expo group-hover:translate-x-3">
                {outcome}
              </span>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
