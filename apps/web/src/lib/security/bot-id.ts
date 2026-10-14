/**
 * Vercel Edge Security & BotID Inspection Helper
 * Evaluates request reputation using Vercel Edge headers and BotID scoring.
 */

export interface EdgeSecurityAssessment {
  isBotSuspected: boolean;
  botScore: number;
  country: string;
  ip: string;
  verdict: "allow" | "challenge" | "block";
}

export function evaluateEdgeSecurity(request: Request): EdgeSecurityAssessment {
  const headers = request.headers;

  // Read Vercel Edge Security headers
  const botScoreHeader = headers.get("x-vercel-bot-score");
  const botScore = botScoreHeader ? Number.parseInt(botScoreHeader, 10) : 100;
  const country =
    headers.get("x-vercel-ip-country") || headers.get("cf-ipcountry") || "ID";
  const ip =
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "127.0.0.1";

  // Score below 30 indicates high likelihood of automated bot / scraper
  const isBotSuspected = botScore < 30;

  let verdict: "allow" | "challenge" | "block" = "allow";
  if (botScore < 10) {
    verdict = "block";
  } else if (botScore < 40) {
    verdict = "challenge";
  }

  return {
    isBotSuspected,
    botScore,
    country,
    ip,
    verdict,
  };
}
