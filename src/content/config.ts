import { defineCollection, z } from 'astro:content';

const booknotesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.string(),
    finished: z.string(),
    image: z.string(),
  }),
});

const blogs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
  }),
});

// The key 'booknotes' MUST match your folder name exactly
export const collections = {
 'blogs': blogs,
 'booknotes': booknotesCollection,
};
