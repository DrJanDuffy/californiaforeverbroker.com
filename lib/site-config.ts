/**
 * Site config: NAP and branding for californiaforeverbroker.com
 * Must match Google Business Profile exactly (visible text + JSON-LD).
 */
export const siteConfig = {
  name: "California Forever Broker",
  tagline: "California Homebuyers Moving to Las Vegas",
  agent: {
    name: "Dr. Jan Duffy",
    license: "S.0197614.LLC",
    brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  nap: {
    name: "Dr. Jan Duffy",
    streetAddress: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    phone: "+17025001942",
    phoneDisplay: "(702) 500-1942",
  },
  siteUrl: "https://californiaforeverbroker.com",
  gbpReviewUrl: "https://g.page/r/heyberkshire/review",
  realscoutUrl: "http://drjanduffy.realscout.com/",
} as const;
