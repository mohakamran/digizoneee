import { blogPosts } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClockIcon, ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { Particles } from "@/components/ui/particles";

export const metadata: Metadata = {
  title: "Blog | Digizone",
  description:
    "Ecommerce strategy, marketplace growth, retail media, and CRO insights from the Digizone team.",
};

export default function BlogPage() {
  return (
    <section className="py-20 relative">
      <Particles />
      <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Blogs
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-neutral-900 md:text-5xl">
            Ecommerce Insights & Expert Strategies
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Deep dives into Amazon DSP, Shopify CRO, Etsy creative systems, Walmart operations, and performance marketing. Actionable playbooks from our team of ecommerce specialists.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post, idx) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-3xl border border-white/15 bg-white/80 shadow-xl shadow-emerald-500/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              
              <div className="space-y-4 p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-emerald-700">
                      {post.readingTime}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold text-neutral-900 group-hover:text-emerald-700 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-neutral-600 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all duration-300 hover:gap-3 hover:text-emerald-700"
                >
                  Read Full Article
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <div className="rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Stay Updated with Ecommerce Insights</h3>
            <p className="text-neutral-600 mb-6">
              Get the latest playbooks, strategies, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-[emerald-600/20"
              />
              <button className="group relative overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20">
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-500 transition duration-500 group-hover:scale-110" />
                <span className="relative">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

