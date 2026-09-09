"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-velocity";

/**
 * Scroll-reactive marquee band.
 * Sourced from 21st.dev "Scroll Velocity Text" (id 19586) — the marquee speeds
 * up and reverses with scroll direction, which gives the page a sense of
 * momentum between the heavier sections.
 */

const capabilities = [
  "AI Chatbots",
  "AI Voice Agents",
  "AI Receptionists",
  "Appointment Systems",
  "Custom Builds",
  "Lead Automation",
];

export function ScrollBand() {
  return (
    <section
      aria-label="Capabilities"
      className="relative overflow-hidden border-y border-white/10 bg-black py-8 md:py-12"
    >
      <ScrollVelocityContainer>
        <ScrollVelocityRow baseVelocity={4} direction={1}>
          {capabilities.map((item) => (
            <span
              className="mx-6 inline-flex items-center gap-6 text-2xl font-semibold tracking-tight text-white/80 sm:text-4xl md:text-5xl"
              key={item}
            >
              {item}
              <span className="text-[#ada332]">✦</span>
            </span>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      {/* Fade the marquee into the page edges instead of cutting it hard. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}
