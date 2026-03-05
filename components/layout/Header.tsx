import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";

const nav = [
  { href: siteConfig.realscoutUrl, label: "Search Homes", external: true },
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/new-homes", label: "New Homes" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/relocation", label: "Relocation" },
  { href: "/market-report", label: "Market Report" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          California Forever Broker
        </Link>
        <nav className="flex flex-wrap gap-4 md:gap-6 items-center" aria-label="Main">
          <CalendlyLink className="text-slate-600 hover:text-slate-900 font-medium">
            Schedule a call
          </CalendlyLink>
          {nav.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 font-medium"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className="text-slate-600 hover:text-slate-900"
              >
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
