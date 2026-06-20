"use client";

import { useEffect, useId } from "react";

declare global {
  interface Window {
    Cal?: CalFunction & {
      config?: {
        forwardQueryParams?: boolean;
      };
      loaded?: boolean;
      ns?: Record<string, CalNamespace>;
      q?: unknown[];
    };
  }
}

type CalFunction = (...args: unknown[]) => void;

type CalNamespace = {
  (...args: unknown[]): void;
  q?: unknown[];
};

interface CalInlineEmbedProps {
  calLink: string;
  namespace?: string;
  className?: string;
}

export function CalInlineEmbed({
  calLink,
  className,
  namespace = "15min",
}: CalInlineEmbedProps) {
  const reactId = useId();
  const elementId = `cal-inline-${namespace}-${reactId.replace(/:/g, "")}`;

  useEffect(() => {
    const initializeCal = () => {
      (function initialize(C: Window, A: string, L: string) {
        const pushQueue = (
          api: CalNamespace | CalFunction,
          args: unknown[],
        ) => {
          if ("q" in api) {
            api.q = api.q || [];
            api.q.push(args);
          }
        };
        const doc = C.document;

        C.Cal =
          C.Cal ||
          function calLoader(...args: unknown[]) {
            const cal = C.Cal;
            if (!cal) return;

            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              doc.head.appendChild(doc.createElement("script")).src = A;
              cal.loaded = true;
            }

            if (args[0] === L) {
              const api: CalNamespace = (...apiArgs: unknown[]) => {
                pushQueue(api, apiArgs);
              };
              const ns = args[1];
              api.q = api.q || [];

              if (typeof ns === "string") {
                cal.ns = cal.ns || {};
                cal.ns[ns] = cal.ns[ns] || api;
                pushQueue(cal.ns[ns], args);
                pushQueue(cal, ["initNamespace", ns]);
              } else {
                pushQueue(cal, args);
              }
              return;
            }

            pushQueue(cal, args);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      window.Cal?.("init", namespace, { origin: "https://app.cal.com" });
      window.Cal = window.Cal || (() => undefined);
      window.Cal.config = window.Cal.config || {};
      window.Cal.config.forwardQueryParams = true;

      window.Cal.ns?.[namespace]?.("inline", {
        calLink,
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        elementOrSelector: `#${elementId}`,
      });

      window.Cal.ns?.[namespace]?.("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    initializeCal();
  }, [calLink, elementId, namespace]);

  return (
    <div
      className={className}
      id={elementId}
      style={{ height: "100%", overflow: "scroll", width: "100%" }}
    />
  );
}
