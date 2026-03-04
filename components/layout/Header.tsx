import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "/relocation", label: "Relocation" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/market-report", label: "Market Report" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { nap } = siteConfig;
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm tracking-tight">JD</span>
          </div>
          <span className="text-base font-semibold text-slate-900 hidden sm:block">
            California Forever Broker
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${nap.phone}`}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm shrink-0"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{nap.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
