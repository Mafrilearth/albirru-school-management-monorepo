import { get } from "@vercel/edge-config";

export interface SchoolRuntimeConfig {
  isMaintenanceMode: boolean;
  maintenanceMessage?: string;
  isAdmissionsOpen: boolean;
  admissionsBatchName?: string;
}

const DEFAULT_CONFIG: SchoolRuntimeConfig = {
  isMaintenanceMode: false,
  isAdmissionsOpen: true,
  admissionsBatchName: "Gelombang 1 (2025/2026)",
};

/**
 * Reads dynamic runtime configuration from Vercel Edge Config with zero-latency (< 5ms).
 * Gracefully falls back to default values if EDGE_CONFIG is not yet provisioned.
 */
export async function getSchoolRuntimeConfig(): Promise<SchoolRuntimeConfig> {
  if (!process.env.EDGE_CONFIG) {
    return DEFAULT_CONFIG;
  }

  try {
    const config = await get<SchoolRuntimeConfig>("school_config");
    return config ?? DEFAULT_CONFIG;
  } catch {
    return DEFAULT_CONFIG;
  }
}
