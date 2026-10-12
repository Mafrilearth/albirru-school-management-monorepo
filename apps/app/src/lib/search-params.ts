import {
  createLoader,
  createSerializer,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs/server";

/**
 * SD Al-Birru Administrative Portal Type-Safe Search Params
 * Supports TanStack Table filtering, pagination, and sorting synchronization with URL.
 * @see https://nuqs.dev/docs/parsers/community/tanstack-table
 */
export const rosterFilterParsers = {
  search: parseAsString.withDefault(""),
  grade: parseAsInteger.withDefault(1),
  role: parseAsStringEnum([
    "all",
    "admin",
    "teacher",
    "student",
    "guardian",
  ]).withDefault("all"),
  status: parseAsStringEnum(["all", "active", "inactive"]).withDefault(
    "active",
  ),
  page: parseAsInteger.withDefault(1),
  pageSize: parseAsInteger.withDefault(20),
  sortBy: parseAsString.withDefault("created_at"),
  sortOrder: parseAsStringEnum(["asc", "desc"]).withDefault("desc"),
};

export const loadRosterSearchParams = createLoader(rosterFilterParsers);
export const serializeRosterSearchParams =
  createSerializer(rosterFilterParsers);
