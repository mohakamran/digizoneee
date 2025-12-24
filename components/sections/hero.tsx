"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRightIcon, PlayCircleIcon, CheckCircleIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { heroLottie } from "@/lib/data";
import type { SVGProps } from "react";
import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GradientText } from "@/components/ui/gradient-text";
import Image from "next/image";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const Hero = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(heroLottie)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => setAnimationData(null));
  }, []);
  return (
    <section className="relative overflow-hidden">
      <Particles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#34D39920,transparent_40%),radial-gradient(circle_at_30%_40%,#10B98120,transparent_35%),radial-gradient(circle_at_80%_20%,#05966925,transparent_40%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-32 md:grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-md shadow-emerald-500/10 backdrop-blur-lg">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Full-stack ecommerce teams in the UK & Australia
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl"
          >
            E-Commerce <GradientText>Excellence</GradientText> Across UK & Australia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-lg leading-relaxed text-neutral-600"
          >
            Amazon, Walmart, Etsy, Shopify & more – your complete ecommerce
            management partner with 10+ years of experience. We deliver measurable outcomes through ops excellence, retail media expertise, CRO optimization, and creative innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/quote"
              className="group relative overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-500 transition duration-500 group-hover:scale-110" />
              <span className="relative flex items-center justify-center gap-2">
                Get a Quote
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition duration-500 group-hover:scale-110" />
              <span className="relative flex items-center gap-2">
                Get Started
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-6 py-3 text-sm font-semibold text-neutral-800 shadow-md shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:border-emerald-500"
            >
              <PlayCircleIcon className="h-5 w-5 text-emerald-600" />
              View Case Studies
            </Link>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Projects Delivered", value: "240+" },
              { label: "Avg. ROAS", value: "4.3x" },
              { label: "Operating Regions", value: "UK & Australia" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/30 bg-white/60 p-4 shadow-lg shadow-emerald-500/10 backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    {item.label}
                  </p>
                </div>
                <AnimatedCounter 
                  value={item.value} 
                  duration={2000}
                  className="mt-2"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-8 rounded-2xl border border-white/20 bg-white/70 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Why Choose Digizone?</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "10+ years proven track record",
                "Dedicated UK & Australia teams",
                "Full-stack ecommerce expertise",
                "Transparent reporting & ROI focus",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-12 -top-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/70 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
            <div className="absolute right-4 top-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-70 blur-xl" />
            <div className="relative">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop
                  className="h-full max-h-[380px] w-full object-cover"
                />
              ) : (
                <div className="h-[380px] w-full bg-gradient-to-br from-emerald-600/10 to-emerald-500/10" />
              )}
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-white/70 p-4 shadow-lg shadow-emerald-500/10 backdrop-blur-lg">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/25">
                  <SparklesIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Retail + Media + Ops
                  </p>
                  <p className="text-xs text-neutral-600">
                    Teams embedded with your brand in UK & AU time zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SparklesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2zM6 16l.9 2.6L9.5 19l-2.6.4L6 22l-.9-2.6L2.5 19l2.6-.4L6 16zm12-2l.9 2.6 2.6.4-2.6.4L18 20l-.9-2.6-2.6-.4 2.6-.4L18 14z"
      fill="currentColor"
    />
  </svg>
);

