"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bot } from "lucide-react";
import { useState } from "react";
import { BookCallLiquidButton } from "@/components/ui/button-1";
import { cn } from "@/lib/utils";

/**
 * Services as a horizontal expanding accordion.
 *
 * Panels are collapsed to slivers; hovering (or tapping) one expands it and
 * reveals its copy. Replaces the previous card grid entirely — no grid on the
 * page reads the same way twice.
 *
 * Sourced from 21st.dev "Expand on hover" (id 7276), rebuilt around text
 * panels instead of the catalog's stock photography, and given a real vertical
 * layout on mobile where a row of slivers would be unusable.
 *
 * Every service title, badge, and description is unchanged.
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
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="relative bg-black px-5 py-16 text-white sm:px-8 md:py-24"
      aria-labelledby="agency-systems-title"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="mb-10 flex flex-col gap-5 md:mb-14 md:max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
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

        {/* Desktop: expanding accordion. */}
        <div className="hidden gap-2 md:flex md:h-[26rem]">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <motion.button
                animate={{ flexGrow: isActive ? 6 : 1 }}
                aria-expanded={isActive}
                className={cn(
                  "group relative min-w-0 cursor-pointer overflow-hidden rounded-3xl border text-left transition-colors",
                  isActive
                    ? "border-white/20"
                    : "border-white/10 hover:border-white/20",
                )}
                key={service.title}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                type="button"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, ${service.accent}1f, transparent 65%), #000`,
                  }}
                />

                {/* Collapsed: vertical title. Expanded: full copy. */}
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      animate={{ opacity: 1 }}
                      className="relative z-10 flex h-full flex-col justify-between p-7"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      key="open"
                      transition={{ duration: 0.3, delay: 0.12 }}
                    >
                      <div className="flex items-start justify-between">
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
                        <span className="text-xs font-medium text-white/30">
                          {service.index}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                          {service.title}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                          {service.description}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80">
                          Book a call
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ opacity: 1 }}
                      className="relative z-10 flex h-full flex-col items-center justify-between py-7"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      key="closed"
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-xs font-medium text-white/30">
                        {service.index}
                      </span>
                      <span
                        className="whitespace-nowrap text-lg font-semibold tracking-tight text-white/70"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {service.title}
                      </span>
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: service.accent }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile: full-width panels. Slivers are unusable on a phone. */}
        <div className="flex flex-col gap-3 md:hidden">
          {services.map((service) => (
            <a
              className="relative block overflow-hidden rounded-2xl border border-white/12 p-6"
              href="#book-call"
              key={service.title}
              style={{
                background: `linear-gradient(160deg, ${service.accent}1f, transparent 70%), #000`,
              }}
            >
              <div className="mb-4 flex items-start justify-between">
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
                <span className="text-xs font-medium text-white/30">
                  {service.index}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80">
                Book a call
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
