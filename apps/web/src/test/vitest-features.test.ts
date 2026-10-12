import { uuidv7 } from "uuidv7";
import {
  assertType,
  describe,
  expect,
  expectTypeOf,
  it,
  test,
  vi,
} from "vitest";
import { z } from "zod";

describe("Vitest Core Features & Matchers", () => {
  it("validates equality and object matching", () => {
    const student = {
      id: uuidv7(),
      name: "Muhammad Al-Fatih",
      score: 95.5,
      isEnrolled: true,
      subjects: ["Arabic", "Mathematics", "Science"],
    };

    expect(student.isEnrolled).toBe(true);
    expect(student.name).toEqual("Muhammad Al-Fatih");
    expect(student.subjects).toHaveLength(3);
    expect(student.subjects).toContain("Arabic");
    expect(student.score).toBeGreaterThan(90);
    expect(student.score).toBeCloseTo(95.5, 1);
    expect(student).toMatchObject({
      name: "Muhammad Al-Fatih",
      isEnrolled: true,
    });
  });

  it("validates custom matcher toBeValidUUIDv7", () => {
    const validId = uuidv7();
    const invalidId = "invalid-uuid-format";

    expect(validId).toBeValidUUIDv7();
    expect(invalidId).not.toBeValidUUIDv7();
  });

  it("handles async operations with resolves and rejects", async () => {
    const resolveOperation = async () => "operation_completed";
    const rejectOperation = async () => {
      throw new Error("unauthorized_access");
    };

    await expect(resolveOperation()).resolves.toBe("operation_completed");
    await expect(rejectOperation()).rejects.toThrow("unauthorized_access");
  });

  it("supports snapshot testing via inline snapshots", () => {
    const payload = {
      institutionId: 70010111,
      name: "Al-Birru Primary School",
      status: "Accredited Grade A",
    };

    expect(payload).toMatchInlineSnapshot(`
      {
        "institutionId": 70010111,
        "name": "Al-Birru Primary School",
        "status": "Accredited Grade A",
      }
    `);
  });
});

describe("Vitest Mocking & Spies", () => {
  it("spies on function calls and manipulates return values", () => {
    const mathService = {
      calculateGPA: (scores: number[]) =>
        scores.reduce((a, b) => a + b, 0) / scores.length,
    };

    const spy = vi.spyOn(mathService, "calculateGPA");
    const result = mathService.calculateGPA([90, 85, 95]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith([90, 85, 95]);
    expect(result).toBe(90);

    spy.mockReturnValue(100);
    expect(mathService.calculateGPA([80, 80])).toBe(100);
    spy.mockRestore();
  });

  it("mocks asynchronous functions with mockResolvedValue", async () => {
    const mockFetcher = vi
      .fn<() => Promise<{ status: string }>>()
      .mockResolvedValue({ status: "healthy" });

    const response = await mockFetcher();
    expect(mockFetcher).toHaveBeenCalledTimes(1);
    expect(response.status).toBe("healthy");
  });
});

describe("Vitest Fake Timers & Environment Stubs", () => {
  it("advances fake timers deterministically", () => {
    vi.useFakeTimers();
    let executed = false;

    setTimeout(() => {
      executed = true;
    }, 5000);

    expect(executed).toBe(false);
    vi.advanceTimersByTime(5000);
    expect(executed).toBe(true);
    vi.useRealTimers();
  });

  it("mocks system clock with vi.setSystemTime", () => {
    vi.useFakeTimers();
    const mockDate = new Date("2026-10-12T00:00:00Z");
    vi.setSystemTime(mockDate);

    expect(new Date().toISOString()).toBe("2026-10-12T00:00:00.000Z");
    vi.useRealTimers();
  });

  it("stubs environment variables and globals cleanly", () => {
    vi.stubEnv("SCHOOL_ENVIRONMENT", "staging");
    expect(process.env.SCHOOL_ENVIRONMENT).toBe("staging");

    vi.stubGlobal("__RUNTIME_VERSION__", "19.3.0");
    expect(
      (globalThis as unknown as { __RUNTIME_VERSION__: string })
        .__RUNTIME_VERSION__,
    ).toBe("19.3.0");

    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });
});

describe("Vitest Type Testing", () => {
  it("verifies static types at compilation time", () => {
    interface StudentProfile {
      id: string;
      fullName: string;
      gradeLevel: number;
    }

    const mockProfile: StudentProfile = {
      id: uuidv7(),
      fullName: "Maryam",
      gradeLevel: 3,
    };

    expectTypeOf(mockProfile.id).toBeString();
    expectTypeOf(mockProfile.gradeLevel).toBeNumber();
    assertType<StudentProfile>(mockProfile);
  });
});

describe("Vitest Recipes: vi.waitFor & Schema Assertions", () => {
  it("waits for asynchronous state changes using vi.waitFor", async () => {
    let count = 0;
    setTimeout(() => {
      count = 10;
    }, 50);

    await vi.waitFor(
      () => {
        expect(count).toBe(10);
      },
      { timeout: 500, interval: 20 },
    );
  });

  it("asserts schema-driven constraints with Zod and type narrowing", () => {
    const StudentSchema = z.object({
      id: z.string().uuid(),
      email: z.string().email(),
    });

    const candidate = {
      id: "a0000000-0000-0000-0000-000000000000",
      email: "student@albirru.sch.id",
    };

    const parsed = StudentSchema.safeParse(candidate);
    expect(parsed.success).toBe(true);

    if (parsed.success) {
      expect(parsed.data.email).toContain("@albirru.sch.id");
    }
  });

  test.each([
    [10, 20, 30],
    [5, 15, 20],
    [100, 200, 300],
  ])("test.each parameterized addition: %i + %i = %i", (a, b, expected) => {
    expect(a + b).toBe(expected);
  });
});
