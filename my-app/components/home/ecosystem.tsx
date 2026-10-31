"use client";

import { ArrowLink, Container, Eyebrow, Lines, Reveal } from "@/components/shared/primitives";
import { advisors, ecosystem } from "./content";

/** Six benefits orbiting a shared centre: the ecosystem drawn as what it is. */
export function Orbit() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[34rem]">
      {[100, 68, 36].map((size) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
          style={{ width: `${size}%`, height: `${size}%` }}
        />
      ))}
      <div className="orbit absolute inset-0">
        {ecosystem.map((_, i) => {
          const angle = (i / ecosystem.length) * Math.PI * 2 - Math.PI / 2;
          const radius = i % 2 === 0 ? 50 : 34;
          return (
            <span
              key={i}
              className="absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs font-medium tabular-nums text-brand"
              style={{ left: `${(50 + Math.cos(angle) * radius).toFixed(3)}%`, top: `${(50 + Math.sin(angle) * radius).toFixed(3)}%` }}
            >
              <span className="orbit-counter block">0{i + 1}</span>
            </span>
          );
        })}
      </div>
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-xl italic md:text-2xl">you</p>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section id="ecosystem" data-nav="dark" className="overflow-x-clip rounded-t-[1.75rem] bg-brand py-20 text-white md:py-32">
      <Container>
        <Eyebrow index="08" className="mb-6 text-white/85">
          The Untapd ecosystem
        </Eyebrow>
        <h2 className="max-w-[16ch] font-display text-[clamp(2.75rem,8vw,9rem)] font-medium leading-[0.94] tracking-[-0.045em]">
          <Lines lines={["You join more", <span key="b" className="font-serif font-normal italic tracking-[-0.03em]">than an agency.</span>]} />
        </h2>

        <div className="mt-14 grid items-center gap-12 md:mt-24 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <Orbit />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="mb-6 text-pretty text-lg leading-snug md:text-2xl">When you join Untapd, you join a growth ecosystem.</p>
            <ol className="border-b border-white/25">
              {ecosystem.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 border-t border-white/25 py-3.5 text-base md:text-lg">
                  <span className="text-xs tabular-nums text-white/80">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20 md:mt-32">
          <Reveal>
            <h3 className="font-display text-3xl font-medium tracking-[-0.03em] md:text-5xl">A network of industry leaders.</h3>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85">
              Our advisors bring decades of experience across FMCG, Telecom, Hospitality, Technology, Startup Ecosystem,
              and Consumer Brands.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/25 md:grid-cols-3">
            {advisors.map((advisor) => (
              <li key={advisor.name} className="flex flex-col justify-between gap-12 bg-brand p-6 md:min-h-64 md:p-8">
                <p className="font-display text-2xl font-medium tracking-[-0.02em] md:text-3xl">{advisor.name}</p>
                <div>
                  <p className="text-sm font-medium">{advisor.role}</p>
                  <p className="mt-1 text-sm leading-snug text-white/85">{advisor.focus}</p>
                </div>
              </li>
            ))}
          </ul>
          <ArrowLink href="/ecosystem" className="mt-8">
            Explore the ecosystem
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
