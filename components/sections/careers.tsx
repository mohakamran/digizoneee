"use client";

import { jobs } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Particles } from "@/components/ui/particles";

export const CareersSection = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="careers" className="py-16 relative">
      <Particles />
      <div className="mx-auto max-w-6xl gap-10 px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Careers
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-900 md:text-4xl">
            Join a Team Obsessed With Ecommerce Excellence
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            We're building the world's best ecommerce execution team. We hire strategists, engineers, media buyers, and creatives who can own problems end-to-end and deliver measurable results for ambitious brands.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Open Positions</h3>
              <div className="space-y-4">
                {jobs.map((job, idx) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-lg shadow-emerald-500/10 transition hover:-translate-y-1 hover:border-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/20"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-neutral-900">
                          {job.title}
                        </h4>
                        <span className="inline-block mt-2 rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-emerald-700">
                          {job.location}
                        </span>
                        <p className="mt-3 text-sm text-neutral-600">
                          {job.description}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={job.link}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:gap-3"
                    >
                      Apply Now →
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Why Join Digizone?
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Work with tier-one D2C and marketplace brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Remote-friendly with UK & Australia time zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Senior talent only - no junior roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Direct impact on client growth and revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Continuous learning and experimentation culture</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Send Us Your CV
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Don't see the perfect role listed? We're always interested in meeting senior contributors who can drive impact.
              </p>
              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  required
                  name="name"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20"
                />
                <textarea
                  required
                  name="message"
                  placeholder="Share your experience and the impact you've driven."
                  className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20"
                  rows={3}
                />
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-500 transition duration-500 group-hover:scale-110" />
                  <span className="relative">Submit Application</span>
                </button>
                {sent && (
                  <p className="text-sm font-semibold text-emerald-600">
                    Received! We'll be in touch shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

