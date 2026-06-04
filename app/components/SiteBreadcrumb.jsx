"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { courseNavItems } from "@/app/libs/courses";

const courseLabelOverrides = Object.fromEntries(
  courseNavItems.map((course) => [course.href.split("/").pop(), course.label])
);

const labelOverrides = {
  ...courseLabelOverrides,
  about: "About Us",
  "about-us": "About Us",
  accessories: "Accessories",
  "best-online-personal-training-certification": "Personal Training Certification",
  blog: "Blog",
  blogs: "Blogs",
  "contact-us": "Contact Us",
  faq: "FAQ",
  "fitness-academy": "Fitness Academy",
  product: "Equipment",
  products: "Products",
  "sports-and-aminities": "Sports & Amenities",
};

const toTitle = (segment = "") => {
  const decoded = decodeURIComponent(segment);

  return (
    labelOverrides[decoded] ||
    decoded
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  );
};

const SiteBreadcrumb = () => {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => ({
    href: `/${segments.slice(0, index + 1).join("/")}`,
    label: toTitle(segment),
  }));

  return (
    <nav className="site-breadcrumb" aria-label="Breadcrumb">
      <div className="container site-breadcrumb__inner">
        <Link href="/" className="site-breadcrumb__home">
          <Home size={15} strokeWidth={2.3} />
          Home
        </Link>

        {crumbs.map((crumb, index) => {
          const isCurrent = index === crumbs.length - 1;

          return (
            <span className="site-breadcrumb__item" key={crumb.href}>
              <ChevronRight size={15} strokeWidth={2.4} />
              {isCurrent ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default SiteBreadcrumb;
