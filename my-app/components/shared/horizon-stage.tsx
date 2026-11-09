"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Clean, full-screen hero section without the horizon bar.
 * Scrolls naturally into the next section with subtle parallax.
 */
export function HorizonStage({
  label,
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
  const { scrollYProgress: progress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const contentY = useTransform(progress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(progress, [0, 0.8], [1, 0.35]);

  return (
    <section
      ref={section}
      data-nav="dark"
      aria-label={label}
      className={cn("relative flex min-h-svh flex-col justify-between overflow-hidden text-white pb-10 pt-24 md:pb-14 md:pt-28 lg:pb-16", stageClassName)}
    >
      {backdrop}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 flex flex-1 flex-col justify-between">
        {children(progress)}
      </motion.div>
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
