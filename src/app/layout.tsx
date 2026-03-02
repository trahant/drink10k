import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL || "https://drink10k.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "10-K Thirst Quencher | The Natural Thirst Quencher",
  description:
    "10-K Thirst Quencher is back. No artificial dyes. No artificial sweeteners. Real cane sugar. Sodium and potassium for actual hydration.",
  openGraph: {
    title: "10-K Thirst Quencher | The Natural Thirst Quencher",
    description:
      "10-K Thirst Quencher is back. No artificial dyes. No artificial sweeteners. Real cane sugar. Sodium and potassium for actual hydration.",
    images: [
      {
        url: "/images/10-K-opengraph.png",
        width: 1200,
        height: 630,
        alt: "10-K Thirst Quencher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10-K Thirst Quencher | The Natural Thirst Quencher",
    images: ["/images/10-K-opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
