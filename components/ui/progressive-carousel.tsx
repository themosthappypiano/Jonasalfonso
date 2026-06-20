"use client";

import { motion } from "framer-motion";
import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/utils";

interface SliderContextValue {
  activeValue: string;
  interval: number;
  registerValue: (value: string) => void;
  setActiveValue: (value: string) => void;
  values: string[];
}

const SliderContext = createContext<SliderContextValue | null>(null);

function useSliderContext() {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error("Progressive carousel components must be used together.");
  }

  return context;
}

interface ProgressSliderProps extends HTMLAttributes<HTMLDivElement> {
  activeSlider: string;
  children: ReactNode;
  interval?: number;
  vertical?: boolean;
}

export function ProgressSlider({
  activeSlider,
  children,
  className,
  interval = 5200,
  vertical = false,
  ...props
}: ProgressSliderProps) {
  const [activeValue, setActiveValue] = useState(activeSlider);
  const [values, setValues] = useState<string[]>([]);

  const registerValue = useCallback((value: string) => {
    setValues((currentValues) => {
      if (currentValues.includes(value)) return currentValues;
      return [...currentValues, value];
    });
  }, []);

  useEffect(() => {
    if (values.length < 2) return;

    const timeout = window.setTimeout(() => {
      const activeIndex = values.indexOf(activeValue);
      const nextIndex = activeIndex === values.length - 1 ? 0 : activeIndex + 1;

      setActiveValue(values[nextIndex] ?? values[0]);
    }, interval);

    return () => window.clearTimeout(timeout);
  }, [activeValue, interval, values]);

  const contextValue = useMemo(
    () => ({
      activeValue,
      interval,
      registerValue,
      setActiveValue,
      values,
    }),
    [activeValue, interval, registerValue, values],
  );

  return (
    <SliderContext.Provider value={contextValue}>
      <div
        className={cn(
          "relative overflow-hidden",
          vertical && "flex",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </SliderContext.Provider>
  );
}

export function SliderContent({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

interface SliderWrapperProps {
  children: ReactNode;
  className?: string;
  value: string;
}

export function SliderWrapper({
  children,
  className,
  value,
}: SliderWrapperProps) {
  const { activeValue, registerValue } = useSliderContext();

  useEffect(() => {
    registerValue(value);
  }, [registerValue, value]);

  return (
    <motion.div
      animate={{
        opacity: activeValue === value ? 1 : 0,
        pointerEvents: activeValue === value ? "auto" : "none",
        scale: activeValue === value ? 1 : 1.025,
      }}
      className={cn("absolute inset-0", className)}
      initial={false}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SliderBtnGroup({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("z-20", className)} {...props}>
      {children}
    </div>
  );
}

interface SliderBtnProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "value"> {
  progressBarClass?: string;
  value: string;
}

export function SliderBtn({
  children,
  className,
  progressBarClass,
  value,
  ...props
}: SliderBtnProps) {
  const { activeValue, interval, registerValue, setActiveValue } =
    useSliderContext();
  const isActive = activeValue === value;

  useEffect(() => {
    registerValue(value);
  }, [registerValue, value]);

  return (
    <button
      className={cn("relative overflow-hidden", className)}
      onClick={() => setActiveValue(value)}
      type="button"
      {...props}
    >
      <motion.span
        animate={{ scaleX: isActive ? 1 : 0 }}
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 origin-left",
          progressBarClass,
        )}
        initial={{ scaleX: 0 }}
        key={`${value}-${isActive}`}
        transition={{
          duration: isActive ? interval / 1000 : 0.15,
          ease: "linear",
        }}
      />
      <span className="relative z-10 block">{children}</span>
    </button>
  );
}
