import { groq } from "next-sanity";

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug && status == "published"][0]{
    title,
    excerpt,
    publishedAt,
    mainImage,
    body,
    seo
  }
`;

export const POSTS_INDEX_QUERY = groq`
  *[_type == "post" && status == "published"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    categories[]->{ title, slug }
  }
`;
