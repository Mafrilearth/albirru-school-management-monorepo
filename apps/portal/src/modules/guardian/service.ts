import { ActionResponse } from "@/types/action";

export async function queryDependentOverview(): Promise<ActionResponse<Record<string, unknown>>> {
  return {
    is_success: true,
    status_code: 200,
    response_payload: {},
    error_descriptor: null,
  };
}
