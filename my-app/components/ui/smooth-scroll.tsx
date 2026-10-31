"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { ReactNode, useSyncExternalStore } from "react";

const reducedMotion = "(prefers-reduced-motion: reduce)";

function useReducedMotion() {
  return useSyncExternalStore(
    (notify) => {
      const list = window.matchMedia(reducedMotion);
      list.addEventListener("change", notify);
      return () => list.removeEventListener("change", notify);
    },
    () => window.matchMedia(reducedMotion).matches,
    () => false,
  );
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        wheelMultiplier: 1,
        smoothWheel: !reduced,
        autoRaf: true,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
