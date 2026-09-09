import { notFound } from "next/navigation";
import { getAllSubCategoryParams, getSubCategoryBySlug } from "@/data";
import SubCategoryListingIndex from "@/components/product/sub-category/listing-index";

interface Props {
  params: Promise<{ category: string; subCategory: string }>;
}

export function generateStaticParams() {
  return getAllSubCategoryParams();
}

export default async function SubCategoryPage({ params }: Props) {
  const { category: categorySlug, subCategory: subCategorySlug } = await params;
  const result = getSubCategoryBySlug(categorySlug, subCategorySlug);
  if (!result) notFound();
  const { subCategory, category } = result;
  return (
    <SubCategoryListingIndex
      category={category}
      subCategory={subCategory}
      products={subCategory.products || []}
      categorySlug={categorySlug}
      subCategorySlug={subCategorySlug}
    />
  );
}
