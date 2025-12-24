"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How quickly can we see results?",
    answer: "Most clients see measurable improvements within 60-90 days. For established channels, we often optimize campaigns within the first 30 days, while new marketplace builds typically launch within 45 days."
  },
  {
    question: "What platforms do you specialize in?",
    answer: "We're experts in Amazon, Walmart, Etsy, Shopify, and multi-platform integrations. Our team holds advanced certifications in each platform and manages over $50M in annual ad spend across these channels."
  },
  {
    question: "Do you work with small businesses or only enterprise brands?",
    answer: "We work with businesses of all sizes! Our service packages are designed to scale, from startups needing foundational setup to enterprise brands requiring advanced optimization and multi-channel strategy."
  },
  {
    question: "What's your pricing structure?",
    answer: "We offer transparent monthly retainers ranging from $599 to $1,499 depending on scope and complexity. All packages include dedicated account management, regular reporting, and strategy sessions."
  },
  {
    question: "How do you measure success?",
    answer: "We focus on business metrics that matter: ROAS, contribution margin, customer lifetime value, and market share growth. Each client gets customized dashboards showing performance against their specific goals."
  },
  {
    question: "Can you help with international expansion?",
    answer: "Absolutely! We have extensive experience with UK/EU and ANZ markets, including marketplace localization, cross-border logistics, and region-specific advertising strategies."
  },
  {
    question: "What makes you different from other agencies?",
    answer: "We combine deep platform expertise with full-stack capabilities—media, operations, creative, and technology under one roof. Our teams are embedded in your time zones (UK & Australia) and we maintain a 4.3x average ROAS across all clients."
  },
  {
    question: "How do we get started?",
    answer: "The process starts with a free discovery call where we assess your current setup and goals. From there, we provide a detailed proposal with specific timelines, deliverables, and success metrics. Onboarding typically takes 1-2 weeks."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 mb-6">
            <QuestionMarkCircleIcon className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to know about working with Digizone
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/20 bg-white/80 rounded-2xl shadow-lg shadow-emerald-500/10 backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-emerald-50/50 transition-colors duration-200"
              >
                <span className="font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-neutral-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30"
          >
            Get in Touch
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
