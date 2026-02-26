import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.union([z.date(), z.string()]),
    category: z.string(),
    refId: z.string(), // The unique "Lab ID" (e.g., "882" or "A-1")
    stack: z.array(z.string()), // ['rust', 'wasm']
    link: z.string().url(),
  }),
});

const booknotesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.string(),
    finished: z.string(),
    pubDate: z.date(),
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
  'projects': projects,
  'retrospectives': retrospectives,
  'blogs': blogs,
  'booknotes': booknotesCollection,
};
