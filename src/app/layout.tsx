import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://drink10k.com"
  ),
  title: "10-K Thirst Quencher | The Natural Thirst Quencher",
  description:
    "10-K Thirst Quencher is back. No artificial dyes. No artificial sweeteners. Real cane sugar. Sodium and potassium for actual hydration.",
  openGraph: {
    images: ["/images/10-K opengraph.png"],
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
