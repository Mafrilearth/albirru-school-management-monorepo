import {
  createLoader,
  createSerializer,
  parseAsArrayOf,
  parseAsBoolean,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs/server";

/**
 * SD Al-Birru Type-Safe Search Params Parsers for News & Institutional Articles
 * @see https://nuqs.dev/docs/parsers/built-in
 */
export const newsFilterParsers = {
  q: parseAsString.withDefault(""),
  category: parseAsStringEnum([
    "all",
    "academics",
    "tahfidz",
    "achievements",
    "announcements",
  ]).withDefault("all"),
  page: parseAsInteger.withDefault(1),
  tags: parseAsArrayOf(parseAsString).withDefault([]),
  featuredOnly: parseAsBoolean.withDefault(false),
};

export const loadNewsSearchParams = createLoader(newsFilterParsers);
export const serializeNewsSearchParams = createSerializer(newsFilterParsers);
