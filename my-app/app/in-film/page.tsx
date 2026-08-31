"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Film, Trophy, Tv, Star, Megaphone } from "lucide-react";
import Image from "next/image";

const processSteps = [
  "Brand Assessment",
  "Property Identification",
  "Negotiation",
  "Integration",
  "Amplification",
  "Measurement"
];

const opportunities = [
  { icon: <Film className="w-6 h-6" />, text: "Film Integrations" },
  { icon: <Tv className="w-6 h-6" />, text: "OTT Integrations" },
  { icon: <Star className="w-6 h-6" />, text: "Celebrity Collaborations" },
  { icon: <Trophy className="w-6 h-6" />, text: "Sports Partnerships" },
  { icon: <Megaphone className="w-6 h-6" />, text: "IPL Associations" },
];

export default function InFilmPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">03 · Service Detail</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          Become part<br />of the story.
        </h1>
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground max-w-3xl mb-20">
          Traditional ads get ignored. Cultural integration gets remembered. We integrate brands into movies, OTT shows, and entertainment content — making them part of the story.
        </p>

        {/* Hero image for In-Film */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden mb-32 bg-foreground/5 border border-foreground/10">
          <Image src="/images/in-film/opp_1.png" alt="In-Film Integration" fill className="object-cover" unoptimized />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          <BenefitCard title="Higher recall" desc="Higher brand recall and credibility through context." />
          <BenefitCard title="Scale" desc="Access to large, highly engaged entertainment audiences." />
          <BenefitCard title="Emotion" desc="Stronger emotional and cultural connection." />
          <BenefitCard title="Amplification" desc="Extended visibility via digital & PR amplification." />
        </div>

        {/* Process Timeline */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">How it works.</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-32">
          {processSteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 flex items-center justify-center text-center font-bold text-lg rounded-2xl ${
                i % 2 === 0 ? "bg-brand text-brand-foreground" : "bg-foreground/5 text-foreground"
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm opacity-50 mb-2">0{i + 1}</span>
                {step}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Opportunities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Available Opportunities</h2>
            <div className="flex flex-col gap-4">
              {opportunities.map((opp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="bg-foreground/5 p-6 rounded-2xl flex items-center text-xl font-bold border border-transparent hover:border-brand/30 transition-colors"
                >
                  <div className="bg-brand text-brand-foreground p-3 rounded-full mr-6">
                    {opp.icon}
                  </div>
                  {opp.text}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-full min-h-[300px] rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10">
             <Image src="/images/in-film/opp_2.png" alt="OTT Integration" fill className="object-cover" unoptimized />
          </div>
        </div>

        {/* Past Successes */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-center">Brands we've put on screen.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-foreground/5 p-10 rounded-[2rem]">
            <h3 className="text-3xl font-black mb-4">ONLY</h3>
            <p className="text-lg font-medium opacity-80 leading-relaxed">Strategic integrations that amplified brand visibility and audience engagement at scale.</p>
          </div>
          <div className="bg-foreground/5 p-10 rounded-[2rem]">
            <h3 className="text-3xl font-black mb-4">KFC</h3>
            <p className="text-lg font-medium opacity-80 leading-relaxed">Campaign partnerships designed to maximize cultural relevance and reach.</p>
          </div>
          <div className="bg-brand text-brand-foreground p-10 rounded-[2rem]">
            <h3 className="text-3xl font-black mb-4">Hardik's Favourite</h3>
            <p className="text-lg font-medium opacity-90 leading-relaxed">Noodles & Pasta — a celebrity-led product association built for recall.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function BenefitCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-foreground/5 p-10 rounded-[2rem] hover:bg-foreground/10 transition-colors">
      <h3 className="text-2xl font-bold tracking-tight mb-4 text-brand">{title}</h3>
      <p className="text-lg font-medium opacity-80 leading-relaxed">{desc}</p>
    </div>
  );
}
