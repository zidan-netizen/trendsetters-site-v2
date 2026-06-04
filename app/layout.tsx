import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrendSetters | Luxury Personal Shopping",
  description:
    "TrendSetters — your destination for luxury clothing, footwear, and accessories. We set trends & they follow. Personal shopping, worldwide delivery, authentic pieces.",
  keywords:
    "trendsetters, trend5etters, luxury shopping, personal shopper, designer clothing, designer footwear, designer accessories",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "TrendSetters | Luxury Personal Shopping",
    description:
      "TrendSetters — your destination for luxury clothing, footwear, and accessories. We set trends & they follow.",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <head>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
