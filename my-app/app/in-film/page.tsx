"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const processSteps = [
  { num: "01", title: "Assessment", desc: "We begin by evaluating your brand's core values, target audience, and overarching business objectives to identify the right cultural moments." },
  { num: "02", title: "Identification", desc: "Using our network and data, we match your brand with the perfect upcoming entertainment property—be it a blockbuster film, OTT series, or music video." },
  { num: "03", title: "Negotiation", desc: "We secure optimal placement and deal terms, ensuring your investment buys meaningful screen time rather than fleeting background exposure." },
  { num: "04", title: "Integration", desc: "Our creative team works with directors and writers to seamlessly weave the brand into the narrative, making it feel organic and crucial to the story." },
  { num: "05", title: "Amplification", desc: "We don't stop at the screen. We build 360-degree digital, PR, and social campaigns around the integration to extend reach and maximize buzz." },
  { num: "06", title: "Measurement", desc: "Post-release, we track brand recall, audience sentiment, reach, and tangible ROI to prove the impact of the integration on your bottom line." },
];

const opportunities = [
  "Film Integrations",
  "OTT Originals",
  "Celebrity Endorsements",
  "Sports & IPL",
  "Music Videos"
];

const trackRecord = [
  { brand: "ONLY", desc: "Strategic integrations that amplified brand visibility at scale.", bg: "bg-background" },
  { brand: "KFC", desc: "Campaign partnerships designed to maximize cultural relevance.", bg: "bg-background" },
  { brand: "Hardik's Favourite", desc: "Celebrity-led product association built for recall.", bg: "bg-brand" },
];

export default function InFilmPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Parallax effects for the hero image and text
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main className="min-h-screen bg-background" ref={containerRef}>
      <Navbar />

      {/* 🎬 Cinematic Parallax Hero */}
      <section className="relative h-[150vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
          
          {/* Background Image that scales out */}
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <Image src="/images/in-film/opp_1.png" alt="In-Film Integration" fill className="object-cover opacity-60" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
          </motion.div>

          {/* Hero Content */}
          <motion.div 
            style={{ y: textY }}
            className="relative z-10 px-6 md:px-12 w-full max-w-[1400px] mx-auto text-center"
          >
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 rounded-full mb-8">
                Service 03 · Entertainment
              </span>
              <h1 className="text-[12vw] md:text-[9vw] font-black tracking-[-0.05em] leading-[0.8] text-white mb-6 uppercase">
                Don't just <span className="text-white/30 italic font-serif lowercase tracking-normal">interrupt</span>
              </h1>
              <h1 className="text-[12vw] md:text-[9vw] font-black tracking-[-0.05em] leading-[0.8] text-white uppercase">
                Become the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">story.</span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Scroll Down Hint */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
              <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full bg-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why it works — Massive Typography Grid */}
      <section className="relative z-20 -mt-20 py-24 md:py-36 px-6 md:px-12 bg-background rounded-t-[3rem] border-t border-foreground/5 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-5">
               <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-6">The Philosophy</span>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.9]">
                 Ads get ignored.<br />
                 <span className="text-foreground/20">Culture gets remembered.</span>
               </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {[
                { title: "Higher Recall", body: "Audiences don't skip the movie. They engage deeply with the brand in context." },
                { title: "Unmatched Scale", body: "Access to millions of highly engaged viewers across streaming platforms and cinemas." },
                { title: "Emotional Bond", body: "Build a stronger emotional connection that traditional 30-second spots can never replicate." },
                { title: "Lifespan", body: "Content lives forever. Your brand integration continues delivering value for years." },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <span className="text-[10px] font-black text-foreground/15 mb-3 block">0{i+1} //</span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-brand transition-colors">{b.title}</h3>
                  <p className="text-sm text-foreground/40 font-medium leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process — Animated Vertical Steps */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-surface overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">How we integrate.</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
             {/* Center Line */}
             <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 md:-translate-x-1/2 w-px bg-foreground/10" />

             {processSteps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className={`relative flex w-full mb-16 last:mb-0 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
               >
                 {/* Step Circle */}
                 <div className="absolute left-[28px] -translate-x-1/2 md:left-1/2 top-1/2 -translate-y-1/2 w-14 h-14 bg-background border-4 border-surface rounded-full flex items-center justify-center z-10 shadow-xl">
                   <span className="text-sm font-black text-foreground">{step.num}</span>
                 </div>

                 {/* Content Card */}
                 <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                   <div className="bg-background p-8 md:p-10 rounded-[2rem] border border-foreground/[0.04] hover:border-brand/20 hover:shadow-2xl transition-all duration-500 group">
                     <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand block mb-3 opacity-50">Step {step.num}</span>
                     <h3 className="text-xl md:text-3xl font-black tracking-tight text-foreground mb-4 group-hover:text-brand transition-colors">{step.title}</h3>
                     <p className="text-sm md:text-base text-foreground/50 font-medium leading-relaxed">{step.desc}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Huge Marquee Opportunities */}
      <section className="py-32 overflow-hidden bg-brand">
         <div className="relative flex whitespace-nowrap opacity-10 py-10 -rotate-2">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 30, repeat: Infinity }} className="flex">
              {[...opportunities, ...opportunities, ...opportunities].map((opp, i) => (
                <span key={i} className="text-[8vw] font-black uppercase text-white tracking-tighter px-10">
                  {opp} <span className="text-white/20">✦</span>
                </span>
              ))}
            </motion.div>
         </div>
         <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 -mt-10">
           <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
             <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand/50 font-bold block mb-4">Available Now</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-brand mb-4">Opportunities exist everywhere.</h2>
                <p className="text-sm font-medium text-brand/60 max-w-md">From blockbuster film integrations to OTT originals and IPL associations. We match your brand with the perfect cultural moment.</p>
             </div>
             <Link href="#contact" className="w-full md:w-auto text-center bg-brand text-white px-8 py-5 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3">
               Explore Inventory <ArrowRight className="w-4 h-4" />
             </Link>
           </div>
         </div>
      </section>

      {/* Portfolio — Asymmetric Grid */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-background">
         <div className="max-w-[1400px] mx-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/20 font-bold block mb-4 text-center">Track Record</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-16 text-center">Brands we've put on screen.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">
              {/* Item 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-surface rounded-[2rem] p-10 border border-foreground/[0.04] flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-6"><span className="text-foreground/20 font-bold text-xs">01</span></div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight mb-3">ONLY</h3>
                  <p className="text-sm text-foreground/40 font-medium">Strategic integrations that amplified brand visibility at scale.</p>
                </div>
              </motion.div>
              
              {/* Item 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="md:col-span-4 bg-surface rounded-[2rem] p-10 border border-foreground/[0.04] flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-6"><span className="text-foreground/20 font-bold text-xs">02</span></div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight mb-3">KFC</h3>
                  <p className="text-sm text-foreground/40 font-medium">Campaign partnerships designed to maximize cultural relevance.</p>
                </div>
              </motion.div>

              {/* Item 3 (Highlight) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="md:col-span-4 bg-brand rounded-[2rem] p-10 flex flex-col justify-between hover:shadow-xl transition-all text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[50px]" />
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6"><span className="text-white/40 font-bold text-xs">03</span></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black tracking-tight mb-3">Hardik's Favourite</h3>
                  <p className="text-sm text-white/60 font-medium">Celebrity-led product association built for recall.</p>
                </div>
              </motion.div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
