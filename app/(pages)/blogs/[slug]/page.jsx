import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  UserRound,
} from "lucide-react";
import {
  blogs,
  categories,
  getBlogBySlug,
  getLatestBlogs,
  getRelatedBlogs,
} from "@/app/libs/blogs";
import "@/app/styles/blog.scss";

const blogCardTones = ["green", "dark", "blue", "sage", "slate", "teal"];

export const generateStaticParams = () =>
  blogs.map((blog) => ({
    slug: blog.slug,
  }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Royal Sports N Fitness",
    };
  }

  return {
    title: `${blog.heading} | Royal Sports N Fitness`,
    description: blog.excerpt,
  };
};

const BlogDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const latestBlogs = getLatestBlogs(4).filter((item) => item.slug !== blog.slug);
  const relatedBlogs = getRelatedBlogs(blog.slug, 3);

  return (
    <main className="blog-detail-page">
      <section className="blog-detail-hero">
        <div className="container">
          <div className="blog-detail-hero__grid">
            <div className="blog-detail-hero__copy">
              <Link href="/blogs" className="blog-detail-hero__back">
                <ArrowLeft size={17} strokeWidth={2.4} />
                Back to Blogs
              </Link>
              <h1>{blog.heading}</h1>
              <div className="blog-detail-hero__meta">
                <span>
                  <CalendarDays size={17} strokeWidth={2.2} />
                  {blog.dateLabel}
                </span>
                {blog.author && (
                  <span>
                    <UserRound size={17} strokeWidth={2.2} />
                    {blog.author}
                  </span>
                )}
              </div>
              {blog.excerpt && <p>{blog.excerpt}</p>}
            </div>

            <div className="blog-detail-hero__media">
              <img src={blog.image} alt={blog.heading} />
            </div>
          </div>
        </div>
      </section>

      <section className="blog-detail section-padding">
        <div className="container blog-detail__layout">
          <article className="blog-detail__article">
            <div
              className="blog-detail__content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          <aside className="blog-sidebar" aria-label="Blog sidebar">
            <section className="blog-sidebar__panel">
              <h2>Latest Blogs</h2>
              <div className="blog-sidebar__latest">
                {latestBlogs.map((latestBlog) => (
                  <Link
                    href={`/blogs/${latestBlog.slug}`}
                    className="blog-mini"
                    key={latestBlog.slug}
                  >
                    <img src={latestBlog.image} alt="" />
                    <span>
                      <strong>{latestBlog.heading}</strong>
                      <small>
                        <CalendarDays size={14} strokeWidth={2.2} />
                        {latestBlog.dateLabel}
                      </small>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="blog-sidebar__panel">
              <h2>Categories</h2>
              <div className="blog-sidebar__categories">
                {categories.map((category) => (
                  <Link href="/blogs" key={category.id}>
                    <ChevronRight size={16} strokeWidth={2.4} />
                    {category.name}
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>

      {relatedBlogs.length > 0 && (
        <section className="related-blogs home-blogs section-padding-bottom">
          <div className="container">
            <div className="home-blogs__header">
              <div>
                <span className="home-blogs__eyebrow">Related Reading</span>
                <h2>Related Blogs</h2>
                <p>
                  Continue exploring practical gym equipment guides, fitness
                  course insights, and setup ideas from Royal Sports N Fitness.
                </p>
              </div>

              <Link href="/blogs" className="home-blogs__view-all">
                View All
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </Link>
            </div>

            <div className="related-blogs__grid">
              {relatedBlogs.map((relatedBlog, index) => {
                const tone = blogCardTones[index % blogCardTones.length];

                return (
                  <article
                    className={`blog-card blog-card--tone-${tone}`}
                    key={relatedBlog.slug}
                  >
                    <Link
                      href={`/blogs/${relatedBlog.slug}`}
                      className="blog-card__media"
                    >
                      <img src={relatedBlog.image} alt={relatedBlog.heading} />
                    </Link>
                    <div className="blog-card__body">
                      <h3>
                        <Link href={`/blogs/${relatedBlog.slug}`}>
                          {relatedBlog.heading}
                        </Link>
                      </h3>
                      <Link
                        href={`/blogs/${relatedBlog.slug}`}
                        className="blog-card__link"
                      >
                        Read More
                        <ArrowRight size={16} strokeWidth={2.4} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetailsPage;
