"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Ruler,
  Sparkles,
  Truck,
} from "lucide-react";
import Pagination, { getPaginationMeta } from "@/app/components/Pagination";
import {
  categoryAccents,
  productBackground,
  quoteHref,
} from "./sportsCatalogUtils";

const SPORTS_PRODUCTS_PER_PAGE = 6;

const categoryDescriptions = {
  "Snooker Table":
    "Choose from compact, standard, premium, and designer snooker tables for homes, clubs, and academies.",
  "Table Tennis":
    "Browse table tennis products made for daily play, club practice, and recreation rooms.",
  "Foosball Table":
    "Explore foosball tables for lounges, game zones, offices, academies, and family spaces.",
  "Carrom Board":
    "Find carrom boards and recreation pieces that keep casual spaces simple, social, and ready to use.",
  "Chess Board":
    "Pick chess boards and classic indoor game options for refined amenity corners and learning spaces.",
};

const InfoPill = ({ icon: Icon, label, value }) => (
  <span className="sports-product__pill">
    <Icon size={16} />
    <span>{label}</span>
    <strong>{value}</strong>
  </span>
);

const ProductCard = ({ product }) => {
  const accent = categoryAccents[product.category] || "#e30613";
  const colorSwatches = [
    ...(product.tableColors || []),
    ...(product.clothColors || []),
  ].slice(0, 4);

  return (
    <article className="sports-product" style={{ "--card-accent": accent }}>
      <div className="sports-product__media" style={productBackground(product)}>
        <span>{product.subCategory}</span>
        <strong>{product.name}</strong>
      </div>

      <div className="sports-product__body">
        <div className="sports-product__topline">
          <span>{product.brand}</span>
          <small>{product.inStock ? "In Stock" : "On Request"}</small>
        </div>

        <h3>{product.name}</h3>
        <p>{product.shortDescription || product.description}</p>

        <div className="sports-product__facts">
          {product.dimension && (
            <InfoPill icon={Ruler} label="Size" value={product.dimension} />
          )}
          {product.bedType && (
            <InfoPill icon={Layers3} label="Bed" value={product.bedType} />
          )}
          <InfoPill icon={Truck} label="Delivery" value={product.deliveryType} />
        </div>

        <div className="sports-product__chips">
          {(product.idealFor || []).slice(0, 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <ul className="sports-product__features">
          {(product.features || []).slice(0, 3).map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={16} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="sports-product__footer">
          <div className="sports-product__swatches" aria-label="Available colors">
            {colorSwatches.length > 0 ? (
              colorSwatches.map((color) => (
                <span
                  key={`${product.id}-${color.name}`}
                  title={color.name}
                  style={{ backgroundColor: color.hex || "#111111" }}
                />
              ))
            ) : (
              <small>Color on request</small>
            )}
          </div>

          <Link href={quoteHref(product)} target="_blank" rel="noreferrer">
            Get Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

const SportsCategory = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { startIndex, endIndex, pageCount, safePage, startItem, endItem } =
    getPaginationMeta(category.products.length, currentPage, SPORTS_PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(
    () => category.products.slice(startIndex, endIndex),
    [category.products, endIndex, startIndex]
  );

  return (
    <section
      className="sports-category"
      id={category.slug}
      style={{ "--category-accent": category.accent }}
    >
      <div className="sports-category__head">
        <div>
          <span>
            <Sparkles size={16} />
            {category.products.length} Products
          </span>
          <h2>{category.name}</h2>
        </div>
        <p>
          {categoryDescriptions[category.name] ||
            "Explore recreation essentials that complete a premium sports and amenities space."}
        </p>
      </div>

      <div className="sports-category__grid">
        {paginatedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="sports-category__pagination">
          <span>
            Showing {startItem}-{endItem} of {category.products.length}
          </span>
          <Pagination
            currentPage={safePage}
            pageCount={pageCount}
            onPageChange={setCurrentPage}
            label={`${category.name} pagination`}
          />
        </div>
      )}
    </section>
  );
};

export default function SportsCatalogClient({ categories }) {
  return (
    <section className="sports-catalog section-padding-bottom" id="sports-catalog">
      <div className="container">
        {categories.map((category) => (
          <SportsCategory category={category} key={category.name} />
        ))}
      </div>
    </section>
  );
}
