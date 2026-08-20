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
  { label: "Work", href: "/portfolio#work" },
  { label: "Community", href: "/portfolio#community" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "/portfolio" },
];

const PrismaHero = () => {
  return (
    <section className="relative h-[100svh] w-full bg-black md:h-[175vh]">
      <div className="relative flex h-[100svh] w-full flex-col justify-between overflow-hidden md:sticky md:top-0 md:h-screen">
        <div className="absolute inset-0 bg-[url('/hero-mobile-poster.jpg')] bg-cover bg-center md:hidden" />
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover md:block"
          poster="/hero-mobile-poster.jpg"
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
          <div className="no-scrollbar flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/80 px-2 py-2.5 shadow-lg backdrop-blur-md min-[360px]:gap-3 sm:gap-6 sm:px-5 md:gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap px-1.5 py-1 text-[11px] font-medium text-white/80 transition-colors hover:text-white sm:px-2 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-30 mt-auto px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-12 sm:px-8 md:px-10 md:pb-6">
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
                <DynamicButton
                  className="w-full min-[420px]:w-auto"
                  href="/portfolio"
                >
                  View the work
                </DynamicButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
