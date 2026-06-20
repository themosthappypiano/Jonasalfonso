"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

const EnvelopeIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

interface NodeProps {
  icon: ReactNode;
  iconBg: string;
  text: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  delay?: number;
  isHovered?: boolean;
  pulseColor?: string;
  hoverGlowColor?: string;
}

const Node = ({
  icon,
  iconBg,
  text,
  onMouseEnter,
  onMouseLeave,
  delay = 0,
  isHovered = false,
  pulseColor = "",
  hoverGlowColor = "#00E5FF",
}: NodeProps) => {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      animate={{
        y: [-5, 5, -5],
        ...(isHovered && pulseColor
          ? {
              boxShadow: [
                `0 0 0px ${pulseColor}00`,
                `0 0 25px ${pulseColor}90`,
                `0 0 0px ${pulseColor}00`,
              ],
              borderColor: pulseColor,
            }
          : {}),
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        ...(isHovered && pulseColor
          ? {
              boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              borderColor: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
          : {}),
      }}
      style={
        isHovered && !pulseColor
          ? {
              borderColor: hoverGlowColor,
              boxShadow: `0 8px 30px ${hoverGlowColor}40`,
            }
          : {}
      }
      className={`inline-flex bg-[#1E293B]/95 backdrop-blur-md rounded-2xl p-1.5 pr-6 items-center gap-3 border transition-all pointer-events-auto cursor-pointer ${
        !isHovered && !pulseColor
          ? "border-[#334155] shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:border-[#475569]"
          : ""
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] tracking-wider shadow-lg ${iconBg}`}
      >
        {icon}
      </div>
      <span className="text-[#E2E8F0] font-semibold text-[15px]">{text}</span>
    </motion.div>
  );
};

export default function WorkflowAnimation() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const dimColor = "#334155";
  const colors: Record<string, string> = {
    trigger: "#00E5FF",
    email: "#F59E0B",
    slack: "#3B82F6",
    llm: "#A855F7",
    notion: "#EC4899",
    status: "#10B981",
  };

  const getLineProps = (sourceNode: string) => {
    const active = hoveredNode === sourceNode;
    return {
      stroke: active ? colors[sourceNode] : dimColor,
      opacity: active ? 0.9 : 0.2,
      animDuration: active ? "1.2s" : "3s",
      filter: active ? "url(#glow)" : "none",
    };
  };

  const dotClasses: Record<string, string> = {
    trigger: "bg-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.9)]",
    email: "bg-[#F59E0B] shadow-[0_0_12px_rgba(245,158,11,0.9)]",
    slack: "bg-[#3B82F6] shadow-[0_0_12px_rgba(59,130,246,0.9)]",
    llm: "bg-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.9)]",
    notion: "bg-[#EC4899] shadow-[0_0_12px_rgba(236,72,153,0.9)]",
    status: "bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.9)]",
  };

  const statusDotColor =
    hoveredNode && dotClasses[hoveredNode]
      ? dotClasses[hoveredNode]
      : "bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]";

  return (
    <div className="w-full">
      <div className="w-full bg-[#0B0E14]/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-[#1E293B] font-sans">
        <div className="h-14 border-b border-[#1E293B] flex items-center px-5 relative bg-[#0D1321]">
          <div className="flex gap-2 z-10">
            <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-[#64748B] font-mono tracking-wide">
            ~ / workflows / claude-agent.ts
          </div>
        </div>

        <div
          className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 800 600"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <style>
              {`
                @keyframes dash {
                  to {
                    stroke-dashoffset: -12;
                  }
                }
                .animated-line {
                  animation: dash var(--anim-speed) linear infinite;
                }
              `}
            </style>

            {/* Trigger Lines */}
            <g
              style={
                {
                  "--anim-speed": getLineProps("trigger").animDuration,
                } as CSSProperties
              }
            >
              <path
                d="M 210 126 C 300 80, 500 80, 600 116"
                fill="none"
                stroke={getLineProps("trigger").stroke}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animated-line"
                style={{
                  filter: getLineProps("trigger").filter,
                  opacity: getLineProps("trigger").opacity,
                  transition: "all 0.5s ease-in-out",
                }}
              />
              <path
                d="M 210 126 C 265 126, 265 266, 320 266"
                fill="none"
                stroke={getLineProps("trigger").stroke}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animated-line"
                style={{
                  filter: getLineProps("trigger").filter,
                  opacity: getLineProps("trigger").opacity,
                  transition: "all 0.5s ease-in-out",
                }}
              />
            </g>

            {/* Email Lines */}
            <g
              style={
                {
                  "--anim-speed": getLineProps("email").animDuration,
                } as CSSProperties
              }
            >
              <path
                d="M 210 426 C 265 426, 265 266, 320 266"
                fill="none"
                stroke={getLineProps("email").stroke}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animated-line"
                style={{
                  filter: getLineProps("email").filter,
                  opacity: getLineProps("email").opacity,
                  transition: "all 0.5s ease-in-out",
                }}
              />
            </g>

            {/* LLM Lines */}
            <g
              style={
                {
                  "--anim-speed": getLineProps("llm").animDuration,
                } as CSSProperties
              }
            >
              <path
                d="M 430 266 C 505 266, 505 346, 580 346"
                fill="none"
                stroke={getLineProps("llm").stroke}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animated-line"
                style={{
                  filter: getLineProps("llm").filter,
                  opacity: getLineProps("llm").opacity,
                  transition: "all 0.5s ease-in-out",
                }}
              />
              <path
                d="M 430 266 C 490 266, 490 500, 550 500"
                fill="none"
                stroke={getLineProps("llm").stroke}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animated-line"
                style={{
                  filter: getLineProps("llm").filter,
                  opacity: getLineProps("llm").opacity,
                  transition: "all 0.5s ease-in-out",
                }}
              />
            </g>

            {/* Slack Lines */}
            <g
              style={
                {
                  "--anim-speed": getLineProps("slack").animDuration,
                } as CSSProperties
              }
            >
              <path
                d="M 710 116 C 800 116, 800 500, 730 500"
                fill="none"
                stroke={getLineProps("slack").stroke}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animated-line"
                style={{
                  filter: getLineProps("slack").filter,
                  opacity: getLineProps("slack").opacity,
                  transition: "all 0.5s ease-in-out",
                }}
              />
            </g>

            {/* Notion Lines */}
            <g
              style={
                {
                  "--anim-speed": getLineProps("notion").animDuration,
                } as CSSProperties
              }
            >
              <path
                d="M 690 346 C 750 346, 750 500, 730 500"
                fill="none"
                stroke={getLineProps("notion").stroke}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animated-line"
                style={{
                  filter: getLineProps("notion").filter,
                  opacity: getLineProps("notion").opacity,
                  transition: "all 0.5s ease-in-out",
                }}
              />
            </g>

            {/* Workflow nodes */}
            <foreignObject
              x="80"
              y="100"
              width="250"
              height="100"
              className="overflow-visible pointer-events-none"
            >
              <Node
                icon="Tr"
                iconBg="bg-[#00E5FF] text-[#04060A]"
                text="Trigger"
                onMouseEnter={() => setHoveredNode("trigger")}
                onMouseLeave={() => setHoveredNode(null)}
                delay={0}
                isHovered={hoveredNode === "trigger"}
                hoverGlowColor={colors.trigger}
              />
            </foreignObject>

            <foreignObject
              x="600"
              y="90"
              width="250"
              height="100"
              className="overflow-visible pointer-events-none"
            >
              <Node
                icon="SL"
                iconBg="bg-[#3B82F6]"
                text="Slack"
                delay={0.2}
                onMouseEnter={() => setHoveredNode("slack")}
                onMouseLeave={() => setHoveredNode(null)}
                isHovered={hoveredNode === "slack"}
                pulseColor={colors.slack}
              />
            </foreignObject>

            <foreignObject
              x="320"
              y="240"
              width="250"
              height="100"
              className="overflow-visible pointer-events-none"
            >
              <Node
                icon="AI"
                iconBg="bg-[#A855F7]"
                text="LLM"
                delay={0.4}
                onMouseEnter={() => setHoveredNode("llm")}
                onMouseLeave={() => setHoveredNode(null)}
                isHovered={hoveredNode === "llm"}
                hoverGlowColor={colors.llm}
              />
            </foreignObject>

            <foreignObject
              x="580"
              y="320"
              width="250"
              height="100"
              className="overflow-visible pointer-events-none"
            >
              <Node
                icon="DB"
                iconBg="bg-[#EC4899]"
                text="Notion"
                delay={0.6}
                onMouseEnter={() => setHoveredNode("notion")}
                onMouseLeave={() => setHoveredNode(null)}
                isHovered={hoveredNode === "notion"}
                hoverGlowColor={colors.notion}
              />
            </foreignObject>

            <foreignObject
              x="80"
              y="400"
              width="250"
              height="100"
              className="overflow-visible pointer-events-none"
            >
              <Node
                icon={<EnvelopeIcon />}
                iconBg="bg-[#F59E0B]"
                text="Email"
                delay={0.8}
                onMouseEnter={() => setHoveredNode("email")}
                onMouseLeave={() => setHoveredNode(null)}
                isHovered={hoveredNode === "email"}
                hoverGlowColor={colors.email}
              />
            </foreignObject>

            {/* Interactive status label */}
            <foreignObject
              x="540"
              y="480"
              width="250"
              height="100"
              className="overflow-visible pointer-events-none"
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="inline-flex bg-[#0F172A]/95 backdrop-blur-md text-[#E2E8F0] px-5 py-2.5 rounded-full items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-[#1E293B] pointer-events-auto cursor-pointer hover:border-[#475569]"
                onMouseEnter={() => setHoveredNode("status")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${statusDotColor}`}
                />
                <span className="text-[14px] font-medium tracking-wide font-sans">
                  Executed 3s ago
                </span>
              </motion.div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
}
