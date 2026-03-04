import type { Metadata } from "next";
import Link from "next/link";
import { neighborhoods } from "@/lib/neighborhoods";

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods",
  description:
    "Explore Las Vegas and Henderson neighborhoods: Summerlin, Henderson, Green Valley, Southern Highlands, and more. Find the right area for your relocation from California.",
};

export default function NeighborhoodsIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        Las Vegas Neighborhoods We Serve
      </h1>
      <p className="text-slate-600 mb-8">
        Berkshire Hathaway HomeServices Nevada Properties covers all of Southern Nevada. Click a neighborhood to learn more and see homes.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {neighborhoods.map((n) => (
          <Link
            key={n.slug}
            href={`/neighborhoods/${n.slug}`}
            className="block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md hover:border-slate-300"
          >
            <span className="font-semibold text-slate-900 block">{n.name}</span>
            <span className="text-sm text-slate-600">From {n.priceFrom}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
