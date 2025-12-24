import { blogPosts } from "@/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Digizone Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="py-16">
      <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            {new Date(post.date).toLocaleDateString("en-GB", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm text-neutral-600">{post.readingTime}</p>
        </div>
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-emerald-500/20">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-neutral-800">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="rounded-2xl border border-white/10 bg-white/70 p-4 text-base font-semibold text-neutral-900 shadow-md shadow-emerald-500/10">
            “We pair retail readiness with media execution. Every test has a retail metric buddy.”
          </div>
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
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/70 p-6 shadow-xl shadow-emerald-500/10">
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              Share this playbook
            </p>
            <p className="text-sm text-neutral-600">
              Amazon, Walmart, Etsy, Shopify, and omnichannel strategies for 2025.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["LinkedIn", "Twitter", "Email"].map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/20 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </article>
  );
}

