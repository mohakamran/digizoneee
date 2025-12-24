"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import { CheckCircleIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { ShimmerEffect } from "@/components/ui/shimmer-effect";
import { AnimatedBadge } from "@/components/ui/animated-badge";

export const PricingTable = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All Services", count: services.length },
    { id: "marketplace", label: "Marketplace", count: 3 },
    { id: "development", label: "Development", count: 1 },
    { id: "marketing", label: "Marketing", count: 1 },
    { id: "integration", label: "Integration", count: 1 }
  ];

  const filteredServices = services.filter(service => {
    if (selectedCategory === "all") return true;
    
    const categoryMap: Record<string, string[]> = {
      marketplace: ["amazon", "walmart", "etsy"],
      development: ["shopify"],
      marketing: ["seo"],
      integration: ["integration"]
    };
    
    return categoryMap[selectedCategory]?.includes(service.id);
  });

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-neutral-600">
          <FunnelIcon className="h-4 w-4" />
          <span className="text-sm font-medium">Filter by category:</span>
        </div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-emerald-600 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-emerald-100"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Compact Pricing Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-emerald-200/50 bg-white/80 p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-emerald-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                    <service.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">{service.title}</h3>
                    <p className="text-xs text-emerald-600 font-medium">{service.price}{service.period}</p>
                  </div>
                </div>
                <AnimatedBadge>Popular</AnimatedBadge>
              </div>
              
              <p className="text-xs text-neutral-600 mb-3 line-clamp-2">{service.description}</p>
              
              <div className="space-y-1 mb-3">
                {service.features?.slice(0, 3).map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-center gap-2">
                    <CheckCircleIcon className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs text-neutral-700">{feature}</span>
                  </div>
                ))}
                {service.features && service.features.length > 3 && (
                  <span className="text-xs text-emerald-600 font-medium">+{service.features.length - 3} more</span>
                )}
              </div>
              
              <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <span className="relative z-10 flex items-center justify-center gap-1">
                  Get Started
                  <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </button>
              <ShimmerEffect className="opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
