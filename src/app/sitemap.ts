import { MetadataRoute } from "next";
import {
  getAllCategoryParams,
  getAllSubCategoryParams,
  getAllProductParams,
} from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://firewatchco.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/team",
    "/products",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryRoutes = getAllCategoryParams().map(({ category }) => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const subCategoryRoutes = getAllSubCategoryParams().map(
    ({ category, subCategory }) => ({
      url: `${baseUrl}/products/${category}/${subCategory}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })
  );

  const productRoutes = getAllProductParams().map(
    ({ category, subCategory, product }) => ({
      url: `${baseUrl}/products/${category}/${subCategory}/${product}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  );

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...subCategoryRoutes,
    ...productRoutes,
  ];
}
