import { describe, expect, it } from "vitest";
import { evaluateEdgeSecurity } from "../lib/security/bot-id";

describe("Vercel Edge Security & BotID Evaluation", () => {
  it("allows standard human visitor requests with clean bot scores", () => {
    const req = new Request("http://localhost:3001/admissions", {
      headers: {
        "x-vercel-bot-score": "95",
        "x-vercel-ip-country": "ID",
        "x-forwarded-for": "180.252.10.5",
      },
    });

    const assessment = evaluateEdgeSecurity(req);
    expect(assessment.verdict).toBe("allow");
    expect(assessment.isBotSuspected).toBe(false);
    expect(assessment.country).toBe("ID");
  });

  it("blocks malicious low-score bot traffic", () => {
    const req = new Request("http://localhost:3001/admissions", {
      headers: {
        "x-vercel-bot-score": "5",
        "x-forwarded-for": "198.51.100.1",
      },
    });

    const assessment = evaluateEdgeSecurity(req);
    expect(assessment.verdict).toBe("block");
    expect(assessment.isBotSuspected).toBe(true);
  });
});
