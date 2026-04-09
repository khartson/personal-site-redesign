import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const roadmapNodeSchema = z
	.object({
		id: z.string(),
		label: z.string(),
		subtitle: z.string(),
		icon: z.string(),
		context: z.string().optional(),
		overview: z.string().default(""),
		overviewBullets: z.array(z.string()).optional(),
		professional: z.string(),
		project: z.string(),
	})
	.refine(
		(n) =>
			n.overview.trim().length > 0 ||
			(n.overviewBullets != null && n.overviewBullets.length > 0),
		{ message: "Each node needs overview or overviewBullets", path: ["overview"] },
	);

const roadmaps = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/roadmaps" }),
	schema: z.object({
		title: z.string(),
		pageTitle: z.string().optional(),
		headline: z.string(),
		subheadline: z.string().optional(),
		headerName: z.string().optional(),
		headerRole: z.string().optional(),
		resumeLabel: z.string().optional(),
		resumeHref: z.string().optional(),
		footerTag: z.string().optional(),
		theme: z.enum(["devops", "development"]),
		interaction: z.enum(["click", "hover"]).default("click"),
		nodes: z.array(roadmapNodeSchema).min(1),
	}),
});

export const collections = { roadmaps };
