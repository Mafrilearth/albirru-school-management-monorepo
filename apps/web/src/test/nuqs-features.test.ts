import { createLoader, createParser } from "nuqs/server";
import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  loadNewsSearchParams,
  serializeNewsSearchParams,
} from "../lib/search-params";

describe("Nuqs Type-Safe Search Params Suite", () => {
  it("parses valid URL search parameters on the server side using loadNewsSearchParams", async () => {
    const searchParams = {
      q: "tahfidz",
      category: "tahfidz",
      page: "3",
      tags: "quran,sanad",
      featuredOnly: "true",
    };

    const parsed = await loadNewsSearchParams(searchParams);

    expect(parsed.q).toBe("tahfidz");
    expect(parsed.category).toBe("tahfidz");
    expect(parsed.page).toBe(3);
    expect(parsed.tags).toEqual(["quran", "sanad"]);
    expect(parsed.featuredOnly).toBe(true);
  });

  it("falls back gracefully to configured defaults when search params are empty or missing", async () => {
    const emptyParams = {};

    const parsed = await loadNewsSearchParams(emptyParams);

    expect(parsed.q).toBe("");
    expect(parsed.category).toBe("all");
    expect(parsed.page).toBe(1);
    expect(parsed.tags).toEqual([]);
    expect(parsed.featuredOnly).toBe(false);
  });

  it("handles malformed inputs by recovering with default values", async () => {
    const malformedParams = {
      page: "not-a-number",
      category: "unrecognized-category",
      featuredOnly: "not-a-bool",
    };

    const parsed = await loadNewsSearchParams(malformedParams);

    expect(parsed.page).toBe(1);
    expect(parsed.category).toBe("all");
    expect(parsed.featuredOnly).toBe(false);
  });

  it("serializes search params into canonical query strings using createSerializer", () => {
    const query = serializeNewsSearchParams("/news", {
      q: "science",
      category: "academics",
      page: 2,
      tags: ["stem", "nature"],
      featuredOnly: true,
    });

    expect(query).toContain("/news?");
    expect(query).toContain("q=science");
    expect(query).toContain("category=academics");
    expect(query).toContain("page=2");
    expect(query).toContain("tags=stem,nature");
    expect(query).toContain("featuredOnly=true");
  });

  it("supports custom Zod-validated search parameter parsers", async () => {
    const FilterSchema = z.object({
      minGrade: z.number().int().min(1).max(6),
      term: z.string().min(2),
    });

    const zodFilterParser = createParser({
      parse(queryValue) {
        try {
          const parsedJson = JSON.parse(queryValue);
          const validated = FilterSchema.safeParse(parsedJson);
          return validated.success ? validated.data : null;
        } catch {
          return null;
        }
      },
      serialize(value) {
        return JSON.stringify(value);
      },
    }).withDefault({ minGrade: 1, term: "all" });

    const loader = createLoader({ filter: zodFilterParser });

    // Valid JSON parameter
    const validResult = await loader({
      filter: JSON.stringify({ minGrade: 3, term: "arabic" }),
    });
    expect(validResult.filter).toEqual({ minGrade: 3, term: "arabic" });

    // Invalid JSON parameter -> recovers to default
    const invalidResult = await loader({
      filter: JSON.stringify({ minGrade: 99, term: "x" }), // invalid minGrade
    });
    expect(invalidResult.filter).toEqual({ minGrade: 1, term: "all" });
  });
});
