import { defineCollection, z } from 'astro:content';

const patterns = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { patterns };
