"use server";

import type { ActionResponse } from "@/types/action";
import * as attendanceService from "./service";

export async function initializeAttendanceSessionAction(
  payload: Record<string, unknown>,
): Promise<ActionResponse<Record<string, unknown>>> {
  return attendanceService.initializeAttendanceSession(payload);
}

export async function submitAttendanceRegisterAction(
  payload: Record<string, unknown>,
): Promise<ActionResponse<Record<string, unknown>>> {
  return attendanceService.submitAttendanceRegister(payload);
}
