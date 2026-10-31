"use client";

import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useVelocity } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Container, Eyebrow, Lines, useReducedMotion } from "@/components/shared/primitives";
import { brandLogos } from "./content";

function Logo({ id, width, height }: { id: number; width: number; height: number }) {
  return (
    <Image
      src={`/images/brands/mono/${id}.png`}
      alt=""
      width={width}
      height={height}
      sizes="160px"
      className="h-8 w-auto max-w-40 shrink-0 object-contain opacity-80 brightness-0 md:h-11 md:max-w-52"
    />
  );
}

/** Drifts on its own and picks up speed with the scroll, so the wall feels connected to the page. */
function MarqueeRow({ logos, direction }: { logos: [number, number, number][]; direction: 1 | -1 }) {
  const track = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 300 });

  useAnimationFrame((_, delta) => {
    const half = (track.current?.scrollWidth ?? 0) / 2;
    if (!half) return;
    const speed = 36 + Math.min(Math.abs(velocity.get()) * 0.12, 420);
    offset.current = (offset.current + (speed * delta) / 1000) % half;
    x.set(direction === 1 ? -offset.current : offset.current - half);
  });

  return (
    <div className="overflow-clip">
      <motion.div ref={track} style={{ x }} className="flex w-max items-center">
        {[0, 1].map((copy) =>
          logos.map(([id, width, height]) => (
            <div key={`${copy}-${id}`} className="flex h-20 items-center px-8 md:h-28 md:px-14">
              <Logo id={id} width={width} height={height} />
            </div>
          )),
        )}
      </motion.div>
    </div>
  );
}

export function Brands({ index = "06" }: { index?: string }) {
  const reduced = useReducedMotion();

  return (
    <section data-nav="light" className="bg-paper pb-24 text-ink md:pb-40">
      <Container className="mb-10 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Eyebrow index={index} className="mb-5 text-brand">
            Brands
          </Eyebrow>
          <h2 className="font-display text-[clamp(2.25rem,6vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.04em]">
            <Lines lines={["Brands we’ve", "built with."]} />
          </h2>
        </div>
        <p className="text-pretty text-base leading-relaxed text-ink/75 md:col-span-4">
          Ambitious brands across industries — stronger identities, impactful campaigns, measurable growth.
        </p>
      </Container>

      <p className="sr-only">
        Including Grubwala, Tripy, Kitdor, Mantraa, ONLY, Joyfull, Tender Fresh, Serumique, Teabox, Ghost Kitchens, Kala
        Emporium, Ivora, PhazeAI, Nova, Naulakha Naturals and Raasa.
      </p>
      {reduced ? (
        <Container className="flex flex-wrap items-center gap-x-12 gap-y-8">
          {brandLogos.flat().map(([id, width, height]) => (
            <Logo key={id} id={id} width={width} height={height} />
          ))}
        </Container>
      ) : (
        <div aria-hidden className="border-y border-ink/15">
          <MarqueeRow logos={brandLogos[0]} direction={1} />
          <div className="border-t border-ink/15">
            <MarqueeRow logos={brandLogos[1]} direction={-1} />
          </div>
        </div>
      )}
    </section>
  );
}
