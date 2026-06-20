"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { CirclePercent } from "lucide-react";
import { cn } from "@/lib/utils";

const css = `
.candy-bg {
  background-color: hsl(0 0% 96% / 2%);
  background-image: linear-gradient(
    135deg,
    hsl(0 0% 96%) 25%,
    transparent 25.5%,
    transparent 50%,
    hsl(0 0% 96%) 50.5%,
    hsl(0 0% 96%) 75%,
    transparent 75.5%,
    transparent
  );
  background-size: 10px 10px;
}`;

interface BarChartProps {
  className?: string;
  delay?: number;
  label: string;
  showToolTip?: boolean;
  tooltip?: string;
  value: number;
}

const bars: BarChartProps[] = [
  { delay: 0.2, label: "Manual follow-up", value: 31 },
  { delay: 0.4, label: "Generic chatbot", value: 44 },
  {
    className: "bg-sky-400",
    delay: 0.6,
    label: "Trained sales agent",
    showToolTip: true,
    tooltip: "booked calls",
    value: 89,
  },
  { delay: 0.8, label: "Human setter only", value: 52 },
];

export function Stats() {
  return (
    <section className="h-full w-full">
      <style>{css}</style>
      <div className="flex h-full w-full flex-col justify-center p-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-full bg-black text-white">
            <CirclePercent className="size-5 stroke-1.5" />
          </div>
          <h3 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
            Trained to turn conversations into calls
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-black/55 md:text-base">
            Built from your sales calls, CRM notes, scripts, FAQs, and objection
            data so the agent can qualify and convert like your best rep.
          </p>
        </div>

        <div className="relative mx-auto mt-10 flex h-[360px] w-full max-w-4xl items-center justify-center gap-3 md:h-[420px]">
          {bars.map((props, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="h-full w-full"
              initial={{ opacity: 0, y: 20 }}
              key={props.label}
              transition={{
                damping: 10,
                delay: index * 0.2,
                duration: 0.5,
                type: "spring",
              }}
            >
              <BarChart {...props} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BarChart({
  className = "",
  delay = 0,
  label,
  showToolTip = false,
  tooltip = "conversions",
  value,
}: BarChartProps) {
  return (
    <div className="group relative h-full w-full">
      <div className="candy-bg relative h-full w-full overflow-hidden rounded-[32px] border border-black/10">
        <motion.div
          animate={{ height: `${value}%`, opacity: 1, y: 0 }}
          className={cn(
            "absolute bottom-0 mt-auto w-full rounded-[32px] bg-black/80 p-3 text-white",
            className,
          )}
          initial={{ height: 0, opacity: 0, y: 100 }}
          transition={{ damping: 20, delay, duration: 0.5, type: "spring" }}
        >
          <div className="relative flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white/20 text-lg font-semibold tracking-tighter">
            <NumberFlow suffix="%" value={value} />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ height: `${value}%`, opacity: 1, y: 0 }}
        className="absolute bottom-0 w-full"
        initial={{ height: 0, opacity: 0, y: 100 }}
        transition={{ damping: 15, delay, duration: 0.5, type: "spring" }}
      >
        <motion.div
          animate={{
            opacity: showToolTip ? 1 : 0,
            y: showToolTip ? 0 : 100,
          }}
          className={cn(
            "absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black px-2 py-1 text-sm text-white",
            className,
          )}
          initial={{ opacity: 0, y: 100 }}
          transition={{ damping: 15, delay, duration: 0.5, type: "spring" }}
        >
          <div
            className={cn(
              "absolute -bottom-9 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-black transition-all duration-300 ease-in-out",
              className,
            )}
          />
          <svg
            aria-hidden="true"
            className={cn(
              "absolute -bottom-2 left-1/2 -translate-x-1/2",
              className.includes("bg-sky-400") ? "text-sky-400" : "text-black",
            )}
            fill="none"
            height="10"
            viewBox="0 0 10 10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.83855 8.41381C4.43827 9.45255 5.93756 9.45255 6.53728 8.41381L9.65582 3.01233C10.2555 1.97359 9.50589 0.675159 8.30646 0.675159H2.06937C0.869935 0.675159 0.120287 1.97359 0.720006 3.01233L3.83855 8.41381Z"
              fill="currentColor"
            />
          </svg>
          {tooltip}
        </motion.div>
      </motion.div>

      <p className="mx-auto mt-3 w-fit text-center text-xs font-medium tracking-tight text-black/55 md:text-sm">
        {label}
      </p>
    </div>
  );
}
