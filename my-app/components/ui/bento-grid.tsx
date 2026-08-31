"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface BentoItemProps {
  title: string;
  description: string;
  tag: string;
  imageSrc?: string;
  icon?: ReactNode;
  className?: string;
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 w-full">
      <Link href="/vcmo" className="md:col-span-7 group">
        <BentoItem
          tag="01 · SEO"
          title="vCMO"
          description="Senior marketing brainpower without the overhead. We integrate into your team to drive strategy and execution."
          imageSrc="/blue_glass.jpg"
          className="h-[350px] md:h-[450px]"
        />
      </Link>
      
      <Link href="/brand-marketing" className="md:col-span-5 group">
        <BentoItem
          tag="02 · Performance"
          title="Brand Marketing"
          description="Building identities that customers remember. Identity, campaigns, and content."
          imageSrc="/white_cube.jpg"
          className="h-[350px] md:h-[450px]"
        />
      </Link>

      <Link href="/in-film" className="md:col-span-5 group">
        <BentoItem
          tag="03 · Social Media"
          title="In-Film Branding"
          description="Traditional ads get ignored. Cultural integration across films, OTT, and sports gets remembered."
          imageSrc="/sphere.jpg"
          className="h-[300px] md:h-[400px]"
        />
      </Link>

      <Link href="/ecosystem" className="md:col-span-7 group">
        <BentoItem
          tag="04 · Ecosystem"
          title="Growth Ecosystem"
          description="Strategic advisor sessions, founder meetups, investor access, and incubation network — all under one roof."
          imageSrc="/blue_glass.jpg"
          className="h-[300px] md:h-[400px]"
        />
      </Link>
    </div>
  );
}

function BentoItem({ title, description, tag, imageSrc, className }: BentoItemProps) {
  return (
    <motion.div 
      whileHover={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-[2rem] overflow-hidden cursor-pointer border border-foreground/10",
        className
      )}
    >
      {/* Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={imageSrc} 
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 transition-colors duration-500" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10 text-white">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest font-semibold text-white/40">{tag}</span>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/30 transition-colors">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-3 drop-shadow-lg">{title}</h3>
          <p className="text-sm md:text-base font-medium text-white/60 max-w-md drop-shadow-md leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
