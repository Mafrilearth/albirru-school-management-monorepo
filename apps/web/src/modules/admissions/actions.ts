"use server";

import { ActionResponse } from "@/types/action";
import { db } from "@/db";
import { admissionApplications } from "@/db/schema";
import { AdmissionsSubmissionSchema, type AdmissionsSubmissionPayload } from "@/lib/validations/admissions";

// Pseudo rate limit
let requestCount = 0;
let lastRequestTime = Date.now();

export async function submitAdmissionAction(data: AdmissionsSubmissionPayload): Promise<ActionResponse<{ registration_tracking_code: string }>> {
  try {
    // 1. Rate Limiting Placeholder
    const now = Date.now();
    if (now - lastRequestTime > 15 * 60 * 1000) {
      requestCount = 0;
      lastRequestTime = now;
    }
    requestCount++;
    if (requestCount > 5) {
      return {
        is_success: false,
        status_code: 429,
        response_payload: null,
        error_descriptor: {
          code: "TOO_MANY_REQUESTS",
          message: "Frekuensi pendaftaran melampaui batas kuota 5 submisi per 15 menit.",
        }
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
      error_descriptor: null
    };

  } catch (error: unknown) {
    console.error("[Admissions Submission Error]:", error);
    
    return {
      is_success: false,
      status_code: 422,
      response_payload: null,
      error_descriptor: {
        code: "UNPROCESSABLE_CONTENT",
        message: error instanceof Error ? error.message : "Gagal memproses pendaftaran. Silakan coba lagi nanti.",
      }
    };
  }
}
