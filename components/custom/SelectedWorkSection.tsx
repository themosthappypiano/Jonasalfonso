"use client";

import { motion } from "framer-motion";
import {
  Bot,
  CalendarDays,
  Check,
  CreditCard,
  FileText,
  Instagram,
  MessageCircle,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "WoofGlam inbound booking agent",
    eyebrow: "Featured build · Salon · Dublin",
    description:
      "An inbound WhatsApp and voice booking agent that answers questions, checks availability, collects deposits, and stores customer details.",
    visual: <WoofGlamVisual />,
    showLogo: false,
    glow: "bg-[radial-gradient(circle_at_25%_80%,rgba(45,212,191,0.28),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.24),transparent_38%)]",
    className:
      "col-span-1 md:col-span-4 border-b md:border-r border-cyan-200/50 bg-gradient-to-br from-cyan-50/40 via-white to-blue-100/35",
  },
  {
    title: "Bridge 48 lead reactivation agent",
    eyebrow: "Paid client work · Coworking · Barcelona",
    description:
      "A WhatsApp reactivation agent that works through dormant CRM leads, starts personalized conversations, and brings interested prospects back into the sales pipeline.",
    visual: <BridgeVisual />,
    showLogo: true,
    glow: "bg-[radial-gradient(circle_at_85%_15%,rgba(16,185,129,0.16),transparent_36%),radial-gradient(circle_at_15%_90%,rgba(6,182,212,0.14),transparent_40%)]",
    className:
      "col-span-1 md:col-span-2 border-b border-emerald-200/50 bg-gradient-to-br from-white via-emerald-50/35 to-cyan-100/35",
  },
  {
    title: "CV intake agent & AI job dashboard",
    eyebrow: "Shaping Success Stories · Job seekers",
    description:
      "A guided CV intake agent plus an AI-powered dashboard that helps job seekers organize their information and move through the application process.",
    visual: <IntakeVisual />,
    showLogo: false,
    glow: "bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.24),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(59,130,246,0.24),transparent_40%)]",
    className:
      "col-span-1 md:col-span-3 border-b md:border-r border-violet-200/50 bg-gradient-to-br from-violet-50/35 via-white to-indigo-100/35",
  },
  {
    title: "Instagram DM agent",
    eyebrow: "NOGU · Conversation design",
    description:
      "Designed the system prompt and conversation behavior for an automated Instagram direct-message agent.",
    visual: <InstagramVisual />,
    showLogo: false,
    glow: "bg-[radial-gradient(circle_at_20%_85%,rgba(217,70,239,0.24),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(251,146,60,0.28),transparent_40%)]",
    className:
      "col-span-1 md:col-span-3 border-b border-fuchsia-200/50 bg-gradient-to-br from-fuchsia-50/35 via-white to-orange-100/35",
  },
];

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      className="relative z-20 bg-white py-16 text-black lg:py-32"
      aria-labelledby="selected-work-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Selected client work
          </p>
          <h2
            id="selected-work-title"
            className="mx-auto max-w-4xl text-center text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            Real systems for real businesses
          </h2>
          <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal leading-6 text-neutral-500 lg:text-base">
            Customer-facing AI, connected business tools, and intake workflows
            built around the way each client actually operates.
          </p>
        </motion.div>

        <div className="relative mt-12 overflow-hidden rounded-xl border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                viewport={{ once: true, margin: "-60px" }}
                className={cn(
                  "group relative flex min-h-[31rem] flex-col overflow-hidden p-5 shadow-[inset_0_1px_rgba(255,255,255,.75)] sm:p-8",
                  feature.className,
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60",
                    feature.glow,
                  )}
                />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                      {feature.eyebrow}
                    </p>
                    <h3 className="mt-3 text-xl tracking-tight text-black md:text-2xl md:leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  {feature.showLogo && (
                    <Image
                      src="/bridge48-logo.png"
                      alt="Bridge 48"
                      width={256}
                      height={256}
                      className="size-14 shrink-0 rounded-sm object-cover shadow-md sm:size-16"
                    />
                  )}
                </div>
                <p className="relative z-10 my-2 max-w-lg text-left text-sm font-normal leading-6 text-neutral-600 md:text-sm">
                  {feature.description}
                </p>
                <div className="relative z-10 mt-auto h-full w-full pt-7 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  {feature.visual}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WoofGlamVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inboundRef = useRef<HTMLDivElement>(null);
  const agentRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const depositRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[19rem] items-center overflow-hidden rounded-xl border border-cyan-200/80 bg-gradient-to-br from-white/90 via-cyan-50 to-blue-100 px-4 shadow-[0_24px_70px_rgba(14,116,144,0.16)] sm:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_58%)]" />
      <div className="relative z-10 grid w-full grid-cols-1 sm:grid-cols-[1fr_1.2fr_1fr] items-center gap-3 sm:gap-5">
        <FlowNode
          ref={inboundRef}
          icon={MessageCircle}
          label="Inbound WhatsApp & calls"
        />
        <FlowNode ref={agentRef} featured icon={Bot} label="AI booking agent" />
        <div className="col-span-2 flex gap-3 sm:col-span-1 sm:flex-col">
          <FlowNode
            ref={calendarRef}
            compact
            icon={CalendarDays}
            label="Live calendar"
          />
          <FlowNode
            ref={depositRef}
            compact
            icon={CreditCard}
            label="Stripe deposit"
          />
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={inboundRef}
        toRef={agentRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={agentRef}
        toRef={calendarRef}
        curvature={-45}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={agentRef}
        toRef={depositRef}
        curvature={45}
        delay={0.8}
      />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
        <Check className="size-3" /> 13+ prompt iterations
      </div>
    </div>
  );
}

const FlowNode = forwardRef<
  HTMLDivElement,
  {
    compact?: boolean;
    featured?: boolean;
    icon: React.ElementType;
    label: string;
  }
>(({ compact = false, featured = false, icon: Icon, label }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative z-10 flex flex-col items-center justify-center gap-2 rounded-xl border bg-white px-2 text-center shadow-sm",
      compact ? "min-h-20 flex-1" : "min-h-28",
      featured && "border-black bg-black text-white shadow-xl",
    )}
  >
    <Icon className="size-5" />
    <span className="text-[11px] font-medium leading-4">{label}</span>
  </div>
));

FlowNode.displayName = "FlowNode";

function BridgeVisual() {
  const leads = [
    { initials: "AM", name: "Alex M.", status: "Replied", active: true },
    {
      initials: "JL",
      name: "Jamie L.",
      status: "WhatsApp sent",
      active: false,
    },
    { initials: "SR", name: "Sam R.", status: "Next up", active: false },
  ];

  return (
    <div className="relative h-[19rem] overflow-hidden rounded-xl border border-emerald-200/70 bg-gradient-to-br from-white/85 via-emerald-50/70 to-cyan-100/70 p-4 shadow-[0_24px_70px_rgba(5,150,105,0.13)]">
      <div className="flex items-center justify-between rounded-lg border border-emerald-200/60 bg-white/75 px-3 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
            <MessageCircle className="size-3.5" />
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
              WhatsApp reactivation
            </p>
            <p className="mt-0.5 text-xs font-semibold text-neutral-800">
              Coworking leads · Barcelona
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">
          <motion.span
            className="size-1.5 rounded-full bg-emerald-500"
            animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
          />{" "}
          Live
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {leads.map((lead, index) => (
          <motion.div
            key={lead.name}
            animate={{ opacity: [0.72, 1, 0.72], x: [0, 2, 0] }}
            transition={{
              delay: index * 0.65,
              duration: 2.8,
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="flex items-center gap-2.5 rounded-lg border border-emerald-200/55 bg-white/80 p-2.5 backdrop-blur-sm"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[9px] font-bold text-white">
              {lead.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold text-neutral-800">
                {lead.name}
              </p>
              <p className="truncate text-[9px] text-neutral-400">
                Personalized WhatsApp message
              </p>
            </div>
            <span
              className={cn(
                "rounded-full px-2 py-1 text-[8px] font-semibold",
                lead.active
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-neutral-100 text-neutral-500",
              )}
            >
              {lead.status}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <CampaignStat value="24" label="Leads" />
        <CampaignStat value="7" label="Replied" />
        <CampaignStat value="3" label="Reactivated" />
      </div>
    </div>
  );
}

function CampaignStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-emerald-200/60 bg-white/70 px-2 py-2 text-center backdrop-blur-sm">
      <p className="text-sm font-semibold text-neutral-900">{value}</p>
      <p className="text-[8px] uppercase tracking-[0.08em] text-neutral-400">
        {label}
      </p>
    </div>
  );
}

function IntakeVisual() {
  return (
    <div className="relative h-[19rem] overflow-hidden rounded-xl border border-violet-200/80 bg-gradient-to-br from-white/90 via-violet-50 to-indigo-100 p-5 shadow-[0_24px_70px_rgba(79,70,229,0.16)]">
      <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-violet-200/70 bg-white/90 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-2 border-neutral-100 border-b px-4 py-3">
          <div className="flex size-7 items-center justify-center rounded-full bg-black text-white">
            <Sparkles className="size-3.5" />
          </div>
          <div>
            <p className="text-xs font-semibold">AI document reader</p>
            <p className="text-[10px] text-emerald-600">CV processed</p>
          </div>
        </div>
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-3 p-4">
          <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-3">
            <div className="mb-3 flex items-center gap-2 text-[9px] font-semibold text-neutral-500">
              <FileText className="size-4 text-blue-500" /> candidate-cv.pdf
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full rounded bg-neutral-200" />
              <div className="h-1.5 w-4/5 rounded bg-neutral-200" />
              <div className="h-1.5 w-full rounded bg-neutral-200" />
              <div className="h-1.5 w-2/3 rounded bg-neutral-200" />
            </div>
            <motion.div
              className="absolute inset-x-0 h-px bg-blue-500 shadow-[0_0_12px_2px_rgba(59,130,246,0.45)]"
              animate={{ top: ["22%", "88%", "22%"] }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <div className="space-y-2">
            {[
              "Experience extracted",
              "Skills identified",
              "Profile structured",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2.5 text-[9px] font-medium text-neutral-600"
              >
                <Check className="size-3 text-emerald-500" /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-4 mb-3 grid grid-cols-3 gap-2">
          {["Profile", "CV", "Jobs"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-neutral-100 bg-neutral-50 px-2 py-2 text-center text-[9px] font-medium text-neutral-500"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mx-4 mb-4 flex items-center justify-between rounded-lg bg-black px-3 py-2 text-[10px] text-white">
          View AI job dashboard <Sparkles className="size-3.5" />
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  children,
  user = false,
}: {
  children: React.ReactNode;
  user?: boolean;
}) {
  return (
    <div
      className={cn(
        "w-fit max-w-[85%] rounded-xl px-3 py-2 text-[11px] leading-4",
        user
          ? "ml-auto rounded-br-sm bg-black text-white"
          : "rounded-bl-sm bg-neutral-100 text-neutral-600",
      )}
    >
      {children}
    </div>
  );
}

function InstagramVisual() {
  return (
    <div className="relative flex h-[19rem] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-100 via-white to-orange-100 p-5">
      <motion.div
        whileHover={{ scale: 1.03, rotate: 0 }}
        className="w-full max-w-xs -rotate-2 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl transition-transform"
      >
        <div className="flex items-center gap-3 border-black/5 border-b px-4 py-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white">
            <Instagram className="size-4" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold">NOGU</p>
            <p className="text-[9px] text-neutral-400">Instagram</p>
          </div>
          <Phone className="size-4 text-neutral-400" />
        </div>
        <div className="space-y-3 p-4">
          <ChatBubble>Hi! What can I help you with today?</ChatBubble>
          <ChatBubble user>I’d like to know more.</ChatBubble>
          <div className="flex items-center gap-2 pt-2 text-[10px] text-neutral-400">
            <UserRound className="size-3" /> Conversation handled by AI
          </div>
        </div>
      </motion.div>
    </div>
  );
}
