import { expect, it, vi } from "vitest";

const initRoadmapTimeline = vi.fn();

vi.mock("./roadmap-timeline", () => ({
	initRoadmapTimeline,
}));

it("calls initRoadmapTimeline on import", async () => {
	await import("./roadmap-timeline-mount");
	expect(initRoadmapTimeline).toHaveBeenCalledOnce();
});
