"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ColorKey =
  | "color1"
  | "color2"
  | "color3"
  | "color4"
  | "color5"
  | "color6"
  | "color7"
  | "color8"
  | "color9"
  | "color10"
  | "color11"
  | "color12"
  | "color13"
  | "color14"
  | "color15"
  | "color16"
  | "color17";

export type Colors = Record<ColorKey, string>;

const svgOrder = [
  "svg1",
  "svg2",
  "svg3",
  "svg4",
  "svg3",
  "svg2",
  "svg1",
] as const;

type SvgKey = (typeof svgOrder)[number];

type Stop = {
  offset: number;
  stopColor: string;
};

type SvgState = {
  gradientTransform: string;
  stops: Stop[];
};

type SvgStates = Record<SvgKey, SvgState>;

const createStopsArray = (
  svgStates: SvgStates,
  orderedSvgKeys: readonly SvgKey[],
  maxStops: number,
): Stop[][] => {
  const stopsArray: Stop[][] = [];

  for (let i = 0; i < maxStops; i += 1) {
    const stopConfigurations = orderedSvgKeys.map((svgKey) => {
      const svg = svgStates[svgKey];
      return svg.stops[i] || svg.stops[svg.stops.length - 1];
    });

    stopsArray.push(stopConfigurations);
  }

  return stopsArray;
};

type GradientSvgProps = {
  className: string;
  colors: Colors;
  isHovered: boolean;
};

const GradientSvg: React.FC<GradientSvgProps> = ({
  className,
  colors,
  isHovered,
}) => {
  const svgStates: SvgStates = {
    svg1: {
      gradientTransform:
        "translate(287.5 280) rotate(-29.0546) scale(689.807 1000)",
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.188423, stopColor: colors.color2 },
        { offset: 0.260417, stopColor: colors.color3 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.328992, stopColor: colors.color1 },
        { offset: 0.442708, stopColor: colors.color6 },
        { offset: 0.537556, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.725645, stopColor: colors.color8 },
        { offset: 0.817779, stopColor: colors.color9 },
        { offset: 0.84375, stopColor: colors.color10 },
        { offset: 0.90569, stopColor: colors.color1 },
        { offset: 1, stopColor: colors.color11 },
      ],
    },
    svg2: {
      gradientTransform:
        "translate(126.5 418.5) rotate(-64.756) scale(533.444 773.324)",
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.104167, stopColor: colors.color12 },
        { offset: 0.182292, stopColor: colors.color13 },
        { offset: 0.28125, stopColor: colors.color1 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.453125, stopColor: colors.color6 },
        { offset: 0.515625, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.692708, stopColor: colors.color8 },
        { offset: 0.75, stopColor: colors.color14 },
        { offset: 0.817708, stopColor: colors.color9 },
        { offset: 0.869792, stopColor: colors.color10 },
        { offset: 1, stopColor: colors.color1 },
      ],
    },
    svg3: {
      gradientTransform:
        "translate(264.5 339.5) rotate(-42.3022) scale(946.451 1372.05)",
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.188423, stopColor: colors.color2 },
        { offset: 0.307292, stopColor: colors.color1 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.442708, stopColor: colors.color15 },
        { offset: 0.537556, stopColor: colors.color16 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.725645, stopColor: colors.color17 },
        { offset: 0.817779, stopColor: colors.color9 },
        { offset: 0.84375, stopColor: colors.color10 },
        { offset: 0.90569, stopColor: colors.color1 },
        { offset: 1, stopColor: colors.color11 },
      ],
    },
    svg4: {
      gradientTransform:
        "translate(860.5 420) rotate(-153.984) scale(957.528 1388.11)",
      stops: [
        { offset: 0.109375, stopColor: colors.color11 },
        { offset: 0.171875, stopColor: colors.color2 },
        { offset: 0.260417, stopColor: colors.color13 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.328992, stopColor: colors.color1 },
        { offset: 0.442708, stopColor: colors.color6 },
        { offset: 0.515625, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.692708, stopColor: colors.color8 },
        { offset: 0.817708, stopColor: colors.color9 },
        { offset: 0.869792, stopColor: colors.color10 },
        { offset: 1, stopColor: colors.color11 },
      ],
    },
  };

  const maxStops = Math.max(
    ...Object.values(svgStates).map((svg) => svg.stops.length),
  );
  const stopsAnimationArray = createStopsArray(svgStates, svgOrder, maxStops);
  const gradientTransform = svgOrder.map(
    (svgKey) => svgStates[svgKey].gradientTransform,
  );

  const variants = {
    hovered: {
      gradientTransform,
      transition: { duration: 50, ease: "linear" as const, repeat: Infinity },
    },
    notHovered: {
      gradientTransform,
      transition: { duration: 10, ease: "linear" as const, repeat: Infinity },
    },
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="280"
      viewBox="0 0 1030 280"
      width="1030"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="url(#paint0_radial_905_231)"
        height="280"
        rx="140"
        width="1030"
      />
      <defs>
        <motion.radialGradient
          animate={isHovered ? variants.hovered : variants.notHovered}
          cx="0"
          cy="0"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_905_231"
          r="1"
        >
          {stopsAnimationArray.map((stopConfigs) => (
            <AnimatePresence
              key={`${stopConfigs[0].offset}-${stopConfigs[0].stopColor}`}
            >
              <motion.stop
                animate={{
                  offset: stopConfigs.map((config) => config.offset),
                  stopColor: stopConfigs.map((config) => config.stopColor),
                }}
                initial={{
                  offset: stopConfigs[0].offset,
                  stopColor: stopConfigs[0].stopColor,
                }}
                transition={{
                  duration: 0,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </AnimatePresence>
          ))}
        </motion.radialGradient>
      </defs>
    </svg>
  );
};

type LiquidProps = {
  colors: Colors;
  isHovered: boolean;
};

const liquidLayers = [
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[164.971deg] mix-blend-difference",
  "top-1/2 left-1/2 -translate-x-[53%] -translate-y-[53%] rotate-[-11.61deg] mix-blend-difference",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-[57%] rotate-[-179.012deg] mix-blend-difference",
  "top-1/2 left-1/2 -translate-x-[57%] -translate-y-1/2 rotate-[-29.722deg] mix-blend-difference",
  "top-1/2 left-1/2 -translate-x-[62%] -translate-y-[24%] rotate-[160.227deg] mix-blend-difference",
  "top-1/2 left-1/2 -translate-x-[67%] -translate-y-[29%] rotate-180 mix-blend-hard-light",
];

export const Liquid: React.FC<LiquidProps> = ({ colors, isHovered }) => {
  return (
    <>
      {liquidLayers.map((layerClassName, index) => (
        <div
          className={cn(
            "absolute",
            index < 3 ? "h-[121px] w-[443px]" : "h-[207px] w-[756px]",
            layerClassName,
          )}
          key={layerClassName}
        >
          <GradientSvg
            className="h-full w-full"
            colors={colors}
            isHovered={isHovered}
          />
        </div>
      ))}
    </>
  );
};

const COLORS: Colors = {
  color1: "#FFFFFF",
  color2: "#1E10C5",
  color3: "#9089E2",
  color4: "#FCFCFE",
  color5: "#F9F9FD",
  color6: "#B2B8E7",
  color7: "#0E2DCB",
  color8: "#0017E9",
  color9: "#4743EF",
  color10: "#7D7BF4",
  color11: "#0B06FC",
  color12: "#C5C1EA",
  color13: "#1403DE",
  color14: "#B6BAF6",
  color15: "#C1BEEB",
  color16: "#290ECB",
  color17: "#3F4CC0",
};

interface BookCallLiquidButtonProps {
  className?: string;
  href?: string;
  label?: string;
}

export function BookCallLiquidButton({
  className,
  href = "mailto:hello@jonasalfonso.com",
  label = "Book a call",
}: BookCallLiquidButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      window.location.hash = href;
    }
  };

  return (
    <a
      className={cn(
        "group relative inline-flex h-12 w-[168px] items-center justify-center rounded-full border border-[#E1E0CC]/80 bg-black text-sm font-semibold text-white shadow-[0_12px_36px_rgba(0,0,0,0.38)] outline-none transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#E1E0CC] cursor-pointer z-20",
        className,
      )}
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pointer-events-none absolute inset-[-7px] rounded-full opacity-75 blur-[16px]">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Liquid colors={COLORS} isHovered={isHovered} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full bg-black">
        <Liquid colors={COLORS} isHovered={isHovered} />
        <span className="absolute inset-0 rounded-full bg-black/45" />
        <span className="absolute inset-0 rounded-full border border-white/25 mix-blend-overlay" />
      </div>
      <span className="relative z-10 flex items-center gap-2 pl-1">
        {label}
        <span className="flex size-8 items-center justify-center rounded-full bg-[#E1E0CC] text-black transition-transform group-hover:translate-x-0.5">
          <ArrowRight className="size-4" />
        </span>
      </span>
    </a>
  );
}
