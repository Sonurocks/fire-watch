import { Product, Category, SubCategory } from "@/components/product/types";
import { categories } from "@/data";
import { slugify } from "@/lib/slugify";

export interface SearchResult {
  product: Product;
  category: Category;
  subCategory: SubCategory;
  productSlug: string;
  categorySlug: string;
  subCategorySlug: string;
  displayName: string;
  partNumber: string | null;
  image: string | null;
}

export function parseProductTitle(name: string): { displayName: string; partNumber: string | null } {
  const match = name.match(/^(.*?)\s+(\([^)]+\)|\bFW[-\w\d]+)$/i);
  if (match) {
    return {
      displayName: match[1].trim(),
      partNumber: match[2].trim(),
    };
  }
  return { displayName: name, partNumber: null };
}

let searchIndex: SearchResult[] | null = null;

function buildSearchIndex(): SearchResult[] {
  if (searchIndex) return searchIndex;

  const index: SearchResult[] = [];
  categories.forEach((category) => {
    const categorySlug = slugify(category.name);
    
    (category.subCategories || []).forEach((subCategory) => {
      const subCategorySlug = slugify(subCategory.name);
      
      (subCategory.products || []).forEach((product) => {
        const productSlug = slugify(product.name);
        const { displayName, partNumber } = parseProductTitle(product.name);
        
        index.push({
          product,
          category,
          subCategory,
          productSlug,
          categorySlug,
          subCategorySlug,
          displayName,
          partNumber,
          image: product.image,
        });
      });
    });
  });
  
  searchIndex = index;
  return searchIndex;
}

export function searchProducts(query: string, limit = 8): SearchResult[] {
  if (!query || query.trim().length === 0) return [];
  
  const lowerQuery = query.toLowerCase().trim();
  const index = buildSearchIndex();
  
  const results = index.filter((item) => {
    if (item.displayName.toLowerCase().includes(lowerQuery)) return true;
    if (item.partNumber && item.partNumber.toLowerCase().includes(lowerQuery)) return true;
    if (item.product.name.toLowerCase().includes(lowerQuery)) return true;
    if (item.product.description?.toLowerCase().includes(lowerQuery)) return true;
    
    return false;
  });
  
  return results.slice(0, limit);
}
