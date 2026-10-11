import { describe, expect, it } from "vitest";
import { AdmissionsSubmissionSchema } from "./admissions";

describe("AdmissionsSubmissionSchema", () => {
  it("validates valid admission application payload successfully", () => {
    const validPayload = {
      prospectiveStudentName: "Ahmad Dahlan",
      prospectiveStudentBirthDate: "2018-05-12",
      guardianContactName: "Fulan bin Fulan",
      guardianContactPhone: "081234567890",
      guardianContactEmail: "fulan@example.com",
    };

    const result = AdmissionsSubmissionSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("fails when phone number contains non-numeric characters", () => {
    const invalidPayload = {
      prospectiveStudentName: "Ahmad Dahlan",
      prospectiveStudentBirthDate: "2018-05-12",
      guardianContactName: "Fulan bin Fulan",
      guardianContactPhone: "081234abcd",
      guardianContactEmail: "fulan@example.com",
    };

    const result = AdmissionsSubmissionSchema.safeParse(invalidPayload);
    expect(result.success).toBe(false);
  });
});
