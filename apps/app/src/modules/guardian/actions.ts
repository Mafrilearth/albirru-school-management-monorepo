"use server";

import type { ActionResponse } from "@/types/action";
import * as guardianService from "./service";

export async function queryDependentOverviewAction(): Promise<
  ActionResponse<Record<string, unknown>>
> {
  return guardianService.queryDependentOverview();
}
