import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";

export function Footer() {
  const { nap, agent, siteUrl, gbpReviewUrl, realscoutUrl } = siteConfig;
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
          <div className="flex flex-wrap gap-4 md:gap-6">
            <CalendlyLink className="text-slate-600 hover:text-slate-900">
              Schedule a call
            </CalendlyLink>
            <a
              href={realscoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              Search Homes for Sale
            </a>
            <Link href="/services" className="text-slate-600 hover:text-slate-900">
              Services
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900">
              About
            </Link>
            <Link href="/new-homes" className="text-slate-600 hover:text-slate-900">
              New Homes
            </Link>
            <Link href="/sellers" className="text-slate-600 hover:text-slate-900">
              Sell Your Home
            </Link>
            <Link href="/neighborhoods" className="text-slate-600 hover:text-slate-900">
              Neighborhoods
            </Link>
            <Link href="/luxury" className="text-slate-600 hover:text-slate-900">
              Luxury Homes
            </Link>
            <Link href="/55-plus" className="text-slate-600 hover:text-slate-900">
              55+ Communities
            </Link>
            <Link href="/relocation" className="text-slate-600 hover:text-slate-900">
              Relocation Guide
            </Link>
            <Link href="/market-report" className="text-slate-600 hover:text-slate-900">
              Market Report
            </Link>
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
          Our neighborhood guides, relocation guide, and market insights are kept current for California-to-Las-Vegas relocators. Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} | {siteUrl.replace("https://", "")} – {agent.brokerage}
        </p>
      </div>
    </footer>
  );
}
