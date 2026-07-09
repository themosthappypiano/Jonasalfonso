"use client";

import { ClockIcon, MessageCircleMore, ShieldIcon } from "lucide-react";
import ScrollAdventure from "@/components/ui/animated-scroll";
import { Stats } from "@/components/ui/statistics-card";
import { cn } from "@/lib/utils";
import { AnimatedListSection } from "./AnimatedListSection";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";

export interface BentoGridProps {
  className?: string;
}

function PageCopy({
  description,
  eyebrow,
  icon: Icon,
  title,
}: {
  description: string;
  eyebrow: string;
  icon: typeof MessageCircleMore;
  title: string;
}) {
  return (
    <div className="flex h-full flex-col justify-center p-6 text-white sm:p-8 md:p-12">
      <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-white text-black md:mb-6 md:size-12">
        <Icon className="size-6 stroke-1.5" />
      </div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
        {eyebrow}
      </p>
      <h3 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
        {title}
      </h3>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base md:mt-6 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function VisualShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[430px] items-center justify-center bg-white p-4 text-black md:min-h-0 md:p-8",
        className,
      )}
    >
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
        {children}
      </div>
    </div>
  );
}

const pages = [
  {
    leftContent: (
      <VisualShell className="p-0">
        <Stats />
      </VisualShell>
    ),
    rightContent: (
      <PageCopy
        description="A sales agent trained on your calls, CRM notes, scripts, FAQs, and best objections so it sells like your best human rep."
        eyebrow="Conversion"
        icon={MessageCircleMore}
        title="Sales agents that convert"
      />
    ),
  },
  {
    leftContent: (
      <PageCopy
        description="Connects securely with the business tools your team already uses, without turning your automation into a black box."
        eyebrow="Trust"
        icon={ShieldIcon}
        title="Enterprise security"
      />
    ),
    rightContent: (
      <VisualShell className="p-2 md:p-3">
        <div className="w-full scale-100 sm:scale-110 md:scale-125">
          <OrbitingCirclesDemo />
        </div>
      </VisualShell>
    ),
  },
  {
    leftContent: (
      <VisualShell className="p-2 md:p-3">
        <div className="flex h-full w-full translate-y-4 items-center justify-center md:translate-y-10 md:scale-115">
          <AnimatedListSection
            className="h-[400px] max-w-xl md:h-[520px]"
            showFade={false}
          />
        </div>
      </VisualShell>
    ),
    rightContent: (
      <PageCopy
        description="Track performance, monitor workflows, and know exactly what your agents are doing across leads, calls, and bookings."
        eyebrow="Visibility"
        icon={ClockIcon}
        title="Real-time monitoring"
      />
    ),
  },
];

export function BentoGrid({ className }: BentoGridProps) {
  return (
    <div className={cn("h-full w-full", className)}>
      <ScrollAdventure
        className="h-full rounded-[28px] shadow-none"
        pages={pages}
      />
    </div>
  );
}
