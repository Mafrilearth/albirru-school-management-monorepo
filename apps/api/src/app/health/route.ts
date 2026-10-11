import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "@albirru/api",
    checks: {
      serverless: "healthy",
      runtime: "node",
    },
  });
}
