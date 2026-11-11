"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { EASE, Lines } from "@/components/shared/primitives";

const pages = [
  { href: "/vcmo", label: "vCMO" },
  { href: "/brand-marketing", label: "Brand Marketing" },
  { href: "/in-film", label: "In-Film" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ecosystem", label: "Ecosystem" },
];

const contacts = [
  { href: "mailto:mahek@thinkuntapd.com", label: "mahek@thinkuntapd.com" },
  { href: "tel:+917208198797", label: "+91 72081 98797" },
  { href: "https://www.thinkuntapd.com", label: "www.thinkuntapd.com" },
];

const viewport = { once: true, margin: "-10%" } as const;

/** Columns and list items fade up in a soft cascade. */
const group: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};
const groupLate: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

/** Wordmark words rise from behind their own mask, one after the other. Whole words keep the font's kerning. */
const words: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const word: Variants = {
  hidden: { y: "105%" },
  shown: { y: 0, transition: { duration: 1.5, ease: EASE } },
};

/** The mask is padded past the tight line box so ascenders, descenders and the italic overhang are never clipped. */
function MaskedWord({ children, className }: { children: string; className?: string }) {
  return (
    <span className="-my-[0.2em] -mx-[0.1em] inline-block overflow-clip px-[0.1em] py-[0.2em] align-bottom">
      <motion.span variants={word} className={`inline-block will-change-transform ${className ?? ""}`}>
        {children}
      </motion.span>
    </span>
  );
}

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  // Progress runs from the footer's top entering the viewport to the page's very bottom.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["22%", "0%"]);

  return (
    <footer ref={ref} id="contact" data-nav="dark" className="scroll-mt-0 overflow-clip bg-ink pt-20 text-white md:pt-32">
      <div className="mx-auto max-w-[1680px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.p
              className="mb-5 text-xs font-medium tracking-wide text-white/75"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 1, ease: EASE }}
            >
              Connect
            </motion.p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,5.5rem)] font-medium leading-[1] tracking-[-0.04em]">
              <Lines lines={["Let’s build together."]} delay={0.05} />
            </h2>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            >
              <a href="mailto:mahek@thinkuntapd.com" className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-ink">
                Start the conversation
                <span aria-hidden className="grid size-9 place-items-center rounded-full bg-brand text-white transition-transform duration-500 ease-expo group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </motion.div>
          </div>

          <motion.nav aria-label="Footer" className="md:col-span-2 md:col-start-8" variants={group} initial="hidden" whileInView="shown" viewport={viewport}>
            <motion.p variants={item} className="mb-4 text-xs font-medium tracking-wide text-white/75">
              Explore
            </motion.p>
            <ul className="space-y-2 text-sm">
              {pages.map((page) => (
                <motion.li key={page.href} variants={item}>
                  <Link href={page.href} className="underline-offset-4 hover:underline">
                    {page.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.div className="md:col-span-3" variants={groupLate} initial="hidden" whileInView="shown" viewport={viewport}>
            <motion.p variants={item} className="mb-4 text-xs font-medium tracking-wide text-white/75">
              Contact
            </motion.p>
            <ul className="space-y-2 text-sm">
              {contacts.map((contact) => (
                <motion.li key={contact.href} variants={item}>
                  <a href={contact.href} className="underline-offset-4 hover:underline">
                    {contact.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="relative mt-20 pt-4 text-xs text-white/70 md:mt-32">
          <motion.span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px origin-left bg-white/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: EASE }}
          />
          <motion.div
            className="flex justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          >
            <p>© {new Date().getFullYear()} Untapd. All rights reserved.</p>
            <p>@thinkuntapd</p>
          </motion.div>
        </div>
      </div>

      <motion.div style={{ y: markY }} className="will-change-transform">
        <motion.p
          aria-hidden
          className="mt-4 select-none whitespace-nowrap pb-[0.12em] text-center font-display text-[17.2vw] font-medium leading-[0.86] tracking-[-0.055em]"
          variants={words}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
        >
          <MaskedWord>Think</MaskedWord> <MaskedWord className="font-serif font-normal italic tracking-[-0.03em]">Beyond.</MaskedWord>
        </motion.p>
      </motion.div>
    </footer>
  );
}
