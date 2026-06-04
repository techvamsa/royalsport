"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getVisiblePages = (currentPage, pageCount) => {
  if (pageCount <= 5) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const pages = new Set([1, pageCount, currentPage]);

  if (currentPage > 2) pages.add(currentPage - 1);
  if (currentPage < pageCount - 1) pages.add(currentPage + 1);

  return [...pages]
    .sort((a, b) => a - b)
    .reduce((items, page, index, sortedPages) => {
      if (index > 0 && page - sortedPages[index - 1] > 1) {
        items.push("ellipsis");
      }

      items.push(page);
      return items;
    }, []);
};

export const getPaginationMeta = (totalItems, currentPage, itemsPerPage) => {
  const pageCount = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const safePage = Math.min(Math.max(currentPage, 1), pageCount);
  const startIndex = (safePage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return {
    endIndex,
    pageCount,
    safePage,
    startIndex,
    startItem: totalItems ? startIndex + 1 : 0,
    endItem: totalItems ? endIndex : 0,
  };
};

export default function Pagination({
  currentPage,
  pageCount,
  onPageChange,
  label = "Pagination",
}) {
  const previousPageRef = useRef(currentPage);
  const [animationDirection, setAnimationDirection] = useState("");

  useEffect(() => {
    if (previousPageRef.current === currentPage) return undefined;

    setAnimationDirection(
      currentPage > previousPageRef.current ? "next" : "prev"
    );
    previousPageRef.current = currentPage;

    const timeoutId = window.setTimeout(() => {
      setAnimationDirection("");
    }, 360);

    return () => window.clearTimeout(timeoutId);
  }, [currentPage]);

  if (pageCount <= 1) return null;

  const visiblePages = getVisiblePages(currentPage, pageCount);
  const goToPage = (page) => {
    const nextPage = Math.min(Math.max(page, 1), pageCount);
    if (nextPage !== currentPage) onPageChange(nextPage);
  };

  return (
    <nav
      className={`rsf-pagination ${
        animationDirection
          ? `rsf-pagination--animating rsf-pagination--${animationDirection}`
          : ""
      }`}
      aria-label={label}
    >
      <button
        type="button"
        className="rsf-pagination__arrow rsf-pagination__arrow--prev"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} strokeWidth={2.4} />
      </button>

      <div className="rsf-pagination__pages">
        {visiblePages.map((page, index) =>
          page === "ellipsis" ? (
            <span
              className="rsf-pagination__ellipsis"
              style={{ "--rsf-pagination-index": index }}
              key={`ellipsis-${index}`}
            >
              ...
            </span>
          ) : (
            <button
              type="button"
              className={
                currentPage === page
                  ? "rsf-pagination__page rsf-pagination__page--active"
                  : "rsf-pagination__page"
              }
              onClick={() => goToPage(page)}
              aria-current={currentPage === page ? "page" : undefined}
              style={{ "--rsf-pagination-index": index }}
              key={page}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        className="rsf-pagination__arrow rsf-pagination__arrow--next"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === pageCount}
        aria-label="Next page"
      >
        <ChevronRight size={18} strokeWidth={2.4} />
      </button>
    </nav>
  );
}
