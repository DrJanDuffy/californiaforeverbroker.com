import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: "California Forever Broker | California Homebuyers Moving to Las Vegas",
    template: "%s | California Forever Broker",
  },
  description:
    "Expert real estate for California homebuyers moving to Las Vegas and Henderson. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Relocation guide, neighborhoods, market reports.",
  openGraph: {
    title: "California Forever Broker | California to Las Vegas Real Estate",
    description: "Your trusted partner for relocating from California to Las Vegas. Neighborhoods, market insights, and full-service buying and selling.",
    url: siteConfig.siteUrl,
  },
  metadataBase: new URL(siteConfig.siteUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessJsonLd />
        <Script
          src="https://em.realscout.com/embed.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
