"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Grid2X2,
  PackageCheck,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Pagination, { getPaginationMeta } from "@/app/components/Pagination";
import {
  categoryOptions,
  getProductDescription,
  getProductPath,
  getTypePath,
  productTotals,
  products,
  typeOptions,
} from "@/app/libs/productCatalog";

const ALL_CATEGORIES = "all";
const ALL_TYPES = "all";
const PRODUCTS_PER_PAGE = 12;

const getCategoryIdFromParam = (categoryParam, selectedType) => {
  if (!categoryParam) return ALL_CATEGORIES;

  const category = categoryOptions.find(
    (item) => item.slug === categoryParam || item._id === categoryParam
  );

  if (!category) return ALL_CATEGORIES;
  if (selectedType !== ALL_TYPES && category.type !== selectedType) {
    return ALL_CATEGORIES;
  }

  return category._id;
};

const getCardImageClass = (src = "") =>
  src.startsWith("blob:")
    ? "maincard__image--transparent"
    : "maincard__image--blend";

function ProductCard({ product }) {
  const [isImageReady, setIsImageReady] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    product.imageUrl || product.fallbackImage
  );
  const productName = product.name;
  const shortDescription = getProductDescription(product);

  const handleImageError = () => {
    if (imageSrc !== product.fallbackImage) {
      setImageSrc(product.fallbackImage);
      setIsImageReady(false);
      return;
    }

    setIsImageReady(true);
  };

  return (
    <article
      className={`maincard ${imageSrc && !isImageReady ? "maincard--loading" : ""}`}
    >
      <Link
        href={getProductPath(product)}
        className="maincard__link"
        aria-label={`View ${productName}`}
      >
        <div className="maincard__top">
          <span>{product.typeLabel}</span>
          {product.categoryName && <strong>{product.categoryName}</strong>}
        </div>
        <div className="maincard__media">
          {imageSrc && !isImageReady && <span className="maincard__loader" />}
          {imageSrc && (
            <img
              src={imageSrc}
              alt={productName}
              className={`maincard__image ${getCardImageClass(imageSrc)}`}
              loading="lazy"
              onLoad={() => setIsImageReady(true)}
              onError={handleImageError}
            />
          )}
        </div>
        <div className="maincard__body">
          <h2>{productName}</h2>
          {shortDescription && (
            <p className="maincard__description">{shortDescription}</p>
          )}
          <span className="maincard__action">
            View Machine <ArrowUpRight size={19} strokeWidth={2.4} />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function ProductsListingClient({
  initialType = ALL_TYPES,
  initialCategoryParam = "",
} = {}) {
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedCategory, setSelectedCategory] = useState(() =>
    getCategoryIdFromParam(initialCategoryParam, initialType)
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const listingTopRef = useRef(null);

  useEffect(() => {
    setSelectedType(initialType);
    setSelectedCategory(getCategoryIdFromParam(initialCategoryParam, initialType));
  }, [initialCategoryParam, initialType]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedType]);

  const activeTypeOptions = [
    {
      value: ALL_TYPES,
      label: "All Machines",
      count: productTotals.productCount,
      href: getTypePath(),
    },
    ...typeOptions,
  ].map((type) => ({
    ...type,
    href: type.href || getTypePath(type.slug),
  }));

  const visibleCategories = useMemo(() => {
    if (selectedType === ALL_TYPES) return categoryOptions;
    return categoryOptions.filter((category) => category.type === selectedType);
  }, [selectedType]);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesType =
        selectedType === ALL_TYPES || product.type === selectedType;
      const matchesCategory =
        selectedCategory === ALL_CATEGORIES ||
        product.categoryId === selectedCategory;
      const matchesSearch =
        !query ||
        [
          product.name,
          product.categoryName,
          product.typeLabel,
          product.shortDescription,
        ]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(query));

      return matchesType && matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory, selectedType]);

  const { startIndex, endIndex, pageCount, safePage, startItem, endItem } =
    getPaginationMeta(filteredProducts.length, currentPage, PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(
    () => filteredProducts.slice(startIndex, endIndex),
    [endIndex, filteredProducts, startIndex]
  );

  const clearFilters = () => {
    setSelectedType(initialType);
    setSelectedCategory(ALL_CATEGORIES);
    setSearchTerm("");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.requestAnimationFrame(() => {
      const listingTop = listingTopRef.current;
      if (!listingTop) return;

      const headerOffset = 120;
      const top =
        listingTop.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  };

  const hasActiveFilters =
    selectedType !== ALL_TYPES ||
    selectedCategory !== ALL_CATEGORIES ||
    searchTerm.trim();

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="container">
          <div className="products-hero__grid">
            <div className="products-hero__copy">
              <span className="products-eyebrow">Equipment Catalog</span>
              <h1>Our Gym Equipment Range</h1>
              <p>
                Complete fitness solutions for commercial and personal spaces.
                Royal Sports N Fitness offers a catalog of 200+ gym products
                for commercial setups, personal training spaces, fitness clubs,
                and academy-led growth.
              </p>
            </div>

            <div className="products-hero__stats" aria-label="Catalog summary">
              <span>
                {productTotals.productCount}
                <small>Machines Listed</small>
              </span>
              <span>
                {productTotals.categoryCount}
                <small>Categories</small>
              </span>
              <span>
                {productTotals.typeCount}
                <small>Equipment Sections</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="products-catalog" aria-label="RSF product catalog">
        <div className="container">
          <div className="products-catalog__layout">
            <aside className="products-filter" aria-label="Product filters">
              <div className="products-filter__header">
                <span>
                  <SlidersHorizontal size={18} />
                  Filters
                </span>
                {hasActiveFilters && (
                  selectedType !== ALL_TYPES ? (
                    <Link href={getTypePath()} className="products-filter__clear">
                      <X size={16} />
                      Clear
                    </Link>
                  ) : (
                    <button type="button" onClick={clearFilters}>
                      <X size={16} />
                      Clear
                    </button>
                  )
                )}
              </div>

              <label className="products-search">
                <Search size={18} />
                <input
                  type="search"
                  value={searchTerm}
                  placeholder="Search machines"
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>

              <div className="products-filter__group">
                <h2>Equipment Type</h2>
                <div className="products-filter__chips">
                  {activeTypeOptions.map((type) => (
                    <Link
                      className={
                        selectedType === type.value
                          ? "products-filter__chip products-filter__chip--active"
                          : "products-filter__chip"
                      }
                      key={type.value}
                      href={type.href}
                    >
                      <span>{type.label}</span>
                      <small>{type.count}</small>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="products-filter__group">
                <h2>Categories</h2>
                <div className="products-category-list">
                  <button
                    className={
                      selectedCategory === ALL_CATEGORIES
                        ? "products-category-list__item products-category-list__item--active"
                        : "products-category-list__item"
                    }
                    type="button"
                    onClick={() => setSelectedCategory(ALL_CATEGORIES)}
                  >
                    <span>All Categories</span>
                    <small>
                      {selectedType === ALL_TYPES
                        ? products.length
                        : products.filter((product) => product.type === selectedType)
                            .length}
                    </small>
                  </button>
                  {visibleCategories.map((category) => (
                    <button
                      className={
                        selectedCategory === category._id
                          ? "products-category-list__item products-category-list__item--active"
                          : "products-category-list__item"
                      }
                      key={category._id}
                      type="button"
                      onClick={() => setSelectedCategory(category._id)}
                    >
                      <span>{category.label}</span>
                      <small>{category.count}</small>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="products-results">
              <div className="products-toolbar" ref={listingTopRef}>
                <div>
                  <span className="products-toolbar__label">
                    <Grid2X2 size={18} />
                    Product Listing
                  </span>
                  <h2>
                    Showing {startItem}-{endItem} of{" "}
                    {filteredProducts.length} machines
                  </h2>
                </div>
                <p>
                  Cardio, hammer, and strength machines organized with clear
                  model names and category context.
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <>
                  <div className="products-grid">
                    {paginatedProducts.map((product) => (
                      <ProductCard product={product} key={product.id} />
                    ))}
                  </div>
                  <Pagination
                    currentPage={safePage}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    label="Product pagination"
                  />
                </>
              ) : (
                <div className="products-empty">
                  <PackageCheck size={40} />
                  <h2>No machines found</h2>
                  <p>
                    Try clearing filters or searching another RSF model,
                    category, or equipment type.
                  </p>
                  <button type="button" onClick={clearFilters}>
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
