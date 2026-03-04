import Link from "next/link";
import { Phone, MapPin, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { href: "/relocation", label: "Relocation Guide" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/market-report", label: "Market Report" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  const { nap, agent, siteUrl, gbpReviewUrl } = siteConfig;
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
              <span className="font-semibold text-white">{nap.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              {agent.brokerage}
            </p>
            <p className="text-slate-500 text-xs">License {agent.license}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${nap.phone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                {nap.phoneDisplay}
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>{nap.streetAddress}</span>
              </div>
              <a
                href={gbpReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Star className="w-4 h-4 text-brand-500" />
                Google Reviews (4.9★)
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteUrl.replace("https://", "")} — {agent.brokerage}
          </p>
          <p className="text-xs text-slate-600">
            Updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>
    </footer>
  );
}
