import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";

export async function GET(request: Request) {
  // Verify Vercel Cron authorization header in production
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const timestamp = new Date().toISOString();

    // Summary calculation for SD Al-Birru Admissions Wave 1
    const totalCapacity = 30;
    const reservedSeats = 16;
    const remainingSeats = totalCapacity - reservedSeats;

    logger.info(
      "Vercel Cron: PPDB Daily Summary compiled",
      "cron-ppdb-summary",
      {
        wave: "Gelombang 1 2026/2027",
        totalCapacity,
        reservedSeats,
        remainingSeats,
        timestamp,
      },
    );

    return NextResponse.json({
      status: "ok",
      job: "ppdb-summary",
      data: {
        wave: "Gelombang 1 2026/2027",
        totalCapacity,
        reservedSeats,
        remainingSeats,
        timestamp,
      },
    });
  } catch (error) {
    logger.error(
      "Vercel Cron: PPDB Daily Summary failed",
      "cron-ppdb-summary",
      {
        error: error instanceof Error ? error.message : String(error),
      },
    );

    return NextResponse.json(
      { status: "error", message: "Failed to generate daily PPDB summary" },
      { status: 500 },
    );
  }
}
