"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VCMOPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Full bleed with clip morph */}
      <section className="relative min-h-[70vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand" />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40">Service 01 · vCMO</span>
            </div>
            <h1 className="text-[10vw] md:text-[7vw] font-black tracking-[-0.04em] leading-[0.85] text-white mb-8">
              A CMO<br />without the<br /><span className="text-white/20">overhead.</span>
            </h1>
            <p className="text-sm md:text-base text-white/40 font-medium max-w-lg leading-relaxed">
              Senior marketing leadership without full-time overhead. We integrate into your team to drive strategy — without the C-suite salary burden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-0">
            {[
              { num: "01", title: "What is a vCMO?", body: "Senior marketing leadership without full-time overhead. We integrate into your team to drive strategy without the C-suite salary burden." },
              { num: "02", title: "Why It Matters", body: "Fast-moving markets demand agile, expert-led GTM. Speed of execution and strategic clarity are the only unfair advantages left." },
              { num: "03", title: "Our Goal", body: "Optimize & measure ROI of every marketing rupee spent. Moving from vanity metrics to tangible revenue growth and efficiency." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-foreground/5 hover:pl-2 transition-all duration-300"
              >
                <span className="md:col-span-1 text-xs font-bold text-foreground/10 tracking-wider pt-2">{item.num}</span>
                <h3 className="md:col-span-4 text-2xl md:text-3xl font-black tracking-tight text-foreground group-hover:text-brand transition-colors">{item.title}</h3>
                <p className="md:col-span-7 text-sm text-foreground/40 font-medium leading-relaxed pt-2">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Engagement — Asymmetric */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">The Engagement</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-16">
            Every client receives<br /><span className="text-foreground/15">a dedicated vCMO.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left card */}
            <div className="md:col-span-5 bg-background rounded-2xl p-8 md:p-10 border border-foreground/[0.04]">
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-6">Dedicated Leadership</h3>
              <p className="text-sm text-foreground/35 font-medium mb-8">Single point of accountability for all marketing:</p>
              {["Founders", "Leadership Team", "Internal Marketing", "External Agencies", "Untapd Specialists"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-foreground/[0.03] last:border-0">
                  <span className="text-[10px] text-foreground/10 font-bold w-4">{String(i+1).padStart(2,'0')}</span>
                  <span className="text-sm font-semibold text-foreground/60">{item}</span>
                </div>
              ))}
            </div>

            {/* Right card */}
            <div className="md:col-span-7 bg-brand rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[400px]">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white mb-3">Budget Management</h3>
                <p className="text-sm text-white/40 font-medium mb-8">We manage every line — to maximize growth while maintaining financial discipline.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Channel Allocation", "Performance Tracking", "Agency & Vendor Costs", "ROI Monitoring", "Monthly Reviews", "Quarterly Planning"].map((item, i) => (
                  <div key={i} className="bg-white/[0.06] rounded-xl p-4 backdrop-blur-sm border border-white/[0.05]">
                    <span className="text-xs font-semibold text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Old vs New — Side by side */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/20 font-bold block mb-4">Comparison</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-16">
            From tasks to <span className="text-foreground/15">business outcomes.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
            {/* Old */}
            <div className="bg-foreground/[0.02] p-10 md:p-12 border border-foreground/[0.04]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/15 font-bold block mb-8">The Old Way</span>
              <h3 className="text-xl font-bold tracking-tight mb-10 text-foreground/30">Traditional Agencies</h3>
              {["Campaign-led thinking", "Siloed deliverables", "Activity reporting", "Vendor relationships", "One-off wins"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3.5 border-b border-foreground/[0.03] last:border-0">
                  <X className="w-4 h-4 text-red-400/40 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground/25 line-through">{item}</span>
                </div>
              ))}
            </div>
            {/* New */}
            <div className="bg-brand p-10 md:p-12">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-bold block mb-8">The Untapd Way</span>
              <h3 className="text-xl font-bold tracking-tight mb-10 text-white">Growth Partner</h3>
              {["Outcome-led strategy", "Integrated ecosystem", "Revenue accountability", "Leadership partnership", "Repeatable growth engines"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3.5 border-b border-white/[0.06] last:border-0">
                  <Check className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm font-semibold text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">Scope</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-16">What a vCMO does.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/5 rounded-2xl overflow-hidden">
            {[
              { title: "Strategy", items: ["Brand Positioning", "Market Research", "Competitive Analysis", "GTM Strategy", "Roadmap Planning"] },
              { title: "Execution", items: ["Campaign Management", "Content Direction", "Performance Marketing", "Agency Coordination", "Creative QA"] },
              { title: "Growth", items: ["Funnel Optimization", "Retention Systems", "Channel Expansion", "ROI Tracking", "Quarterly Planning"] },
            ].map((col, i) => (
              <div key={i} className="bg-background p-8 md:p-10">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-8">{col.title}</h4>
                {col.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-4 py-3 border-b border-foreground/[0.03] last:border-0">
                    <span className="text-[10px] text-foreground/10 font-bold">{String(j+1).padStart(2,'0')}</span>
                    <span className="text-sm font-semibold text-foreground/50">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[25vw] font-black text-white/[0.02] tracking-tighter">vCMO</span>
        </div>
        <div className="max-w-[800px] mx-auto text-center z-10 relative">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Ready to scale with strategic leadership?</h2>
          <Link href="#contact" className="group inline-flex items-center gap-2 bg-white text-brand px-7 py-3.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-2xl">
            Let's talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
