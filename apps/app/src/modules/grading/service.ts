import type { ActionResponse } from "@/types/action";

export async function configureAssessmentWeights(
  payload: Record<string, unknown>,
): Promise<ActionResponse<Record<string, unknown>>> {
  return {
    is_success: true,
    status_code: 200,
    response_payload: payload,
    error_descriptor: null,
  };
}

export async function recordStudentGrade(
  payload: Record<string, unknown>,
): Promise<ActionResponse<Record<string, unknown>>> {
  return {
    is_success: true,
    status_code: 200,
    response_payload: payload,
    error_descriptor: null,
  };
}

export async function publishTermReportCard(
  payload: Record<string, unknown>,
): Promise<ActionResponse<Record<string, unknown>>> {
  return {
    is_success: true,
    status_code: 200,
    response_payload: payload,
    error_descriptor: null,
  };
}
