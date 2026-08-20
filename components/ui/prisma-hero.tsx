"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      style={style}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={word}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
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

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
      style={style}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w.word}-${w.className ?? "plain"}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
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
    <section className="h-[100svh] min-h-[620px] w-full md:h-[175vh]">
      <div className="relative h-[100svh] min-h-[620px] w-full overflow-hidden md:sticky md:top-0 md:h-screen md:min-h-0">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/75" />

        <ScrollingAnimation />

        {/* Navbar */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2 max-w-[92vw]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar rounded-b-2xl bg-black px-3 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[11px] font-medium transition-colors sm:text-xs md:text-sm px-1 py-1"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#E1E0CC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)";
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="absolute right-0 bottom-0 left-0 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 md:px-10 md:pb-2">
          <div className="grid grid-cols-12 items-end gap-3 sm:gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] text-[20vw] min-[380px]:text-[22vw] sm:text-[22vw] md:text-[19vw] lg:text-[15vw] xl:text-[14vw] 2xl:text-[13vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Jonas" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-3 pb-1 sm:gap-5 sm:pb-6 lg:col-span-4 lg:pb-10">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-[34rem] text-xs font-medium text-[#F4F0D8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] min-[380px]:text-sm sm:text-sm md:text-base"
                style={{ lineHeight: 1.25 }}
              >
                AI-powered systems that automate operations, capture leads, book
                appointments, and help businesses grow around the clock.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col min-[420px]:flex-row gap-3 items-stretch min-[420px]:items-center mt-1 sm:mt-2 w-full min-[420px]:w-auto"
              >
                <BookCallLiquidButton
                  href="#book-call"
                  className="w-full min-[420px]:w-auto justify-center"
                />
                <div className="scale-90 origin-left self-start min-[420px]:self-auto">
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
