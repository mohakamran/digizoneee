"use client";

import { services } from "@/lib/data";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { ShimmerEffect } from "@/components/ui/shimmer-effect";

export const PricingCards = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {services.map((service, idx) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/80 shadow-lg shadow-emerald-500/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20 group"
        >
          <div className="relative p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/25">
                <service.icon className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                Popular
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              {service.title}
            </h3>
            
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-bold text-emerald-600">{service.price}</span>
              <span className="text-neutral-600">{service.period}</span>
            </div>
            
            <p className="text-neutral-600 text-sm mb-4">
              {service.description}
            </p>
            
            <ul className="space-y-2 mb-6">
              {service.features?.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-start gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30">
              Get Started
            </button>
            <ShimmerEffect className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
