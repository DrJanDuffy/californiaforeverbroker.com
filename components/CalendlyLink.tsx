"use client";

import { siteConfig } from "@/lib/site-config";

type CalendlyLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

const defaultText = "Schedule time with me";

export function CalendlyLink({ className, children }: CalendlyLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: siteConfig.calendlyUrl });
    } else {
      window.open(siteConfig.calendlyUrl, "_blank", "noopener,noreferrer");
    }
    return false;
  }

  return (
    <a
      href={siteConfig.calendlyUrl}
      onClick={handleClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children ?? defaultText}
    </a>
  );
}
