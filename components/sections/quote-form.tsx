"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import { CheckCircleIcon, EnvelopeIcon, UserIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [] as string[],
    customMessage: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-2">
              <UserIcon className="h-4 w-4" />
              Full Name *
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20]"
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-2">
              <EnvelopeIcon className="h-4 w-4" />
              Email Address *
            </label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@company.com"
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20]"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-neutral-900 mb-3 block">
            Select Services (Choose all that apply)
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <label
                key={service.id}
                className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                  formData.services.includes(service.id)
                    ? "border-emerald-600 bg-emerald-50/50"
                    : "border-white/20 bg-white/70 hover:border-emerald-400"
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(service.id)}
                  onChange={() => handleServiceToggle(service.id)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  formData.services.includes(service.id)
                    ? "border-emerald-600 bg-emerald-600"
                    : "border-neutral-300"
                }`}>
                  {formData.services.includes(service.id) && (
                    <CheckCircleIcon className="h-3 w-3 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-900">{service.title}</p>
                  <p className="text-xs text-neutral-600">{service.price}{service.period}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-neutral-900 mb-2 block">
              Monthly Budget Range
            </label>
            <select
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20]"
            >
              <option value="">Select budget range</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-semibold text-neutral-900 mb-2 block">
              Project Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => handleInputChange("timeline", e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20]"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1month">1 month</option>
              <option value="3months">3 months</option>
              <option value="6months">6 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-2">
            <ChatBubbleLeftRightIcon className="h-4 w-4" />
            Custom Message / Requirements
          </label>
          <textarea
            value={formData.customMessage}
            onChange={(e) => handleInputChange("customMessage", e.target.value)}
            placeholder="Tell us about your business, current challenges, specific requirements, and what you'd like to achieve..."
            rows={4}
            className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20]"
          />
        </div>

        <button
          type="submit"
          className="group relative mx-auto overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-500/40 max-w-xs w-full md:w-auto"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get Quote
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>
        
        {submitted && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="text-sm font-semibold text-emerald-700">
              Thank you! We've received your request and will get back to you within 24 hours with a personalized quote.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};
