"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot } from "lucide-react";
import { BookCallLiquidButton } from "@/components/ui/button-1";
import { GlowGrid } from "@/components/ui/glow-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { ServicesBeam } from "./ServicesBeam";

/**
 * Services section restyled onto 3D tilt cards.
 * Adapted from 21st.dev "Tilt Card" (id 12245) + the glow-grid pointer tracking.
 * Every service title, badge, and description is unchanged from the previous
 * version — only the container styling is new.
 */

const services = [
  {
    accent: "#3B82F6",
    badgeText: "Lead capture",
    description:
      "Handle lead questions, qualify prospects, and route conversations to the right workflow.",
    index: "001",
    title: "AI Chatbots",
  },
  {
    accent: "#06B6D4",
    badgeText: "Voice automation",
    description:
      "Answer calls, collect details, and keep customers moving without missed opportunities.",
    index: "002",
    title: "AI Voice Agents",
  },
  {
    accent: "#8B5CF6",
    badgeText: "Front desk",
    description:
      "Front-desk automation for intake, routing, FAQs, and appointment handoff.",
    index: "003",
    title: "AI Receptionists",
  },
  {
    accent: "#10B981",
    badgeText: "Custom workflows",
    description:
      "Custom workflows that connect your CRM, forms, inboxes, calendars, and internal tools.",
    index: "004",
    title: "Custom Builds",
  },
  {
    accent: "#ada332",
    badgeText: "Scheduling",
    description:
      "Booking systems that qualify requests, sync calendars, and reduce back-and-forth.",
    index: "005",
    title: "Appointment Systems",
  },
];

export function AgencySystemsSection() {
  return (
    <section
      id="services"
      className="relative bg-black px-5 py-16 text-white sm:px-8 md:py-24"
      aria-labelledby="agency-systems-title"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 grid items-center gap-10 md:mb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <Bot className="size-3.5" />
              Our Services
            </div>
            <h2
              id="agency-systems-title"
              className="text-[1.75rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              Intelligent systems for{" "}
              <span className="font-normal italic text-white/55">
                modern business
              </span>
            </h2>
            <p className="max-w-lg text-base leading-7 text-white/65">
              Each solution automates repetitive work, captures more leads, and
              keeps your business operating around the clock.
            </p>
            <BookCallLiquidButton href="#book-call" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <ServicesBeam />
          </motion.div>
        </div>

        <GlowGrid className="gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              key={service.title}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <TiltCard
                className="h-full rounded-2xl border border-white/10 bg-white/[0.02]"
                effect="gravitate"
                scale={1.02}
                tiltLimit={7}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(120% 80% at 50% 0%, ${service.accent}22, transparent 65%)`,
                  }}
                />
                <div className="relative z-10 flex h-full flex-col gap-4 p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
                      style={{
                        borderColor: `${service.accent}55`,
                        color: service.accent,
                        backgroundColor: `${service.accent}12`,
                      }}
                    >
                      <span
                        className="size-1.5 rounded-full"
                        style={{ backgroundColor: service.accent }}
                      />
                      {service.badgeText}
                    </span>
                    <span className="text-xs font-medium text-white/25">
                      {service.index}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/60">
                    {service.description}
                  </p>

                  <a
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                    href="#book-call"
                  >
                    Book a call
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </GlowGrid>
      </div>
    </section>
  );
}
