import { Metadata } from "next";
import { CaseStudies } from "@/components/sections/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Digizone",
  description:
    "Marketplace and D2C wins across Amazon, Walmart, Etsy, and Shopify—delivered by Digizone.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white/60 py-20 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Case Studies
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-neutral-900 md:text-5xl">
            Proven Results Across Marketplaces & D2C
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Discover how we've transformed ecommerce businesses through strategic retail media, conversion optimization, creative excellence, and operational efficiency. Real results from UK & Australian brands.
          </p>
        </div>
      </section>
      <CaseStudies />
    </>
  );
}

