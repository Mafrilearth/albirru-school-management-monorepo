import { describe, expect, it } from "vitest";
import { uploadDocumentToBlob } from "./blob";

describe("uploadDocumentToBlob", () => {
  it("returns development mock payload when BLOB_READ_WRITE_TOKEN is absent", async () => {
    delete process.env.BLOB_READ_WRITE_TOKEN;
    const dummyBlob = new Blob(["sample content"], {
      type: "application/pdf",
    });

    const result = await uploadDocumentToBlob(
      dummyBlob,
      "admissions/akta-kelahiran.pdf",
    );

    expect(result.url).toBe("/mock-storage/admissions/akta-kelahiran.pdf");
    expect(result.pathname).toBe("admissions/akta-kelahiran.pdf");
    expect(result.contentType).toBe("application/pdf");
  });
});
