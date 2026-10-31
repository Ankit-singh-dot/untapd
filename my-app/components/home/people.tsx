"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Container, EASE, Eyebrow, Lines } from "@/components/shared/primitives";
import { team } from "./content";

export function People() {
  const frame = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "end start"] });
  const inset = useTransform(scrollYProgress, [0, 0.42], ["inset(12% 10% round 12px)", "inset(0% 0% round 12px)"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section data-nav="light" className="bg-paper pb-24 text-ink md:pb-40">
      <Container>
        <Eyebrow index="07" className="mb-8 text-brand">
          Leadership
        </Eyebrow>
        <blockquote>
          <p className="max-w-[20ch] font-display text-[clamp(2rem,5.4vw,6rem)] font-medium leading-[1.02] tracking-[-0.04em] md:max-w-[24ch]">
            &ldquo;We built Untapd to give startups the senior marketing brainpower they need,{" "}
            <span className="font-serif font-normal italic tracking-[-0.025em]">without the overhead they can&rsquo;t afford.&rdquo;</span>
          </p>
          <footer className="mt-6 text-sm">
            <cite className="not-italic">
              <span className="font-medium">Mahek Solanki</span>
              <span className="text-ink/70"> — Founder &amp; CEO</span>
            </cite>
          </footer>
        </blockquote>

        <motion.div ref={frame} style={{ clipPath: inset }} className="relative mt-12 aspect-[4/3] overflow-hidden md:mt-20 md:aspect-[2/1]">
          <motion.div style={{ y: imageY }} className="absolute -inset-y-[8%] inset-x-0">
            <Image
              src="/images/team/founder.jpeg"
              alt="Mahek Solanki presenting in front of the Untapd Think Beyond slide"
              fill
              sizes="100vw"
              className="object-cover object-[50%_40%]"
            />
          </motion.div>
        </motion.div>

        <div className="mt-20 grid gap-6 md:mt-32 md:grid-cols-12 md:items-end">
          <h2 className="font-display text-[clamp(2.25rem,4.6vw,5rem)] font-medium leading-[1] tracking-[-0.04em] md:col-span-7">
            <Lines lines={["Builders behind", "the brand."]} />
          </h2>
          <p className="text-pretty text-base leading-relaxed text-ink/75 md:col-span-5">
            Leadership that combines strategic foresight with execution rigor: a multidisciplinary team of strategists,
            marketers, creators, operators, and growth specialists.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-14 md:grid-cols-3 lg:grid-cols-6">
          {team.map((member, i) => (
            <motion.li
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.06 }}
            >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink/5">
                  <Image
                    src={member.img}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
                    style={{ objectPosition: member.position, transform: `scale(${member.zoom})`, transformOrigin: member.origin }}
                  />
                </div>
                <p className="mt-3 text-sm font-medium">{member.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-ink/70">{member.role}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
