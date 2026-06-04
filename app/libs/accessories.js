import accessoriesData from "../../accessories.json";

const FALLBACK_ACCESSORY_IMAGE = "/imgs/equipment/eq-functional.webp";

const sortLabels = {
  price_asc: "Price: Low to High",
  price_desc: "Price: High to Low",
  rating_desc: "Top Rated",
  newest: "Newest",
  bestseller: "Bestsellers",
  discount_desc: "Best Discount",
};

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);

const buildSearchText = (product) =>
  [
    product.title,
    product.brand,
    product.category,
    product.subcategory,
    product.sku,
    product.asin,
    product.description,
    ...(product.tags || []),
    ...(product.highlights || []),
    ...(product.seo?.keywords || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

export const accessories = accessoriesData.products.map((product, index) => {
  const gallery = [
    product.images?.primary,
    ...(product.images?.gallery || []),
    product.images?.thumbnail,
  ].filter(Boolean);

  return {
    ...product,
    index,
    image: product.images?.primary || FALLBACK_ACCESSORY_IMAGE,
    gallery: [...new Set(gallery)].length ? [...new Set(gallery)] : [FALLBACK_ACCESSORY_IMAGE],
    priceValue: product.price?.selling_price || 0,
    mrpValue: product.price?.mrp || 0,
    discountValue: product.price?.discount_percent || 0,
    savingsValue: product.price?.savings || 0,
    ratingValue: product.ratings?.average || 0,
    reviewCount: product.ratings?.count || 0,
    searchText: buildSearchText(product),
  };
});

export const accessoryMeta = accessoriesData.meta;

export const accessoryPriceRanges = accessoriesData.filters.price_ranges;

export const accessorySortOptions = accessoriesData.filters.sort_options.map((value) => ({
  value,
  label: sortLabels[value] || value,
}));

export const accessoryCategories = accessoriesData.meta.categories.map((category) => ({
  name: category,
  count: accessories.filter((product) => product.category === category).length,
}));

export const accessoryStats = {
  total: accessories.length,
  featured: accessories.filter((product) => product.is_featured).length,
  bestsellers: accessories.filter((product) => product.is_bestseller).length,
  minPrice: Math.min(...accessories.map((product) => product.priceValue)),
  maxPrice: Math.max(...accessories.map((product) => product.priceValue)),
};

export const getAccessoryBySlug = (slug) =>
  accessories.find((product) => product.slug === slug);

export const getRelatedAccessories = (product, limit = 4) => {
  if (!product) {
    return [];
  }

  const explicitRelated = (product.related_product_ids || [])
    .map((id) => accessories.find((item) => item.id === id))
    .filter(Boolean);

  const categoryRelated = accessories.filter(
    (item) => item.slug !== product.slug && item.category === product.category
  );

  return [...new Map([...explicitRelated, ...categoryRelated].map((item) => [item.id, item])).values()].slice(
    0,
    limit
  );
};
