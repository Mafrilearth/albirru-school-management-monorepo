import { describe, expect, it } from "vitest";
import { GET as healthHandler } from "@/app/api/health/route";
import { env } from "@/env";
import { logger } from "@/lib/logger";
import { checkRateLimit } from "@/lib/rate-limit";
import { createFuzzySearch } from "@/lib/search";

describe("Next-Forge Non-Tech-Stack Invariants", () => {
  it("validates type-safe environment variables via env.ts", () => {
    expect(env).toBeDefined();
    expect(typeof env.NEXT_PUBLIC_SITE_URL).toBe("string");
    expect(env.NODE_ENV).toMatch(/^(development|test|production)$/);
  });

  it("returns 200 OK from standard healthcheck endpoint", async () => {
    const response = await healthHandler();
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.status).toBe("ok");
    expect(data.service).toBe("@albirru/web");
    expect(data.checks.uptime).toBe("healthy");
    expect(data.timestamp).toBeDefined();
  });

  it("handles rate limiting properly with memory fallback", async () => {
    const testId = `test-unit-${Date.now()}`;
    const result1 = await checkRateLimit(testId, 2);
    expect(result1.success).toBe(true);

    const result2 = await checkRateLimit(testId, 2);
    expect(result2.success).toBe(true);

    // 3rd hit should exceed limit of 2
    const result3 = await checkRateLimit(testId, 2);
    expect(result3.success).toBe(false);
  });

  it("performs fuzzy client search using Fuse.js helper", () => {
    const students = [
      { id: "1", name: "Muhammad Al-Fatih", grade: "1A" },
      { id: "2", name: "Aisyah Humaira", grade: "1B" },
      { id: "3", name: "Zaid bin Haritsah", grade: "2A" },
    ];

    const searchStudent = createFuzzySearch(students, ["name", "grade"]);
    const results = searchStudent("fatih");
    expect(results).toHaveLength(1);
    expect(results[0].name).toBe("Muhammad Al-Fatih");
  });

  it("formats structured logs without throwing", () => {
    expect(() => {
      logger.info("Test log entry", "test-module", { foo: "bar" });
    }).not.toThrow();
  });
});
