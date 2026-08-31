"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Check, X, Target, Wallet, Users2, BarChart4 } from "lucide-react";

export default function VCMOPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">01 · Service Detail</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          A CMO without<br />the overhead.
        </h1>
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground max-w-3xl mb-12">
          Senior marketing leadership without full-time overhead. We integrate into your team to drive strategy without the C-suite salary burden.
        </p>
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground max-w-3xl mb-20 border-l-4 border-brand pl-6">
          Fast-moving markets demand agile, expert-led GTM. Speed of execution and strategic clarity are the only unfair advantages left. Optimize & measure ROI of every marketing rupee spent.
        </p>

        {/* The Engagement */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">The vCMO Engagement.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-foreground/5 p-10 rounded-[2rem]">
            <Users2 className="w-12 h-12 text-brand mb-6" />
            <h3 className="text-2xl font-bold mb-4">Dedicated Leadership</h3>
            <p className="text-lg opacity-80 mb-6">Single point of accountability for all marketing, working directly with:</p>
            <ul className="space-y-3 font-semibold">
              <li>→ Founders</li>
              <li>→ Leadership Team</li>
              <li>→ Internal Marketing Team</li>
              <li>→ External Agencies</li>
              <li>→ Untapd Specialists</li>
            </ul>
          </div>
          <div className="bg-foreground/5 p-10 rounded-[2rem]">
            <Wallet className="w-12 h-12 text-brand mb-6" />
            <h3 className="text-2xl font-bold mb-4">Budget Management</h3>
            <p className="text-lg opacity-80 mb-6">We manage every line to maximize growth while maintaining financial discipline.</p>
            <ul className="space-y-3 font-semibold">
              <li>→ Channel Allocation</li>
              <li>→ Performance Tracking</li>
              <li>→ Agency & Vendor Costs</li>
              <li>→ ROI Monitoring</li>
              <li>→ Monthly & Quarterly Planning</li>
            </ul>
          </div>
        </div>

        {/* Comparison Section */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">From tasks to business outcomes.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* The Old Way */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-foreground/5 p-12 rounded-[2.5rem]"
          >
            <span className="text-sm font-semibold tracking-widest uppercase mb-8 block opacity-50">The Old Way</span>
            <h3 className="text-4xl font-bold tracking-tight mb-8">Traditional Agencies</h3>
            <ul className="space-y-6">
              {[
                "Campaign-led thinking",
                "Siloed deliverables",
                "Activity reporting",
                "Vendor relationships",
                "One-off wins"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-lg font-medium opacity-60">
                  <X className="mr-4 text-red-500 flex-shrink-0" />
                  <span className="line-through">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Untapd Way */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand text-brand-foreground p-12 rounded-[2.5rem]"
          >
            <span className="text-sm font-semibold tracking-widest uppercase mb-8 block opacity-80 text-white">The Untapd Way</span>
            <h3 className="text-4xl font-bold tracking-tight mb-8 text-white">Growth Partner</h3>
            <ul className="space-y-6">
              {[
                "Outcome-led strategy",
                "Integrated ecosystem",
                "Revenue accountability",
                "Leadership partnership",
                "Repeatable growth engines"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-lg font-medium text-white/90">
                  <Check className="mr-4 text-white flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Scope of Work */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">What a vCMO does.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScopeColumn title="Strategy" items={["Brand Positioning", "Market Research", "Competitive Analysis", "GTM Strategy", "Roadmap Planning"]} />
          <ScopeColumn title="Execution" items={["Campaign Management", "Content Direction", "Performance Marketing", "Agency Coordination", "Creative QA"]} />
          <ScopeColumn title="Growth" items={["Funnel Optimization", "Retention Systems", "Channel Expansion", "ROI Tracking", "Quarterly Planning"]} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ScopeColumn({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-foreground/5 rounded-[2rem] p-8">
      <h4 className="text-xl font-bold tracking-widest uppercase mb-8 text-brand">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="font-semibold text-lg opacity-80">{item}</li>
        ))}
      </ul>
    </div>
  );
}
