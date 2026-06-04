"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  ExternalLink,
  PackageCheck,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { accessoryCategories, formatPrice } from "@/app/libs/accessories";
import WhatsAppIcon from "@/app/components/WhatsAppIcon";
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

const getCategoryColor = (category) => {
  const index = accessoryCategories.findIndex((item) => item.name === category);
  return categoryPalette[Math.max(index, 0) % categoryPalette.length];
};

const AccessoryDetail = ({ product, relatedProducts }) => {
  const [activeImage, setActiveImage] = useState(product.gallery[0]);
  const ratingDistribution = product.ratings?.distribution || {};
  const maxRatingCount = Math.max(...Object.values(ratingDistribution), 1);
  const accent = getCategoryColor(product.category);
  const whatsappMessage = encodeURIComponent(
    `Hi, I want to know more about ${product.title} (${product.sku}).`,
  );

  return (
    <main className="accessory-detail-page" style={{ "--accent": accent }}>
      <section className="accessory-detail-hero">
        <div className="container">
          <Link href="/accessories" className="accessory-detail-hero__back">
            <ArrowLeft size={17} strokeWidth={2.4} />
            Back to Accessories
          </Link>

          <div className="accessory-detail-hero__grid">
            <div className="accessory-gallery">
              <div className="accessory-gallery__main">
                <img
                  src={`https://royalsportsnfitness.com/images/accessories/${product.title}.jpg`}
                  alt={product.title}
                />
                {product.discountValue > 0 && (
                  <span>
                    <BadgePercent size={16} strokeWidth={2.4} />
                    {product.discountValue}% Off
                  </span>
                )}
              </div>

              <div className="accessory-gallery__thumbs">
                {product.gallery.map((image) => (
                  <button
                    type="button"
                    className={activeImage === image ? "active" : ""}
                    key={image}
                    onClick={() => setActiveImage(image)}
                  >
                    <img
                      src={`https://royalsportsnfitness.com/images/accessories/${product.title}.jpg`}
                      alt=""
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="accessory-detail-summary">
              <span className="accessory-detail-summary__category">
                {product.category}
              </span>
              <h1>{product.title}</h1>

              <div className="accessory-detail-summary__rating">
                <span>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      size={17}
                      fill={
                        index + 1 <= Math.round(product.ratingValue)
                          ? "currentColor"
                          : "none"
                      }
                      strokeWidth={2.1}
                      key={index}
                    />
                  ))}
                </span>
                <strong>{product.ratingValue.toFixed(1)}</strong>
                <small>{product.reviewCount} reviews</small>
              </div>

              <p>{product.description}</p>

              <div className="accessory-detail-summary__price">
                <strong>{formatPrice(product.priceValue)}</strong>
                {product.mrpValue > product.priceValue && (
                  <del>{formatPrice(product.mrpValue)}</del>
                )}
                {product.savingsValue > 0 && (
                  <span>Save {formatPrice(product.savingsValue)}</span>
                )}
              </div>

              <div className="accessory-detail-summary__chips">
                {product.is_bestseller && <span>Bestseller</span>}
                {product.is_featured && <span>Featured</span>}
                {product.availability?.in_stock && <span>In Stock</span>}
                <span>{product.availability?.fulfillment}</span>
              </div>

              <div className="accessory-detail-summary__actions">
                <Link
                  href={
                    product.source?.affiliate_url || product.source?.url || "#"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy on Amazon
                  <ExternalLink size={17} strokeWidth={2.4} />
                </Link>
                <Link
                  href={`https://api.whatsapp.com/send/?phone=918126299638&text=${whatsappMessage}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask on WhatsApp
                  <WhatsAppIcon size={17} />
                </Link>
              </div>

              <div className="accessory-detail-summary__meta">
                <span>
                  <PackageCheck size={18} strokeWidth={2.4} />
                  SKU: {product.sku}
                </span>
                <span>
                  <Truck size={18} strokeWidth={2.4} />
                  {product.availability?.delivery?.standard}
                </span>
                <span>
                  <ShieldCheck size={18} strokeWidth={2.4} />
                  {product.brand}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accessory-detail-body section-padding">
        <div className="container accessory-detail-body__grid">
          <div className="accessory-detail-panel">
            <h2>Product Highlights</h2>
            <div className="accessory-highlights">
              {(product.highlights || []).map((highlight) => (
                <div key={highlight}>
                  <CheckCircle2 size={20} strokeWidth={2.4} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="accessory-detail-panel">
            <h2>Specifications</h2>
            <dl className="accessory-specs">
              {Object.entries(product.specifications || {}).map(
                ([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ),
              )}
              <div>
                <dt>ASIN</dt>
                <dd>{product.asin}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{product.category}</dd>
              </div>
            </dl>
          </div>

          <div className="accessory-detail-panel">
            <h2>Delivery & Stock</h2>
            <div className="accessory-delivery">
              <div>
                <Truck size={21} strokeWidth={2.4} />
                <span>Standard</span>
                <strong>{product.availability?.delivery?.standard}</strong>
              </div>
              <div>
                <PackageCheck size={21} strokeWidth={2.4} />
                <span>Express</span>
                <strong>{product.availability?.delivery?.express}</strong>
              </div>
              <div>
                <ShieldCheck size={21} strokeWidth={2.4} />
                <span>Stock</span>
                <strong>{product.availability?.stock_count} units</strong>
              </div>
            </div>
          </div>

          <div className="accessory-detail-panel">
            <h2>Ratings</h2>
            <div className="accessory-ratings">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingDistribution[rating] || 0;

                return (
                  <div key={rating}>
                    <span>{rating} star</span>
                    <em>
                      <i
                        style={{ width: `${(count / maxRatingCount) * 100}%` }}
                      />
                    </em>
                    <strong>{count}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="accessory-related section-padding-bottom">
          <div className="container">
            <div className="accessory-related__head">
              <div>
                <span>Keep Building</span>
                <h2>Related Accessories</h2>
              </div>
              <Link href="/accessories">
                View All
                <ArrowRight size={17} strokeWidth={2.4} />
              </Link>
            </div>

            <div className="accessory-related__grid">
              {relatedProducts.map((related) => (
                <Link
                  href={`/accessories/${related.slug}`}
                  className="accessory-related-card"
                  style={{ "--accent": getCategoryColor(related.category) }}
                  key={related.id}
                >
                  <img
                    src={`https://royalsportsnfitness.com/images/accessories/${related.title}.jpg`}
                    alt={related.title}
                  />
                  <span>{related.category}</span>
                  <strong>{related.title}</strong>
                  <small>
                    {formatPrice(related.priceValue)}
                    <ArrowRight size={15} strokeWidth={2.4} />
                  </small>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default AccessoryDetail;
