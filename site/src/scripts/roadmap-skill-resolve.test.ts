import { describe, expect, it } from "vitest";
import {
	DEFAULT_GITHUB_HREF,
	DEFAULT_GITHUB_LABEL,
	DEFAULT_LINK_LABEL,
	DEFAULT_PROFESSIONAL,
	DEFAULT_PROJECT,
	resolveSkillDetails,
} from "./roadmap-skill-resolve";

describe("resolveSkillDetails", () => {
	it("uses skill fields when they are present", () => {
		const resolved = resolveSkillDetails({
			label: "Kubernetes",
			professional: "Ran clusters in prod",
			project: "Cluster bootstrap",
			link: { label: "Repo", href: "https://github.com/example/k8s" },
		});

		expect(resolved).toMatchObject({
			professional: "Ran clusters in prod",
			project: "Cluster bootstrap",
			linkLabel: "Repo",
			linkHref: "https://github.com/example/k8s",
			showProject: true,
			showLink: true,
		});
	});

	it("falls back to node defaults when skill fields are empty", () => {
		const resolved = resolveSkillDetails(
			{ label: "Terraform", professional: "  ", project: "" },
			{
				professional: "IaC at work",
				project: "Module library",
				link: { label: "Modules", href: "/infra" },
			},
		);

		expect(resolved.professional).toBe("IaC at work");
		expect(resolved.project).toBe("Module library");
		expect(resolved.linkLabel).toBe("Modules");
		expect(resolved.linkHref).toBe("/infra");
	});

	it("uses global defaults when skill and node values are missing", () => {
		const resolved = resolveSkillDetails({ label: "Linux" });

		expect(resolved.professional).toBe(DEFAULT_PROFESSIONAL);
		expect(resolved.project).toBe(DEFAULT_PROJECT);
		expect(resolved.linkHref).toBe(DEFAULT_GITHUB_HREF);
		expect(resolved.linkLabel).toBe(DEFAULT_GITHUB_LABEL);
	});

	it("treats empty and hash hrefs as unusable and uses the GitHub default", () => {
		const emptyHref = resolveSkillDetails(
			{ label: "Git", link: { href: "   " } },
			{ link: { href: "#" } },
		);

		expect(emptyHref.linkHref).toBe(DEFAULT_GITHUB_HREF);
		expect(emptyHref.linkLabel).toBe(DEFAULT_GITHUB_LABEL);
	});

	it("uses the explicit-link label default when href is usable but unlabeled", () => {
		const resolved = resolveSkillDetails({
			label: "CI",
			link: { href: "https://github.com/khartson/ci" },
		});

		expect(resolved.linkHref).toBe("https://github.com/khartson/ci");
		expect(resolved.linkLabel).toBe(DEFAULT_LINK_LABEL);
	});
});
