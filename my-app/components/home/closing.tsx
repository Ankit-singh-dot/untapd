"use client";

import { Container, Eyebrow, Lines, MagneticButton, Reveal } from "@/components/shared/primitives";

export function Closing() {
  return (
    <section data-nav="dark" className="bg-brand pb-24 text-white md:pb-40">
      <Container>
        <div className="border-t border-white/25 pt-20 md:pt-32">
          <Eyebrow className="mb-8 text-white/85">Final thought</Eyebrow>
          <h2 className="font-display text-[clamp(2.5rem,8.4vw,10rem)] font-medium leading-[0.96] tracking-[-0.045em]">
            <Lines
              lines={[
                "Most partners focus",
                "on activities.",
                <span key="o" className="font-serif font-normal italic tracking-[-0.03em]">
                  We focus on outcomes.
                </span>,
              ]}
            />
          </h2>
          <div className="mt-12 grid gap-8 md:mt-20 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-6">
              <p className="text-pretty text-base leading-relaxed text-white/90 md:text-lg">
                Our mission is simple: help founders and brands build category-defining companies through strategic
                leadership, exceptional execution, and ecosystem-driven growth.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 md:justify-self-end md:text-right">
              <p className="mb-5 text-pretty text-base leading-relaxed text-white/90">
                Stop guessing. It&rsquo;s just the tip of the iceberg. Let&rsquo;s connect over a call and show you how we can help make
                your brand one of the best in your industry.
              </p>
              <MagneticButton href="#contact">Let&rsquo;s build together</MagneticButton>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
