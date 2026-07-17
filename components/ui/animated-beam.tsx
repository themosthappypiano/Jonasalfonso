"use client";

import { motion } from "framer-motion";
import { type RefObject, useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "#d4d4d4",
  pathWidth = 2,
  pathOpacity = 0.35,
  gradientStartColor = "#2563eb",
  gradientStopColor = "#22c55e",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!(containerRef.current && fromRef.current && toRef.current)) return;

      const container = containerRef.current.getBoundingClientRect();
      const from = fromRef.current.getBoundingClientRect();
      const to = toRef.current.getBoundingClientRect();
      const startX = from.left - container.left + from.width / 2 + startXOffset;
      const startY = from.top - container.top + from.height / 2 + startYOffset;
      const endX = to.left - container.left + to.width / 2 + endXOffset;
      const endY = to.top - container.top + to.height / 2 + endYOffset;

      setDimensions({ width: container.width, height: container.height });
      setPathD(
        `M ${startX},${startY} Q ${(startX + endX) / 2},${startY - curvature} ${endX},${endY}`,
      );
    };

    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    updatePath();

    return () => resizeObserver.disconnect();
  }, [
    containerRef,
    curvature,
    endXOffset,
    endYOffset,
    fromRef,
    startXOffset,
    startYOffset,
    toRef,
  ]);

  const coordinates = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"] };

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu",
        className,
      )}
      fill="none"
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      width={dimensions.width}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeLinecap="round"
        strokeOpacity={pathOpacity}
        strokeWidth={pathWidth}
      />
      <path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeWidth={pathWidth}
      />
      <defs>
        <motion.linearGradient
          animate={{
            x1: coordinates.x1,
            x2: coordinates.x2,
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
          }}
          gradientUnits="userSpaceOnUse"
          id={id}
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}
