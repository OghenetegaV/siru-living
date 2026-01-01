import { groq } from "next-sanity";

/* =========================================================
   BLOG INDEX (listing page)
   ========================================================= */

export const POSTS_INDEX_QUERY = groq`
  *[_type == "post" && status == "published"]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    categories[]->{
      title,
      slug
    }
  }
`;

/* =========================================================
   SINGLE BLOG POST (article page)
   ========================================================= */

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug && status == "published"][0] {
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    body,
    seo,
    categories[]->{
      title,
      slug
    }
  }
`;

/* =========================================================
   BLOG SEO (optional helper)
   ========================================================= */

export const POST_SEO_QUERY = groq`
  *[_type == "post" && slug.current == $slug && status == "published"][0] {
    seo {
      metaTitle,
      metaDescription
    },
    title,
    excerpt
  }
`;
