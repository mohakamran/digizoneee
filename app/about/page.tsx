import { Metadata } from "next";
import { AboutSection } from "@/components/sections/about";
import { Particles } from "@/components/ui/particles";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CheckCircleIcon, StarIcon, UsersIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "About Digizone",
  description:
    "Digizone is a UK & Australia ecommerce services company managing Amazon, Walmart, Etsy, and Shopify brands with full-stack teams.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white/70 py-20 backdrop-blur relative">
        <Particles />
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-neutral-900 md:text-5xl">
            Built for ecommerce teams that want outcomes.
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Marketplace, D2C, performance creative, and operations experts embedded with your
            brand across UK & AU.
          </p>
          
          <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { icon: UsersIcon, label: "Expert Team", value: "50+ Specialists" },
              { icon: StarIcon, label: "Experience", value: "10+ Years" },
              { icon: CheckCircleIcon, label: "Success Rate", value: "98% Client Retention" },
            ].map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow-lg shadow-emerald-500/10 backdrop-blur-xl">
                <stat.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <AnimatedCounter 
                  value={stat.value} 
                  duration={2000}
                  className="text-2xl"
                />
                <p className="text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 rounded-3xl border border-white/20 bg-white/80 p-6 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">The Digizone Difference</h3>
            <div className="grid gap-3 sm:grid-cols-2 text-left">
              {[
                "Full-stack teams under one roof - no fragmented agencies",
                "Transparent pricing with no hidden fees or surprises",
                "Direct access to senior leadership - no account managers",
                "Proven frameworks across Amazon, Walmart, Etsy, and Shopify",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
    </>
  );
}

