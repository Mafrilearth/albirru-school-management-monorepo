import { type ApiData, verifyAccess } from "@vercel/flags";
import { type NextRequest, NextResponse } from "next/server";
import * as flags from "@/flags";

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get("Authorization"));
  if (!access)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const definitions: ApiData["definitions"] = {
    [flags.ppdbWave1Open.key]: {
      description: flags.ppdbWave1Open.description,
      defaultValue: flags.ppdbWave1Open.defaultValue,
      options: flags.ppdbWave1Open.options,
    },
    [flags.showRamadhanTheme.key]: {
      description: flags.showRamadhanTheme.description,
      defaultValue: flags.showRamadhanTheme.defaultValue,
      options: flags.showRamadhanTheme.options,
    },
    [flags.enableAIChatbot.key]: {
      description: flags.enableAIChatbot.description,
      defaultValue: flags.enableAIChatbot.defaultValue,
      options: flags.enableAIChatbot.options,
    },
    [flags.maintenanceMode.key]: {
      description: flags.maintenanceMode.description,
      defaultValue: flags.maintenanceMode.defaultValue,
      options: flags.maintenanceMode.options,
    },
  };

  return NextResponse.json<ApiData>({ definitions });
}
