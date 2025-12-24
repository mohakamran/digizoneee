"use client";

import { offices } from "@/lib/data";
import { useState } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-6">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
            Let's Transform Your Ecommerce Business
          </h2>
          <p className="text-neutral-600">
            Tell us about your ecommerce goals, current challenges, and growth opportunities. Our team of marketplace specialists will respond within one business day with tailored insights and next steps.
          </p>
          <div className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow-md shadow-emerald-500/10">
            <h4 className="text-sm font-semibold text-neutral-900 mb-3">What to Expect:</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Free initial consultation and audit</li>
              <li>• Customized growth strategy recommendations</li>
              <li>• Transparent pricing and timeline estimates</li>
              <li>• No obligation - just valuable insights</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Name"
                className="rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20"
              />
            </div>
            <textarea
              required
              name="message"
              placeholder="Tell us about your business, current platforms, annual revenue, and what you'd like to achieve..."
              rows={4}
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20"
            />
            <input
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              className="w-full rounded-xl border border-dashed border-emerald-600 bg-white/70 px-4 py-3 text-sm text-neutral-700 shadow-sm transition hover:border-emerald-700"
            />
            <p className="text-xs text-neutral-500">Optional: Share performance data, current reports, or RFP documents</p>
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-500 transition duration-500 group-hover:scale-110" />
              <span className="relative">Send Message</span>
            </button>
            {submitted && (
              <p className="text-sm font-semibold text-emerald-600">
                Message received—we’ll be in touch soon.
              </p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/80 p-6 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-neutral-900">
              Global Offices, Local Expertise
            </h3>
            <p className="text-sm text-neutral-600">
              Strategic locations in London and Sydney providing seamless coverage across UK & Australia time zones. Visit us or schedule a virtual consultation.
            </p>
            <div className="mt-4 grid gap-4">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-2xl border border-white/15 bg-white/70 p-4 text-sm shadow-md shadow-emerald-500/10"
                >
                  <p className="text-base font-semibold text-neutral-900">
                    {office.city}
                  </p>
                  <div className="mt-2 space-y-2 text-neutral-600">
                    <p className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4" />
                      {office.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4" />
                      {office.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <EnvelopeIcon className="h-4 w-4" />
                      {office.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

