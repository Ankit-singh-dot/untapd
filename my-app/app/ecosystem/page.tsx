"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const advisors = [
  {
    initials: "NG",
    name: "Nilesh Gupta",
    role: "Former CMO, Pidilite",
    desc: "Consumer Marketing Leader · Brand Scale Specialist",
  },
  {
    initials: "BS",
    name: "Siddharth Parnerker",
    role: "Ex. Vodafone",
    desc: "Brand Strategy · Growth Advisory",
  },
  {
    initials: "M",
    name: "Mariam",
    role: "Former CMO, House of Biryani",
    desc: "Consumer Growth · Food & Hospitality Specialist",
  },
];

const whyUntapd = [
  "Strategic Leadership",
  "Brand Building",
  "Advisory Access",
  "Ecosystem Partnerships",
  "Entertainment Opportunities",
  "Investor Networks",
  "Founder Communities",
  "Repeatable Execution"
];

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">Ecosystem</span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          A network of<br />industry leaders.
        </h1>
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-20">
          Our advisors bring decades of experience across FMCG, Telecom, Hospitality, Technology, Startup Ecosystem, and Consumer Brands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {advisors.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="bg-foreground/5 p-12 rounded-[3rem] border border-foreground/5 flex flex-col items-center group hover:bg-brand hover:text-brand-foreground transition-colors duration-500"
            >
              <div className="w-40 h-40 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-5xl font-black mb-8 group-hover:bg-white group-hover:text-brand transition-colors duration-500 shadow-2xl">
                {adv.initials}
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-2">{adv.name}</h3>
              <p className="text-brand font-bold mb-4 group-hover:text-brand-foreground/80">{adv.role}</p>
              <p className="font-medium opacity-70 leading-relaxed text-sm">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Untapd Grid */}
        <div className="text-left mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">04 · Why Untapd</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            Why Untapd?
          </h2>
          <p className="text-2xl font-medium opacity-80 mb-12 border-l-4 border-brand pl-6">
            Because growth requires more than marketing. We combine everything required to accelerate growth — under one platform.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {whyUntapd.map((perk, i) => (
              <div key={i} className="bg-foreground/5 rounded-2xl p-6 flex flex-col justify-center font-bold text-lg border border-transparent hover:border-brand/50 transition-colors">
                <span className="text-brand text-2xl mb-2">+</span>
                {perk}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Incubation/Perks */}
      <section className="pb-40 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-center">You join more than an agency.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Strategic Advisor Sessions",
            "Strategic Partnerships",
            "Founder Meetups",
            "Investor Access",
            "Incubation Network",
            "In-Film Opportunities"
          ].map((perk, i) => (
            <div key={i} className="border-2 border-brand/20 rounded-2xl p-8 flex items-center justify-center text-center hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors font-bold text-lg cursor-default">
              {perk}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
