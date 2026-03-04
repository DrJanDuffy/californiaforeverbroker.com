"use client";

import { siteConfig } from "@/lib/site-config";

export function CalendlyInline() {
  return (
    <div
      className="calendly-inline-widget"
      data-url={siteConfig.calendlyUrl}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
