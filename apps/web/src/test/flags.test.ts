import { describe, expect, it } from "vitest";
import {
  enableAIChatbot,
  maintenanceMode,
  ppdbWave1Open,
  showRamadhanTheme,
} from "../flags";

describe("Vercel Feature Flags Configuration", () => {
  it("defines core school feature flags with keys and defaults", () => {
    expect(ppdbWave1Open.key).toBe("ppdb-wave-1-open");
    expect(ppdbWave1Open.defaultValue).toBe(true);

    expect(showRamadhanTheme.key).toBe("show-ramadhan-theme");
    expect(showRamadhanTheme.defaultValue).toBe(false);

    expect(enableAIChatbot.key).toBe("enable-ai-chatbot");
    expect(enableAIChatbot.defaultValue).toBe(true);

    expect(maintenanceMode.key).toBe("maintenance-mode");
    expect(maintenanceMode.defaultValue).toBe(false);
  });

  it("provides options for all flags for Vercel Toolbar", () => {
    expect(ppdbWave1Open.options).toHaveLength(2);
    expect(maintenanceMode.options).toHaveLength(2);
  });
});
