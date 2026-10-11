import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Temporarily prevent crash if DATABASE_URL is not provided during development UI builds
const connectionString =
  process.env.DATABASE_URL ||
  "postgres://placeholder:password@localhost:5432/placeholder";

const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
export * from "./schema";
export * from "drizzle-orm";
