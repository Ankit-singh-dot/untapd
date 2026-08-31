"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, MotionValue, AnimatePresence } from "framer-motion";
import { Home, Users, Briefcase, Network, Mail, Film } from "lucide-react";
import { useRef } from "react";

import { useState } from "react";

function DockIcon({ children, mouseX, label }: { children: React.ReactNode, mouseX: MotionValue, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 });

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 5, x: "-50%", scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-12 left-1/2 px-3 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/20 whitespace-nowrap shadow-xl"
          >
            {label}
            {/* Triangle pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-black border-t-white/20" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-center bg-white/10 rounded-full hover:bg-white/25 transition-colors backdrop-blur-md cursor-pointer border border-white/20 shrink-0"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Navbar() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-4 md:bottom-8 left-1/2 z-50 flex items-center gap-1 md:gap-3 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-2xl border border-white/10 shadow-2xl max-w-[95vw] overflow-visible"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <Link href="/">
        <DockIcon mouseX={mouseX} label="Home">
          <Home className="text-white w-5 h-5" />
        </DockIcon>
      </Link>
      <Link href="/vcmo">
        <DockIcon mouseX={mouseX} label="vCMO">
          <Users className="text-white w-5 h-5" />
        </DockIcon>
      </Link>
      <Link href="/case-studies">
        <DockIcon mouseX={mouseX} label="Case Studies">
          <Briefcase className="text-white w-5 h-5" />
        </DockIcon>
      </Link>
      <Link href="/in-film">
        <DockIcon mouseX={mouseX} label="In-Film">
          <Film className="text-white w-5 h-5" />
        </DockIcon>
      </Link>
      <Link href="/ecosystem">
        <DockIcon mouseX={mouseX} label="Ecosystem">
          <Network className="text-white w-5 h-5" />
        </DockIcon>
      </Link>
      
      <div className="w-[1px] h-10 bg-white/20 mx-1" />
      
      <Link href="#contact">
        <DockIcon mouseX={mouseX} label="Contact">
          <Mail className="text-white w-5 h-5" />
        </DockIcon>
      </Link>
    </motion.div>
  );
}
