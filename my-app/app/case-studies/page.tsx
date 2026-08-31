"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

const cases = [
  {
    brand: "Grubwala",
    desc: "Your everyday food partner — D2C launch in Mumbai.",
    problem: "A new D2C food brand entering a hyper competitive Mumbai market with no recognition, no acquisition funnel, and limited onboarding automation.",
    solution: "Defined brand strategy. Managed social media. Achieved CPL as low as ₹0.17. Automated WhatsApp & email onboarding with n8n.",
    metrics: ["5,200+ app downloads in 45 days", "5x growth in daily orders", "MRR scaled ₹2L to ₹8L", "7,000+ flyers distributed"],
    image: "/images/case-studies/grubwala.png",
    colSpan: "md:col-span-2",
  },
  {
    brand: "Tripy",
    desc: "Carving a niche in a saturated travel category.",
    problem: "Entered a saturated travel market without clear positioning resulting in weak brand recall.",
    solution: "Repositioned Tripy around group travel, focusing on community-led growth, social-first content, and influencer collaborations.",
    metrics: ["10K+ app downloads at launch", "Zero paid ads", "19 influencers onboarded"],
    image: "/images/case-studies/tripy.png",
    colSpan: "md:col-span-1",
  },
  {
    brand: "Kitdor",
    desc: "A curated kitchen marketplace for every kind of decision-maker.",
    problem: "A fragmented kitchen marketplace category with low buyer trust, scattered SKUs, and no clear value proposition.",
    solution: "Shifted to a D2C-first growth strategy. Positioned as a trusted kitchenware marketplace. Built mission-led narrative.",
    metrics: ["D2C-first strategy", "Curated Selection & Trust", "Community Content Focus"],
    image: "/images/case-studies/kitdor.png",
    colSpan: "md:col-span-1",
  },
  {
    brand: "Mantraa",
    desc: "SEO & Website Revamp for financial advisory firm.",
    problem: "A business financial advisory firm offering expert led services needed to rebuild their organic engine from the ground up.",
    solution: "6-month engagement. Content + technical SEO + UX rebuild. Achieved 10x growth in organic traffic.",
    metrics: ["104 New Keywords Ranked", "1.01K Monthly Organic Clicks", "10.3% Avg. CTR", "34.5 Avg Position Gain"],
    image: "/blue_glass.jpg",
    colSpan: "md:col-span-2",
  },
  {
    brand: "Yalla Haji",
    desc: "Organic, faith-led growth for a specialist travel brand.",
    problem: "Needed to build credibility, community, and discovery without traditional paid push for a deeply trust-driven audience.",
    solution: "Established Yalla Haji as a trusted category voice. Built strong trust and brand recall within the community.",
    metrics: ["26.7K organic followers in 6 months", "4M+ users reached organically", "10K+ pre-launch audience"],
    image: "/sphere.jpg",
    colSpan: "md:col-span-2",
  },
  {
    brand: "Goready",
    desc: "SEO and Website Revamp of your neighbourhood beauty parlour.",
    problem: "Low organic traffic, poor search rankings, limited content, and weak off-page SEO hindered early growth.",
    solution: "Optimized service pages and resolved technical SEO issues. Built high-quality backlinks.",
    metrics: ["Estimated 20% increase in sales", "Improved visibility", "Strengthened domain authority"],
    image: "/white_cube.jpg",
    colSpan: "md:col-span-1",
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">Proof</span>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-20 leading-[0.9]">
          Case<br />Studies.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-foreground/5 rounded-[2.5rem] border border-foreground/10 group overflow-hidden flex flex-col ${c.colSpan}`}
            >
              {c.image && (
                <div className="relative w-full h-64 md:h-80 bg-foreground/10 overflow-hidden">
                  <Image 
                    src={c.image} 
                    alt={c.brand} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    unoptimized 
                  />
                </div>
              )}
              
              <div className="p-10 md:p-12 flex-1 flex flex-col">
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">{c.brand}</h3>
                <p className="text-xl font-medium opacity-80 mb-10">
                  {c.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 flex-1">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-brand mb-3">The Problem</h4>
                    <p className="opacity-70 leading-relaxed font-medium">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-brand mb-3">The Solution</h4>
                    <p className="opacity-70 leading-relaxed font-medium">{c.solution}</p>
                  </div>
                </div>
                
                <div className="space-y-3 pt-8 border-t border-foreground/10">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand mb-4">Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {c.metrics.map((m, j) => (
                      <div key={j} className="font-bold text-lg flex items-start">
                        <span className="w-2 h-2 rounded-full bg-brand mt-2 mr-3 flex-shrink-0" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
