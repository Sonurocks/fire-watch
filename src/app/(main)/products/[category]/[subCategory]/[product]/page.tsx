import { notFound } from "next/navigation";
import { getAllProductParams, getProductBySlug } from "@/data";
import ProductDetailIndex from "@/components/product/product-detail";

interface Props {
  params: Promise<{ category: string; subCategory: string; product: string }>;
}

export function generateStaticParams() {
  return getAllProductParams();
}

export default async function ProductDetailPage({ params }: Props) {
  const { category: categorySlug, subCategory: subCategorySlug, product: productSlug } = await params;
  const result = getProductBySlug(categorySlug, subCategorySlug, productSlug);
  if (!result) notFound();
  const { product, subCategory, category } = result;
  return (
    <ProductDetailIndex
      product={product}
      subCategory={subCategory}
      category={category}
      categorySlug={categorySlug}
      subCategorySlug={subCategorySlug}
    />
  );
}
