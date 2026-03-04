import { siteConfig } from "@/lib/site-config";

type LocalBusinessSchema = {
  "@context": "https://schema.org";
  "@type": "RealEstateAgent";
  name: string;
  url: string;
  telephone: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
  };
  areaServed?: { "@type": "GeoCircle"; geoMidpoint: { "@type": "GeoCoordinates"; latitude: number; longitude: number }; geoRadius: string }[];
  parentOrganization?: { "@type": "Organization"; name: string };
};

export function LocalBusinessJsonLd() {
  const { nap, siteUrl, agent } = siteConfig;
  const schema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: nap.name,
    url: siteUrl,
    telephone: nap.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.streetAddress,
      addressLocality: nap.addressLocality,
      addressRegion: nap.addressRegion,
      ...(nap.postalCode && { postalCode: nap.postalCode }),
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 36.1699, longitude: -115.1398 },
        geoRadius: "50000",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: agent.brokerage,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
