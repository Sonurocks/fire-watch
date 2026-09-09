import { notFound } from "next/navigation";
import { getAllCategoryParams, getCategoryBySlug } from "@/data";
import CategoryPage from "@/components/product/category";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getAllCategoryParams();
}

export default async function DynamicCategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;

  const category = getCategoryBySlug(categorySlug);
  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} categorySlug={categorySlug} />;
}
