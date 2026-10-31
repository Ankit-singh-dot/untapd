"use client";

import { motion, MotionValue } from "framer-motion";
import { HeroField } from "@/components/shared/hero-field";
import { HorizonStage, RiseLine } from "@/components/shared/horizon-stage";
import { Container, PillButton, useScrollWindow } from "@/components/shared/primitives";
import { heroCopy } from "./content";

function HeroContent({ progress }: { progress: MotionValue<number> }) {
  const fineOpacity = useScrollWindow(progress, 0, 0.22, 1, 0);

  return (
    <Container className="flex flex-1 flex-col justify-between">
      <motion.div style={{ opacity: fineOpacity }} className="hidden justify-between text-sm md:flex [@media(max-height:760px)]:hidden">
        <p className="hero-fade" style={{ animationDelay: "0.9s" }}>
          Strategic Marketing Leadership · Brand Building · Growth Systems
        </p>
        <p className="hero-fade font-serif text-lg italic" style={{ animationDelay: "1s" }}>
          Think Beyond.
        </p>
      </motion.div>

      <div className="relative mt-auto">
        <h1 className="font-display text-[12.8vw] font-medium leading-[0.92] tracking-[-0.03em] md:text-[min(12.8vw,23svh)]">
          <RiseLine>Your next best</RiseLine>
          <RiseLine delay={0.09}>marketing</RiseLine>
          <RiseLine delay={0.18} serif>
            decision.
          </RiseLine>
        </h1>

        <div className="mt-6 flex flex-col items-start gap-5 md:mt-8 lg:absolute lg:bottom-[0.6vw] lg:right-0 lg:mt-0 lg:w-[min(32vw,32rem)]">
          <p className="hero-fade text-pretty text-[15px] leading-relaxed text-white/90 md:text-base" style={{ animationDelay: "0.8s" }}>
            {heroCopy}
          </p>
          <div className="hero-fade shrink-0" style={{ animationDelay: "1s" }}>
            <PillButton href="/case-studies">View our work</PillButton>
          </div>
        </div>
      </div>
    </Container>
  );
}

export function Hero() {
  return (
    <HorizonStage label="Introduction" backdrop={<HeroField className="absolute inset-0 size-full" />}>
      {(progress) => <HeroContent progress={progress} />}
    </HorizonStage>
  );
}
