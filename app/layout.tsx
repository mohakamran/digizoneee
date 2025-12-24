import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { FloatingActions } from "@/components/ui/floating-actions";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digizone | E-Commerce Management for UK & Australia",
  description:
    "Digizone manages Amazon, Walmart, Etsy, Shopify, and omnichannel ecommerce across the UK and Australia. Full-funnel media, ops, and creative.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Digizone | E-Commerce Management",
    description:
      "Full-funnel ecommerce management for Amazon, Walmart, Etsy, Shopify, and beyond. Teams across the UK & Australia.",
    url: "https://digizone.example.com",
    siteName: "Digizone",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digizone | E-Commerce Management",
    description:
      "Marketplace, D2C, ads, and ops teams across UK & Australia delivering measurable outcomes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        <div className="min-h-screen">
          <Header />
          <ScrollProgress />
          <ScrollToTop />
          <FloatingActions />
          <main className="pt-32">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
