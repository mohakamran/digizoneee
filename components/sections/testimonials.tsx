"use client";

import { testimonials } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900 md:text-4xl">
              Loved by ecommerce leaders.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }
              className="rounded-full border border-white/20 bg-white/70 px-3 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition hover:-translate-y-0.5"
            >
              Prev
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="rounded-full border border-white/20 bg-white/70 px-3 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition hover:-translate-y-0.5"
            >
              Next
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            key={testimonials[index].name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-emerald-700 to-emerald-600 p-8 text-white shadow-2xl shadow-emerald-500/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,emerald-50020,transparent_40%)]" />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/20">
                  <Image
                    src={testimonials[index].photo}
                    alt={testimonials[index].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold">{testimonials[index].name}</p>
                  <p className="text-sm text-blue-100">{testimonials[index].role}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">{testimonials[index].quote}</p>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => setIndex(idx)}
                className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:border-emerald-600
                  index === idx
                    ? "border-emerald-600 bg-white/80 shadow-lg shadow-emerald-500/20"
                    : "border-white/15 bg-white/60"
                }`}
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/20">
                  <Image src={item.photo} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-600">
                    {item.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

