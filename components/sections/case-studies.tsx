"use client";

import { useMemo, useState } from "react";
import { caseStudies, CaseStudy } from "@/lib/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const platforms = ["All", ...Array.from(new Set(caseStudies.map((c) => c.platform)))];

export const CaseStudies = () => {
  const [activePlatform, setActivePlatform] = useState<string>("All");
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const [slide, setSlide] = useState(0);

  const filtered = useMemo(
    () =>
      activePlatform === "All"
        ? caseStudies
        : caseStudies.filter((c) => c.platform === activePlatform),
    [activePlatform],
  );

  const openModal = (study: CaseStudy) => {
    setSelected(study);
    setSlide(0);
  };

  const nextSlide = () =>
    setSlide((prev) => (selected ? (prev + 1) % selected.gallery.length : 0));
  const prevSlide = () =>
    setSlide((prev) =>
      selected ? (prev - 1 + selected.gallery.length) % selected.gallery.length : 0,
    );

  return (
    <section id="case-studies" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,#34D3990d,transparent_35%),radial-gradient(circle_at_80%_30%,#05966912,transparent_40%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Case Studies
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900 md:text-4xl">
              Proof behind the promise.
            </h2>
            <p className="mt-3 max-w-3xl text-neutral-600">
              Marketplace wins, D2C replatforms, ads automation, and integrated ops across the
              UK and Australia.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setActivePlatform(platform)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activePlatform === platform
                    ? "border-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                    : "border-white/20 bg-white/70 text-neutral-700 hover:border-emerald-500 hover:text-emerald-600"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study, idx) => (
            <motion.button
              key={study.id}
              onClick={() => openModal(study)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/80 text-left shadow-xl shadow-emerald-500/10 ring-0 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.client}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm shadow-emerald-500/10 backdrop-blur">
                  {study.platform}
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  {study.result}
                </p>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {study.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {study.highlights[0]}
                </p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-emerald-700">
                    {study.client}
                  </div>
                  <span className="text-xs text-neutral-500">
                    {study.metrics.timeline}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 210, damping: 24 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/90 shadow-2xl shadow-emerald-500/30 backdrop-blur-xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm transition hover:scale-105"
              >
                Close
              </button>
              <div className="relative h-72 w-full">
                <Image
                  src={selected.gallery[slide]}
                  alt={selected.client}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 space-y-2 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-500">
                    {selected.platform}
                  </p>
                  <h3 className="text-2xl font-semibold">{selected.client}</h3>
                  <p className="text-sm">{selected.title}</p>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="rounded-full bg-white/80 px-3 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="rounded-full bg-white/80 px-3 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5"
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-emerald-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selected.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/15 bg-white/80 p-3 text-sm text-neutral-700 shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 rounded-2xl border border-white/15 bg-white/80 p-4 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Results
                  </p>
                  <div className="space-y-2 text-neutral-800">
                    <p>
                      <span className="font-semibold">Revenue:</span>{" "}
                      {selected.metrics.revenue}
                    </p>
                    <p>
                      <span className="font-semibold">ROI:</span> {selected.metrics.roi}
                    </p>
                    <p>
                      <span className="font-semibold">Timeline:</span>{" "}
                      {selected.metrics.timeline}
                    </p>
                  </div>
                  <button className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20">
                    Book a similar build
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

