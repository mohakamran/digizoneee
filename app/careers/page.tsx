import { Metadata } from "next";
import { CareersSection } from "@/components/sections/careers";

export const metadata: Metadata = {
  title: "Careers | Digizone",
  description:
    "Join Digizone’s ecommerce, media, creative, and engineering teams across the UK and Australia.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-white/70 py-20 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Careers
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-neutral-900 md:text-5xl">
            Join the Future of Ecommerce Excellence
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Work with ambitious brands across Amazon, Walmart, Etsy, and Shopify. Remote-friendly teams, senior talent only, and a culture of experimentation and growth. UK & Australia time zones.
          </p>
        </div>
      </section>
      <CareersSection />
    </>
  );
}

