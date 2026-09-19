import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "happy-dom",
		coverage: {
			provider: "v8",
			reporter: ["text", "lcov"],
			include: ["src/scripts/**/*.ts"],
			exclude: ["**/*.test.ts"],
			thresholds: {
				lines: 80,
				functions: 80,
				statements: 80,
				branches: 80,
			},
		},
	},
});
