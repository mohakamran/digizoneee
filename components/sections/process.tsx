"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description: "We analyze your current setup, competitors, and opportunities. This includes platform health checks, performance audits, and goal alignment.",
    duration: "1-2 weeks",
    deliverables: ["Competitive analysis", "Platform audit", "Performance baseline", "Strategic roadmap"]
  },
  {
    step: "02", 
    title: "Strategy & Planning",
    description: "Custom strategy development with clear KPIs, budget allocation, and timeline. We align on success metrics and build detailed execution plans.",
    duration: "1 week",
    deliverables: ["Growth strategy", "Media plan", "Content calendar", "Technical requirements"]
  },
  {
    step: "03",
    title: "Implementation & Setup",
    description: "Full execution of the strategy—store builds, campaign launches, integrations, and creative production. Everything is built to scale.",
    duration: "2-4 weeks",
    deliverables: ["Live campaigns", "Optimized listings", "Analytics setup", "Creative assets"]
  },
  {
    step: "04",
    title: "Optimization & Scale",
    description: "Continuous testing, learning, and scaling. We use data-driven decisions to improve performance and expand successful initiatives.",
    duration: "Ongoing",
    deliverables: ["Performance reports", "A/B test results", "Scale recommendations", "New opportunities"]
  }
];

export const Process = () => {
  return (
    <section className="py-20 bg-white/50 backdrop-blur relative">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A systematic approach to ecommerce growth that delivers consistent results across all platforms and markets
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/20 bg-white/80 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur-xl"
            >
              <div 
                className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/25"
              >
                <span className="text-sm font-bold">{step.step}</span>
              </div>
              
              <div className="pt-8 pr-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 ml-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {step.duration}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-neutral-900 mb-2">Key Deliverables:</p>
                  <div className="grid gap-2">
                    {step.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRightIcon className="h-6 w-6 text-emerald-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-8 border border-emerald-200">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Join 240+ businesses that have transformed their ecommerce operations with Digizone. Let's discuss your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30"
            >
              Get Your Custom Quote
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-white px-6 py-3 text-sm font-semibold text-emerald-600 shadow-md transition-all duration-300 hover:bg-emerald-50"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
