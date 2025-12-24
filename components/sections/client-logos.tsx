"use client";

import { motion } from "framer-motion";

const clientLogos = [
  {
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg",
    width: 120,
    height: 40
  },
  {
    name: "Walmart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/walmart/walmart-original.svg",
    width: 140,
    height: 40
  },
  {
    name: "Shopify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
    width: 120,
    height: 40
  },
  {
    name: "Etsy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/etsy/etsy-original.svg",
    width: 80,
    height: 40
  },
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    width: 100,
    height: 40
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    width: 100,
    height: 40
  }
];

export const ClientLogos = () => {
  return (
    <section className="py-16 bg-white/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            Trusted by Leading Platforms & Brands
          </h2>
          <p className="text-neutral-600">
            We're certified partners and work with the best ecommerce platforms in the world
          </p>
        </div>
 Darling
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
