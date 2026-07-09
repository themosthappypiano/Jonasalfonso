"use client";

import { motion } from "framer-motion";
import { AnimatedList } from "@/components/ui/animated-list";
import { bentoVisual } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const notifications = [
  {
    name: "Website visitor qualified",
    description: "AI Chatbot",
    time: "now",
    icon: "💬",
    color: "#00C9A7",
  },
  {
    name: "Inbound call answered",
    description: "AI Voice Agent",
    time: "1m ago",
    icon: "☎️",
    color: "#FFB800",
  },
  {
    name: "New appointment booked",
    description: "Appointment System",
    time: "2m ago",
    icon: "📅",
    color: "#FF3D71",
  },
  {
    name: "Lead routed to inbox",
    description: "AI Receptionist",
    time: "3m ago",
    icon: "📨",
    color: "#1E86FF",
  },
  {
    name: "Offer personalized",
    description: "AI Website",
    time: "4m ago",
    icon: "⚡",
    color: "#8B5CF6",
  },
  {
    name: "Follow-up reminder sent",
    description: "Automation Workflow",
    time: "5m ago",
    icon: "✅",
    color: "#10B981",
  },
];

const Notification = ({ name, description, icon, time, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl border border-black/10 p-2",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white text-black shadow-[0_18px_40px_rgba(0,0,0,0.22)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl backdrop-blur-3xl"
          style={{
            backgroundColor: `${color}22`,
            boxShadow: `inset 0 0 0 1px ${color}55`,
          }}
        >
          <span className="text-sm">{icon}</span>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <figcaption className="flex min-w-0 flex-row items-center font-medium text-black">
            <span className="truncate text-xs sm:text-base">{name}</span>
            <span className="mx-1">·</span>
            <span className="shrink-0 text-[10px] text-black/45 sm:text-xs">
              {time}
            </span>
          </figcaption>
          <p className="text-sm font-normal text-black/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListSection({
  className,
  showFade = true,
}: {
  className?: string;
  showFade?: boolean;
}) {
  return (
    <motion.div
      className={cn(
        "relative flex h-[300px] w-full flex-col overflow-hidden py-2 px-4",
        className,
      )}
      role="img"
      aria-label="Real-time activity feed showing AI agent tasks and notifications"
      variants={bentoVisual}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={`${item.name}-${idx}`} />
        ))}
      </AnimatedList>

      {showFade && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black" />
      )}
    </motion.div>
  );
}
