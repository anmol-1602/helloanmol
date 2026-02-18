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

// 2. Define the Retrospectives Collection
const retrospectives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(), // We used 'summary' instead of 'description' for retros
    pubDate: z.date(),
    mood: z.string().optional(), // Optional so it doesn't break if you forget it
    focusArea: z.string().optional(),
  }),
});

// The key 'booknotes' MUST match your folder name exactly
export const collections = {
'retrospectives': retrospectives,
'blogs': blogs,
 'booknotes': booknotesCollection,
};
