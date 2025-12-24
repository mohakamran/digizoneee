import { services } from "@/lib/data";
import { Metadata } from "next";
import { Services } from "@/components/sections/services";
import { CheckCircleIcon, StarIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { Particles } from "@/components/ui/particles";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export const metadata: Metadata = {
  title: "Services | Digizone",
  description:
    "Amazon, Walmart, Etsy, Shopify management, ecommerce SEO, and multi-platform integrations built for UK & Australia.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white/50 py-20 backdrop-blur relative">
        <Particles />
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Digizone Services
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-neutral-900 md:text-5xl">
            Full-Stack Ecommerce Services That Scale
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            From marketplace optimization to creative production, our integrated teams deliver measurable results across Amazon, Walmart, Etsy, Shopify, and beyond. UK & Australia time zones, proven playbooks, transparent reporting.
          </p>
          
          <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { icon: CheckCircleIcon, label: "Proven Results", value: "240+ Projects" },
              { icon: StarIcon, label: "Client Satisfaction", value: "4.9/5 Rating" },
              { icon: ArrowTrendingUpIcon, label: "Average ROAS", value: "4.3x Return" },
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
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Why Businesses Choose Digizone</h3>
            <div className="grid gap-3 sm:grid-cols-2 text-left">
              {[
                "Dedicated account managers with 10+ years experience",
                "Weekly performance reports with actionable insights",
                "No long-term contracts - results-driven partnerships",
                "24/7 support across UK & Australia time zones",
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
      <Services />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={`${service.id}-details`}
                className="rounded-2xl border border-white/15 bg-white/80 p-5 shadow-lg shadow-emerald-500/10"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {service.description}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                  {service.id === 'amazon' && (
                    <>
                      <li>• Full Amazon ecosystem: A+ Content, Brand Store, DSP, PPC</li>
                      <li>• FBA/FBM optimization and inventory management</li>
                      <li>• A/B testing for listings and conversion rate optimization</li>
                      <li>• Retail media strategy with AMC attribution</li>
                    </>
                  )}
                  {service.id === 'walmart' && (
                    <>
                      <li>• Walmart Marketplace setup and catalog optimization</li>
                      <li>• Walmart Connect advertising and Sponsored Products</li>
                      <li>• Content standards compliance and quality score optimization</li>
                      <li>• Performance analytics and competitive intelligence</li>
                    </>
                  )}
                  {service.id === 'etsy' && (
                    <>
                      <li>• Etsy shop setup, branding, and product photography guidance</li>
                      <li>• Etsy Ads automation and dayparting strategies</li>
                      <li>• SEO optimization for Etsy search algorithm</li>
                      <li>• Creative templates for makers and handmade products</li>
                    </>
                  )}
                  {service.id === 'shopify' && (
                    <>
                      <li>• Custom Shopify theme development and headless architecture</li>
                      <li>• CRO testing and checkout experience optimization</li>
                      <li>• Subscription, loyalty, and post-purchase upsells</li>
                      <li>• Core Web Vitals optimization and performance monitoring</li>
                    </>
                  )}
                  {service.id === 'seo' && (
                    <>
                      <li>• Ecommerce SEO strategy and technical optimization</li>
                      <li>• Email marketing automation and SMS campaigns</li>
                      <li>• Influencer partnerships and affiliate marketing</li>
                      <li>• On-site personalization and customer journey mapping</li>
                    </>
                  )}
                  {service.id === 'integration' && (
                    <>
                      <li>• Unified inventory management across all channels</li>
                      <li>• PIM/OMS integration and real-time sync</li>
                      <li>• Analytics dashboard and attribution modeling</li>
                      <li>• API development and custom reporting solutions</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

