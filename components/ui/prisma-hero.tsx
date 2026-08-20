"use client";

import { motion } from "framer-motion";
import type React from "react";
import { DynamicButton } from "@/components/custom/DynamicButton";
import { BookCallLiquidButton } from "@/components/ui/button-1";
import { ScrollingAnimation } from "@/components/ui/scrolling-animation";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const words = text.split(" ");

  return (
    <div className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        const uniqueKey = `pullup-${word}-${i}`;
        return (
          <motion.span
            key={uniqueKey}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const navItems = [
  { label: "Work", href: "#work" },
  { label: "Community", href: "#community" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "/portfolio" },
];

const PrismaHero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full md:h-[175vh] bg-black">
      <div className="relative min-h-[100dvh] w-full overflow-hidden md:sticky md:top-0 md:h-screen md:min-h-0 flex flex-col justify-between">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay z-10" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85 z-10" />

        <div className="pointer-events-none relative z-10">
          <ScrollingAnimation />
        </div>

        {/* Top Navbar */}
        <nav className="relative z-30 pt-3 px-4 flex justify-center w-full">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-12 rounded-full bg-black/80 backdrop-blur-md border border-white/10 px-5 py-2.5 max-w-[95vw] overflow-x-auto no-scrollbar shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-xs sm:text-sm font-medium transition-colors text-white/80 hover:text-white px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-30 px-5 pb-8 pt-20 sm:px-8 md:px-10 md:pb-6 mt-auto">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.88] text-[22vw] min-[380px]:text-[24vw] sm:text-[22vw] md:text-[19vw] lg:text-[15vw] xl:text-[14vw] 2xl:text-[13vw] tracking-tight"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Jonas" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-4 pb-1 sm:gap-5 lg:col-span-4 lg:pb-6">
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-[34rem] text-sm sm:text-base font-medium text-[#F4F0D8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-snug"
              >
                AI-powered systems that automate operations, capture leads, book
                appointments, and help businesses grow around the clock.
              </motion.p>

              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col min-[420px]:flex-row gap-3.5 items-stretch min-[420px]:items-center mt-2 w-full min-[420px]:w-auto z-30"
              >
                <BookCallLiquidButton
                  href="#book-call"
                  className="w-full min-[420px]:w-auto justify-center min-h-[48px]"
                />
                <div className="scale-95 origin-left self-start min-[420px]:self-auto">
                  <DynamicButton href="/portfolio">View the work</DynamicButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
