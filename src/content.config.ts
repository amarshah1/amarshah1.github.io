import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        url: z.string().url().optional(),
        equal: z.boolean().default(false),
      })
    ),
    venue: z.string(),
    venueUrl: z.string().url().optional(),
    year: z.number(),
    pdf: z.string().optional(),
    bibtex: z.string().optional(),
    description: z.string().optional(),
    selected: z.boolean().default(false),
    order: z.number(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: ['*.md', '!CLAUDE.md'], base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { publications, posts };
