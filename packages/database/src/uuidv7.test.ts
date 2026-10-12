import { describe, expect, it } from "vitest";
import {
  compareUUIDv7,
  extractTimestampFromUUIDv7,
  generateUUIDv7ForTimestamp,
  getUUIDv7TimeRange,
  isUUIDv7,
} from "./uuidv7";

describe("RFC 9562 UUIDv7 Engineering Suite", () => {
  const sampleDate = new Date("2026-10-12T09:12:04.123Z");
  const sampleTsMs = sampleDate.getTime();

  it("generates compliant earliest, random, and latest UUIDv7 for a given timestamp", () => {
    const earliest = generateUUIDv7ForTimestamp(sampleDate, "earliest");
    const random = generateUUIDv7ForTimestamp(sampleDate, "random");
    const latest = generateUUIDv7ForTimestamp(sampleDate, "latest");

    expect(isUUIDv7(earliest)).toBe(true);
    expect(isUUIDv7(random)).toBe(true);
    expect(isUUIDv7(latest)).toBe(true);

    // Structural invariants
    // Version 7
    expect(earliest.charAt(14)).toBe("7");
    expect(random.charAt(14)).toBe("7");
    expect(latest.charAt(14)).toBe("7");

    // Variant 1 (hex character 8, 9, a, or b)
    expect(["8", "9", "a", "b"]).toContain(earliest.charAt(19).toLowerCase());
    expect(["8", "9", "a", "b"]).toContain(random.charAt(19).toLowerCase());
    expect(["8", "9", "a", "b"]).toContain(latest.charAt(19).toLowerCase());

    // Boundary invariants: earliest ends in zeros, latest in f's
    expect(earliest).toMatch(/-7000-8000-000000000000$/);
    expect(latest).toMatch(/-7fff-bfff-ffffffffffff$/);
  });

  it("preserves strict monotonic ordering (earliest <= random <= latest)", () => {
    const earliest = generateUUIDv7ForTimestamp(sampleDate, "earliest");
    const random = generateUUIDv7ForTimestamp(sampleDate, "random");
    const latest = generateUUIDv7ForTimestamp(sampleDate, "latest");

    expect(compareUUIDv7(earliest, random)).toBeLessThan(0);
    expect(compareUUIDv7(random, latest)).toBeLessThan(0);
    expect(compareUUIDv7(earliest, latest)).toBeLessThan(0);
  });

  it("orders IDs chronologically across different timestamps", () => {
    const datePast = new Date("2026-01-01T00:00:00Z");
    const dateFuture = new Date("2026-12-31T23:59:59Z");

    const idPast = generateUUIDv7ForTimestamp(datePast);
    const idFuture = generateUUIDv7ForTimestamp(dateFuture);

    expect(compareUUIDv7(idPast, idFuture)).toBeLessThan(0);
  });

  it("extracts and deconstructs exact millisecond timestamps from UUIDv7", () => {
    const generated = generateUUIDv7ForTimestamp(sampleDate, "random");
    const deconstructed = extractTimestampFromUUIDv7(generated);

    expect(deconstructed.timestampMs).toBe(sampleTsMs);
    expect(deconstructed.date.toISOString()).toBe("2026-10-12T09:12:04.123Z");
    expect(deconstructed.components.version).toBe(7);
    expect(deconstructed.components.variant).toContain("RFC 9562 Variant 1");
    expect(deconstructed.components.unixTsMsHex).toBe(
      sampleTsMs.toString(16).padStart(12, "0"),
    );
  });

  it("generates deterministic time-range boundaries for SQL queries", () => {
    const startDate = new Date("2026-10-01T00:00:00Z");
    const endDate = new Date("2026-10-31T23:59:59.999Z");

    const [lowerBound, upperBound] = getUUIDv7TimeRange(startDate, endDate);

    expect(isUUIDv7(lowerBound)).toBe(true);
    expect(isUUIDv7(upperBound)).toBe(true);
    expect(compareUUIDv7(lowerBound, upperBound)).toBeLessThan(0);

    // Any ID generated within October 2026 falls within bounds
    const midMonthId = generateUUIDv7ForTimestamp(
      new Date("2026-10-15T12:00:00Z"),
    );
    expect(compareUUIDv7(midMonthId, lowerBound)).toBeGreaterThanOrEqual(0);
    expect(compareUUIDv7(midMonthId, upperBound)).toBeLessThanOrEqual(0);
  });

  it("rejects non-UUIDv7 strings during extraction and validation", () => {
    expect(isUUIDv7("not-a-uuid")).toBe(false);
    expect(isUUIDv7("a0000000-0000-4000-8000-000000000000")).toBe(false); // UUIDv4, not v7

    expect(() => extractTimestampFromUUIDv7("invalid-uuid-string")).toThrow(
      TypeError,
    );
  });
});
