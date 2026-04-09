import { renderOverviewMount } from "./roadmap-overview-render";

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
		ring.classList.add(
			"border-roadmap-primary",
			"node-glow-active",
		);
		icon.classList.remove("text-slate-500", "group-hover:text-roadmap-primary/70");
		icon.classList.add("text-roadmap-primary");
		title.classList.remove("text-slate-400");
		title.classList.add("text-white");
	} else {
		ring.classList.add(
			"border-border-muted",
			"node-glow",
			"group-hover:border-roadmap-primary/50",
		);
		ring.classList.remove(
			"border-roadmap-primary",
			"node-glow-active",
		);
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

function selectSkill(trigger: HTMLButtonElement): void {
	const overviewMount = document.getElementById(
		"roadmap-content-overview-mount",
	);
	const professional = document.getElementById("roadmap-content-professional");
	const project = document.getElementById("roadmap-content-project");
	const context = document.getElementById("roadmap-content-context");
	const contentArea = document.getElementById("roadmap-content-area");
	if (!overviewMount || !professional || !project || !contentArea) return;

	document
		.querySelectorAll<HTMLButtonElement>("[data-skill-trigger]")
		.forEach((btn) => {
			const isActive = btn === trigger;
			syncNodeVisual(btn, isActive);
			btn.setAttribute("aria-pressed", isActive ? "true" : "false");
		});

	contentArea.classList.remove("opacity-100");
	contentArea.classList.add("opacity-0");

	window.setTimeout(() => {
		renderOverviewMount(
			overviewMount,
			trigger.dataset.overview ?? "",
			trigger.dataset.overviewBullets ?? "[]",
		);
		professional.textContent = trigger.dataset.professional ?? "";
		project.textContent = trigger.dataset.project ?? "";
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
		btn.addEventListener("click", () => selectSkill(btn));
	});
}
