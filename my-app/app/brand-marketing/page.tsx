"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Palette, Rocket, Globe, TrendingUp } from "lucide-react";

const capabilities = [
  {
    icon: <Palette className="w-8 h-8 text-brand mb-6" />,
    title: "Brand Identity",
    desc: "Positioning, messaging, architecture, and visual systems designed to make you unforgettable."
  },
  {
    icon: <Rocket className="w-8 h-8 text-brand mb-6" />,
    title: "Campaigns",
    desc: "Concept to creative to distribution, handled end-to-end for maximum impact."
  },
  {
    icon: <Globe className="w-8 h-8 text-brand mb-6" />,
    title: "Digital Presence",
    desc: "Website, social media, content, and community building that drives loyalty."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand mb-6" />,
    title: "Growth Marketing",
    desc: "SEO, performance marketing, lifecycle strategies, and CRO to scale revenue."
  }
];

export default function BrandMarketingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">02 · Service Detail</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          Brand<br />Marketing.
        </h1>
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground max-w-3xl mb-20">
          Building brands customers remember. Brand growth isn't achieved through isolated campaigns. It's a scalable system.
        </p>

        {/* Capabilities Grid */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">What we do.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-foreground/5 p-12 rounded-[2.5rem] hover:bg-foreground/10 transition-colors border border-foreground/10"
            >
              <div className="flex items-center justify-between mb-8">
                {cap.icon}
                <span className="text-2xl font-black text-brand opacity-30">0{i + 1}</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4">{cap.title}</h3>
              <p className="text-lg font-medium opacity-80 leading-relaxed max-w-md">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-brand text-brand-foreground rounded-[3rem] p-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Ready to scale?</h2>
          <p className="text-xl font-medium opacity-90 max-w-2xl mx-auto mb-10">
            Let's build a category-defining brand together. Our ecosystem combines strategic leadership and repeatable execution.
          </p>
          <button className="bg-white text-brand px-10 py-5 rounded-full text-lg font-bold tracking-tight hover:scale-105 transition-transform shadow-2xl">
            Let's build together
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
