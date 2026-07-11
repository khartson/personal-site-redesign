import type { RoadmapSkill } from "./roadmap-skill-resolve";

const listClass =
	"list-none space-y-2.5 m-0 p-0 text-xs leading-relaxed normal-case tracking-normal";
const itemBaseClass =
	"roadmap-skill-item flex gap-2.5 text-left border-l-2 pl-3 py-0.5 first:pt-0 cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-roadmap-primary focus-visible:outline-offset-2";
const itemIdleClass =
	"border-roadmap-primary/35 text-slate-300 hover:border-roadmap-primary/70 hover:text-slate-100";
const itemActiveClass = "border-roadmap-primary text-white";

export function parseSkillsJson(raw: string | undefined): RoadmapSkill[] {
	try {
		const parsed = JSON.parse(raw || "[]") as unknown;
		if (!Array.isArray(parsed)) return [];
		return parsed.filter(
			(item): item is RoadmapSkill =>
				typeof item === "object" &&
				item != null &&
				typeof (item as RoadmapSkill).label === "string",
		);
	} catch {
		return [];
	}
}

export function setActiveSkillItem(
	mount: HTMLElement,
	activeIndex: number,
): void {
	const items = mount.querySelectorAll<HTMLElement>(".roadmap-skill-item");
	items.forEach((item, index) => {
		const active = index === activeIndex;
		item.className = `${itemBaseClass} ${active ? itemActiveClass : itemIdleClass}`;
		item.setAttribute("aria-selected", active ? "true" : "false");
		item.tabIndex = active ? 0 : -1;
	});
}

export function renderOverviewMount(
	mount: HTMLElement,
	skills: RoadmapSkill[],
	activeIndex = 0,
): void {
	const ul =
		mount.tagName === "UL"
			? mount
			: (() => {
					const next = document.createElement("ul");
					mount.replaceWith(next);
					return next;
				})();

	ul.id = "roadmap-content-overview-mount";
	ul.className = listClass;
	ul.setAttribute("role", "listbox");
	ul.setAttribute("aria-label", "Skills in this pillar");
	ul.replaceChildren();

	skills.forEach((skill, index) => {
		const li = document.createElement("li");
		const active = index === activeIndex;
		li.className = `${itemBaseClass} ${active ? itemActiveClass : itemIdleClass}`;
		li.setAttribute("role", "option");
		li.tabIndex = active ? 0 : -1;
		li.setAttribute("aria-selected", active ? "true" : "false");
		li.dataset.skillIndex = String(index);
		li.dataset.label = skill.label;
		li.dataset.professional = skill.professional ?? "";
		li.dataset.project = skill.project ?? "";
		li.dataset.linkLabel = skill.link?.label ?? "";
		li.dataset.linkHref = skill.link?.href ?? "";

		const span = document.createElement("span");
		span.textContent = skill.label;
		li.append(span);
		ul.append(li);
	});
}
