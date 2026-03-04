"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

export function CalendlyBadge() {
  useEffect(() => {
    function init() {
      if (typeof window !== "undefined" && window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: siteConfig.calendlyUrl,
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: false,
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

  return null;
}
