"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { motion } from "framer-motion";

type Props = { limit?: number };

export const BlogSection = ({ limit }: Props) => {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section id="blog" className="py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Insights
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900 md:text-4xl">
              Latest from the Digizone team.
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            View all posts →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/15 bg-white/80 shadow-lg shadow-emerald-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                  {post.readingTime}
                </div>
              </div>
              <div className="flex flex-col gap-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition group-hover:gap-3"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

