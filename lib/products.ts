export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: "LATEST ARRIVALS" | "CLOTHING" | "FOOTWEAR" | "ACCESSORIES";
  condition: "Brand New" | "Pre-Owned";
  price: number;
  originalPrice?: number;
  image: string;
  blurb: string;
}

export const products: Product[] = [
  {
    slug: "coming-soon-1",
    name: "Coming Soon",
    brand: "TrendSetters",
    category: "LATEST ARRIVALS",
    condition: "Brand New",
    price: 0,
    image: "/products/coming-soon.jpg",
    blurb: "DM us on Instagram for availability.",
  },
  {
    slug: "coming-soon-2",
    name: "Coming Soon",
    brand: "TrendSetters",
    category: "LATEST ARRIVALS",
    condition: "Brand New",
    price: 0,
    image: "/products/coming-soon.jpg",
    blurb: "DM us on Instagram for availability.",
  },
  {
    slug: "coming-soon-3",
    name: "Coming Soon",
    brand: "TrendSetters",
    category: "CLOTHING",
    condition: "Brand New",
    price: 0,
    image: "/products/coming-soon.jpg",
    blurb: "DM us on Instagram for availability.",
  },
  {
    slug: "coming-soon-4",
    name: "Coming Soon",
    brand: "TrendSetters",
    category: "CLOTHING",
    condition: "Brand New",
    price: 0,
    image: "/products/coming-soon.jpg",
    blurb: "DM us on Instagram for availability.",
  },
  {
    slug: "coming-soon-5",
    name: "Coming Soon",
    brand: "TrendSetters",
    category: "FOOTWEAR",
    condition: "Brand New",
    price: 0,
    image: "/products/coming-soon.jpg",
    blurb: "DM us on Instagram for availability.",
  },
  {
    slug: "coming-soon-6",
    name: "Coming Soon",
    brand: "TrendSetters",
    category: "FOOTWEAR",
    condition: "Brand New",
    price: 0,
    image: "/products/coming-soon.jpg",
    blurb: "DM us on Instagram for availability.",
  },
  {
    slug: "coming-soon-7",
    name: "Coming Soon",
    brand: "TrendSetters",
    category: "ACCESSORIES",
    condition: "Brand New",
    price: 0,
    image: "/products/coming-soon.jpg",
    blurb: "DM us on Instagram for availability.",
  },
  {
    slug: "coming-soon-8",
    name: "Coming Soon",
    brand: "TrendSetters",
    category: "ACCESSORIES",
    condition: "Brand New",
    price: 0,
    image: "/products/coming-soon.jpg",
    blurb: "DM us on Instagram for availability.",
  },
];
