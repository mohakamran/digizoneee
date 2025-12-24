import { services } from "@/lib/data";
import { QuoteForm } from "@/components/sections/quote-form";
import { Particles } from "@/components/ui/particles";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import { PricingTable } from "@/components/sections/pricing-table";

export default function QuotePage() {
  const stats = [
    { label: "Happy Clients", value: "240+" },
    { label: "Avg. ROAS", value: "4.3x" },
    { label: "Years Experience", value: "10+" },
  ];

  return (
    <>
      <section className="bg-white/70 py-20 backdrop-blur relative">
        <Particles />
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Get a Quote
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-neutral-900 md:text-5xl">
            Transparent Pricing for Ecommerce Excellence
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Choose the perfect service package for your business or get a custom quote tailored to your specific needs. No hidden fees, just results.
          </p>
          
          <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow-lg shadow-emerald-500/10 backdrop-blur-xl">
                <StarIcon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <AnimatedCounter value={stat.value} duration={2000} className="text-2xl" />
                <p className="text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <Particles />
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Service Packages
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              All-inclusive monthly management with transparent pricing
            </p>
          </div>
          
          <PricingTable />
        </div>
      </section>

      <section className="py-20 bg-white/50 backdrop-blur relative">
        <Particles />
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Every business is unique. Get a personalized quote tailored to your specific requirements.
            </p>
          </div>
          
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
