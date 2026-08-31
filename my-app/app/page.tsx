"use client";

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

const brandImages = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 21, 22, 23, 24];

const teamMembers = [
  { name: "Mahek Solanki", role: "Founder & CEO", img: "/images/team/team_2.jpeg" },
  { name: "Hrithish Raj", role: "Business Development", img: "/images/team/team_4.jpeg" },
  { name: "Bhavya Sharma", role: "Graphic Designer", img: "/images/team/team_6.png" },
  { name: "Bhavya Agarwal", role: "Brand Strategist", img: "/images/team/team_1.jpeg" },
  { name: "Abbas Bharmal", role: "Digital Marketing", img: "/images/team/team_3.jpeg" },
  { name: "Tanya Dhamija", role: "Social Media", img: "/images/team/team_5.jpeg" },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function MarqueeText({ text, speed = 20 }: { text: string; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="inline-flex"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[12vw] md:text-[10vw] font-black tracking-tighter text-foreground/[0.03] uppercase mr-[4vw] select-none">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroClip = useTransform(heroProgress, [0, 1], ["inset(0%)", "inset(5% 3% round 2rem)"]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.92]);

  return (
    <main className="min-h-screen bg-background" ref={containerRef}>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative h-[100vh] overflow-hidden bg-brand">
        <motion.div
          style={{ clipPath: heroClip, scale: heroScale }}
          className="absolute inset-0 bg-brand flex flex-col justify-end overflow-hidden origin-center"
        >
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
          />

          {/* Floating Abstract 3D Objects */}
          <motion.div
            animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[5%] md:right-[15%] w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden opacity-40 mix-blend-screen blur-[2px] pointer-events-none"
          >
            <Image src="/sphere.jpg" alt="Abstract" fill className="object-cover" unoptimized />
          </motion.div>

          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] left-[-5%] md:left-[5%] w-64 h-64 md:w-[400px] md:h-[400px] rounded-[4rem] overflow-hidden opacity-30 mix-blend-screen blur-[4px] pointer-events-none"
          >
            <Image src="/blue_glass.jpg" alt="Abstract" fill className="object-cover" unoptimized />
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] left-[20%] w-24 h-24 md:w-40 md:h-40 rounded-[2rem] overflow-hidden opacity-50 mix-blend-screen blur-[1px] pointer-events-none hidden md:block"
          >
            <Image src="/white_cube.jpg" alt="Abstract" fill className="object-cover" unoptimized />
          </motion.div>

          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Micro Typography / HUD */}
          <div className="absolute top-24 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] pointer-events-none z-20">


          </div>

          {/* Main Hero Content */}
          <div className="max-w-[1400px] mx-auto w-full relative z-10 px-6 md:px-12 pb-16 md:pb-24">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8 md:mb-12">
                <div className="w-8 h-[1px] bg-white/40" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/60">
                  Untapd
                </span>
              </div>

              <div className="relative">
                {/* Massive Watermark behind text */}
                <span className="absolute -top-12 -left-4 text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none pointer-events-none select-none hidden md:block">
                  NEXT
                </span>

                <h1 className="text-[12vw] md:text-[8vw] font-black tracking-[-0.04em] leading-[0.85] text-white mb-8 md:mb-12 relative z-10">
                  Your next best<br />
                  <span className="inline-block relative">
                    marketing
                    <motion.span
                      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                      className="absolute bottom-1 md:bottom-3 left-0 w-full h-[0.15em] bg-white/20 origin-left"
                    />
                  </span><br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 italic font-serif lowercase tracking-tight">decision.</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end">
                <div className="md:col-span-5">
                  <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed max-w-md">
                    Strategic marketing leadership that builds predictable growth systems — not short-term wins. We partner with ambitious founders to scale revenue and build category-defining brands.
                  </p>
                </div>

                <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center gap-6 md:justify-end">
                  {/* Glassmorphism Stat Card */}
                  <div className="hidden lg:flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl mr-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white font-black text-lg">3.8×</span>
                    </div>
                    <div>
                      <span className="block text-white text-sm font-bold">Average ROI</span>
                      <span className="block text-white/40 text-[10px] uppercase tracking-wider">Across portfolio</span>
                    </div>
                  </div>

                  <Link href="/case-studies" className="group flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider hover:scale-105 transition-transform">
                    View Our Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Infinite Ticker */}
          <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden flex">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex whitespace-nowrap">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 px-10">
                  Brand Strategy ✦ Growth Marketing ✦ In-Film Integration ✦ SEO & Organic ✦
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══ SCROLLING STATS BAR ═══ */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-background border-b border-foreground/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {[
            { val: 40, suffix: "+", label: "Brands Partnered" },
            { val: 8, suffix: "+", label: "Industries Served" },
            { val: 100, suffix: "%", label: "Outcome-Obsessed" },
          ].map((stat, i) => (
            <div key={i} className="flex items-baseline gap-3 group">
              <span className="text-6xl md:text-8xl font-black tracking-tighter text-foreground">
                <AnimatedCounter target={stat.val} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/25 max-w-[100px] leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ABOUT — OVERSIZED TYPOGRAPHY ═══ */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-background relative overflow-hidden">
        <MarqueeText text="Think Beyond · " speed={25} />
        <div className="max-w-[1400px] mx-auto relative z-10 -mt-16 md:-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-[3.5rem] font-black tracking-tight leading-[1.1] text-foreground"
              >
                We partner with ambitious brands to solve complex challenges{" "}
                <span className="text-foreground/15">— uncover new opportunities, build strategies that drive measurable results.</span>
              </motion.h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="border-l-2 border-brand pl-6">
                <p className="text-sm text-foreground/50 font-medium leading-relaxed mb-6">
                  We don't operate like an agency. We operate as an extension of your leadership team — combining strategy, execution, and ecosystem under one roof.
                </p>
                <Link href="/vcmo" className="text-sm font-bold text-brand flex items-center gap-2 hover:gap-3 transition-all">
                  Learn about vCMO <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BRAND MARQUEE ═══ */}
      <section className="py-10 bg-foreground overflow-hidden">
        <div className="relative w-full flex overflow-x-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex space-x-14 md:space-x-20 items-center whitespace-nowrap pl-14 md:pl-20"
          >
            {[...brandImages, ...brandImages].map((imgNum, i) => (
              <div key={i} className="relative w-24 h-10 opacity-30 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0">
                <Image src={`/images/brands/page_3_img_${imgNum}.png`} alt="Brand" fill className="object-contain invert" unoptimized />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FOUNDER SPOTLIGHT ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden group"
            >
              <Image src="/images/team/founder.jpeg" alt="Mahek Solanki" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-bold">Mahek Solanki</p>
                <p className="text-white/40 text-xs font-medium">Founder & CEO</p>
              </div>
            </motion.div>

            {/* Quote + Details */}
            <div className="md:col-span-7 flex flex-col justify-between py-4 md:py-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/20 block mb-6">The Vision</span>
                <blockquote className="text-2xl md:text-4xl font-black tracking-tight text-foreground leading-[1.2] mb-8">
                  &ldquo;We built Untapd to give startups the senior marketing brainpower they need —
                  <span className="text-foreground/20"> without the overhead they can't afford.&rdquo;</span>
                </blockquote>
              </div>

              {/* Inline Stats */}
              <div className="grid grid-cols-3 gap-px bg-foreground/5 rounded-xl overflow-hidden">
                {[
                  { val: "3.8×", label: "Avg ROI" },
                  { val: "+240%", label: "Organic Growth" },
                  { val: "₹0.17", label: "Lowest CPL" },
                ].map((s, i) => (
                  <div key={i} className="bg-background p-6 text-center">
                    <div className="text-xl md:text-2xl font-black tracking-tighter text-foreground">{s.val}</div>
                    <p className="text-[10px] text-foreground/25 font-semibold mt-1 uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — BENTO ═══ */}
      <section id="services" className="py-24 md:py-36 px-6 md:px-12 bg-surface overflow-hidden">
        <div className="max-w-[1400px] mx-auto mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">What We Do</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
                Three pillars.<br />
                <span className="text-foreground/15">One growth engine.</span>
              </h2>
            </div>
            <Link href="/case-studies" className="text-sm text-foreground/30 font-semibold flex items-center gap-2 hover:text-brand transition-colors">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <BentoGrid />
        </div>
      </section>

      {/* ═══ OUTCOMES — HORIZONTAL LIST ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">Outcomes</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-16">
            We help brands.
          </h2>
          <div className="space-y-0">
            {[
              "Scale revenue",
              "Improve customer acquisition",
              "Build stronger brand recall",
              "Create long-term enterprise value",
              "Unlock strategic partnerships",
              "Optimize marketing budgets"
            ].map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group flex items-center justify-between py-6 border-b border-foreground/5 hover:pl-4 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-foreground/10 tracking-wider w-8">0{i + 1}</span>
                  <span className="text-lg md:text-2xl font-bold text-foreground group-hover:text-brand transition-colors">{outcome}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-foreground/10 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM — STAGGERED ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">The Team</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                Builders behind the brand.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-default"
              >
                <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-bold">{member.name}</p>
                  <p className="text-white/50 text-[10px] font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[30vw] font-black text-white/[0.02] tracking-tighter">U</span>
        </div>
        <div className="max-w-[800px] mx-auto text-center z-10 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]"
          >
            Most partners focus on activities. We focus on outcomes.
          </motion.h2>
          <p className="text-sm text-white/35 font-medium max-w-md mx-auto mb-10 leading-relaxed">
            Help founders build category-defining companies through strategic leadership, exceptional execution, and ecosystem-driven growth.
          </p>
          <Link href="#contact" className="group inline-flex items-center gap-2 bg-white text-brand px-7 py-3.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-2xl">
            Let's build together <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
