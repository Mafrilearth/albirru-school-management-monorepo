import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges standard class names correctly", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("handles conditional falsy and boolean values cleanly", () => {
    expect(
      cn("btn", false && "btn-disabled", null, undefined, "btn-primary"),
    ).toBe("btn btn-primary");
  });

  it("resolves conflicting Tailwind utility classes via tailwind-merge", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("handles arrays and nested class lists", () => {
    expect(cn(["font-bold", ["tracking-wide", false && "hidden"]])).toBe(
      "font-bold tracking-wide",
    );
  });
});
