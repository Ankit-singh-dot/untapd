"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BrandMarketingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-400/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40">Service 02 · Brand Marketing</span>
            </div>
            <h1 className="text-[10vw] md:text-[7vw] font-black tracking-[-0.04em] leading-[0.85] text-white mb-8">
              Brand<br /><span className="text-white/20">Marketing.</span>
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <p className="text-sm md:text-base text-white/40 font-medium max-w-md leading-relaxed">
                Building brands customers remember. Growth isn't achieved through isolated campaigns — it's a scalable system.
              </p>
              <Link href="/case-studies" className="flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform w-fit">
                Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="overflow-hidden whitespace-nowrap mb-16">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="inline-flex"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[12vw] md:text-[10vw] font-black tracking-tighter text-foreground/[0.03] uppercase mr-[4vw] select-none">
                Brand Growth ·{" "}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="max-w-[900px] mx-auto text-center relative z-10 -mt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black tracking-tight text-foreground leading-[1.3]"
          >
            Brand growth isn't achieved through isolated campaigns.{" "}
            <span className="text-foreground/15">It's a system of identity, campaigns, presence, and growth marketing — working together.</span>
          </motion.h2>
        </div>
      </section>

      {/* Capabilities — Expanding Rows */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-16">What we do.</h2>
          
          {[
            { num: "01", title: "Brand Identity", sub: "Foundation", body: "Positioning, messaging, architecture, and visual systems designed to make you unforgettable." },
            { num: "02", title: "Campaigns", sub: "Execution", body: "Concept to creative to distribution, handled end-to-end for maximum impact." },
            { num: "03", title: "Digital Presence", sub: "Digital", body: "Website, social media, content, and community building that drives loyalty." },
            { num: "04", title: "Growth Marketing", sub: "Scale", body: "SEO, performance marketing, lifecycle strategies, and CRO to scale revenue." },
          ].map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-start py-10 border-b border-foreground/5 hover:pl-2 transition-all duration-300 cursor-default"
            >
              <span className="md:col-span-1 text-xs font-bold text-foreground/10">{cap.num}</span>
              <h3 className="md:col-span-3 text-xl md:text-2xl font-black tracking-tight text-foreground group-hover:text-brand transition-colors">{cap.title}</h3>
              <span className="md:col-span-2 inline-block px-3 py-1 rounded-full bg-foreground/[0.03] text-[10px] font-bold uppercase tracking-wider text-foreground/20 w-fit h-fit">{cap.sub}</span>
              <p className="md:col-span-5 text-sm text-foreground/35 font-medium leading-relaxed">{cap.body}</p>
              <ArrowRight className="md:col-span-1 w-5 h-5 text-foreground/10 group-hover:text-brand group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20vw] font-black text-white/[0.02] tracking-tighter">BRAND</span>
        </div>
        <div className="max-w-[800px] mx-auto text-center z-10 relative">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Ready to scale?</h2>
          <p className="text-sm text-white/35 font-medium max-w-md mx-auto mb-10 leading-relaxed">
            Let's build a category-defining brand together. Strategic leadership meets repeatable execution.
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
