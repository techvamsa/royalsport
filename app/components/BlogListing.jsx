"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  ListFilter,
  Search,
} from "lucide-react";
import Pagination, { getPaginationMeta } from "@/app/components/Pagination";
import {
  blogs,
  categories,
  categoryMatchesBlog,
  getLatestBlogs,
} from "@/app/libs/blogs";
import "@/app/styles/blog.scss";

const latestBlogs = getLatestBlogs(5);
const BLOGS_PER_PAGE = 6;

const BlogListing = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const listingTopRef = useRef(null);

  const categoryCounts = useMemo(() => {
    const counts = new Map();

    categories.forEach((category) => {
      counts.set(
        category.name,
        blogs.filter((blog) => categoryMatchesBlog(category.name, blog)).length
      );
    });

    return counts;
  }, []);

  const filteredBlogs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesQuery =
        !normalizedQuery ||
        blog.searchableText.includes(normalizedQuery) ||
        blog.heading.toLowerCase().includes(normalizedQuery);
      const matchesCategory =
        !activeCategory || categoryMatchesBlog(activeCategory, blog);

      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, query]);

  const { startIndex, endIndex, pageCount, safePage, startItem, endItem } =
    getPaginationMeta(filteredBlogs.length, currentPage, BLOGS_PER_PAGE);

  const paginatedBlogs = useMemo(
    () => filteredBlogs.slice(startIndex, endIndex),
    [endIndex, filteredBlogs, startIndex]
  );

  const resetFilters = () => {
    setQuery("");
    setActiveCategory("");
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

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="container blog-hero__grid">
          <div className="blog-hero__media" aria-hidden="true">
            <img src="/imgs/blog-banner.jpg" alt="" />
          </div>

          <div className="blog-hero__content">
            <span>RSF Knowledge Center</span>
            <h1>Latest Blogs</h1>
            <p>
              Explore practical fitness equipment guides, gym setup ideas, and
              academy resources from Royal Sports N Fitness.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-listing section-padding">
        <div className="container">
          <div className="blog-filter">
            <div className="blog-filter__search">
              <Search size={20} strokeWidth={2.4} />
              <input
                type="search"
                placeholder="Enter your keyword..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            <label className="blog-filter__select">
              <ListFilter size={22} strokeWidth={2.4} />
              <span>Filter By</span>
              <select
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
              >
                <option value="">Select Categories</option>
                {categories.map((category) => (
                  <option value={category.name} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>

            <button type="button" className="blog-filter__button" onClick={resetFilters}>
              Clear
            </button>
          </div>

          <div className="blog-listing__layout">
            <div className="blog-listing__main">
              <div className="blog-listing__topline" ref={listingTopRef}>
                <h2>
                  {activeCategory ? `${activeCategory} Blogs` : "Latest Blogs"}
                </h2>
                <span>
                  Showing {startItem}-{endItem} of {filteredBlogs.length} Posts
                </span>
              </div>

              {filteredBlogs.length > 0 ? (
                <>
                  <div className="blog-list">
                    {paginatedBlogs.map((blog, index) => (
                      <article
                        className={`blog-list-card ${
                          (startIndex + index) % 2 === 1 ? "blog-list-card--reverse" : ""
                        }`}
                        key={blog.slug}
                      >
                        <Link href={`/blogs/${blog.slug}`} className="blog-list-card__media">
                          <img src={blog.image} alt={blog.heading} />
                        </Link>

                        <div className="blog-list-card__content">
                          <div className="blog-list-card__date">
                            <CalendarDays size={17} strokeWidth={2.2} />
                            <span>{blog.dateLabel}</span>
                          </div>
                          <h3>
                            <Link href={`/blogs/${blog.slug}`}>{blog.heading}</Link>
                          </h3>
                          <p>{blog.excerpt}</p>
                          <Link href={`/blogs/${blog.slug}`} className="blog-list-card__link">
                            Read More
                            <ArrowRight size={17} strokeWidth={2.4} />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                  <Pagination
                    currentPage={safePage}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    label="Blog pagination"
                  />
                </>
              ) : (
                <div className="blog-empty">
                  <h3>No blogs found</h3>
                  <p>Try a different keyword or clear the selected category.</p>
                  <button type="button" onClick={resetFilters}>
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            <aside className="blog-sidebar" aria-label="Blog sidebar">
              <section className="blog-sidebar__panel">
                <h2>Categories</h2>
                <div className="blog-sidebar__categories">
                  <button
                    type="button"
                    className={!activeCategory ? "active" : ""}
                    onClick={() => setActiveCategory("")}
                  >
                    <ChevronRight size={16} strokeWidth={2.4} />
                    All Blogs
                    <span>{blogs.length}</span>
                  </button>

                  {categories.map((category) => (
                    <button
                      type="button"
                      className={activeCategory === category.name ? "active" : ""}
                      key={category.id}
                      onClick={() => setActiveCategory(category.name)}
                    >
                      <ChevronRight size={16} strokeWidth={2.4} />
                      {category.name}
                      <span>{categoryCounts.get(category.name) || 0}</span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="blog-sidebar__panel">
                <h2>Latest Blogs</h2>
                <div className="blog-sidebar__latest">
                  {latestBlogs.map((blog) => (
                    <Link href={`/blogs/${blog.slug}`} className="blog-mini" key={blog.slug}>
                      <img src={blog.image} alt="" />
                      <span>
                        <strong>{blog.heading}</strong>
                        <small>
                          <CalendarDays size={14} strokeWidth={2.2} />
                          {blog.dateLabel}
                        </small>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogListing;
