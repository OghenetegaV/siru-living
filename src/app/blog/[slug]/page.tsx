import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import type { Image as SanityImage, PortableTextBlock } from "sanity";

import { PortableText } from "@portabletext/react";

import { sanityFetch } from "@/lib/sanity.fetch";
import { POST_BY_SLUG_QUERY } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { calculateReadingTime } from "@/lib/readingTime";

import FadeUp from "@/components/motion/FadeUp";

type PageProps = {
  params: {
    slug: string;
  };
};

type Post = {
  title: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImage;
  body?: PortableTextBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
};

/* =========================
   SEO METADATA
   ========================= */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const post = await sanityFetch<Post | null>({
    query: POST_BY_SLUG_QUERY,
    params: { slug: params.slug },
  });

  if (!post) return {};

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      type: "article",
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

/* =========================
   PAGE
   ========================= */
export default async function BlogPostPage({ params }: PageProps) {
  const post = await sanityFetch<Post | null>({
    query: POST_BY_SLUG_QUERY,
    params: { slug: params.slug },
  });

  if (!post) notFound();

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).url()
    : null;

  const plainText =
    post.body
      ?.map((block) =>
        block._type === "block"
          ? block.children
              ?.map((child) =>
                "text" in child ? child.text : ""
              )
              .join(" ")
          : ""
      )
      .join(" ") ?? "";

  const readingTime =
    plainText.length > 0 ? calculateReadingTime(plainText) : null;

  return (
    <main className="w-full bg-[var(--color-beige)]">
      <article className="mx-auto max-w-[1027px] px-6 lg:px-0 py-24">

        {/* Breadcrumb */}
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="text-[12px] tracking-wide text-[var(--color-brand-brown)] whitespace-nowrap">
              Blog / Journal
            </span>
            <span className="h-px flex-1 bg-[var(--color-brand-brown)]/30" />
          </div>
        </FadeUp>

        {/* Featured Image */}
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

        {/* Header */}
        <FadeUp delay={0.15}>
          {post.publishedAt && (
            <p className="mt-6 text-[14px] text-[var(--color-ink)]/60">
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {readingTime && ` · ${readingTime}`}
            </p>
          )}

          <h1 className="mt-2 text-[40px] sm:text-[48px] font-semibold text-[var(--color-brand-brown)]">
            {post.title}
          </h1>
        </FadeUp>

        {/* Content */}
        <FadeUp delay={0.25}>
          <div className="mt-14">
            <PortableText
              value={post.body ?? []}
              components={portableTextComponents}
            />
          </div>
        </FadeUp>

        {/* Fixed Callout */}
        <FadeUp delay={0.35}>
          <div className="mt-20 rounded-[8px] bg-[var(--color-brand-brown)] px-10 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

              <div className="max-w-[640px]">
                <h3 className="text-[22px] font-semibold text-white">
                  Considering your own design journey?
                </h3>
                <p className="mt-2 text-[16px] text-white/90">
                  Start with a conversation and let’s explore the right route for your project.
                </p>
              </div>

              <a
                href="/call-to-action"
                className="inline-flex items-center whitespace-nowrap rounded-[6px] bg-white px-6 py-2.5 text-[14px] font-medium text-[var(--color-brand-brown)] transition-opacity hover:opacity-85"
              >
                Start a Journey
              </a>
            </div>
          </div>
        </FadeUp>

      </article>
    </main>
  );
}
