import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",

  fields: [
    /* =====================
       Core content
       ===================== */

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description:
        "Short summary used on blog listings, previews, and SEO.",
      validation: (Rule) => Rule.max(160),
    }),

    defineField({
      name: "mainImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "body",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),


    /* =====================
       Publishing control
       ===================== */

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
    }),

    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    /* =====================
       SEO (optional but powerful)
       ===================== */

    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta title",
          type: "string",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
      ],
    }),
  ],

  /* =====================
     Preview in Studio
     ===================== */

  preview: {
    select: {
      title: "title",
      media: "mainImage",
      status: "status",
    },
    prepare(selection) {
      const { title, media, status } = selection;
      return {
        title,
        media,
        subtitle: status === "published" ? "Published" : "Draft",
      };
    },
  },
});
