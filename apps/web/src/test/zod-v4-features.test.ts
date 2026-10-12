import { uuidv7 } from "uuidv7";
import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("Zod 4.6 Breakthrough Features & Invariants", () => {
  it("compiles schemas with z.compile for high-throughput AOT validation", () => {
    const StudentSchema = z.object({
      id: z.string().uuid(),
      fullName: z.string().min(3),
      tahfidzJuzCount: z.number().int().min(0).max(30),
    });

    const CompiledStudent = z.compile(StudentSchema);

    const validPayload = {
      id: uuidv7(),
      fullName: "Ahmad Dahlan",
      tahfidzJuzCount: 3,
    };

    const parsed = CompiledStudent.parse(validPayload);
    expect(parsed.fullName).toBe("Ahmad Dahlan");
    expect(parsed.tahfidzJuzCount).toBe(3);

    expect(() =>
      CompiledStudent.parse({
        id: "invalid-uuid",
        fullName: "Al",
        tahfidzJuzCount: 35,
      }),
    ).toThrow();
  });

  it("supports bidirectional codecs with z.codec for serialization/deserialization", () => {
    const stringToURLCodec = z.codec(z.string().url(), z.instanceof(URL), {
      decode: (urlString) => new URL(urlString),
      encode: (url) => url.href,
    });

    const rawUrl = "https://sd-albirru.sch.id/admissions";
    const decoded = z.decode(stringToURLCodec, rawUrl);
    expect(decoded).toBeInstanceOf(URL);
    expect(decoded.pathname).toBe("/admissions");

    const encoded = z.encode(stringToURLCodec, decoded);
    expect(encoded).toBe(rawUrl);
  });

  it("generates native JSON Schema via z.toJSONSchema with metadata support", () => {
    const registry = z.registry<{ description: string }>();

    const CurriculumSchema = z
      .object({
        code: z
          .string()
          .meta({ title: "Curriculum Code", description: "Unique identifier" }),
        name: z.string(),
        credits: z.number().int().positive(),
      })
      .register(registry, {
        description: "Al-Birru Primary Islamic Curriculum",
      });

    const jsonSchema = z.toJSONSchema(CurriculumSchema);

    expect(jsonSchema.type).toBe("object");
    expect(jsonSchema.properties).toBeDefined();
    expect(jsonSchema.properties?.code).toMatchObject({
      type: "string",
      title: "Curriculum Code",
      description: "Unique identifier",
    });
  });

  it("handles unified error customization and z.treeifyError formatting", () => {
    const EnrollmentSchema = z.object({
      nationalId: z
        .string({ error: "National ID is required" })
        .length(16, { error: "Must be exactly 16 digits" }),
      age: z
        .number({ error: "Age must be a valid number" })
        .min(6, { error: "Minimum enrollment age is 6 years" }),
    });

    const result = EnrollmentSchema.safeParse({
      nationalId: "123",
      age: 4,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const tree = z.treeifyError(result.error);
      expect(tree).toBeDefined();
      expect(result.error.issues.length).toBe(2);
      expect(result.error.issues[0]?.message).toBe("Must be exactly 16 digits");
      expect(result.error.issues[1]?.message).toBe(
        "Minimum enrollment age is 6 years",
      );
    }
  });

  it("supports early abort in refinements with abort: true", () => {
    let secondCheckExecuted = false;

    const StrictValidationSchema = z
      .string()
      .refine((val) => val.length >= 5, { error: "Too short", abort: true })
      .refine(
        (val) => {
          secondCheckExecuted = true;
          return val.startsWith("AL-");
        },
        { error: "Must start with AL-" },
      );

    const result = StrictValidationSchema.safeParse("ab");
    expect(result.success).toBe(false);
    expect(secondCheckExecuted).toBe(false);
  });
});
