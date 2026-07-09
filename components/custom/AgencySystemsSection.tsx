"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { BookCallLiquidButton } from "@/components/ui/button-1";
import { GradientCard } from "@/components/ui/gradient-card";
import { bentoDescription, bentoHeader } from "@/lib/animations";
import WorkflowAnimation from "../workflow-animation";
import CustomSeperator from "./Seperator";

const services = [
  {
    badgeColor: "#3B82F6",
    badgeText: "Lead capture",
    description:
      "Handle lead questions, qualify prospects, and route conversations to the right workflow.",
    gradient: "purple",
    index: "001",
    title: "AI Chatbots",
  },
  {
    badgeColor: "#06B6D4",
    badgeText: "Voice automation",
    description:
      "Answer calls, collect details, and keep customers moving without missed opportunities.",
    gradient: "blue",
    index: "002",
    title: "AI Voice Agents",
  },
  {
    badgeColor: "#8B5CF6",
    badgeText: "Front desk",
    description:
      "Front-desk automation for intake, routing, FAQs, and appointment handoff.",
    gradient: "gray",
    index: "003",
    title: "AI Receptionists",
  },
  {
    badgeColor: "#10B981",
    badgeText: "Custom workflows",
    description:
      "Custom workflows that connect your CRM, forms, inboxes, calendars, and internal tools.",
    gradient: "green",
    index: "004",
    title: "Custom Builds",
  },
  {
    badgeColor: "#06B6D4",
    badgeText: "Scheduling",
    description:
      "Booking systems that qualify requests, sync calendars, and reduce back-and-forth.",
    gradient: "blue",
    index: "005",
    title: "Appointment Systems",
  },
];

export function AgencySystemsSection() {
  return (
    <section
      id="services"
      className="bg-background text-foreground relative px-4 md:px-0"
      aria-labelledby="agency-systems-title"
    >
      <CustomSeperator />

      <div className="max-w-7xl mx-auto px-2 md:px-6 py-10 md:py-20">
        <div className="mb-12 grid items-center gap-8 sm:gap-10 md:mb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-14">
          <motion.div
            className="space-y-5"
            variants={bentoHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <Bot className="size-3.5" />
              Our Services
            </div>
            <h2
              id="agency-systems-title"
              className="text-[1.75rem] font-bold leading-tight text-primary sm:text-4xl"
            >
              Intelligent systems for{" "}
              <span className="text-muted-foreground italic font-normal">
                modern business
              </span>
            </h2>
            <p className="text-base text-muted-foreground text-balance">
              Each solution automates repetitive work, captures more leads, and
              keeps your business operating around the clock.
            </p>
            <BookCallLiquidButton href="#book-call" />
          </motion.div>

          <motion.div
            variants={bentoDescription}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <WorkflowAnimation />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={bentoDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={index}
            >
              <GradientCard
                badgeColor={service.badgeColor}
                badgeText={service.badgeText}
                ctaHref="#book-call"
                ctaText="Book a call"
                description={service.description}
                gradient={
                  service.gradient as "blue" | "purple" | "gray" | "green"
                }
                title={service.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
