import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(), // Matches 'Summary'
		pubDate: z.coerce.date(), // Matches 'Publish Date'
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(), // Matches 'Featured Image'
	}),
});

export const collections = { blog };