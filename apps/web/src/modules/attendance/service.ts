import { ActionResponse } from "@/types/action";

export async function initializeAttendanceSession(payload: Record<string, unknown>): Promise<ActionResponse<Record<string, unknown>>> {
  return {
    is_success: true,
    status_code: 200,
    response_payload: payload,
    error_descriptor: null,
  };
}

export async function submitAttendanceRegister(payload: Record<string, unknown>): Promise<ActionResponse<Record<string, unknown>>> {
  return {
    is_success: true,
    status_code: 200,
    response_payload: payload,
    error_descriptor: null,
  };
}
