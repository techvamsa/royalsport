import rawCategories from "../../category.json";
import rawProducts from "../../product.json";

export const productImageBaseUrl =
  "https://royalsportsnfitness.com/images/Product";

const typeLabels = {
  "Cardio Sectione": "Cardio Machines",
  "Hammer Sectione": "Hammer Machines",
  "Streagth Sectione": "Strength Machines",
};

const typeSlugAliases = {
  "cardio-machine": "cardio-machines",
  "cardio-mation": "cardio-machines",
  "hammer-machine": "hammer-machines",
  "strength-machine": "strength-machines",
  "streagth-machines": "strength-machines",
};

const typeFallbackImages = {
  "Cardio Sectione": "/imgs/equipment/cardio-machine.jpg",
  "Hammer Sectione": "/imgs/equipment/strength-training.jpg",
  "Streagth Sectione": "/imgs/equipment/eq-strength.webp",
};

const categoryFallbackImages = {
  // "Cross Trainer": "/imgs/equipment/e-cardio.webp",
  // "Sky Rower and Water Rower and air rower": "/imgs/equipment/eq-cardio.webp",
  // "Spin Bike": "/imgs/equipment/eq-cardio.webp",
  // Treadmill: "/imgs/equipment/cardio-machine.jpg",
  // "Hammer Series": "/imgs/equipment/strength-training.jpg",
  // "BH Series": "/imgs/equipment/eq-strength.webp",
  // "Dezire Series": "/imgs/equipment/e-strength.webp",
  // "KG Series": "/imgs/equipment/eq-strength.webp",
  // "RS- 5": "/imgs/equipment/e-strength.webp",
  // "RS-7": "/imgs/equipment/strength-training.jpg",
  // "Smart Series": "/imgs/equipment/eq-strength.webp",
  // "Supreme Series": "/imgs/equipment/e-strength.webp",
};

export const slugify = (value = "") =>
  value
    .toString()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getTypeLabel = (type = "") => typeLabels[type] || type || "RSF";

export const getTypeFallbackImage = (type = "") =>
  typeFallbackImages[type] || "/imgs/equipment/eq-functional.webp";

export const getProductFallbackImage = (categoryName = "", type = "") =>
  categoryFallbackImages[categoryName] || getTypeFallbackImage(type);

export const categories = rawCategories.map((category) => ({
  ...category,
  label: category.name,
  typeLabel: getTypeLabel(category.type),
  typeSlug: slugify(getTypeLabel(category.type)),
  slug: slugify(category.name),
}));

export const products = rawProducts.map((product) => {
  const category = product.Category || {};
  const imagePath = product.ProductImage?.[0] || "";
  const categoryName = category.name || "RSF Equipment";
  const type = category.type || "";
  const remoteImageUrl = imagePath
    ? `${productImageBaseUrl}${encodeURI(imagePath)}`
    : "";
  const fallbackImage = getProductFallbackImage(categoryName, type);

  return {
    ...product,
    id: product._id,
    slug: slugify(`${product.ProductName}-${product._id}`),
    name: product.ProductName || "RSF Equipment",
    shortDescription: product.ProductShortDescription || "",
    categoryId: category._id || "",
    categoryName,
    categorySlug: slugify(categoryName),
    type,
    typeLabel: getTypeLabel(type),
    typeSlug: slugify(getTypeLabel(type)),
    imagePath,
    remoteImageUrl,
    imageUrl: remoteImageUrl || fallbackImage,
    fallbackImage,
  };
});

export const typeOptions = Array.from(
  new Map(products.map((product) => [product.type, product.typeLabel]))
).map(([value, label]) => ({
  value,
  label,
  slug: slugify(label),
  count: products.filter((product) => product.type === value).length,
}));

export const categoryOptions = categories.map((category) => ({
  ...category,
  count: products.filter((product) => product.categoryId === category._id).length,
}));

export const productTotals = {
  productCount: products.length,
  categoryCount: categoryOptions.length,
  typeCount: typeOptions.length,
};

export const getProductDescription = (product) =>
  product.shortDescription ||
  `${product.categoryName} equipment built for commercial gyms, fitness clubs, and personal training spaces.`;

export const getTypePath = (typeSlug = "") =>
  typeSlug ? `/product/${typeSlug}` : "/product";

export const getProductPath = (product) =>
  `/product/${product.typeSlug}/${product.slug}`;

export const normalizeTypeSlug = (typeSlug = "") =>
  typeSlugAliases[typeSlug] || typeSlug;

export const findTypeBySlug = (typeSlug = "") =>
  typeOptions.find((type) => type.slug === normalizeTypeSlug(typeSlug));

export const findProductBySlug = (slug = "") =>
  products.find(
    (product) =>
      product.id === slug ||
      product.slug === slug ||
      slugify(product.name) === slug
  );

export const findProductByPath = (typeSlug = "", productSlug = "") => {
  const product = findProductBySlug(productSlug);

  if (!product || product.typeSlug !== normalizeTypeSlug(typeSlug)) {
    return null;
  }

  return product;
};
