export interface Document {
  title: string;
  url: string;
  localUrl?: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  image: string | null;
  url: string;
  description: string;
  features: string[];
  documents: Document[];
  images?: ProductImage[];
  listingDescription?: string;
  breadcrumb?: any[];
}

export interface SubCategory {
  id: number;
  name: string;
  image?: string | null;
  url: string;
  products?: Product[];
}

export interface Category {
  id: number;
  name: string;
  image: string | null;
  url: string;
  subCategories: SubCategory[];
}
