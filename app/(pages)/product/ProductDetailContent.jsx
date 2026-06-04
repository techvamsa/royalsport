import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Truck,
} from "lucide-react";
import ProductImageMagnifier from "./ProductImageMagnifier";
import {
  getProductDescription,
  getProductPath,
  getTypePath,
  products,
} from "@/app/libs/productCatalog";

const productNoticeSections = [
  {
    title: "Disclaimer",
    icon: AlertTriangle,
    items: [
      "Slight variations in the colours can be expected because of monitor/screen settings and lighting conditions.",
      "We do not accept return/exchange as this is cut as per order requirement unless there is any damage or manufacturing defect.",
    ],
  },
  {
    title: "Shipping Information",
    icon: Truck,
    items: [
      "Order are dispatched within 24 hours and delivered within 3 to 5 days.",
      "Shipping charges will be applied based on total fabric weight.",
      "Cash on delivery orders are dispatched post call verification.",
      "There may be a delay in rare case due to restrictions in some zones.",
    ],
  },
  {
    title: "Workout Planner",
    icon: ClipboardList,
    items: [
      "Gentle hand wash / Machine wash separately in cold running water with a mild disinfectant.",
      "Don't soak it in water (can cause shrinkage).",
      "Medium iron after drying. Kindly dry the fabric in shade as direct contact with sunlight can cause the colours to fade.",
      "As the fabric is naturally made, the dark colours have a tendency to bleed in the first wash, kindly wash the dark and the light colours separately.",
    ],
  },
];

export default function ProductDetailContent({ product }) {
  const productDescription = getProductDescription(product);
  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id && item.categoryId === product.categoryId
    )
    .slice(0, 3);

  return (
    <main className="product-detail-page">
      <section className="product-detail">
        <div className="container">
          <Link href={getTypePath(product.typeSlug)} className="product-detail__back">
            <ArrowLeft size={18} />
            Back To {product.typeLabel}
          </Link>

          <div className="product-detail__grid">
            <div className="product-detail__media">
              <ProductImageMagnifier
                src={product.imageUrl || product.fallbackImage}
                alt={product.name}
              />
            </div>

            <div className="product-detail__content">
              <span>{product.typeLabel}</span>
              <h1>{product.name}</h1>
              <p>{productDescription}</p>

              <div className="product-detail__meta">
                <div>
                  <small>Category</small>
                  <strong>{product.categoryName}</strong>
                </div>
                <div>
                  <small>Section</small>
                  <strong>{product.typeLabel}</strong>
                </div>
              </div>

              <ul className="product-detail__checks">
                <li>
                  <CheckCircle2 size={19} />
                  Commercial and personal gym setup ready
                </li>
                <li>
                  <CheckCircle2 size={19} />
                  RSF team support for equipment selection
                </li>
                <li>
                  <CheckCircle2 size={19} />
                  Suitable for fitness clubs and training studios
                </li>
              </ul>

              <Link href="/contact-us" className="product-detail__cta">
                Enquire Now <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>

          <div className="product-detail__info">
            <article className="product-detail__info-card product-detail__info-card--description">
              <div className="product-detail__info-icon">
                <FileText size={22} strokeWidth={2.4} />
              </div>
              <span>{product.categoryName}</span>
              <h2>Description</h2>
              <p>{productDescription}</p>
            </article>

            {productNoticeSections.map((section) => {
              const Icon = section.icon;

              return (
                <article className="product-detail__info-card" key={section.title}>
                  <div className="product-detail__info-icon">
                    <Icon size={22} strokeWidth={2.4} />
                  </div>
                  <span>Important Note</span>
                  <h2>{section.title}</h2>
                  <ol>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="product-related">
          <div className="container">
            <div className="product-related__head">
              <span>More In {product.categoryName}</span>
              <h2>Related Machines</h2>
            </div>

            <div className="product-related__grid">
              {relatedProducts.map((item) => (
                <Link
                  className="product-related__card"
                  href={getProductPath(item)}
                  key={item.id}
                >
                  <img src={item.imageUrl || item.fallbackImage} alt={item.name} />
                  <span>{item.categoryName}</span>
                  <strong>{item.name}</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
