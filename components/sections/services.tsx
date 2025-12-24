"use client";

import { services, sparkLottie } from "@/lib/data";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const Services = () => {
  const [sparkAnimationData, setSparkAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(sparkLottie)
      .then((res) => res.json())
      .then((data) => setSparkAnimationData(data))
      .catch(() => setSparkAnimationData(null));
  }, []);
  return (
    <section id="services" className="relative overflow-hidden py-16">
      <Particles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#34D3990d,transparent_35%),radial-gradient(circle_at_80%_0%,#10B9810d,transparent_35%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <div className="flex flex-col gap-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm shadow-emerald-500/10 backdrop-blur">
            Services
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Everything you need to scale ecommerce.
            </h2>
            <div className="hidden h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-1 shadow-lg shadow-emerald-500/20 backdrop-blur md:block">
              {sparkAnimationData ? (
                <Lottie animationData={sparkAnimationData} loop className="h-full w-full" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-emerald-400/10 to-emerald-500/10" />
              )}
            </div>
          </div>
          <p className="max-w-3xl text-neutral-600">
            Cross-functional squads covering marketplace ops, advertising, CRO, creative, and
            data—designed for Amazon, Walmart, Etsy, Shopify, and beyond.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/80 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-500/8 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-emerald-700">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition group-hover:gap-3"
                >
                  Learn More
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

