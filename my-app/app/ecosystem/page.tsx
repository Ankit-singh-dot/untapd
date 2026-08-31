"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const advisors = [
  { initials: "NG", name: "Nilesh Gupta", role: "Former CMO, Pidilite", domain: "FMCG", desc: "Consumer Marketing Leader · Brand Scale Specialist" },
  { initials: "SP", name: "Siddharth Parnerker", role: "Ex. Vodafone", domain: "Telecom", desc: "Brand Strategy · Growth Advisory" },
  { initials: "M", name: "Mariam", role: "Former CMO, House of Biryani", domain: "F&B", desc: "Consumer Growth · Food & Hospitality Specialist" },
];

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40">Ecosystem · Network</span>
            </div>
            <h1 className="text-[10vw] md:text-[7vw] font-black tracking-[-0.04em] leading-[0.85] text-white">
              A network of<br /><span className="text-white/20">industry leaders.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Advisors — Horizontal Cards */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">Advisory Board</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-16">
            Meet our advisors.
          </h2>
          
          <div className="space-y-4">
            {advisors.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-surface rounded-2xl p-6 md:p-8 border border-foreground/[0.04] hover:border-brand/15 hover:shadow-xl transition-all duration-300"
              >
                <div className="md:col-span-2 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand text-white flex items-center justify-center text-xl font-black group-hover:scale-110 transition-transform duration-300">
                    {adv.initials}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-bold tracking-tight text-foreground">{adv.name}</h3>
                  <p className="text-sm text-brand font-semibold">{adv.role}</p>
                </div>
                <div className="md:col-span-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-foreground/[0.03] text-[10px] font-bold uppercase tracking-wider text-foreground/25">{adv.domain}</span>
                </div>
                <p className="md:col-span-5 text-sm text-foreground/35 font-medium leading-relaxed">{adv.desc}</p>
                <div className="md:col-span-1 flex justify-end">
                  <ArrowRight className="w-4 h-4 text-foreground/10 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Untapd — Horizontal List */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold block mb-4">Why Untapd</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-[1.05]">
                Why Untapd?
              </h2>
              <p className="text-sm text-foreground/40 font-medium leading-relaxed">
                Because growth requires more than marketing. We combine everything required to accelerate growth — under one platform.
              </p>
            </div>
            <div className="lg:col-span-7">
              {["Strategic Leadership", "Brand Building", "Advisory Access", "Ecosystem Partnerships", "Entertainment Opportunities", "Investor Networks", "Founder Communities", "Repeatable Execution"].map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group flex items-center justify-between py-4 border-b border-foreground/5 hover:pl-2 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-bold text-foreground/10 w-6">0{i+1}</span>
                    <span className="text-base md:text-lg font-bold text-foreground group-hover:text-brand transition-colors">{perk}</span>
                  </div>
                  <span className="text-xs font-bold text-brand/30">+</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perks — Grid */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/20 font-bold block mb-4 text-center">Membership</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-16 text-center">
            You join more than an agency.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-foreground/5 rounded-2xl overflow-hidden">
            {[
              { title: "Strategic Advisor Sessions", sub: "Direct access to industry veterans" },
              { title: "Strategic Partnerships", sub: "Cross-brand collaboration opportunities" },
              { title: "Founder Meetups", sub: "Exclusive networking events" },
              { title: "Investor Access", sub: "Warm introductions to capital" },
              { title: "Incubation Network", sub: "Resources for early-stage brands" },
              { title: "In-Film Opportunities", sub: "First access to entertainment slots" },
            ].map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-background p-8 md:p-10 hover:bg-surface transition-colors cursor-default group"
              >
                <span className="text-[10px] text-foreground/10 font-bold tracking-widest block mb-4">0{i+1}</span>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-1 group-hover:text-brand transition-colors">{perk.title}</h3>
                <p className="text-xs text-foreground/30 font-medium">{perk.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20vw] font-black text-white/[0.02] tracking-tighter">ECO</span>
        </div>
        <div className="max-w-[800px] mx-auto text-center z-10 relative">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Ready to join the ecosystem?</h2>
          <Link href="#contact" className="group inline-flex items-center gap-2 bg-white text-brand px-7 py-3.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-2xl">
            Let's connect <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
