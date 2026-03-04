import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/relocation", label: "Relocation" },
  { href: "/neighborhoods", label: "Neighborhoods" },
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
        <nav className="flex gap-6" aria-label="Main">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-600 hover:text-slate-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
