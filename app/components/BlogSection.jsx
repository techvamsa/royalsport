"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getLatestBlogs } from "@/app/libs/blogs";
import "@/app/styles/blog.scss";

const defaultBlogs = getLatestBlogs(8);

const blogCardTones = ["green", "dark", "blue", "sage", "slate", "teal"];

const BlogArrow = ({ className = "", direction, onClick }) => {
  const Icon = direction === "next" ? ArrowRight : ArrowLeft;

  return (
    <button
      type="button"
      className={`${className} home-blogs__arrow home-blogs__arrow--${direction}`}
      onClick={onClick}
      aria-label={direction === "next" ? "Next blogs" : "Previous blogs"}
    >
      <Icon size={20} strokeWidth={2.4} />
    </button>
  );
};

const BlogSection = ({
  blogs = defaultBlogs,
  eyebrow = "Latest From RSF",
  title = "Latest Blogs",
  description = "Stay updated with buying guides, equipment tips, gym setup ideas, and fitness academy insights from Royal Sports N Fitness.",
  viewAllHref = "/blogs",
  viewAllLabel = "View All",
  className = "",
}) => {
  const blogItems = blogs.length ? blogs : defaultBlogs;

  const sliderSettings = {
    dots: false,
    infinite: blogItems.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <BlogArrow direction="next" />,
    prevArrow: <BlogArrow direction="prev" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={`home-blogs section-padding ${className}`.trim()}>
      <div className="container">
        <div className="home-blogs__header">
          <div>
            <span className="home-blogs__eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <Link href={viewAllHref} className="home-blogs__view-all">
            {viewAllLabel}
            <ArrowUpRight size={18} strokeWidth={2.4} />
          </Link>
        </div>

        <Slider {...sliderSettings} className="home-blogs__slider">
          {blogItems.map((blog, index) => {
            const tone = blogCardTones[index % blogCardTones.length];

            return (
              <article
                className={`blog-card blog-card--tone-${tone}`}
                key={blog.slug}
              >
                <Link href={`/blogs/${blog.slug}`} className="blog-card__media">
                  <img src={blog.image} alt={blog.heading} />
                </Link>

                <div className="blog-card__body">
                  <h3>
                    <Link href={`/blogs/${blog.slug}`}>{blog.heading}</Link>
                  </h3>
                  <Link href={`/blogs/${blog.slug}`} className="blog-card__link">
                    Read More
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </Link>
                </div>
              </article>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;
