"use client";

import { animate, motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollWindow } from "./primitives";

// The horizon is a fixed-size disc scaled to the viewport, so the GPU moves one
// modest texture rather than re-rastering a 4000px circle on every frame.
const DISC = 1600;

/**
 * The site's signature opening: a pinned stage whose horizon rises on load, then eclipses the
 * content on scroll and becomes the paper-coloured page below. Follow it with a bg-paper section.
 */
export function HorizonStage({
  label,
  height = "h-[220svh]",
  stageClassName = "bg-brand",
  backdrop,
  children,
}: {
  label: string;
  height?: string;
  stageClassName?: string;
  backdrop?: ReactNode;
  children: (progress: MotionValue<number>) => ReactNode;
}) {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const { scrollYProgress: progress } = useScroll({ target: section, offset: ["start start", "end end"] });

  const stageHeight = useMotionValue(900);
  const vmax = useMotionValue(1440);
  const rise = useMotionValue(0);
  const scale = useTransform(vmax, (v) => (v * 3) / DISC);

  // Where the top of the disc sits: below the fold, up to its resting limb, then past the top of the screen.
  const apex = useTransform([progress, rise, stageHeight, vmax], (values) => {
    const [p, r, h, v] = values as number[];
    const rest = h * 0.875;
    const entrance = h * 1.15 + (rest - h * 1.15) * r;
    const t = Math.min(p / 0.9, 1);
    return entrance + (-0.12 * v - entrance) * t ** 1.3;
  });

  useMotionValueEvent(apex, "change", (y) => {
    if (section.current) section.current.dataset.nav = y < -0.05 * vmax.get() ? "light" : "dark";
  });

  const contentY = useScrollWindow(progress, 0, 0.8, "0%", "-16%");

  useEffect(() => {
    const measure = () => {
      if (!stage.current) return;
      stageHeight.set(stage.current.clientHeight);
      vmax.set(Math.max(window.innerWidth, stage.current.clientHeight));
    };
    measure();
    window.addEventListener("resize", measure);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = animate(rise, 1, { duration: still ? 0 : 2.2, delay: still ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] });
    return () => {
      window.removeEventListener("resize", measure);
      controls.stop();
    };
  }, [stageHeight, vmax, rise]);

  return (
    <section ref={section} data-nav="dark" aria-label={label} className={cn("relative bg-paper", height)}>
      <div ref={stage} className={cn("sticky top-0 h-svh overflow-clip text-white", stageClassName)}>
        {backdrop}
        <motion.div style={{ y: contentY }} className="absolute inset-0 flex flex-col pb-[calc(12.5svh+1.75rem)] pt-24 md:pt-28 lg:pb-[calc(12.5svh+3rem)]">
          {children(progress)}
        </motion.div>
        <motion.div
          aria-hidden
          className="horizon absolute left-1/2 top-0 rounded-full bg-paper"
          style={{ width: DISC, height: DISC, marginLeft: -DISC / 2, y: apex, scale, originX: 0.5, originY: 0 }}
        />
      </div>
    </section>
  );
}

/** One masked headline line that rises on load. CSS-driven so it never waits for hydration. */
export function RiseLine({ children, delay = 0, serif }: { children: ReactNode; delay?: number; serif?: boolean }) {
  return (
    <span className="block overflow-clip pb-[0.13em] -mb-[0.13em]">
      <span className={cn("hero-rise block", serif && "font-serif font-normal italic tracking-[-0.03em]")} style={{ animationDelay: `${0.1 + delay}s` }}>
        {children}
      </span>
    </span>
  );
}
