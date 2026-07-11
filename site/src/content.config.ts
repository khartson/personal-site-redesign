import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const skillLinkSchema = z.object({
	label: z.string().optional(),
	href: z.string(),
});

const roadmapSkillSchema = z.object({
	label: z.string(),
	professional: z.string().optional(),
	project: z.string().optional(),
	link: skillLinkSchema.optional(),
});

const roadmapNodeSchema = z.object({
	id: z.string(),
	label: z.string(),
	subtitle: z.string(),
	icon: z.string(),
	context: z.string().optional(),
	/** Fallback when a skill omits professional. */
	professional: z.string().optional(),
	/** Fallback when a skill omits project. */
	project: z.string().optional(),
	/** Fallback link when a skill omits link. */
	link: skillLinkSchema.optional(),
	skills: z.array(roadmapSkillSchema).min(1),
});

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
