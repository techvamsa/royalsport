"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  Filter,
  Grid3X3,
  List,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Truck,
  X,
} from "lucide-react";
import Pagination, { getPaginationMeta } from "@/app/components/Pagination";
import {
  accessories,
  accessoryCategories,
  accessoryMeta,
  accessoryPriceRanges,
  accessorySortOptions,
  accessoryStats,
  formatPrice,
} from "@/app/libs/accessories";
import "@/app/styles/accessories.scss";

const categoryPalette = [
  "#e30613",
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#7c3aed",
  "#0891b2",
  "#db2777",
  "#ea580c",
];

const ACCESSORIES_PER_PAGE = 12;

const getCategoryColor = (category) => {
  const index = accessoryCategories.findIndex((item) => item.name === category);
  return categoryPalette[Math.max(index, 0) % categoryPalette.length];
};

const sortProducts = (items, sort) => {
  const nextItems = [...items];

  switch (sort) {
    case "price_asc":
      return nextItems.sort((a, b) => a.priceValue - b.priceValue);
    case "price_desc":
      return nextItems.sort((a, b) => b.priceValue - a.priceValue);
    case "rating_desc":
      return nextItems.sort((a, b) => b.ratingValue - a.ratingValue);
    case "bestseller":
      return nextItems.sort((a, b) => Number(b.is_bestseller) - Number(a.is_bestseller));
    case "discount_desc":
      return nextItems.sort((a, b) => b.discountValue - a.discountValue);
    case "newest":
    default:
      return nextItems.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }
};

const AccessoriesStore = () => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [minimumRating, setMinimumRating] = useState(0);
  const [stockOnly, setStockOnly] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [bestsellerOnly, setBestsellerOnly] = useState(false);
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    const filtered = accessories.filter((product) => {
      const matchesSearch = !search || product.searchText.includes(search);
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice =
        selectedRanges.length === 0 ||
        selectedRanges.some((rangeLabel) => {
          const range = accessoryPriceRanges.find((item) => item.label === rangeLabel);
          return range && product.priceValue >= range.min && product.priceValue <= range.max;
        });
      const matchesRating = !minimumRating || product.ratingValue >= minimumRating;
      const matchesStock = !stockOnly || product.availability?.in_stock;
      const matchesFeatured = !featuredOnly || product.is_featured;
      const matchesBestseller = !bestsellerOnly || product.is_bestseller;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating &&
        matchesStock &&
        matchesFeatured &&
        matchesBestseller
      );
    });

    return sortProducts(filtered, sort);
  }, [
    query,
    selectedCategories,
    selectedRanges,
    minimumRating,
    stockOnly,
    featuredOnly,
    bestsellerOnly,
    sort,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    bestsellerOnly,
    featuredOnly,
    minimumRating,
    query,
    selectedCategories,
    selectedRanges,
    sort,
    stockOnly,
  ]);

  const { startIndex, endIndex, pageCount, safePage, startItem, endItem } =
    getPaginationMeta(filteredProducts.length, currentPage, ACCESSORIES_PER_PAGE);

  const paginatedProducts = useMemo(
    () => filteredProducts.slice(startIndex, endIndex),
    [endIndex, filteredProducts, startIndex]
  );

  const featuredProduct =
    accessories.find((product) => product.is_featured && product.is_bestseller) ||
    accessories[0];

  const toggleCategory = (category) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  };

  const toggleRange = (label) => {
    setSelectedRanges((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedCategories([]);
    setSelectedRanges([]);
    setMinimumRating(0);
    setStockOnly(false);
    setFeaturedOnly(false);
    setBestsellerOnly(false);
  };

  const hasFilters =
    query ||
    selectedCategories.length > 0 ||
    selectedRanges.length > 0 ||
    minimumRating ||
    stockOnly ||
    featuredOnly ||
    bestsellerOnly;

  return (
    <main className="accessories-page">
      <section className="accessories-hero">
        <div className="container accessories-hero__grid">
          <div className="accessories-hero__copy">
            <span className="accessories-hero__eyebrow">Accessories Store</span>
            <h1>Gym accessories for stronger, cleaner, smarter training spaces.</h1>
            <p>
              Browse cable attachments, free weights, storage, recovery tools,
              mats, resistance bands, and daily gym essentials.
            </p>

            <div className="accessories-hero__stats" aria-label="Accessory store stats">
              <span>
                {accessoryStats.total}
                <small>Products</small>
              </span>
              <span>
                {accessoryMeta.categories.length}
                <small>Categories</small>
              </span>
              <span>
                {formatPrice(accessoryStats.minPrice)}
                <small>Starting Price</small>
              </span>
            </div>
          </div>

          <Link
            href={`/accessories/${featuredProduct.slug}`}
            className="accessories-hero__feature"
            style={{ "--accent": getCategoryColor(featuredProduct.category) }}
          >
            <span className="accessories-hero__badge">
              <Sparkles size={16} strokeWidth={2.4} />
              Featured Pick
            </span>
            <img src={`https://royalsportsnfitness.com/images/accessories/${featuredProduct.title}.jpg`} alt={featuredProduct.title} />
            <div>
              <small>{featuredProduct.category}</small>
              <strong>{featuredProduct.title}</strong>
              <span>
                {formatPrice(featuredProduct.priceValue)}
                <ArrowRight size={17} strokeWidth={2.4} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="accessories-shop section-padding">
        <div className="container">
          <button
            type="button"
            className="accessories-filter-toggle"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter size={18} strokeWidth={2.4} />
            Filters
          </button>

          <div className="accessories-shop__layout">
            <aside
              className={`accessories-filter ${
                isFilterOpen ? "accessories-filter--open" : ""
              }`}
              aria-label="Accessory filters"
            >
              <div className="accessories-filter__head">
                <span>
                  <SlidersHorizontal size={19} strokeWidth={2.4} />
                  Advanced Filter
                </span>
                <button type="button" onClick={() => setIsFilterOpen(false)}>
                  <X size={20} strokeWidth={2.4} />
                </button>
              </div>

              <label className="accessories-filter__search">
                <Search size={18} strokeWidth={2.4} />
                <input
                  type="search"
                  value={query}
                  placeholder="Search accessories..."
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>

              <div className="accessories-filter__group">
                <h2>Categories</h2>
                <div className="accessories-filter__checks">
                  {accessoryCategories.map((category) => (
                    <label key={category.name}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => toggleCategory(category.name)}
                      />
                      <span style={{ "--accent": getCategoryColor(category.name) }}>
                        {category.name}
                      </span>
                      <small>{category.count}</small>
                    </label>
                  ))}
                </div>
              </div>

              <div className="accessories-filter__group">
                <h2>Price</h2>
                <div className="accessories-filter__checks">
                  {accessoryPriceRanges.map((range) => (
                    <label key={range.label}>
                      <input
                        type="checkbox"
                        checked={selectedRanges.includes(range.label)}
                        onChange={() => toggleRange(range.label)}
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="accessories-filter__group">
                <h2>Rating</h2>
                <div className="accessories-filter__rating">
                  {[4, 3, 2, 1].map((rating) => (
                    <button
                      type="button"
                      className={minimumRating === rating ? "active" : ""}
                      onClick={() => setMinimumRating(minimumRating === rating ? 0 : rating)}
                      key={rating}
                    >
                      <Star size={15} fill="currentColor" strokeWidth={2.2} />
                      {rating}+ Stars
                    </button>
                  ))}
                </div>
              </div>

              <div className="accessories-filter__group">
                <h2>Availability</h2>
                <div className="accessories-filter__switches">
                  <label>
                    <input
                      type="checkbox"
                      checked={stockOnly}
                      onChange={(event) => setStockOnly(event.target.checked)}
                    />
                    <span>In Stock</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={featuredOnly}
                      onChange={(event) => setFeaturedOnly(event.target.checked)}
                    />
                    <span>Featured</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={bestsellerOnly}
                      onChange={(event) => setBestsellerOnly(event.target.checked)}
                    />
                    <span>Bestseller</span>
                  </label>
                </div>
              </div>

              {hasFilters && (
                <button type="button" className="accessories-filter__clear" onClick={clearFilters}>
                  Clear All
                </button>
              )}
            </aside>

            <div className="accessories-results">
              <div className="accessories-results__toolbar">
                <div>
                  <span>Accessories</span>
                  <h2>
                    Showing {startItem}-{endItem} of {filteredProducts.length} Products
                  </h2>
                </div>

                <div className="accessories-results__controls">
                  <select value={sort} onChange={(event) => setSort(event.target.value)}>
                    {accessorySortOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="accessories-view-toggle" aria-label="Product view">
                    <button
                      type="button"
                      className={view === "grid" ? "active" : ""}
                      onClick={() => setView("grid")}
                      aria-label="Grid view"
                    >
                      <Grid3X3 size={18} strokeWidth={2.4} />
                    </button>
                    <button
                      type="button"
                      className={view === "list" ? "active" : ""}
                      onClick={() => setView("list")}
                      aria-label="List view"
                    >
                      <List size={18} strokeWidth={2.4} />
                    </button>
                  </div>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <>
                  <div className={`accessory-grid accessory-grid--${view}`}>
                    {paginatedProducts.map((product) => (
                      <article
                        className="accessory-card"
                        style={{ "--accent": getCategoryColor(product.category) }}
                        key={product.id}
                      >
                        <Link href={`/accessories/${product.slug}`} className="accessory-card__media">
                          <span>{product.category}</span>
                          <img src={`https://royalsportsnfitness.com/images/accessories/${product.title}.jpg`} alt={product.title} />
                          {product.discountValue > 0 && (
                            <em>
                              <BadgePercent size={14} strokeWidth={2.4} />
                              {product.discountValue}% Off
                            </em>
                          )}
                        </Link>

                        <div className="accessory-card__body">
                          <div className="accessory-card__flags">
                            {product.is_bestseller && <span>Bestseller</span>}
                            {product.is_featured && <span>Featured</span>}
                            {product.availability?.in_stock && <span>In Stock</span>}
                          </div>

                          <h3>
                            <Link href={`/accessories/${product.slug}`}>{product.title}</Link>
                          </h3>

                          <p>{product.description}</p>

                          <div className="accessory-card__meta">
                            <span>
                              <Star size={15} fill="currentColor" strokeWidth={2.2} />
                              {product.ratingValue.toFixed(1)}
                            </span>
                            <span>
                              <Truck size={15} strokeWidth={2.2} />
                              {product.availability?.delivery?.standard}
                            </span>
                          </div>

                          <div className="accessory-card__bottom">
                            <div>
                              <strong>{formatPrice(product.priceValue)}</strong>
                              {product.mrpValue > product.priceValue && (
                                <del>{formatPrice(product.mrpValue)}</del>
                              )}
                            </div>
                            <Link href={`/accessories/${product.slug}`}>
                              View Details
                              <ArrowRight size={16} strokeWidth={2.4} />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  <Pagination
                    currentPage={safePage}
                    pageCount={pageCount}
                    onPageChange={setCurrentPage}
                    label="Accessory pagination"
                  />
                </>
              ) : (
                <div className="accessories-empty">
                  <ShieldCheck size={42} strokeWidth={2.1} />
                  <h3>No matching accessories</h3>
                  <p>Adjust the category, price, rating, or search filters.</p>
                  <button type="button" onClick={clearFilters}>
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="accessories-assurance section-padding-bottom">
        <div className="container accessories-assurance__grid">
          <div>
            <CheckCircle2 size={22} strokeWidth={2.4} />
            <span>Commercial-grade picks</span>
          </div>
          <div>
            <Truck size={22} strokeWidth={2.4} />
            <span>Fast delivery options</span>
          </div>
          <div>
            <ShieldCheck size={22} strokeWidth={2.4} />
            <span>Reliable gym essentials</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccessoriesStore;
