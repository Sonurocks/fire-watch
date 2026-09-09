import GridCard from "@/components/shared/GridCard";
import { SubCategoryGridProps } from "./types";
import { SUBCATEGORY_UI_CONSTANTS } from "./constants";

export const SubCategoryGrid = ({
  category,
  buildHref,
}: SubCategoryGridProps & {
  buildHref?: (subCatName: string) => string;
}) => {
  const subCategories = category.subCategories || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {subCategories.map((subCat, index) => {
        const image = subCat.image || subCat.products?.[0]?.image;
        const href = buildHref
          ? buildHref(subCat.name)
          : subCat.url.replace("https://fire-watch.co", "");
        return (
          <GridCard
            key={subCat.id}
            idText={`0${index + 1}`}
            title={subCat.name}
            image={image}
            href={href}
            buttonText={SUBCATEGORY_UI_CONSTANTS.viewMoreText}
          />
        );
      })}
    </div>
  );
};
