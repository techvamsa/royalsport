import ProductsListingClient from "../products/ProductsListingClient";
import "@/app/styles/products-listing.scss";

export const metadata = {
  title: "Gym Equipment Range | Royal Sports N Fitness",
  description:
    "Browse all Royal Sports N Fitness gym equipment by cardio, hammer, and strength categories.",
};

const getCategoryParam = (searchParams = {}) => {
  const category = searchParams.category;
  return Array.isArray(category) ? category[0] || "" : category || "";
};

export default async function ProductPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  return (
    <ProductsListingClient
      initialCategoryParam={getCategoryParam(resolvedSearchParams)}
    />
  );
}
