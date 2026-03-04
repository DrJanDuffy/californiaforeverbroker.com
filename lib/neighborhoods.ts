export const neighborhoods = [
  { slug: "summerlin", name: "Summerlin", priceFrom: "$625K", description: "Master-planned community on the west side with top-rated schools, trails, and Red Rock Canyon access. Popular with California relocators for its family focus and strong resale value." },
  { slug: "henderson", name: "Henderson", priceFrom: "$485K", description: "One of the nation's safest cities with excellent schools, Lake Las Vegas, and a range of housing from entry-level to luxury. A top choice for families moving from California." },
  { slug: "green-valley", name: "Green Valley", priceFrom: "$520K", description: "Established Henderson neighborhood with mature landscaping, strong schools, and convenient shopping and dining. Attracts buyers seeking value and community." },
  { slug: "the-ridges", name: "The Ridges", priceFrom: "$2.5M", description: "Upscale Summerlin enclave with custom estates and mountain views. Gated, low-density living with easy access to Red Rock and the 215." },
  { slug: "southern-highlands", name: "Southern Highlands", priceFrom: "$750K", description: "Master-planned community near the 215 with golf, parks, and newer construction. Appeals to relocators wanting space and amenities without the Strip." },
  { slug: "north-las-vegas", name: "North Las Vegas", priceFrom: "$385K", description: "Among the most affordable areas in the valley with new construction and good freeway access. Ideal for first-time buyers and investors relocating from California." },
  { slug: "skye-canyon", name: "Skye Canyon", priceFrom: "$550K", description: "Northwest valley community with parks, trails, and newer homes. Family-friendly and growing, with easy access to the 215 and Summerlin." },
  { slug: "centennial-hills", name: "Centennial Hills", priceFrom: "$495K", description: "Northwest Las Vegas area with varied housing, shopping, and outdoor recreation. Strong value for buyers relocating from higher-cost markets." },
  { slug: "inspirada", name: "Inspirada", priceFrom: "$525K", description: "Henderson master-planned community with parks, pools, and newer homes. Attractive to families and California relocators seeking community amenities." },
  { slug: "mountains-edge", name: "Mountains Edge", priceFrom: "$475K", description: "Southwest valley community with trails, parks, and newer construction. Good option for buyers seeking space and outdoor access at a moderate price point." },
] as const;

export type NeighborhoodSlug = (typeof neighborhoods)[number]["slug"];
