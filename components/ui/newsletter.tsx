"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, CheckCircleIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_40%)]" />
      
      <div className="relative mx-auto max-w-4xl px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-lg">
            <EnvelopeIcon className="h-10 w-10 text-white" />
          </div>
          
          <div className="text-center space-y-4 flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-lg">
              <EnvelopeIcon className="h-4 w-4" />
              Stay Updated
            </div>
            
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Get Ecommerce Insights Delivered
            </h2>
            
            <p className="text-lg text-emerald-100">
              Join 10,000+ ecommerce professionals getting weekly tips, strategies, and industry insights from our experts.
            </p>
          </div>
        </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-white placeholder-emerald-200 backdrop-blur-lg outline-none transition focus:border-white/40 focus:bg-white/30"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-700 border-t-transparent" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 rounded-xl bg-white/20 px-6 py-4 backdrop-blur-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400/30 backdrop-blur">
                <CheckCircleIcon className="h-6 w-6 text-green-300" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Welcome aboard!</p>
                <p className="text-sm text-emerald-100">Check your email for confirmation.</p>
              </div>
            </motion.div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-emerald-200">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4" />
              <span>Weekly insights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
