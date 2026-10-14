import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";

export async function GET(request: Request) {
  // Verify Vercel Cron authorization header in production
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const startTime = Date.now();

  try {
    // Ping check: keep serverless database & edge functions warm
    const timestamp = new Date().toISOString();
    const durationMs = Date.now() - startTime;

    logger.info(
      "Vercel Cron: Keep-alive ping executed successfully",
      "cron-keep-alive",
      {
        durationMs,
        timestamp,
        status: "warm",
      },
    );

    return NextResponse.json({
      status: "ok",
      job: "keep-alive",
      timestamp,
      durationMs,
    });
  } catch (error) {
    logger.error("Vercel Cron: Keep-alive ping failed", "cron-keep-alive", {
      error: error instanceof Error ? error.message : String(error),
    });

    return NextResponse.json(
      { status: "error", message: "Keep-alive job encountered an error" },
      { status: 500 },
    );
  }
}
