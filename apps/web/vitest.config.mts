import path from "node:path";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@albirru/design-system": path.resolve(
        import.meta.dirname,
        "../../packages/design-system/src/index.ts",
      ),
      "@albirru/database": path.resolve(
        import.meta.dirname,
        "../../packages/database/src/index.ts",
      ),
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
  optimizeDeps: {
    include: ["clsx", "tailwind-merge", "uuidv7", "zod"],
  },
  test: {
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    environment: "node",
    globals: false,
    clearMocks: true,
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    setupFiles: ["./src/test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
      include: ["src/lib/**/*.ts"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx", "src/test/**"],
    },
    browser: {
      enabled: process.env.VITEST_BROWSER === "true",
      provider: playwright(),
      instances: [{ browser: "chromium" }],
      headless: true,
    },
  },
});
