"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container, EASE, Eyebrow, Lines, useReducedMotion } from "@/components/shared/primitives";
import { brandRoster } from "./content";

const sectors = ["Beauty & wellness", "Food & beverage", "Technology", "Fashion & eyewear", "Education", "Travel"];

/** Ticks up from 00 the first time it scrolls into view. */
function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => String(Math.round(v)).padStart(2, "0"));

  useEffect(() => {
    if (!inView) return;
    if (reduced) value.set(to);
    else animate(value, to, { duration: 1.8, ease: EASE });
  }, [inView, reduced, to, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {text}
    </motion.span>
  );
}

/**
 * Logos are sized by area rather than height, so a square crest and a long wordmark carry the same visual weight.
 * The result is a width as a share of the tile.
 */
function logoWidth(width: number, height: number) {
  return Math.min(80, Math.max(30, 34 * Math.sqrt(width / height)));
}

function Tile({ brand, index, reduced }: { brand: (typeof brandRoster)[number]; index: number; reduced: boolean }) {
  // Seven across on desktop: the wave runs corner to corner along the diagonals.
  const wave = (Math.floor(index / 7) + (index % 7)) * 0.06;

  return (
    <li className="group relative grid aspect-square place-items-center overflow-clip bg-paper transition-colors duration-500 ease-expo hover:bg-white md:aspect-[4/3]">
      <span className="absolute left-2.5 top-2 text-[10px] tabular-nums text-ink/35 transition-colors duration-500 group-hover:text-brand md:left-4 md:top-3.5 md:text-xs">
        {String(index + 1).padStart(2, "0")}
      </span>

      <motion.div
        className="relative"
        style={{ width: `${logoWidth(brand.width, brand.height)}%` }}
        variants={
          reduced
            ? undefined
            : {
                hidden: { opacity: 0, y: 28, scale: 0.92 },
                shown: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.1, ease: EASE, delay: wave } },
              }
        }
      >
        <Image
          src={`/images/brands/roster/${brand.slug}.png`}
          alt={brand.name}
          width={brand.width}
          height={brand.height}
          sizes="(min-width: 1024px) 12vw, (min-width: 768px) 20vw, 28vw"
          className="h-auto w-full opacity-85 transition-[opacity,scale] duration-500 ease-expo group-hover:scale-[1.04] group-hover:opacity-0"
        />
        <Image
          src={`/images/brands/roster/${brand.slug}-color.png`}
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 1024px) 12vw, (min-width: 768px) 20vw, 28vw"
          className="scale-95 object-contain opacity-0 transition-[opacity,scale] duration-500 ease-expo group-hover:scale-[1.04] group-hover:opacity-100"
        />
      </motion.div>

      <span className="absolute inset-x-4 bottom-3 hidden translate-y-2 truncate text-xs text-ink/60 opacity-0 transition duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100 md:block">
        {brand.name}
      </span>
    </li>
  );
}

export function Brands({ index = "04" }: { index?: string }) {
  const reduced = useReducedMotion();

  return (
    <section data-nav="light" className="bg-paper pb-20 pt-24 text-ink md:pb-28 md:pt-40">
      <Container className="mb-12 grid gap-10 md:mb-20 md:grid-cols-12 md:items-end md:gap-6">
        <div className="md:col-span-8">
          <Eyebrow index={index} className="mb-5 text-brand">
            Brands
          </Eyebrow>
          <h2 className="font-display text-[clamp(2.25rem,6vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.04em]">
            <Lines lines={["Brands we’ve", <span key="b">built <span className="font-serif font-normal italic tracking-[-0.02em]">with.</span></span>]} />
          </h2>
        </div>

        <div className="md:col-span-4">
          <p className="flex items-end gap-3 font-display font-medium leading-[0.8] tracking-[-0.05em] text-brand">
            <span className="text-[clamp(4.5rem,9vw,9.5rem)]">
              <Count to={brandRoster.length} />
            </span>
            <span className="pb-[0.35em] font-sans text-sm font-normal leading-tight tracking-normal text-ink/70">
              brands
              <br />
              and counting
            </span>
          </p>
          <p className="mt-6 text-pretty text-base leading-relaxed text-ink/75">
            Ambitious brands across industries — stronger identities, impactful campaigns, measurable growth.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Sectors">
            {sectors.map((sector) => (
              <li key={sector} className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70">
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container>
        <motion.ul
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "shown"}
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-3 gap-px border border-ink/15 bg-ink/15 md:grid-cols-4 lg:grid-cols-7"
        >
          {brandRoster.map((brand, i) => (
            <Tile key={brand.slug} brand={brand} index={i} reduced={reduced} />
          ))}
          {/* Three across on phones leaves a gap of two at the end; it closes the ledger instead of sitting empty. */}
          <li className="col-span-2 flex items-end bg-paper p-4 md:hidden">
            <p className="font-display text-2xl font-medium leading-none tracking-[-0.03em]">
              And <span className="font-serif font-normal italic">counting.</span>
            </p>
          </li>
        </motion.ul>
      </Container>
    </section>
  );
}
