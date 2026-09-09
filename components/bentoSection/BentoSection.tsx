"use client";

import { ClockIcon, MessageCircleMore, ShieldIcon } from "lucide-react";
import { AnimatedListSection } from "@/components/bentoSection/AnimatedListSection";
import { OrbitingCirclesDemo } from "@/components/bentoSection/OrbitingCirclesDemo";
import StackingCards, {
  StackingCardItem,
} from "@/components/ui/stacking-cards";
import { Stats } from "@/components/ui/statistics-card";
import { cn } from "@/lib/utils";

/**
 * Capabilities as a pinned, stacking card deck.
 *
 * Each card sticks to the top of the viewport and the next one slides over it,
 * scaling the previous card down — the page reads as a deck being dealt rather
 * than a list being scrolled. Structurally different from every other section
 * on the page, which is the point.
 *
 * Sourced from 21st.dev "Stacking Cards" (id 25275).
 * Copy is unchanged from the original bento carousel.
 */

const capabilities = [
  {
    eyebrow: "Conversion",
    icon: MessageCircleMore,
    title: "Sales agents that convert",
    description:
      "A sales agent trained on your calls, CRM notes, scripts, FAQs, and best objections so it sells like your best human rep.",
    tint: "from-[#ada332]/25",
    visual: <Stats />,
  },
  {
    eyebrow: "Trust",
    icon: ShieldIcon,
    title: "Enterprise security",
    description:
      "Connects securely with the business tools your team already uses, without turning your automation into a black box.",
    tint: "from-[#2979FF]/25",
    visual: <OrbitingCirclesDemo />,
  },
  {
    eyebrow: "Visibility",
    icon: ClockIcon,
    title: "Real-time monitoring",
    description:
      "Track performance, monitor workflows, and know exactly what your agents are doing across leads, calls, and bookings.",
    tint: "from-[#00E676]/20",
    visual: (
      <AnimatedListSection className="h-[280px] w-full" showFade={false} />
    ),
  },
];

export function BentoSection({ className }: { className?: string }) {
  return (
    <section
      id="features"
      data-slot="section"
      className={cn("relative bg-black", className)}
    >
      <StackingCards
        className="relative w-full"
        scaleMultiplier={0.04}
        totalCards={capabilities.length}
      >
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <StackingCardItem
              className="h-[95svh] md:h-screen"
              index={index}
              key={capability.title}
            >
              <div className="mx-auto h-full w-full max-w-6xl px-4 sm:px-6">
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b to-black shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.9)] md:flex-row",
                    capability.tint,
                  )}
                  // Cards physically stack, so each one must be fully opaque or
                  // the card beneath bleeds its text through this one.
                  style={{ backgroundColor: "#000" }}
                >
                  <div className="flex flex-1 flex-col justify-center gap-4 p-7 sm:p-10 md:p-14">
                    <div className="flex items-center gap-4">
                      <div className="flex size-11 items-center justify-center rounded-full bg-white text-black md:size-12">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </div>
                      <span className="text-6xl font-bold leading-none text-white/10 md:text-7xl">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                      {capability.eyebrow}
                    </p>
                    <h3 className="max-w-xl text-3xl font-semibold leading-[1.03] tracking-tight text-white sm:text-4xl md:text-6xl">
                      {capability.title}
                    </h3>
                    <p className="max-w-lg text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
                      {capability.description}
                    </p>
                  </div>

                  <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 pb-7 sm:p-8 md:p-10">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-3 md:p-6">
                      {capability.visual}
                    </div>
                  </div>
                </div>
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </section>
  );
}
