import type { Metadata } from "next";
import ProductIndex from "@/components/product";

export const metadata: Metadata = {
  title: "Products | Fire Watch",
  description: "Discover our comprehensive range of advanced fire protection systems and products.",
  openGraph: {
    title: "Products | Fire Watch",
    description: "Discover our comprehensive range of advanced fire protection systems and products.",
    siteName: "Fire Watch",
    type: "website",
  }
};

export default function ProductsPage() {
  return (
    <div>
      <ProductIndex/>
    </div>
  );
}
