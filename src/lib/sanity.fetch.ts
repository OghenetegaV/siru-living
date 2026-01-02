import { sanityClient } from "./sanity.client";

export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>;
}): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}
