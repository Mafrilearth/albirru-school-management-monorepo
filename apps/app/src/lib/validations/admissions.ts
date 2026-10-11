import { z } from "zod";

export const AdmissionsSubmissionSchema = z.object({
  prospectiveStudentName: z
    .string()
    .min(3, "Student name is too short")
    .max(255, "Student name is too long"),
  prospectiveStudentBirthDate: z
    .string()
    .refine((date) => !Number.isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
  guardianContactName: z
    .string()
    .min(3, "Guardian name is too short")
    .max(255, "Guardian name is too long"),
  guardianContactPhone: z
    .string()
    .min(10, "Invalid phone number (minimum 10 digits)")
    .max(32, "Phone number is too long")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
  guardianContactEmail: z
    .string()
    .email("Invalid email address format")
    .max(255),
  submittedDocumentsUrl: z.string().url().optional(),
});

export type AdmissionsSubmissionPayload = z.infer<
  typeof AdmissionsSubmissionSchema
>;
