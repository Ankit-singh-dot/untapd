import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto z-10 relative">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-background/30 block mb-4">
              Think Beyond.
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              Thank You.
            </h1>
          </div>
          <Link 
            href="#contact"
            className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-10" />
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-background/40">
            <span>+91 72081 98797</span>
            <span>www.thinkuntapd.com</span>
            <span>mahek@thinkuntapd.com</span>
          </div>
          <p className="text-xs text-background/20 font-medium">
            © {new Date().getFullYear()} Untapd. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-background opacity-[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
    </footer>
  );
}
