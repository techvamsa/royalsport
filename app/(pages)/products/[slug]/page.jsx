import { notFound, redirect } from "next/navigation";
import {
  findProductBySlug,
  getProductDescription,
  getProductPath,
  products,
} from "@/app/libs/productCatalog";

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const product = findProductBySlug(slug);

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

export const generateStaticParams = () =>
  products.map((product) => ({
    slug: product.id,
  }));

export default async function LegacyProductDetailPage({ params }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  redirect(getProductPath(product));
}
