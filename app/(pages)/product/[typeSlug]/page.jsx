import { notFound } from "next/navigation";
import ProductsListingClient from "../../products/ProductsListingClient";
import { findTypeBySlug, typeOptions } from "@/app/libs/productCatalog";
import "@/app/styles/products-listing.scss";

export const generateStaticParams = () =>
  typeOptions.map((type) => ({
    typeSlug: type.slug,
  }));

export const generateMetadata = async ({ params }) => {
  const { typeSlug } = await params;
  const type = findTypeBySlug(typeSlug);

  if (!type) {
    return {
      title: "Equipment Type Not Found | Royal Sports N Fitness",
    };
  }

  return {
    title: `${type.label} | Royal Sports N Fitness`,
    description: `Browse ${type.label.toLowerCase()} from Royal Sports N Fitness.`,
  };
};

const getCategoryParam = (searchParams = {}) => {
  const category = searchParams.category;
  return Array.isArray(category) ? category[0] || "" : category || "";
};

export default async function ProductTypePage({ params, searchParams }) {
  const { typeSlug } = await params;
  const resolvedSearchParams = await searchParams;
  const type = findTypeBySlug(typeSlug);

  if (!type) {
    notFound();
  }

  return (
    <ProductsListingClient
      initialType={type.value}
      initialCategoryParam={getCategoryParam(resolvedSearchParams)}
    />
  );
}
