"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

const posts = {
  featured: {
    title: "Riding the tide of innovation and inspiration",
    category: "Editorial",
    date: "Sep 8, 2024",
    image: "/assets/images/blog/blog-featured.png",
    href: "/blog/riding-the-tide",
  },
  secondary: [
    {
      title: "The effects of geopolitical shifts on global security",
      category: "World News",
      date: "Sep 8, 2024",
      image: "/assets/images/blog/blog-1.png",
      href: "/blog/geopolitical-shifts",
    },
    {
      title: "Affect the integrity and future of professional sports",
      category: "Sports",
      date: "Sep 8, 2024",
      image: "/assets/images/blog/blog-2.png",
      href: "/blog/future-of-sports",
    },
  ],
};

export default function BlogPreview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">
        {/* Title */}
        <FadeUp>
          <h2 className="text-[56px] font-semibold text-[var(--color-ink)]">
            Read our blogs
          </h2>
        </FadeUp>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 items-stretch h-[460px]">
          {/* Featured: background image with overlay text */}
          <FadeUp delay={0.1}>
            <Link
              href={posts.featured.href}
              className="group relative block h-full overflow-hidden rounded-[10px]"
            >
              <Image
                src={posts.featured.image}
                alt={posts.featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                priority
              />

              {/* Soft darkening for readable text */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Optional “play” button visual (as in your screenshot) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-[46px] w-[46px] rounded-full bg-white/35 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <div className="ml-[2px] h-0 w-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-white" />
                </div>
              </div>

              {/* Overlay text (bottom-left) */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="mb-1 text-[22px] font-normal underline text-white tracking-wide">
                  {posts.featured.title}
                </h3>
                <p className="text-[12px] text-white/80 font-normal">
                  {posts.featured.category} — {posts.featured.date}
                </p>
              </div>
            </Link>
          </FadeUp>

          {/* Secondary column: must fill same height as featured */}
          <div className="h-50% grid grid-rows-2 gap-6">
            {posts.secondary.map((post, i) => (
              <FadeUp key={post.title} delay={0.15 + i * 0.1}>
                <Link
                  href={post.href}
                  className="group h-full w-full flex items-center gap-5"
                >
                  {/* Text (right) */}
                  <div className="min-w-0">
                    <h4 className="text-[18px] font-medium leading-snug text-[var(--color-ink)]">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-[12px] text-[var(--color-ink)]/60">
                      {post.category} — {post.date}
                    </p>
                  </div>

                  {/* Image (left) */}
                  <div className="relative h-full w-[270px] overflow-hidden rounded-[10px] flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
