"use server";

import { admissionApplications, db } from "@albirru/database";
import { logger } from "@/lib/logger";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  type AdmissionsSubmissionPayload,
  AdmissionsSubmissionSchema,
} from "@/lib/validations/admissions";
import type { ActionResponse } from "@/types/action";

export async function submitAdmissionAction(
  data: AdmissionsSubmissionPayload,
): Promise<ActionResponse<{ registration_tracking_code: string }>> {
  try {
    // 1. Rate Limiting via Upstash Redis (5 submissions per 15 min per contact phone/email)
    const rateLimitIdentifier = `admissions:${data.guardianContactPhone || "anon"}`;
    const rateCheck = await checkRateLimit(rateLimitIdentifier, 5);

    if (!rateCheck.success) {
      return {
        is_success: false,
        status_code: 429,
        response_payload: null,
        error_descriptor: {
          code: "TOO_MANY_REQUESTS",
          message:
            "Submission rate limit exceeded. Maximum 5 submissions allowed per 15 minutes.",
        },
      };
    }

    // 2. Validate payload via Zod
    const parsedData = AdmissionsSubmissionSchema.parse(data);

    // 3. Generate tracking code
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `ADM-${dateStr}-${randomSuffix}`;

    // 4. Database Insertion
    await db.insert(admissionApplications).values({
      registrationTrackingCode: trackingCode,
      prospectiveStudentName: parsedData.prospectiveStudentName,
      prospectiveStudentBirthDate: parsedData.prospectiveStudentBirthDate,
      guardianContactName: parsedData.guardianContactName,
      guardianContactPhone: parsedData.guardianContactPhone,
      guardianContactEmail: parsedData.guardianContactEmail,
      submittedDocumentsUrl: parsedData.submittedDocumentsUrl,
    });

    // 5. Return strict contract
    return {
      is_success: true,
      status_code: 200,
      response_payload: { registration_tracking_code: trackingCode },
      error_descriptor: null,
    };
  } catch (error: unknown) {
    logger.error(
      error instanceof Error ? error.message : "Admissions submission failed",
      "admissions",
      { error },
    );

    return {
      is_success: false,
      status_code: 422,
      response_payload: null,
      error_descriptor: {
        code: "UNPROCESSABLE_CONTENT",
        message:
          error instanceof Error
            ? error.message
            : "Failed to process admission registration. Please try again later.",
      },
    };
  }
}
