"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { WavePath } from "@/components/ui/wave-path";

const gradientColors = [
  "#050505",
  "#0A0A0A",
  "#2979FF",
  "#FF80AB",
  "#FF6D00",
  "#FFD600",
  "#00E676",
  "#3D5AFE",
];

const gradientStops = [26, 42, 56, 66, 76, 84, 92, 100];

export function HeroSummarySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.35,
    once: false,
  });

  return (
    <section
      className="relative -mt-px overflow-hidden bg-black text-white"
      ref={sectionRef}
    >
      <div className="relative overflow-hidden px-5 py-20 sm:px-6 md:py-40">
        <AnimatedGradientBackground
          Breathing
          animationSpeed={0.018}
          breathingRange={6}
          containerClassName="pointer-events-none opacity-80"
          gradientColors={gradientColors}
          gradientStops={gradientStops}
          isActive={isInView}
          startingGap={115}
          topOffset={18}
        />
        <div className="pointer-events-none absolute inset-0 bg-black/35" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-end">
          <WavePath className="mb-8 text-white/25 md:mb-12" />

          <div className="flex w-full flex-col items-end gap-8 md:flex-row md:items-start md:justify-end">
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/70 md:w-1/4">
              AI automation agency
            </p>
            <p className="max-w-3xl text-[1.75rem] font-medium leading-[1.12] text-white sm:text-3xl md:text-5xl">
              I build AI systems that automate operations, capture leads, book
              appointments, and keep your business growing around the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
