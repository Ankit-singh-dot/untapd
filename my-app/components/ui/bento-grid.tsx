"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoItemProps {
  title: string;
  description: string;
  imageSrc?: string;
  icon?: ReactNode;
  className?: string;
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
      <Link href="/vcmo" className="md:col-span-2 group">
        <BentoItem
          title="vCMO"
          description="Senior marketing brainpower without the overhead. We integrate into your team to drive strategy and execution."
          imageSrc="/blue_glass.jpg"
          className="h-[400px]"
        />
      </Link>
      
      <Link href="/brand-marketing" className="md:col-span-1 group">
        <BentoItem
          title="Brand Marketing"
          description="Building identities that customers remember. Identity, campaigns, and content."
          imageSrc="/white_cube.jpg"
          className="h-[400px]"
        />
      </Link>
      
      <Link href="/in-film" className="md:col-span-3 group">
        <BentoItem
          title="In-Film Branding"
          description="Traditional ads get ignored. Cultural integration across films, OTT, and sports gets remembered."
          imageSrc="/sphere.jpg"
          className="h-[400px] md:h-[500px]"
        />
      </Link>
    </div>
  );
}

function BentoItem({ title, description, imageSrc, className }: BentoItemProps) {
  return (
    <motion.div 
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/10",
        className
      )}
    >
      {/* Background Image with Parallax / Zoom effect */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={imageSrc} 
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-10 text-white">
        <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 drop-shadow-lg">{title}</h3>
        <p className="text-lg md:text-xl font-medium opacity-90 max-w-lg drop-shadow-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
