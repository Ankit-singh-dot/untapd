"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const cases = [
  {
    brand: "Grubwala", tag: "D2C · Food",
    desc: "Your everyday food partner — A high-impact D2C launch in the ultra-competitive Mumbai market.",
    problem: "A new D2C food brand entering a hyper competitive Mumbai market with absolutely no brand recognition, zero existing acquisition funnels, and severely limited onboarding automation which slowed down scaling.",
    solution: "We defined a sharp, localized brand strategy. Overhauled their paid acquisition to achieve a CPL as low as ₹0.17. Simultaneously, we built and automated a WhatsApp & email onboarding sequence using n8n to ensure seamless customer retention.",
    metrics: [ { val: "5,200+", label: "Downloads / 45 days" }, { val: "5×", label: "Daily order growth" }, { val: "₹8L", label: "MRR (from ₹2L)" } ],
    image: "/images/case-studies/grubwala.png",
    color: "bg-surface"
  },
  {
    brand: "Tripy", tag: "Travel · Community",
    desc: "Carving out a dedicated niche in a heavily saturated online travel booking category.",
    problem: "Entered a saturated travel market without clear positioning, resulting in weak brand recall, high customer acquisition costs, and poor retention against massive incumbents.",
    solution: "Repositioned Tripy entirely around the concept of group travel. Focused heavily on community-led growth, social-first content, and micro-influencer collaborations, completely eliminating the need for paid ads.",
    metrics: [ { val: "10K+", label: "Downloads at launch" }, { val: "19", label: "Influencers" }, { val: "₹0", label: "Paid ads" } ],
    image: "/images/case-studies/tripy.png",
    color: "bg-[#F9F9F9]"
  },
  {
    brand: "Kitdor", tag: "Marketplace",
    desc: "A curated kitchen marketplace designed for every kind of decision-maker in the household.",
    problem: "Faced a deeply fragmented category characterized by incredibly low buyer trust, scattered SKUs without a cohesive catalogue, and no clear distinguishing value proposition.",
    solution: "Executed a pivot to a D2C-first growth strategy. Positioned Kitdor as a highly trusted, curated kitchenware marketplace. Built a mission-led narrative that resonated with modern homeowners.",
    metrics: [ { val: "D2C", label: "First strategy" }, { val: "Trust", label: "Core pillar" } ],
    image: "/images/case-studies/kitdor.png",
    color: "bg-surface"
  },
  {
    brand: "Mantraa", tag: "Finance · SEO",
    desc: "A complete SEO & Website Revamp for an established business financial advisory firm.",
    problem: "Despite offering expert-led services, they suffered from a stagnant website, zero organic search engine presence, and a complete reliance on word-of-mouth for lead generation.",
    solution: "A targeted 6-month engagement involving a ground-up UX rebuild, technical SEO resolution, and a massive content push. Achieved a phenomenal 10x growth in high-intent organic traffic.",
    metrics: [ { val: "104", label: "Keywords ranked" }, { val: "1.01K", label: "Monthly clicks" }, { val: "10.3%", label: "Avg CTR" } ],
    image: "/blue_glass.jpg",
    color: "bg-[#F9F9F9]"
  },
  {
    brand: "Yalla Haji", tag: "Travel · Organic",
    desc: "Organic, faith-led growth for a highly specialized and niche travel brand.",
    problem: "Needed to build deep credibility, foster community, and drive discovery among a deeply trust-driven audience, without the ability to rely on traditional paid marketing pushes.",
    solution: "Established Yalla Haji as the premier trusted category voice. Built an engaged community through organic storytelling, resulting in strong brand recall and massive pre-launch anticipation.",
    metrics: [ { val: "26.7K", label: "Organic followers" }, { val: "4M+", label: "Users reached" }, { val: "10K+", label: "Pre-launch audience" } ],
    image: "/sphere.jpg",
    color: "bg-surface"
  },
  {
    brand: "Goready", tag: "Beauty · SEO",
    desc: "A transformative SEO revamp for your neighbourhood beauty parlour booking platform.",
    problem: "Struggling with exceptionally low organic traffic, poor search rankings across key service areas, weak off-page SEO, and an inability to capture local search intent.",
    solution: "Aggressively optimized all local service pages. Built high-quality contextual backlinks. Resolved underlying technical SEO issues that were hindering indexation.",
    metrics: [ { val: "+20%", label: "Sales increase" }, { val: "DA↑", label: "Domain authority" } ],
    image: "/white_cube.jpg",
    color: "bg-[#F9F9F9]"
  }
];

function Card({ c, i, progress }: { c: typeof cases[0], i: number, progress: any }) {
  const targetScale = 1 - ( (cases.length - i) * 0.02 );
  const scale = useTransform(progress, [i * 0.15, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center pt-24 md:pt-32 pb-10 px-6 md:px-12">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${i * 20}px)` }}
        className={`w-full max-w-[1400px] h-full max-h-[800px] ${c.color} rounded-[2rem] md:rounded-[3rem] border border-foreground/[0.04] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 group`}
      >
        <div className="md:col-span-5 relative h-[30vh] md:h-full overflow-hidden order-2 md:order-1">
          <Image src={c.image} alt={c.brand} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 md:bg-gradient-to-r md:from-black/20" />
          
          <div className="absolute top-6 left-6 md:top-10 md:left-10 mix-blend-difference text-white">
             <span className="text-[20vw] md:text-[10vw] font-black leading-none opacity-20 select-none tracking-tighter">0{i+1}</span>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-between p-8 md:p-16 order-1 md:order-2 h-full overflow-y-auto no-scrollbar">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-3 py-1 bg-foreground/[0.03] text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 rounded-full">{c.tag}</span>
            </div>
            
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-none text-foreground">{c.brand}</h2>
              <a href="#" className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <p className="text-lg md:text-2xl font-medium text-foreground/50 leading-snug mb-12 max-w-lg">
              {c.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand font-bold block mb-3">Problem</span>
                <p className="text-xs md:text-sm text-foreground/40 font-medium leading-relaxed">{c.problem}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand font-bold block mb-3">Solution</span>
                <p className="text-xs md:text-sm text-foreground/40 font-medium leading-relaxed">{c.solution}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-foreground/[0.04]">
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {c.metrics.map((m, j) => (
                <div key={j}>
                  <div className="text-2xl md:text-4xl font-black tracking-tighter text-foreground mb-1">{m.val}</div>
                  <p className="text-[10px] text-foreground/25 font-semibold uppercase tracking-[0.1em]">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-brand" />
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-400/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 rounded-full mb-8">
              Proof · Results
            </span>
            <h1 className="text-[12vw] md:text-[10vw] font-black tracking-[-0.05em] leading-[0.8] text-white overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Case
              </motion.span>
              <motion.span 
                initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white/20"
              >
                Studies.
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 text-white/30"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll to explore</span>
          <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full bg-white" 
            />
          </div>
        </motion.div>
      </section>

      {/* Sticky Stacking Cards Container */}
      <section ref={containerRef} className="relative pb-32">
        {cases.map((c, i) => (
          <Card key={i} c={c} i={i} progress={scrollYProgress} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
