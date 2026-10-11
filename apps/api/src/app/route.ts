import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    service: "@albirru/api",
    name: "SD Al-Birru Central API Service",
    version: "0.1.0",
    status: "operational",
    endpoints: {
      health: "/health",
      webhooks: {
        clerk: "/webhooks/clerk",
        resend: "/webhooks/resend",
      },
    },
  });
}
