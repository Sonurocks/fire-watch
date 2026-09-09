export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "intelligent-system": "Advanced addressable fire detection solutions designed for precise monitoring, faster response, and flexible system integration.",
  "conventional-system": "Reliable fire detection systems designed to provide dependable monitoring and straightforward protection for a wide range of applications.",
  "gas-releasing-system": "Specialized releasing systems designed to detect fire conditions and support the controlled activation of fixed firefighting installations."
};

export const SUBCATEGORY_DESCRIPTIONS: Record<string, string> = {
  "control-panels": "Explore our range of intelligent fire alarm control panels",
};

export function getCategoryDescription(slug: string): string {
  return CATEGORY_DESCRIPTIONS[slug] || "Explore our complete range of fire protection solutions.";
}

export function getSubCategoryDescription(slug: string): string {
  return SUBCATEGORY_DESCRIPTIONS[slug] || "Explore our complete range of fire protection solutions.";
}
