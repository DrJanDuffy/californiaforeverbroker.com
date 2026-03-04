import Link from "next/link";
import {
  CheckCircle2,
  Shield,
  TrendingUp,
  Heart,
  Award,
  Clock,
  Briefcase,
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { neighborhoods } from "@/lib/neighborhoods";

const whyRelocate = [
  "No state income tax — keep more of what you earn",
  "Lower cost of living and housing than most California markets",
  "Strong job growth and diverse economy",
  "Sun, recreation, and family-friendly communities",
];

const whyChooseUs = [
  { icon: Shield, title: "Trusted Expertise", desc: "Serving Las Vegas and Henderson since 2008 with proven results." },
  { icon: TrendingUp, title: "Market Knowledge", desc: "Deep understanding of local market trends and neighborhood insights." },
  { icon: Heart, title: "Personalized Service", desc: "Dedicated attention to every client with customized solutions." },
  { icon: Award, title: "Proven Results", desc: "500+ successful transactions and satisfied clients." },
  { icon: Clock, title: "Responsive", desc: "Quick response times and seamless communication throughout." },
  { icon: Briefcase, title: "Full Service", desc: "Complete support from search to closing and beyond." },
];

const testimonials = [
  { name: "Tom Sanders", location: "Las Vegas, NV", text: "Dr. Duffy made our relocation from California seamless. Her knowledge of the Las Vegas market is unmatched, and she guided us through every step with professionalism and care." },
  { name: "Vitor Palmer", location: "Henderson, NV", text: "We couldn't be happier with our new home! The entire process was smooth, and Dr. Duffy's attention to detail and negotiation skills saved us thousands. Highly recommend!" },
  { name: "Emily Rodriguez", location: "Summerlin, NV", text: "As first-time homebuyers moving from CA, we were nervous. Dr. Duffy patiently explained everything and helped us find the perfect home in our budget. Thank you!" },
];

const faqs = [
  { q: "What areas do you serve?", a: "We specialize in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, and surrounding communities. Our expertise covers residential, luxury, and investment properties throughout Southern Nevada—especially for California relocators." },
  { q: "How long does the home buying process take?", a: "Typically 30–45 days from accepted offer to closing. For relocating buyers, we can coordinate showings and virtual tours to fit your timeline." },
  { q: "Do you help with home valuations?", a: "Yes. We provide complimentary home valuations and can connect you with tools to compare your California equity to Las Vegas options." },
  { q: "What makes you different for California relocators?", a: "We focus on the full relocation journey: taxes, cost of living, schools, and neighborhoods. You get one trusted partner from first search through closing and beyond." },
  { q: "Can you help with investment properties?", a: "Yes. We work with investors on single-family and multi-unit acquisitions in the Las Vegas valley." },
  { q: "What are your fees?", a: "Buyer representation is typically paid by the seller. We'll outline all costs clearly at the start so there are no surprises." },
];

export default function Home() {
  const { nap, realscoutUrl, gbpReviewUrl } = siteConfig;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 overflow-hidden">
        {/* Decorative warm glow */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-900/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-brand-900/20 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/40 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span>California to Las Vegas Relocation Specialist</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance">
            Find Your Dream Home in{" "}
            <span className="text-brand-400">Las Vegas & Henderson</span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert real estate for California homebuyers moving to Nevada. Your trusted partner for buying, selling, and relocating to Southern Nevada.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href={realscoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors shadow-lg shadow-brand-900/30"
            >
              Search Properties
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-white/5"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm text-slate-400">
            {[
              "500+ Properties Sold",
              "Serving Las Vegas Since 2008",
              "4.9★ Average Rating",
              "BHHS Nevada Properties",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Relocate */}
      <section className="py-16 px-4 border-b border-slate-100">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Why California Homebuyers Choose Las Vegas
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name synonymous with trust, ethical standards, and financial strength.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {whyRelocate.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white border border-slate-200 hover:border-brand-300 p-5 rounded-xl shadow-sm transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/relocation"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-600 font-semibold transition-colors"
            >
              Read the full relocation guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Market Snapshot */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Las Vegas Real Estate Market
          </h2>
          <p className="text-slate-500 mb-8">Current market conditions for Southern Nevada.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "$450K", label: "Median Home Price" },
              { value: "28", label: "Avg Days on Market" },
              { value: "4,850", label: "Active Listings" },
              { value: "2.1 mo", label: "Inventory" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-100 hover:border-brand-200 transition-colors"
              >
                <p className="text-3xl font-bold text-brand-600">{value}</p>
                <p className="text-sm text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/market-report"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-600 font-semibold transition-colors"
            >
              View full market report
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 border-b border-slate-100">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Featured Properties
          </h2>
          <p className="text-slate-500 mb-8">
            Discover homes in Las Vegas and Henderson. Browse current listings to find the right fit for your lifestyle and budget.
          </p>
          <a
            href={realscoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors shadow-sm"
          >
            Browse All Properties
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Las Vegas Neighborhoods We Serve
          </h2>
          <p className="text-slate-500 mb-8">
            From master-planned communities to luxury enclaves — find the right fit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="group flex items-center justify-between bg-white p-5 rounded-xl shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-200 transition-all"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">{n.name}</span>
                    <span className="text-sm text-slate-500">From {n.priceFrom}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/neighborhoods"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-600 font-semibold transition-colors"
            >
              View all neighborhoods
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 border-b border-slate-100">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Why Choose Dr. Jan Duffy
          </h2>
          <p className="text-slate-500 mb-10">
            Your dedicated partner for every step of the relocation journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                What Our Clients Say
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <span className="text-slate-500 text-sm">4.9 · 500+ reviews</span>
              </div>
            </div>
            <a
              href={gbpReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-600 font-semibold text-sm transition-colors shrink-0"
            >
              Read more on Google
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, text }) => (
              <blockquote
                key={name}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-brand-200 mb-3" />
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{text}</p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <cite className="not-italic font-semibold text-slate-900 text-sm">{name}</cite>
                  <span className="text-slate-400 text-xs block mt-0.5">{location}</span>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 border-b border-slate-100">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 mb-10">
            Common questions from California buyers relocating to Nevada.
          </p>
          <dl className="space-y-0 divide-y divide-slate-100">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-6">
                <dt className="font-semibold text-slate-900 mb-2 flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 text-xs font-bold mt-0.5">
                    Q
                  </span>
                  {q}
                </dt>
                <dd className="text-slate-500 text-sm leading-relaxed pl-9">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Make Las Vegas Home?
          </h2>
          <p className="text-brand-100 mb-10 max-w-xl mx-auto">
            Whether you&apos;re buying, selling, or relocating from California, we&apos;re here to help every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${nap.phone}`}
              className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-semibold hover:bg-brand-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {nap.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-colors hover:bg-white/10"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ schema for home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />
    </>
  );
}
