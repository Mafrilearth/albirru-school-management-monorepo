import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// In-memory fallback cache for development/testing environments
const memoryCache = new Map<string, { count: number; expiresAt: number }>();

function memoryRateLimit(
  identifier: string,
  limit = 5,
  windowMs = 15 * 60 * 1000,
): { success: boolean; limit: number; remaining: number } {
  const now = Date.now();
  const record = memoryCache.get(identifier);

  if (!record || record.expiresAt < now) {
    memoryCache.set(identifier, { count: 1, expiresAt: now + windowMs });
    return { success: true, limit, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { success: false, limit, remaining: 0 };
  }

  record.count += 1;
  return { success: true, limit, remaining: limit - record.count };
}

let ratelimiter: Ratelimit | null = null;

if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  process.env.UPSTASH_REDIS_REST_URL !== "https://placeholder.upstash.io"
) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  ratelimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "15 m"),
    prefix: "@albirru/web:ratelimit",
    analytics: true,
  });
}

/**
 * Validates request rate limits against Upstash Redis with memory fallback.
 */
export async function checkRateLimit(
  identifier: string,
  limit = 5,
): Promise<{ success: boolean; remaining: number }> {
  if (ratelimiter) {
    try {
      const result = await ratelimiter.limit(identifier);
      return { success: result.success, remaining: result.remaining };
    } catch (error) {
      console.warn(
        "[RateLimit Warning] Upstash Redis unreachable, using fallback memory limiter:",
        error,
      );
    }
  }

  const memResult = memoryRateLimit(identifier, limit);
  return { success: memResult.success, remaining: memResult.remaining };
}
