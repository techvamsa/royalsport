export const categoryFallbacks = {
  "Snooker Table": "/imgs/equipment/premium-pool-table.jpg",
  "Table Tennis": "/imgs/sport-row-bg.webp",
  "Foosball Table": "/imgs/equipment/eq-functional.webp",
  "Carrom Board": "/imgs/equipment/e-functional.webp",
  "Chess Board": "/imgs/equipment/about.webp",
};

export const categoryAccents = {
  "Snooker Table": "#e30613",
  "Table Tennis": "#2563eb",
  "Foosball Table": "#16a34a",
  "Carrom Board": "#f59e0b",
  "Chess Board": "#7c3aed",
};

export const slugify = (value = "") =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getProductImage = (product) =>
  product.images?.thumbnail ||
  categoryFallbacks[product.category] ||
  "/imgs/equipment/premium-pool-table.jpg";

export const getFallbackImage = (product) =>
  categoryFallbacks[product.category] || "/imgs/equipment/premium-pool-table.jpg";

export const productBackground = (product) => ({
  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 100%), url("${getProductImage(
    product
  )}"), url("${getFallbackImage(product)}")`,
  backgroundPosition: "center, center top, center top",
  backgroundRepeat: "no-repeat, no-repeat, no-repeat",
  backgroundSize: "cover, 136% auto, 136% auto",
});

export const quoteHref = (product) =>
  `https://api.whatsapp.com/send/?phone=918126299638&text=${encodeURIComponent(
    `Hi RSF, I want details for ${product.name} (${product.category}).`
  )}&type=phone_number&app_absent=0`;
