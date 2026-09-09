import CategoryHero from "./CategoryHero";
import { CategoryContent } from "./CategoryContent";
import { CategoryPageProps } from "./types";

export default function CategoryPage({ category, categorySlug }: CategoryPageProps) {
  return (
    <main className="flex flex-col bg-bg-light w-full">
      <CategoryHero title={category.name} />
      <CategoryContent category={category} categorySlug={categorySlug} />
    </main>
  );
}

export * from "./constants";
export * from "./types";
