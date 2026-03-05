"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";

export function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function init() {
      if (typeof window !== "undefined" && window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url: siteConfig.calendlyUrl,
          parentElement: containerRef.current,
          minWidth: 320,
          height: 700,
        });
        return true;
      }
      return false;
    }
    if (init()) return;
    const t = setInterval(() => {
      if (init()) clearInterval(t);
    }, 100);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ minWidth: "320px", minHeight: "700px" }}
      aria-label="Schedule a call with Dr. Jan Duffy"
    />
  );
}
