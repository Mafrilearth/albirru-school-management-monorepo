import { describe, expect, it } from "vitest";
import { GET as keepAliveHandler } from "../app/api/cron/keep-alive/route";
import { GET as ppdbSummaryHandler } from "../app/api/cron/ppdb-summary/route";

describe("Vercel Cron Jobs Endpoints", () => {
  it("executes keep-alive cron job successfully without auth in local testing", async () => {
    const req = new Request("http://localhost:3001/api/cron/keep-alive");
    const res = await keepAliveHandler(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.status).toBe("ok");
    expect(data.job).toBe("keep-alive");
  });

  it("executes ppdb-summary cron job and returns remaining quota data", async () => {
    const req = new Request("http://localhost:3001/api/cron/ppdb-summary");
    const res = await ppdbSummaryHandler(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.status).toBe("ok");
    expect(data.data.remainingSeats).toBe(14);
  });
});
