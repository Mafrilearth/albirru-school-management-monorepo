import { afterAll, afterEach, beforeAll, beforeEach, expect } from "vitest";

// Extend Vitest expect with custom matchers
expect.extend({
  toBeValidUUIDv7(received: string) {
    const uuidv7Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const pass = typeof received === "string" && uuidv7Regex.test(received);
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid UUIDv7`,
        pass: true,
      };
    }
    return {
      message: () => `expected ${received} to be a valid UUIDv7`,
      pass: false,
    };
  },
});

interface CustomMatchers<R = unknown> {
  toBeValidUUIDv7(): R;
}

declare module "vitest" {
  // biome-ignore lint/suspicious/noExplicitAny: Vitest internal Assertion type signature requires T = any
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

beforeAll(() => {
  // Global test suite setup
});

afterAll(() => {
  // Global test suite teardown
});

beforeEach(() => {
  // Reset environmental mutations before each test
});

afterEach(() => {
  // Clean up any leaked state
});
