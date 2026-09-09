/**
 * Converts a name string into a URL-safe slug.
 * Example: "Intelligent system" → "intelligent-system"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Finds a match by comparing a slug against a name field.
 */
export function matchSlug(name: string, slug: string): boolean {
  return slugify(name) === slug;
}
