"use client";

import { AnimatePresence, type MotionProps, motion } from "motion/react";
import React, {
  type ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 2600, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    useEffect(() => {
      if (childrenArray.length === 0) return;

      let timeout: ReturnType<typeof setTimeout>;
      const tick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        timeout = setTimeout(tick, delay);
      };

      timeout = setTimeout(tick, delay);
      return () => clearTimeout(timeout);
    }, [delay, childrenArray.length]);

    const itemsToShow = useMemo(() => {
      if (childrenArray.length === 0) return [];

      return Array.from(
        { length: Math.min(5, childrenArray.length) },
        (_, i) => {
          const itemIndex =
            (index - i + childrenArray.length) % childrenArray.length;
          return childrenArray[itemIndex];
        },
      );
    }, [index, childrenArray]);

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";
