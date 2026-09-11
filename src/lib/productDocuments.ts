import { Document } from "@/components/product/types";

export const USE_LOCAL_DOCUMENTS = true;

export function getDocumentUrl(document: Document): string {
  if (USE_LOCAL_DOCUMENTS && document.localUrl) {
    return document.localUrl;
  }
  return document.url;
}
