import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { sanityFetch } from "../../lib/sanity.fetch";
import { POSTS_INDEX_QUERY } from "../../lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: any;
};

export const metadata: Metadata = {
  title: "Blog | Siru Design Co",
  description:
    "Design thoughts, project stories, and studio notes from Siru Design Co.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Siru Design Co",
    description:
      "Design thoughts, project stories, and studio notes from Siru Design Co.",
    url: "/blog",
    type: "website",
  },
};

export default async function BlogIndexPage() {
        const posts =
        (await sanityFetch<Post[]>({
            query: POSTS_INDEX_QUERY,
        })) ?? [];

        {posts.length === 0 ? (
        <p className="text-[16px] text-[var(--color-ink)]/60">
            No posts yet.
        </p>
        ) : (
        posts.map((post) => {
            // render
        })
        )}

  return (
    <main className="w-full bg-[var(--color-beige)]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
        <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[var(--color-ink)]">
          Blog
        </h1>

        <p className="mt-3 text-[18px] sm:text-[20px] text-[var(--color-ink)]/75 max-w-[760px]">
          Studio notes, project stories, and considered thoughts on people,
          place, and space.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const img =
              post.mainImage ? urlFor(post.mainImage).width(1200).height(800).url() : null;

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block rounded-[12px] overflow-hidden bg-white shadow-sm transition-transform duration-200 hover:-translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-brown)] focus-visible:ring-offset-4"
              >

                {post.categories?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.categories.map((cat) => (
                      <span
                        key={cat.slug.current}
                        className="text-[11px] px-2 py-1 rounded bg-[var(--color-beige)] text-[var(--color-ink)]/70"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}

                <div className="relative h-[220px] w-full bg-black/5">
                  {img ? (
                    <Image
                      src={img}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>

                <div className="p-6">
                  <h2 className="text-[18px] font-semibold text-[var(--color-ink)] group-hover:underline underline-offset-4">
                    {post.title}
                  </h2>

                  {post.excerpt ? (
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink)]/70">
                      {post.excerpt}
                    </p>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
