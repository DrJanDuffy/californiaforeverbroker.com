import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { nap, agent, siteUrl, gbpReviewUrl } = siteConfig;
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
          <div>
            <p className="font-semibold text-slate-900">{nap.name}</p>
            <p className="text-sm text-slate-600">
              License {agent.license} | {agent.brokerage}
            </p>
            <p className="text-sm text-slate-600 mt-1">{nap.streetAddress}</p>
            <a
              href={`tel:${nap.phone}`}
              className="text-sm text-blue-600 hover:underline mt-1 block"
            >
              {nap.phoneDisplay}
            </a>
          </div>
          <div className="flex gap-6">
            <Link href="/contact" className="text-slate-600 hover:text-slate-900">
              Contact
            </Link>
            <a
              href={gbpReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              Google Reviews
            </a>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-6">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} | {siteUrl.replace("https://", "")} – {agent.brokerage}
        </p>
      </div>
    </footer>
  );
}
