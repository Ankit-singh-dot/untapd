"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode, useRef, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function useMedia(query: string) {
  return useSyncExternalStore(
    (notify) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", notify);
      return () => list.removeEventListener("change", notify);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const useReducedMotion = () => useMedia("(prefers-reduced-motion: reduce)");

/**
 * Scroll-linked value that holds `from` before the window [start, end] and `to` after it.
 * framer-motion hands opacity and transforms on page-pinned scroll to a browser animation, which
 * eases back to the base style outside a partial range, so the range always has to span 0 to 1.
 */
export function useScrollWindow<T extends number | string>(progress: MotionValue<number>, start: number, end: number, from: T, to: T) {
  const input = [0, Math.max(start, 0.0001), Math.min(end, 0.9999), 1];
  return useTransform(progress, input, [from, from, to, to] as T[]);
}

/** Page gutter + max width shared by every section. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1680px] px-5 md:px-10", className)}>{children}</div>;
}

export function Eyebrow({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-xs font-medium tracking-wide", className)}>
      {index && <span className="tabular-nums opacity-60">{index}</span>}
      {index && <span aria-hidden className="h-px w-6 bg-current opacity-40" />}
      <span>{children}</span>
    </p>
  );
}

/** Lines rise from behind a mask as they enter the viewport. Pass one node per line. */
export function Lines({ lines, className, delay = 0 }: { lines: ReactNode[]; className?: string; delay?: number }) {
  return (
    // The observer sits on the wrapper: the lines themselves start clipped, so they never intersect.
    <motion.span className={cn("block", className)} initial="hidden" whileInView="shown" viewport={{ once: true, margin: "-8%" }}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-clip pb-[0.14em] -mb-[0.14em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "115%" },
              shown: { y: 0, transition: { duration: 1.1, ease: EASE, delay: delay + i * 0.08 } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function Word({ word, index, total, progress }: { word: string; index: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.14, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

/** Large statement whose words light up one by one as it scrolls through the viewport. */
export function ScrubText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.45"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className="font-display text-[clamp(1.9rem,5vw,5.75rem)] font-medium leading-[1.04] tracking-[-0.035em]">
      {reduced ? text : words.map((word, i) => <Word key={i} word={word} index={i} total={words.length} progress={scrollYProgress} />)}
    </p>
  );
}

/** Text link with an arrow that slides out of its box on hover. */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-2.5 text-sm font-medium", className)}>
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-expo group-hover:bg-[length:0%_1px]">
        {children}
      </span>
      <span aria-hidden className="relative block size-4 overflow-hidden">
        <ArrowUpRight className="absolute inset-0 size-4 transition-transform duration-500 ease-expo group-hover:-translate-y-full group-hover:translate-x-full" />
        <ArrowUpRight className="absolute inset-0 size-4 -translate-x-full translate-y-full transition-transform duration-500 ease-expo group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </Link>
  );
}

/** Solid pill CTA. */
export function PillButton({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "brand";
  className?: string;
}) {
  return (
    <div className={cn("inline-block", className)}>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-medium transition-colors duration-300",
          tone === "light" ? "bg-paper text-ink" : "bg-brand text-white",
        )}
      >
        {children}
        <span
          aria-hidden
          className={cn(
            "grid size-9 place-items-center rounded-full transition-transform duration-500 ease-expo group-hover:rotate-45",
            tone === "light" ? "bg-brand text-white" : "bg-paper text-brand",
          )}
        >
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
    </div>
  );
}
