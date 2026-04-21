import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/content/posts" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
