import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

import { sanityFetch } from "@/lib/sanity.fetch";
import { POST_BY_SLUG_QUERY } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

type PageProps = {
  params: { slug: string };
};

/* ---------- SEO ---------- */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const post = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug: params.slug },
  });

  if (!post) return {};

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.mainImage
        ? [
            {
              url: urlFor(post.mainImage).width(1200).height(630).url(),
            },
          ]
        : [],
    },
  };
}

/* ---------- PAGE ---------- */
export default async function BlogPostPage({ params }: PageProps) {
  const post = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug: params.slug },
  });

  if (!post) notFound();

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).url()
    : null;

  return (
    <main className="w-full bg-[var(--color-beige)]">
      <article className="mx-auto max-w-[860px] px-6 lg:px-0 py-24">

        {/* Header */}
        <FadeUp>
          <h1 className="text-[40px] sm:text-[48px] font-semibold text-[var(--color-ink)]">
            {post.title}
          </h1>

          <p className="mt-3 text-[14px] text-[var(--color-ink)]/60">
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </FadeUp>

        {/* Image */}
        {imageUrl && (
          <FadeUp delay={0.1}>
            <div className="relative mt-10 h-[420px] w-full overflow-hidden rounded-[12px]">
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeUp>
        )}

        {/* Content */}
        <FadeUp delay={0.2}>
          <div className="prose prose-lg mt-12 max-w-none text-[var(--color-ink)]">
            <PortableText value={post.body} />
          </div>
        </FadeUp>

        {/* Fixed callout (global) */}
        <FadeUp delay={0.3}>
          <div className="mt-20 rounded-[16px] bg-white p-10 text-center">
            <h3 className="text-[24px] font-semibold text-[var(--color-ink)]">
              Thinking about your own space?
            </h3>

            <p className="mt-4 text-[18px] text-[var(--color-ink)]/70 max-w-[520px] mx-auto">
              Whether you’re at the beginning or deep into a project, we’ll help
              you find clarity and the right next step.
            </p>

            <div className="mt-6">
              <Button href="/call-to-action">
                Start Your Journey
              </Button>
            </div>
          </div>
        </FadeUp>

      </article>
    </main>
  );
}
