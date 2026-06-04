import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  Medal,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "@/app/components/WhatsAppIcon";
import catalog from "../../../sports-and-aminities.json";
import SportsCatalogClient from "./SportsCatalogClient";
import {
  categoryAccents,
  productBackground,
  slugify,
} from "./sportsCatalogUtils";
import "@/app/styles/sports-amenities.scss";

export const metadata = {
  title: "Sports & Amenities | Royal Sports N Fitness",
  description:
    "Explore Royal Sports N Fitness sports and amenities products including snooker tables, table tennis, foosball, carrom, and chess boards.",
};

const groupedProducts = catalog.reduce((groups, product) => {
  const category = product.category || "Other";
  if (!groups[category]) groups[category] = [];
  groups[category].push(product);
  return groups;
}, {});

const categories = Object.entries(groupedProducts).map(([name, products]) => ({
  name,
  products,
  slug: slugify(name),
  accent: categoryAccents[name] || "#e30613",
}));

const featuredProduct =
  catalog.find((product) => product.subCategory === "Premium") || catalog[0];

const statItems = [
  { value: catalog.length, label: "Catalog Products" },
  { value: categories.length, label: "Game Categories" },
  {
    value: catalog.filter((product) => product.installationAvailable).length,
    label: "Install-Ready Items",
  },
];

export default function SportsAndAmenitiesPage() {
  return (
    <main className="sports-page">
      <section className="sports-hero">
        <div className="container">
          <div className="sports-hero__grid">
            <div className="sports-hero__copy">
              <span className="sports-hero__eyebrow">Sports & Amenities</span>
              <h1>Premium sports tables and recreation essentials for modern spaces.</h1>
              <p>
                Browse RSF and Club 147 products for homes, clubs, academies,
                lounges, recreation rooms, and commercial amenity zones.
              </p>

              <div className="sports-hero__actions">
                <Link href="#sports-catalog">
                  Explore Catalog
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send/?phone=918126299638&text=Hi%20RSF%2C%20I%20want%20sports%20and%20amenities%20catalog%20details.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon size={18} />
                  Talk To Expert
                </Link>
              </div>

              <div className="sports-hero__stats" aria-label="Catalog summary">
                {statItems.map((stat) => (
                  <span key={stat.label}>
                    {stat.value}
                    <small>{stat.label}</small>
                  </span>
                ))}
              </div>
            </div>

            <article
              className="sports-hero__feature"
              style={{
                "--feature-accent":
                  categoryAccents[featuredProduct.category] || "#e30613",
                ...productBackground(featuredProduct),
              }}
            >
              <span>Featured</span>
              <div>
                <small>{featuredProduct.category}</small>
                <strong>{featuredProduct.name}</strong>
                <p>{featuredProduct.shortDescription}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sports-nav" aria-label="Sports category navigation">
        <div className="container">
          <div className="sports-nav__row">
            {categories.map((category) => (
              <Link
                href={`#${category.slug}`}
                key={category.name}
                style={{ "--category-accent": category.accent }}
              >
                <span>{category.products.length}</span>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sports-overview section-padding">
        <div className="container">
          <div className="sports-overview__grid">
            <div>
              <span>Built For Experience</span>
              <h2>Everything from compact home recreation to premium club play.</h2>
            </div>
            <div className="sports-overview__cards">
              <article>
                <Medal size={24} />
                <h3>Premium Selection</h3>
                <p>Curated products across entry, standard, premium, and designer ranges.</p>
              </article>
              <article>
                <ShieldCheck size={24} />
                <h3>Setup Support</h3>
                <p>Installation-ready options with room-size guidance, warranty, and accessories.</p>
              </article>
              <article>
                <Dumbbell size={24} />
                <h3>Commercial Ready</h3>
                <p>Strong choices for clubs, academies, hotels, lounges, and recreation zones.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <SportsCatalogClient categories={categories} />

      <section className="sports-cta section-padding">
        <div className="container">
          <div className="sports-cta__panel">
            <div>
              <span>Need space planning?</span>
              <h2>Share your room size and preferred game setup.</h2>
              <p>
                RSF can help you shortlist the right model, room clearance,
                delivery type, and installation support for your space.
              </p>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=918126299638&text=Hi%20RSF%2C%20I%20need%20help%20planning%20a%20sports%20amenities%20space.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} />
              Plan My Setup
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
