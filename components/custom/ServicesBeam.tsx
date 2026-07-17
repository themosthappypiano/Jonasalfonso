"use client";

import {
  Bot,
  CalendarDays,
  Database,
  FileText,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import type React from "react";
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    label: string;
  }
>(({ children, className, label }, ref) => (
  <div className="relative z-10 flex flex-col items-center gap-2">
    <div
      ref={ref}
      className={cn(
        "flex size-12 items-center justify-center rounded-full border border-neutral-200 bg-white p-3 text-neutral-700 shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      {children}
    </div>
    <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.1em] text-neutral-400">
      {label}
    </span>
  </div>
));

Circle.displayName = "Circle";

export function ServicesBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const agentRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const crmRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[25rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-[0_28px_70px_rgba(0,0,0,0.12)] sm:p-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.11),transparent_55%)]" />
      <div className="relative z-10 flex size-full max-h-[15rem] max-w-lg flex-col items-stretch justify-between gap-8">
        <div className="flex items-center justify-between">
          <Circle ref={messageRef} label="Messages">
            <MessageCircle className="size-full text-emerald-500" />
          </Circle>
          <Circle ref={calendarRef} label="Calendar">
            <CalendarDays className="size-full text-blue-500" />
          </Circle>
        </div>
        <div className="flex items-center justify-between">
          <Circle ref={phoneRef} label="Calls">
            <Phone className="size-full text-violet-500" />
          </Circle>
          <Circle
            ref={agentRef}
            className="size-16 border-black bg-black text-white shadow-xl"
            label="AI agent"
          >
            <Bot className="size-full" />
          </Circle>
          <Circle ref={crmRef} label="CRM">
            <Database className="size-full text-orange-500" />
          </Circle>
        </div>
        <div className="flex items-center justify-between">
          <Circle ref={emailRef} label="Email">
            <Mail className="size-full text-rose-500" />
          </Circle>
          <Circle ref={documentRef} label="Documents">
            <FileText className="size-full text-cyan-600" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={messageRef}
        toRef={agentRef}
        curvature={-65}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={phoneRef}
        toRef={agentRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={emailRef}
        toRef={agentRef}
        curvature={65}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={calendarRef}
        toRef={agentRef}
        curvature={-65}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={crmRef}
        toRef={agentRef}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={documentRef}
        toRef={agentRef}
        curvature={65}
        reverse
      />
    </div>
  );
}
