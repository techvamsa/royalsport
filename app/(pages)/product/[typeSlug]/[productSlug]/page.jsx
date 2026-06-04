import { notFound } from "next/navigation";
import ProductDetailContent from "../../ProductDetailContent";
import {
  findProductByPath,
  getProductDescription,
  products,
} from "@/app/libs/productCatalog";
import "@/app/styles/products-listing.scss";

export const generateStaticParams = () =>
  products.map((product) => ({
    typeSlug: product.typeSlug,
    productSlug: product.slug,
  }));

export const generateMetadata = async ({ params }) => {
  const { typeSlug, productSlug } = await params;
  const product = findProductByPath(typeSlug, productSlug);

  if (!product) {
    return {
      title: "Product Not Found | Royal Sports N Fitness",
    };
  }

  return {
    title: `${product.name} | Royal Sports N Fitness`,
    description: getProductDescription(product),
  };
};

export default async function ProductDetailPage({ params }) {
  const { typeSlug, productSlug } = await params;
  const product = findProductByPath(typeSlug, productSlug);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
