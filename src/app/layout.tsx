import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeniusTouch - Luxury Packaging Solutions",
  description: "Premium packaging design and manufacturing for luxury brands. Specializing in cigars, alcohol, perfume, flowers, restaurants, hotels, universities, schools, chocolates, watches, and promotional items.",
  keywords: "luxury packaging, premium packaging, cigar packaging, alcohol packaging, perfume packaging, hotel packaging, restaurant packaging",
  authors: [{ name: "GeniusTouch" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-genius-brown text-genius-light">
        {children}
      </body>
    </html>
  );
}
