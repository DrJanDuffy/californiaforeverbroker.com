import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { neighborhoods } from "@/lib/neighborhoods";

const whyRelocate = [
  "No state income tax — keep more of what you earn",
  "Lower cost of living and housing than most California markets",
  "Strong job growth and diverse economy",
  "Sun, recreation, and family-friendly communities",
];

const whyChooseUs = [
  { title: "Trusted Expertise", desc: "Serving Las Vegas and Henderson since 2008 with proven results." },
  { title: "Market Knowledge", desc: "Deep understanding of local market trends and neighborhood insights." },
  { title: "Personalized Service", desc: "Dedicated attention to every client with customized solutions." },
  { title: "Proven Results", desc: "500+ successful transactions and satisfied clients." },
  { title: "Responsive", desc: "Quick response times and seamless communication throughout." },
  { title: "Full Service", desc: "Complete support from search to closing and beyond." },
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
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Home in Las Vegas & Henderson
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Expert real estate for California homebuyers moving to Nevada. Your trusted partner for buying, selling, and relocating to Southern Nevada.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="bg-slate-800 px-4 py-2 rounded">500+ Properties Sold</span>
            <span className="bg-slate-800 px-4 py-2 rounded">Since 2008</span>
            <span className="bg-slate-800 px-4 py-2 rounded">4.9★ Average Rating</span>
          </div>
        </div>
      </section>

      {/* Why relocate */}
      <section className="py-12 px-4 border-b">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why California Homebuyers Choose Las Vegas
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-slate-700">
            {whyRelocate.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-slate-600">
            When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name synonymous with trust, ethical standards, and financial strength.
          </p>
        </div>
      </section>

      {/* Market snapshot */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Las Vegas Real Estate Market
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <p className="text-2xl font-bold text-slate-900">$450K</p>
              <p className="text-sm text-slate-600">Median Home Price</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <p className="text-2xl font-bold text-slate-900">28</p>
              <p className="text-sm text-slate-600">Avg Days on Market</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <p className="text-2xl font-bold text-slate-900">4,850</p>
              <p className="text-sm text-slate-600">Active Listings</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <p className="text-2xl font-bold text-slate-900">2.1</p>
              <p className="text-sm text-slate-600">Months Inventory</p>
            </div>
          </div>
          <Link
            href="/market-report"
            className="inline-block mt-6 text-blue-600 hover:underline font-medium"
          >
            View full market report →
          </Link>
        </div>
      </section>

      {/* Featured properties / RealScout */}
      <section className="py-12 px-4 border-b">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-slate-600 mb-6">
            Discover homes in Las Vegas and Henderson.
          </p>
          <a
            href={realscoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded font-medium hover:bg-slate-800"
          >
            View all properties
          </a>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Las Vegas Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="block bg-white p-4 rounded shadow-sm hover:shadow-md border border-slate-100"
              >
                <span className="font-semibold text-slate-900">{n.name}</span>
                <span className="block text-sm text-slate-600">{n.priceFrom}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/neighborhoods"
            className="inline-block mt-6 text-blue-600 hover:underline font-medium"
          >
            View all neighborhoods →
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 px-4 border-b">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map(({ title, desc }) => (
              <div key={title}>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-slate-600 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 mb-6">4.9 (500+ reviews)</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, text }) => (
              <blockquote key={name} className="bg-white p-4 rounded shadow-sm border border-slate-100">
                <p className="text-slate-700 text-sm">{text}</p>
                <cite className="not-italic font-semibold text-slate-900 block mt-3">{name}</cite>
                <span className="text-slate-500 text-sm">{location}</span>
              </blockquote>
            ))}
          </div>
          <a
            href={gbpReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-blue-600 hover:underline font-medium"
          >
            Read more reviews on Google
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 border-b">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-slate-900">{q}</dt>
                <dd className="text-slate-600 text-sm mt-1 pl-0">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Make Las Vegas Home?
          </h2>
          <p className="text-slate-300 mb-6">
            Whether you're buying, selling, or relocating from California, we're here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${nap.phone}`}
              className="inline-block bg-white text-slate-900 px-6 py-3 rounded font-medium hover:bg-slate-100"
            >
              Call {nap.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-block border border-white text-white px-6 py-3 rounded font-medium hover:bg-white/10"
            >
              Send a message
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
