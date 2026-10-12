/**
 * SD Al-Birru School Information System (albirru-sis)
 * RFC 9562 UUIDv7 Engineering Suite
 *
 * Implements millisecond-precision Unix Epoch time-based sortable UUIDs (Version 7)
 * as mandated by Section 4.A (Database Layer Invariants) of the AGENTS.md Constitution.
 *
 * Bit Layout (128 bits total):
 * - 00..47 (48 bits): unix_ts_ms (Unix Epoch millisecond timestamp)
 * - 48..51 ( 4 bits): ver = 0111 (Binary 7)
 * - 52..63 (12 bits): rand_a (Sub-millisecond or pseudo-random bits)
 * - 64..65 ( 2 bits): var = 10 (RFC 9562 / RFC 4122 Variant 1)
 * - 66..127 (62 bits): rand_b (Pseudo-random sequence bits)
 *
 * @see https://datatracker.ietf.org/doc/html/rfc9562#name-uuid-version-7
 */

export type UUIDv7GenerationMode = "earliest" | "random" | "latest";

export interface UUIDv7Deconstructed {
  /** The full canonical 36-character hyphenated UUIDv7 string */
  uuid: string;
  /** Extracted 48-bit Unix epoch timestamp in milliseconds */
  timestampMs: number;
  /** JavaScript Date instance representing the UTC timestamp */
  date: Date;
  /** ISO 8601 formatted UTC date string */
  isoString: string;
  /** Structural RFC 9562 component breakdown */
  components: {
    /** 48-bit unix_ts_ms hex string (12 chars) */
    unixTsMsHex: string;
    /** 4-bit version identifier (always 7) */
    version: number;
    /** 12-bit rand_a hex string (3 chars) */
    randAHex: string;
    /** 2-bit variant identifier (always RFC 9562 Variant 1) */
    variant: string;
    /** 62-bit rand_b hex string (16 chars with variant prefix) */
    randBHex: string;
  };
}

const UUIDV7_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Validates whether an arbitrary string is a strictly compliant RFC 9562 UUIDv7.
 */
export function isUUIDv7(value: unknown): value is string {
  return typeof value === "string" && UUIDV7_REGEX.test(value);
}

/**
 * Generates an RFC 9562 UUIDv7 for a specific timestamp.
 *
 * Modes:
 * - 'earliest': Sets rand_a and rand_b bits to 0. Yields the minimum possible UUIDv7 at timestamp.
 *   Ideal for lower-bound indexing range scans (e.g., `WHERE id >= :earliest`).
 * - 'latest': Sets rand_a and rand_b bits to 1. Yields the maximum possible UUIDv7 at timestamp.
 *   Ideal for upper-bound indexing range scans (e.g., `WHERE id <= :latest`).
 * - 'random': Populates rand_a and rand_b with cryptographically secure random bits.
 */
export function generateUUIDv7ForTimestamp(
  timestamp: number | Date,
  mode: UUIDv7GenerationMode = "random",
): string {
  const tsMs =
    timestamp instanceof Date ? timestamp.getTime() : Math.trunc(timestamp);

  if (Number.isNaN(tsMs) || tsMs < 0 || tsMs > 0xffffffffffff) {
    throw new RangeError(
      `Timestamp ${tsMs} is out of RFC 9562 48-bit boundary range (0 to 281474976710655).`,
    );
  }

  // 48-bit timestamp formatted into 12 hexadecimal characters
  const tsHex = tsMs.toString(16).padStart(12, "0");
  const part1 = tsHex.slice(0, 8);
  const part2 = tsHex.slice(8, 12);

  if (mode === "earliest") {
    return `${part1}-${part2}-7000-8000-000000000000`;
  }

  if (mode === "latest") {
    return `${part1}-${part2}-7fff-bfff-ffffffffffff`;
  }

  // Random mode: Generate 10 cryptographically random bytes (80 bits)
  const randomBytes = new Uint8Array(10);
  if (
    typeof globalThis.crypto !== "undefined" &&
    globalThis.crypto.getRandomValues
  ) {
    globalThis.crypto.getRandomValues(randomBytes);
  } else {
    // Fallback for non-web environments
    for (let i = 0; i < randomBytes.length; i++) {
      randomBytes[i] = Math.floor(Math.random() * 256);
    }
  }

  // rand_a: 12 bits from randomBytes[0] and randomBytes[1]
  const randAVal =
    (((randomBytes[0] ?? 0) & 0x0f) << 8) | (randomBytes[1] ?? 0);
  const randAHex = randAVal.toString(16).padStart(3, "0");

  // var: 2 bits (10), followed by 6 random bits from randomBytes[2]
  const varByte = 0x80 | ((randomBytes[2] ?? 0) & 0x3f);
  const varHex = varByte.toString(16).padStart(2, "0");

  // rand_b: remaining 7 bytes (56 bits)
  let randBRemainingHex = "";
  for (let i = 3; i < 10; i++) {
    randBRemainingHex += (randomBytes[i] ?? 0).toString(16).padStart(2, "0");
  }

  const part4 = `${varHex}${randBRemainingHex.slice(0, 2)}`;
  const part5 = randBRemainingHex.slice(2);

  return `${part1}-${part2}-7${randAHex}-${part4}-${part5}`.toLowerCase();
}

/**
 * Extracts and deconstructs timestamp metadata from an existing RFC 9562 UUIDv7.
 */
export function extractTimestampFromUUIDv7(uuid: string): UUIDv7Deconstructed {
  if (!isUUIDv7(uuid)) {
    throw new TypeError(
      `Provided string is not a valid RFC 9562 UUIDv7: "${uuid}"`,
    );
  }

  const cleanHex = uuid.replace(/-/g, "").toLowerCase();
  const unixTsHex = cleanHex.slice(0, 12);
  const timestampMs = Number.parseInt(unixTsHex, 16);
  const date = new Date(timestampMs);

  const randAHex = cleanHex.slice(13, 16);
  const varByte = cleanHex.slice(16, 18);
  const randBHex = cleanHex.slice(16);

  return {
    uuid: uuid.toLowerCase(),
    timestampMs,
    date,
    isoString: date.toISOString(),
    components: {
      unixTsMsHex: unixTsHex,
      version: 7,
      randAHex,
      variant: `RFC 9562 Variant 1 (0x${varByte.slice(0, 1)})`,
      randBHex,
    },
  };
}

/**
 * Calculates deterministic UUIDv7 range boundaries for B-tree index queries.
 *
 * Example:
 * ```ts
 * const [startId, endId] = getUUIDv7TimeRange(new Date("2026-01-01"), new Date("2026-01-31"));
 * // SQL: WHERE id >= startId AND id <= endId (uses primary key B-Tree index with 0 scan overhead)
 * ```
 */
export function getUUIDv7TimeRange(
  start: number | Date,
  end: number | Date,
): [lowerBound: string, upperBound: string] {
  return [
    generateUUIDv7ForTimestamp(start, "earliest"),
    generateUUIDv7ForTimestamp(end, "latest"),
  ];
}

/**
 * Compares two UUIDv7 identifiers by their natural time-sortable order.
 * Returns negative if a < b, 0 if a === b, positive if a > b.
 */
export function compareUUIDv7(a: string, b: string): number {
  return a.localeCompare(b);
}
