"use client";

import { useEffect } from "react";

const revealSelector = [
  "main .heading-wrapper",
  "main .banner .left",
  "main .banner .right",
  "main .product-item",
  "main .maincard",
  "main .products-hero__copy",
  "main .products-hero__stats span",
  "main .products-filter",
  "main .products-toolbar",
  "main .accessories-hero__copy",
  "main .accessories-hero__feature",
  "main .accessories-hero__stats span",
  "main .accessories-filter",
  "main .accessories-results__toolbar",
  "main .academy-hero__copy",
  "main .academy-hero__visual",
  "main .academy-stat",
  "main .academy-section__head",
  "main .academy-intro__panel",
  "main .academy-course-card",
  "main .academy-feature-card",
  "main .academy-pathway__media",
  "main .academy-step",
  "main .academy-faculty-card",
  "main .academy-contact__cards a",
  "main .course-detail-hero__copy",
  "main .course-detail-hero__media",
  "main .course-fact-card",
  "main .course-detail-section__head",
  "main .course-detail-overview__grid > div",
  "main .course-detail-audience",
  "main .course-benefit-card",
  "main .course-module-card",
  "main .course-exam article",
  "main .course-blog-card",
  "main .course-next__panel",
  "main .faq-hero__copy",
  "main .faq-hero__visual",
  "main .faq-section__head",
  "main .faq-group",
  "main .faq-list details",
  "main .faq-help__panel",
  "main .faq-help__location",
  "main .faq-contact__grid > div",
  "main .faq-contact__cards a",
  "main .sports-hero__copy",
  "main .sports-hero__panel",
  "main .sports-category__head",
  "main .looking-for__tile",
  "main .looking-for__intro",
  "main .eq-range__intro",
  "main .eq-range__summary",
  "main .eq-range__selector",
  "main .eq-range__featured",
  "main .sports-product",
  "main .accessory-card",
  "main .blog-card",
].join(", ");

const visibleClass = "site-reveal--visible";

const prepareElement = (element, observer) => {
  if (
    element.classList.contains("site-reveal") ||
    element.classList.contains("slick-cloned") ||
    element.closest("[data-no-site-animation]")
  ) {
    return;
  }

  const siblings = Array.from(element.parentElement?.children || []).filter(
    (child) => child.matches?.(revealSelector)
  );
  const siblingIndex = Math.max(siblings.indexOf(element), 0);
  const delay = Math.min(siblingIndex, 7) * 70;

  element.classList.add("site-reveal");
  element.style.setProperty("--site-reveal-delay", `${delay}ms`);
  observer.observe(element);

  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.98 && rect.bottom > 0) {
    requestAnimationFrame(() => element.classList.add(visibleClass));
  }
};

export default function SiteAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.classList.add("site-motion-reduced");
      return undefined;
    }

    document.documentElement.classList.add("site-motion-ready");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(revealSelector).forEach((element) => {
        element.classList.add("site-reveal", visibleClass);
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -4% 0px",
        threshold: 0.01,
      }
    );

    const collect = (root = document) => {
      root
        .querySelectorAll?.(revealSelector)
        .forEach((element) => prepareElement(element, observer));
    };

    collect();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          if (node.matches?.(revealSelector)) {
            prepareElement(node, observer);
          }

          collect(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove("site-motion-ready");
    };
  }, []);

  return null;
}
