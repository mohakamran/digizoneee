import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact";
import { ContactMaps } from "@/components/sections/contact-maps";

export const metadata: Metadata = {
  title: "Contact | Digizone",
  description:
    "Get in touch with Digizone for ecommerce management across Amazon, Walmart, Etsy, Shopify, and omnichannel platforms in the UK & Australia.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white/70 py-20 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-neutral-900 md:text-5xl">
            Start Your Ecommerce Growth Journey Today
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Connect with our ecommerce experts and discover how we can transform your marketplace performance. Offices in London and Sydney, serving clients across UK & Australia time zones.
          </p>
        </div>
      </section>
      <ContactSection />
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <ContactMaps />
      </div>
    </>
  );
}

