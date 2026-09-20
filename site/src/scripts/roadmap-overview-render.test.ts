import { beforeEach, describe, expect, it } from "vitest";
import {
	parseSkillsJson,
	renderOverviewMount,
	setActiveSkillItem,
} from "./roadmap-overview-render";

const skills = [
	{
		label: "Linux",
		professional: "Ops",
		project: "Homelab",
		link: { label: "Lab", href: "/lab" },
	},
	{ label: "Python" },
];

describe("parseSkillsJson", () => {
	it("returns an empty array for missing, invalid, or non-array JSON", () => {
		expect(parseSkillsJson(undefined)).toEqual([]);
		expect(parseSkillsJson("{")).toEqual([]);
		expect(parseSkillsJson("{}")).toEqual([]);
	});

	it("keeps objects that have a string label", () => {
		expect(
			parseSkillsJson(
				JSON.stringify([
					{ label: "Go" },
					{ professional: "no label" },
					null,
					"skip",
				]),
			),
		).toEqual([{ label: "Go" }]);
	});
});

describe("renderOverviewMount", () => {
	beforeEach(() => {
		document.body.innerHTML = "";
	});

	it("renders listbox options and skill datasets on a ul mount", () => {
		const mount = document.createElement("ul");
		document.body.append(mount);

		renderOverviewMount(mount, skills, 0);

		expect(mount.id).toBe("roadmap-content-overview-mount");
		expect(mount.getAttribute("role")).toBe("listbox");
		const items = mount.querySelectorAll<HTMLElement>(".roadmap-skill-item");
		expect(items).toHaveLength(2);
		expect(items[0]?.getAttribute("aria-selected")).toBe("true");
		expect(items[0]?.tabIndex).toBe(0);
		expect(items[0]?.dataset.label).toBe("Linux");
		expect(items[0]?.dataset.professional).toBe("Ops");
		expect(items[0]?.dataset.linkHref).toBe("/lab");
		expect(items[1]?.getAttribute("aria-selected")).toBe("false");
		expect(items[1]?.tabIndex).toBe(-1);
		expect(items[1]?.textContent).toBe("Python");
	});

	it("replaces a non-ul mount with a ul", () => {
		const mount = document.createElement("div");
		document.body.append(mount);

		renderOverviewMount(mount, skills, 1);

		expect(document.body.querySelector("div")).toBeNull();
		const ul = document.getElementById("roadmap-content-overview-mount");
		expect(ul?.tagName).toBe("UL");
		const active = ul?.querySelector('[aria-selected="true"]');
		expect(active?.textContent).toBe("Python");
	});
});

describe("setActiveSkillItem", () => {
	it("updates selected state and classes", () => {
		const mount = document.createElement("ul");
		document.body.append(mount);
		renderOverviewMount(mount, skills, 0);

		setActiveSkillItem(mount, 1);

		const items = mount.querySelectorAll<HTMLElement>(".roadmap-skill-item");
		expect(items[0]?.getAttribute("aria-selected")).toBe("false");
		expect(items[0]?.tabIndex).toBe(-1);
		expect(items[1]?.getAttribute("aria-selected")).toBe("true");
		expect(items[1]?.tabIndex).toBe(0);
		expect(items[1]?.className).toContain("text-white");
	});
});
