import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "@albirru/web",
    checks: {
      uptime: "healthy",
      runtime: "edge/node",
    },
  });
}
