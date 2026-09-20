import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderOverviewMount } from "./roadmap-overview-render";
import * as skillResolve from "./roadmap-skill-resolve";
import { initRoadmapTimeline } from "./roadmap-timeline";

const linuxSkills = [
	{
		label: "Linux",
		professional: "Ops work",
		project: "Homelab",
		link: { label: "Lab repo", href: "https://github.com/khartson/lab" },
	},
	{ label: "Bash" },
];

const pythonSkills = [
	{
		label: "Python",
		professional: "Services",
		project: "API",
		link: { label: "API docs", href: "/python" },
	},
];

function triggerHtml(
	id: string,
	skills: unknown,
	extra: {
		professional?: string;
		project?: string;
		linkLabel?: string;
		linkHref?: string;
		context?: string;
		pressed?: boolean;
		includeVisuals?: boolean;
	} = {},
): string {
	const {
		professional = "",
		project = "",
		linkLabel = "",
		linkHref = "",
		context = "",
		pressed = false,
		includeVisuals = true,
	} = extra;
	const visuals = includeVisuals
		? `<div id="node-${id}" class="border-border-muted node-glow group-hover:border-roadmap-primary/50"></div>
			<span class="roadmap-node-icon text-slate-500"></span>
			<h3 class="text-slate-400">${id}</h3>`
		: `<span>no visuals</span>`;
	return `<button type="button" data-skill-trigger="${id}"
		data-skills='${JSON.stringify(skills)}'
		data-professional="${professional}"
		data-project="${project}"
		data-link-label="${linkLabel}"
		data-link-href="${linkHref}"
		data-context="${context}"
		aria-pressed="${pressed ? "true" : "false"}">
		${visuals}
	</button>`;
}

function mountFullFixture(): void {
	document.body.innerHTML = `
		${triggerHtml("linux", linuxSkills, {
			professional: "Node ops",
			project: "Node lab",
			linkLabel: "Node repo",
			linkHref: "https://github.com/khartson/lab",
			context: "Linux pillar",
			pressed: true,
		})}
		${triggerHtml("python", pythonSkills, {
			professional: "Node py",
			project: "Node api",
			linkLabel: "Internal",
			linkHref: "/python",
			context: "",
		})}
		${triggerHtml("broken", [], { includeVisuals: false })}
		<ul id="roadmap-content-overview-mount"></ul>
		<p id="roadmap-content-professional"></p>
		<p id="roadmap-content-project"></p>
		<a id="roadmap-content-project-link"></a>
		<p id="roadmap-content-context"></p>
		<div id="roadmap-content-area" data-node-professional="Area ops" data-node-project="Area lab" data-node-link-label="Area link" data-node-link-href="/area"></div>
	`;
	const mount = document.getElementById("roadmap-content-overview-mount");
	if (mount) renderOverviewMount(mount, linuxSkills, 0);
}

describe("initRoadmapTimeline", () => {
	beforeEach(() => {
		vi.useFakeTimers();
		mountFullFixture();
	});

	afterEach(() => {
		vi.useRealTimers();
		vi.restoreAllMocks();
		document.body.innerHTML = "";
	});

	it("wires overview hover, focus, click, and arrow keys", () => {
		initRoadmapTimeline();
		const items = [
			...document.querySelectorAll<HTMLElement>(".roadmap-skill-item"),
		];
		expect(items).toHaveLength(2);

		items[1]?.dispatchEvent(new Event("mouseenter"));
		expect(items[1]?.getAttribute("aria-selected")).toBe("true");
		expect(
			document.getElementById("roadmap-content-professional")?.textContent,
		).toBe("Area ops");

		items[0]?.focus();
		items[0]?.dispatchEvent(new Event("focus"));
		expect(items[0]?.getAttribute("aria-selected")).toBe("true");

		items[1]?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		expect(document.activeElement).toBe(items[1]);

		items[1]?.dispatchEvent(
			new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
		);
		expect(document.activeElement).toBe(items[0]);

		items[0]?.dispatchEvent(
			new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
		);
		expect(document.activeElement).toBe(items[1]);

		items[1]?.dispatchEvent(
			new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
		);
		expect(document.activeElement).toBe(items[1]);
	});

	it("selects a timeline node, updates visuals, and shows an external link", () => {
		initRoadmapTimeline();
		const python = document.querySelector<HTMLButtonElement>(
			'[data-skill-trigger="python"]',
		);
		python?.click();

		expect(python?.getAttribute("aria-pressed")).toBe("true");
		expect(
			document
				.querySelector('[data-skill-trigger="linux"]')
				?.getAttribute("aria-pressed"),
		).toBe("false");
		expect(python?.querySelector("#node-python")?.classList.contains("node-glow-active")).toBe(
			true,
		);

		vi.advanceTimersByTime(300);

		const link = document.getElementById(
			"roadmap-content-project-link",
		) as HTMLAnchorElement;
		expect(link.href).toContain("/python");
		expect(link.target).toBe("");
		expect(link.rel).toBe("");
		expect(
			document.getElementById("roadmap-content-context")?.classList.contains(
				"hidden",
			),
		).toBe(true);
		expect(
			document.getElementById("roadmap-content-area")?.classList.contains(
				"opacity-100",
			),
		).toBe(true);
	});

	it("applies external link attributes after selecting the linux node", () => {
		initRoadmapTimeline();
		document.querySelector<HTMLButtonElement>('[data-skill-trigger="linux"]')?.click();
		vi.advanceTimersByTime(300);

		const link = document.getElementById(
			"roadmap-content-project-link",
		) as HTMLAnchorElement;
		expect(link.getAttribute("href")).toBe("https://github.com/khartson/lab");
		expect(link.target).toBe("_blank");
		expect(link.rel).toBe("noopener noreferrer");
		expect(document.getElementById("roadmap-content-context")?.textContent).toBe(
			"Linux pillar",
		);
		expect(
			document.getElementById("roadmap-content-context")?.classList.contains(
				"hidden",
			),
		).toBe(false);
	});

	it("hides project copy and link when resolveSkillDetails says so", () => {
		vi.spyOn(skillResolve, "resolveSkillDetails").mockReturnValue({
			professional: "Hidden",
			project: "Nope",
			linkLabel: "Nope",
			linkHref: "",
			showProject: false,
			showLink: false,
		});

		initRoadmapTimeline();
		document.querySelector<HTMLButtonElement>('[data-skill-trigger="linux"]')?.click();
		vi.advanceTimersByTime(300);

		const project = document.getElementById("roadmap-content-project");
		const link = document.getElementById(
			"roadmap-content-project-link",
		) as HTMLAnchorElement;
		expect(project?.classList.contains("hidden")).toBe(true);
		expect(link.classList.contains("hidden")).toBe(true);
		expect(link.getAttribute("aria-hidden")).toBe("true");
		expect(link.tabIndex).toBe(-1);
		expect(link.getAttribute("href")).toBeNull();
	});

	it("returns early when required panels are missing", () => {
		document.getElementById("roadmap-content-professional")?.remove();
		initRoadmapTimeline();
		document.querySelector<HTMLButtonElement>('[data-skill-trigger="python"]')?.click();
		vi.advanceTimersByTime(300);
		expect(document.getElementById("roadmap-content-project")?.textContent).toBe(
			"",
		);
	});
});
