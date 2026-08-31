"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

// Filtered valid brand logo images
const brandImages = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 21, 22, 23, 24];

const teamMembers = [
  { name: "Mahek Solanki", role: "Founder & CEO", img: "/images/team/team_2.jpeg" },
  { name: "Hrithish Raj", role: "Business Development", img: "/images/team/team_4.jpeg" },
  { name: "Bhavya Sharma", role: "Graphic Designer & Editor", img: "/images/team/team_6.png" },
  { name: "Bhavya Agarwal", role: "Brand Strategist", img: "/images/team/team_1.jpeg" },
  { name: "Abbas Bharmal", role: "Digital Marketing Executive", img: "/images/team/team_3.jpeg" },
  { name: "Tanya Dhamija", role: "Social Media Strategist", img: "/images/team/team_5.jpeg" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroBlobY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="min-h-screen bg-background" ref={containerRef}>
      <Navbar />

      {/* HERO SECTION - INTENSE PARALLAX */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 bg-brand text-brand-foreground overflow-hidden pt-20 perspective-1000">
        <motion.div 
          style={{ y: heroBgY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/20 via-brand to-brand"
        />

        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto w-full z-10 relative"
        >
          <div className="flex flex-col mb-12 relative z-10">
            <div className="flex flex-col mb-16 space-y-2">
              <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-90">
                C O M P A N Y &nbsp;&nbsp;P R O F I L E
              </span>
              <span className="text-sm font-bold tracking-widest uppercase opacity-90">
                — BRIEF / 2026
              </span>
            </div>
            
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[90vw] md:w-[80vw] lg:w-[1200px] max-w-full h-32 sm:h-48 md:h-[250px] lg:h-[350px] mb-8 -ml-[1vw]"
            >
              <Image 
                src="/logo_transparent.png" 
                alt="untapd" 
                fill 
                className="object-contain object-left" 
                unoptimized
              />
            </motion.div>
            
            <div className="w-16 h-1 bg-white mb-8" />
            <AnimatedText 
              text="Think Beyond."
              className="text-4xl md:text-6xl font-light italic mb-4"
              delay={0.4}
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-lg md:text-xl font-medium opacity-90 max-w-2xl"
            >
              Strategic Marketing Leadership · Brand Building · Growth Systems
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          style={{ y: heroBlobY }}
          className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" 
        />
        <motion.div 
          style={{ y: heroBgY, scale: 1.5 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none z-0" 
        />
      </section>

      {/* ABOUT & OUTCOMES SECTION */}
      <section id="about" className="relative z-20 py-32 px-6 md:px-12 bg-background text-foreground shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">01 · About Us</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
              About the Brand.
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground mb-8">
              We help startups and service-based businesses create <span className="text-brand font-bold">predictable growth</span> by building scalable inbound acquisition systems powered by branding, content, SEO, and performance marketing.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              We don't operate like an agency.
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed border-l-4 border-brand pl-6">
              We operate as an extension of your leadership team combining strategy, execution, and ecosystem under one roof.
            </p>
          </div>
        </div>

        {/* Outcomes Grid */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-center">We help brands.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-foreground/5 border border-foreground/10 p-6 md:p-8 rounded-[2rem] flex items-center hover:border-brand/50 transition-colors group"
              >
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-brand mr-3 md:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-bold">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE BRANDS SECTION */}
      <section className="py-20 bg-foreground text-background overflow-hidden flex flex-col items-center">
        <span className="text-sm font-semibold tracking-widest uppercase mb-12 opacity-50">Brands we've built with</span>
        <div className="relative w-full flex overflow-x-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex space-x-16 md:space-x-24 items-center whitespace-nowrap pl-16 md:pl-24"
          >
            {/* Map actual extracted logos */}
            {[...brandImages, ...brandImages].map((imgNum, i) => (
              <div key={i} className="relative w-32 h-16 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image 
                  src={`/images/brands/page_3_img_${imgNum}.png`} 
                  alt="Brand Logo" 
                  fill 
                  className="object-contain" 
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES - BENTO GRID */}
      <section id="services" className="py-32 px-6 md:px-12 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">02 · Our Services</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            We bridge the gap.
          </h2>
        </div>
        
        <BentoGrid />
      </section>

      {/* OUR TEAM SECTION */}
      <section className="py-32 px-6 md:px-12 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">03 · The People</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 leading-tight">
            Builders behind<br />the brand.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-background rounded-[2.5rem] overflow-hidden border border-foreground/10 group"
              >
                <div className="aspect-square relative w-full overflow-hidden bg-foreground/10">
                  <Image 
                    src={member.img} 
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black tracking-tight mb-2">{member.name}</h3>
                  <p className="text-brand font-bold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT / STATS SECTION */}
      <section className="py-32 px-6 md:px-12 bg-brand text-brand-foreground relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 z-10 relative">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
              Built for sustainable growth.
            </h2>
            <p className="text-xl font-medium opacity-90 mb-8 border-l-4 border-white pl-6">
              Build sustainable growth systems not short-term marketing wins.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <div className="text-6xl md:text-8xl font-black tracking-tighter mb-2">8+</div>
              <div className="text-sm uppercase tracking-widest font-semibold opacity-80">Industries Served</div>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-black tracking-tighter mb-2">40+</div>
              <div className="text-sm uppercase tracking-widest font-semibold opacity-80">Brands Partnered</div>
            </div>
            <div className="sm:col-span-2">
              <div className="text-6xl md:text-8xl font-black tracking-tighter mb-2">100%</div>
              <div className="text-sm uppercase tracking-widest font-semibold opacity-80">Outcome-Obsessed</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-white opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />
      </section>

      {/* FINAL THOUGHT CTA */}
      <section className="py-40 px-6 md:px-12 bg-foreground text-background text-center flex flex-col items-center justify-center">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-8 block">Final Thought</span>
        <h2 className="text-4xl md:text-6xl font-light italic mb-6 max-w-4xl leading-tight opacity-90">
          Stop guessing cause it's just the tip of the iceberg.
        </h2>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-12">
          Well there's lot to show
        </h1>
        <button className="group flex items-center space-x-3 bg-brand text-brand-foreground px-8 py-4 rounded-full text-lg font-bold tracking-tight hover:bg-brand/90 transition-all hover:pr-6">
          <span>Let's build together</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </section>

      <Footer />
    </main>
  );
}
