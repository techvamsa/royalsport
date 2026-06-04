import { notFound } from "next/navigation";
import AccessoryDetail from "@/app/components/AccessoryDetail";
import { getAccessoryBySlug, getRelatedAccessories } from "@/app/libs/accessories";

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const product = getAccessoryBySlug(slug);

  if (!product) {
    return {
      title: "Accessory Not Found | Royal Sports N Fitness",
    };
  }

  return {
    title: product.seo?.meta_title || `${product.title} | Royal Sports N Fitness`,
    description: product.seo?.meta_description || product.description,
  };
};

const AccessoryDetailPage = async ({ params }) => {
  const { slug } = await params;
  const product = getAccessoryBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <AccessoryDetail
      product={product}
      relatedProducts={getRelatedAccessories(product, 4)}
    />
  );
};

export default AccessoryDetailPage;
