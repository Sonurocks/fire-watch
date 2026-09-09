import { Category, SubCategory, Product } from "@/components/product/types";
import { slugify, matchSlug } from "@/lib/slugify";
import productData from "./product.json";

export const categories: Category[] = productData as Category[];


export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => matchSlug(c.name, slug));
}


export function getSubCategoryBySlug(
  categorySlug: string,
  subCategorySlug: string
): { subCategory: SubCategory; category: Category } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;

  const subCategory = (category.subCategories || []).find((s) =>
    matchSlug(s.name, subCategorySlug)
  );
  if (!subCategory) return undefined;

  return { subCategory, category };
}


export function getProductBySlug(
  categorySlug: string,
  subCategorySlug: string,
  productSlug: string
): { product: Product; subCategory: SubCategory; category: Category } | undefined {
  const result = getSubCategoryBySlug(categorySlug, subCategorySlug);
  if (!result) return undefined;

  const { subCategory, category } = result;
  const product = (subCategory.products || []).find((p) =>
    matchSlug(p.name, productSlug)
  );
  if (!product) return undefined;

  return { product, subCategory, category };
}


export function getAllCategoryParams() {
  return categories.map((c) => ({ category: slugify(c.name) }));
}

export function getAllSubCategoryParams() {
  const params: { category: string; subCategory: string }[] = [];
  categories.forEach((c) => {
    (c.subCategories || []).forEach((s) => {
      params.push({ category: slugify(c.name), subCategory: slugify(s.name) });
    });
  });
  return params;
}

export function getAllProductParams() {
  const params: { category: string; subCategory: string; product: string }[] = [];
  categories.forEach((c) => {
    (c.subCategories || []).forEach((s) => {
      (s.products || []).forEach((p) => {
        params.push({
          category: slugify(c.name),
          subCategory: slugify(s.name),
          product: slugify(p.name),
        });
      });
    });
  });
  return params;
}


export function getCategoryById(id: number): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getSubCategoryById(
  id: number
): { subCategory: SubCategory; category: Category } | undefined {
  for (const category of categories) {
    const subCategory = (category.subCategories || []).find((s) => s.id === id);
    if (subCategory) return { subCategory, category };
  }
  return undefined;
}

export function getProductById(
  id: number
): { product: Product; subCategory: SubCategory; category: Category } | undefined {
  for (const category of categories) {
    for (const subCategory of category.subCategories || []) {
      const product = (subCategory.products || []).find((p) => p.id === id);
      if (product) return { product, subCategory, category };
    }
  }
  return undefined;
}

export { slugify };
