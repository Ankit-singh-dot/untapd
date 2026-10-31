"use client";

import { useLenis } from "lenis/react";
import { ReactNode, useLayoutEffect, useRef } from "react";

// Templates remount on navigation, so this stays false only for the very first page of a visit.
let navigated = false;

/** Lifts a brand-blue curtain off each new page, and starts it from the top. */
export default function Template({ children }: { children: ReactNode }) {
  const curtain = useRef<HTMLDivElement>(null);
  const isNavigation = useRef<boolean | null>(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    // The ref keeps React's double-run of effects in development from reading as a second visit.
    if (isNavigation.current !== null) return;
    isNavigation.current = navigated;
    navigated = true;
    if (!isNavigation.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    curtain.current?.animate(
      [{ clipPath: "inset(0 0 0 0)" }, { clipPath: "inset(0 0 0 0)", offset: 0.15 }, { clipPath: "inset(0 0 100% 0)" }],
      { duration: 850, easing: "cubic-bezier(0.76, 0, 0.24, 1)" },
    );
  }, []);

  useLayoutEffect(() => {
    if (isNavigation.current && !window.location.hash) lenis?.scrollTo(0, { immediate: true, force: true });
  }, [lenis]);

  return (
    <>
      <div ref={curtain} aria-hidden className="pointer-events-none fixed inset-0 z-[70] bg-brand [clip-path:inset(0_0_100%_0)]" />
      {children}
    </>
  );
}
