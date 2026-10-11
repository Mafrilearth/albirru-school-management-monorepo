"use server";

import { ActionResponse } from "@/types/action";
import * as gradingService from "./service";

export async function configureAssessmentWeightsAction(payload: Record<string, unknown>): Promise<ActionResponse<Record<string, unknown>>> {
    return gradingService.configureAssessmentWeights(payload);
}

export async function recordStudentGradeAction(payload: Record<string, unknown>): Promise<ActionResponse<Record<string, unknown>>> {
    return gradingService.recordStudentGrade(payload);
}

export async function publishTermReportCardAction(payload: Record<string, unknown>): Promise<ActionResponse<Record<string, unknown>>> {
    return gradingService.publishTermReportCard(payload);
}
