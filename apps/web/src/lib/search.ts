import Fuse, { type IFuseOptions } from "fuse.js";

/**
 * Creates a client-side fuzzy search instance powered by Fuse.js.
 * Useful for instant in-memory filtering of student names, curriculum articles, or staff lists.
 */
export function createFuzzySearch<T>(
  data: T[],
  keys: string[],
  options?: IFuseOptions<T>,
): (query: string) => T[] {
  const fuse = new Fuse(data, {
    keys,
    threshold: 0.35,
    ignoreLocation: true,
    ...options,
  });

  return (query: string): T[] => {
    if (!query || query.trim() === "") {
      return data;
    }
    return fuse.search(query).map((result) => result.item);
  };
}
