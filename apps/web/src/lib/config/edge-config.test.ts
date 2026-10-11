import { describe, expect, it } from "vitest";
import { getSchoolRuntimeConfig } from "./edge-config";

describe("getSchoolRuntimeConfig", () => {
  it("returns default configuration when EDGE_CONFIG environment variable is not defined", async () => {
    delete process.env.EDGE_CONFIG;
    const config = await getSchoolRuntimeConfig();

    expect(config.isMaintenanceMode).toBe(false);
    expect(config.isAdmissionsOpen).toBe(true);
    expect(config.admissionsBatchName).toBe("Gelombang 1 (2025/2026)");
  });
});
