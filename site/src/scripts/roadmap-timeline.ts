import {
	parseSkillsJson,
	renderOverviewMount,
	setActiveSkillItem,
} from "./roadmap-overview-render";
import {
	resolveSkillDetails,
	type NodeSkillDefaults,
	type RoadmapSkill,
} from "./roadmap-skill-resolve";

function syncNodeVisual(
	trigger: HTMLButtonElement,
	active: boolean,
): void {
	const ring = trigger.querySelector<HTMLElement>('[id^="node-"]');
	const icon = trigger.querySelector<HTMLElement>(".roadmap-node-icon");
	const title = trigger.querySelector("h3");
	if (!ring || !icon || !title) return;

	if (active) {
		ring.classList.remove(
			"border-border-muted",
			"node-glow",
			"group-hover:border-roadmap-primary/50",
		);
		ring.classList.add("border-roadmap-primary", "node-glow-active");
		icon.classList.remove(
			"text-slate-500",
			"group-hover:text-roadmap-primary/70",
		);
		icon.classList.add("text-roadmap-primary");
		title.classList.remove("text-slate-400");
		title.classList.add("text-white");
	} else {
		ring.classList.add(
			"border-border-muted",
			"node-glow",
			"group-hover:border-roadmap-primary/50",
		);
		ring.classList.remove("border-roadmap-primary", "node-glow-active");
		icon.classList.add(
			"text-slate-500",
			"group-hover:text-roadmap-primary/70",
			"transition-colors",
		);
		icon.classList.remove("text-roadmap-primary");
		title.classList.add("text-slate-400");
		title.classList.remove("text-white");
	}
}

function getPanelElements() {
	const overviewMount = document.getElementById(
		"roadmap-content-overview-mount",
	);
	const professional = document.getElementById("roadmap-content-professional");
	const project = document.getElementById("roadmap-content-project");
	const projectLink = document.getElementById(
		"roadmap-content-project-link",
	) as HTMLAnchorElement | null;
	const context = document.getElementById("roadmap-content-context");
	const contentArea = document.getElementById("roadmap-content-area");
	return {
		overviewMount,
		professional,
		project,
		projectLink,
		context,
		contentArea,
	};
}

function readNodeDefaults(
	contentArea: HTMLElement,
	trigger?: HTMLButtonElement,
): NodeSkillDefaults {
	const professional =
		trigger?.dataset.professional ?? contentArea.dataset.nodeProfessional ?? "";
	const project =
		trigger?.dataset.project ?? contentArea.dataset.nodeProject ?? "";
	const linkLabel =
		trigger?.dataset.linkLabel ?? contentArea.dataset.nodeLinkLabel ?? "";
	const linkHref =
		trigger?.dataset.linkHref ?? contentArea.dataset.nodeLinkHref ?? "";

	return {
		professional,
		project,
		link:
			linkHref.trim().length > 0
				? { label: linkLabel || undefined, href: linkHref }
				: undefined,
	};
}

function skillFromItem(item: HTMLElement): RoadmapSkill {
	const linkHref = item.dataset.linkHref ?? "";
	const linkLabel = item.dataset.linkLabel ?? "";
	return {
		label: item.dataset.label ?? "",
		professional: item.dataset.professional || undefined,
		project: item.dataset.project || undefined,
		link:
			linkHref.trim().length > 0
				? { label: linkLabel || undefined, href: linkHref }
				: undefined,
	};
}

function applySkillDetails(
	skill: RoadmapSkill,
	defaults: NodeSkillDefaults,
): void {
	const { professional, project, projectLink } = getPanelElements();
	if (!professional || !project || !projectLink) return;

	const resolved = resolveSkillDetails(skill, defaults);
	professional.textContent = resolved.professional;

	project.textContent = resolved.project;
	project.classList.toggle("hidden", !resolved.showProject);

	projectLink.textContent = resolved.linkLabel;
	if (resolved.showLink) {
		projectLink.href = resolved.linkHref;
		projectLink.classList.remove("hidden");
		projectLink.removeAttribute("aria-hidden");
		projectLink.removeAttribute("tabindex");
		if (resolved.linkHref.startsWith("http")) {
			projectLink.target = "_blank";
			projectLink.rel = "noopener noreferrer";
		} else {
			projectLink.removeAttribute("target");
			projectLink.removeAttribute("rel");
		}
	} else {
		projectLink.removeAttribute("href");
		projectLink.classList.add("hidden");
		projectLink.setAttribute("aria-hidden", "true");
		projectLink.tabIndex = -1;
		projectLink.removeAttribute("target");
		projectLink.removeAttribute("rel");
	}
}

function selectOverviewSkill(
	item: HTMLElement,
	options: { focus?: boolean } = {},
): void {
	const { overviewMount, contentArea } = getPanelElements();
	if (!overviewMount || !contentArea) return;

	const index = Number(item.dataset.skillIndex ?? "0");
	setActiveSkillItem(overviewMount, index);
	applySkillDetails(skillFromItem(item), readNodeDefaults(contentArea));

	if (options.focus) {
		item.focus();
	}
}

function wireOverviewSkillInteractions(mount: HTMLElement): void {
	const items = mount.querySelectorAll<HTMLElement>(".roadmap-skill-item");
	items.forEach((item) => {
		item.addEventListener("mouseenter", () => selectOverviewSkill(item));
		item.addEventListener("focus", () => selectOverviewSkill(item));
		item.addEventListener("click", () =>
			selectOverviewSkill(item, { focus: true }),
		);
		item.addEventListener("keydown", (event) => {
			if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
			event.preventDefault();
			const list = [...items];
			const current = list.indexOf(item);
			if (current < 0) return;
			const nextIndex =
				event.key === "ArrowDown"
					? Math.min(current + 1, list.length - 1)
					: Math.max(current - 1, 0);
			const next = list[nextIndex];
			if (next) selectOverviewSkill(next, { focus: true });
		});
	});
}

function selectTimelineNode(trigger: HTMLButtonElement): void {
	const {
		overviewMount,
		professional,
		project,
		contentArea,
		context,
	} = getPanelElements();
	if (!overviewMount || !professional || !project || !contentArea) return;

	document
		.querySelectorAll<HTMLButtonElement>("[data-skill-trigger]")
		.forEach((btn) => {
			const isActive = btn === trigger;
			syncNodeVisual(btn, isActive);
			btn.setAttribute("aria-pressed", isActive ? "true" : "false");
		});

	const skills = parseSkillsJson(trigger.dataset.skills);
	contentArea.dataset.nodeProfessional = trigger.dataset.professional ?? "";
	contentArea.dataset.nodeProject = trigger.dataset.project ?? "";
	contentArea.dataset.nodeLinkLabel = trigger.dataset.linkLabel ?? "";
	contentArea.dataset.nodeLinkHref = trigger.dataset.linkHref ?? "";

	contentArea.classList.remove("opacity-100");
	contentArea.classList.add("opacity-0");

	window.setTimeout(() => {
		const mount =
			document.getElementById("roadmap-content-overview-mount") ??
			overviewMount;
		renderOverviewMount(mount, skills, 0);
		const nextMount = document.getElementById(
			"roadmap-content-overview-mount",
		);
		if (nextMount) {
			wireOverviewSkillInteractions(nextMount);
			const first = nextMount.querySelector<HTMLElement>(
				".roadmap-skill-item",
			);
			if (first) {
				applySkillDetails(
					skillFromItem(first),
					readNodeDefaults(contentArea, trigger),
				);
			}
		}

		if (context) {
			const ctx = (trigger.dataset.context ?? "").trim();
			context.textContent = ctx;
			context.classList.toggle("hidden", ctx.length === 0);
		}

		contentArea.classList.remove("opacity-0");
		contentArea.classList.add("opacity-100");
	}, 300);
}

export function initRoadmapTimeline(): void {
	const triggers = document.querySelectorAll<HTMLButtonElement>(
		"[data-skill-trigger]",
	);
	triggers.forEach((btn) => {
		btn.addEventListener("click", () => selectTimelineNode(btn));
	});

	const overviewMount = document.getElementById(
		"roadmap-content-overview-mount",
	);
	if (overviewMount) {
		wireOverviewSkillInteractions(overviewMount);
	}
}
