"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, Lines, PillButton, Reveal } from "./primitives";

/** Closing call to action. Arrives over the horizon curve, on whatever colour came before it. */
export function PageCta({
  lines,
  body,
  button,
  over = "bg-paper",
}: {
  lines: ReactNode[];
  body?: string;
  button: string;
  over?: string;
}) {
  return (
    <div className={over}>
      <div aria-hidden className="h-[9vw] rounded-t-[50%_100%] bg-brand" />
      <section data-nav="dark" className="bg-brand pb-24 pt-10 text-white md:pb-40 md:pt-16">
        <Container>
          <h2 className="font-display text-[clamp(2.75rem,9vw,11rem)] font-medium leading-[0.96] tracking-[-0.045em]">
            <Lines lines={lines} />
          </h2>
          <Reveal delay={0.1} className="mt-10 flex flex-col items-start gap-8 md:mt-16 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">{body}</p>
            <PillButton href="#contact" className="shrink-0">
              {button}
            </PillButton>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

/** Serif italic accent used for the second voice in headlines. */
export function Accent({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("font-serif font-normal italic tracking-[-0.03em]", className)}>{children}</span>;
}
