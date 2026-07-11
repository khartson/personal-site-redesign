export type SkillLink = {
	label?: string;
	href: string;
};

export type RoadmapSkill = {
	label: string;
	professional?: string;
	project?: string;
	link?: SkillLink;
};

export type NodeSkillDefaults = {
	professional?: string;
	project?: string;
	link?: SkillLink;
};

export const DEFAULT_PROFESSIONAL =
	"See related experience on the resume.";
export const DEFAULT_PROJECT =
	"Related project write-ups coming soon.";
export const DEFAULT_LINK_LABEL = "Explore repository";
export const DEFAULT_GITHUB_HREF = "https://github.com/khartson";
export const DEFAULT_GITHUB_LABEL = "View GitHub";

export type ResolvedSkillDetails = {
	professional: string;
	project: string;
	linkLabel: string;
	linkHref: string;
	showProject: boolean;
	showLink: boolean;
};

function trimOrEmpty(value: string | undefined): string {
	return (value ?? "").trim();
}

function isUsableHref(href: string): boolean {
	return href.length > 0 && href !== "#";
}

export function resolveSkillDetails(
	skill: RoadmapSkill,
	defaults: NodeSkillDefaults = {},
): ResolvedSkillDetails {
	const professional =
		trimOrEmpty(skill.professional) ||
		trimOrEmpty(defaults.professional) ||
		DEFAULT_PROFESSIONAL;

	const project =
		trimOrEmpty(skill.project) ||
		trimOrEmpty(defaults.project) ||
		DEFAULT_PROJECT;

	const link = skill.link ?? defaults.link;
	const rawHref = trimOrEmpty(link?.href);
	const hasExplicitLink = isUsableHref(rawHref);
	const linkHref = hasExplicitLink ? rawHref : DEFAULT_GITHUB_HREF;
	const linkLabel =
		trimOrEmpty(link?.label) ||
		(hasExplicitLink ? DEFAULT_LINK_LABEL : DEFAULT_GITHUB_LABEL);

	return {
		professional,
		project,
		linkLabel,
		linkHref,
		showProject: true,
		showLink: true,
	};
}
