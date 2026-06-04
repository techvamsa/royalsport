import blogData from "../../blog.json";
import categoryData from "../../category.json";

export const FALLBACK_BLOG_IMAGE = "/imgs/equipment/about.webp";

const wordsToSlug = (value = "") =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getSlugSource = (blog) => {
  const rawUrl = blog?.url?.toString().trim();

  if (!rawUrl) {
    return blog?.heading || "";
  }

  try {
    const parsed = new URL(
      rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
        ? rawUrl
        : `https://${rawUrl}`
    );
    const pathSlug = parsed.pathname
      .split("/")
      .filter(Boolean)
      .pop();

    if (pathSlug) {
      return decodeURIComponent(pathSlug);
    }

    return blog?.heading || rawUrl;
  } catch {
    return rawUrl;
  }
};

export const stripHtml = (html = "") =>
  html
    .toString()
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

export const formatBlogDate = (dateValue) => {
  if (!dateValue) {
    return "";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

const withUniqueSlugs = (blogs) => {
  const seen = new Map();

  return blogs.map((blog, index) => {
    const baseSlug = wordsToSlug(getSlugSource(blog)) || `blog-${index + 1}`;
    const count = seen.get(baseSlug) || 0;
    seen.set(baseSlug, count + 1);

    const slug = count ? `${baseSlug}-${count + 1}` : baseSlug;
    const plainContent = stripHtml(blog.content);
    const excerpt =
      stripHtml(blog.description) ||
      (plainContent.length > 155 ? `${plainContent.slice(0, 155)}...` : plainContent);

    return {
      ...blog,
      slug,
      image: blog.FeaturedImage || FALLBACK_BLOG_IMAGE,
      excerpt,
      dateLabel: formatBlogDate(blog.createdAt),
      searchableText: [
        blog.heading,
        blog.description,
        blog.keywords,
        blog.author,
        plainContent,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
    };
  });
};

export const blogs = withUniqueSlugs(blogData).sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

export const categories = categoryData.map((category) => ({
  id: category._id,
  name: category.name,
  type: category.type,
  slug: wordsToSlug(category.name),
}));

export const getLatestBlogs = (limit = 6) => blogs.slice(0, limit);

export const getBlogBySlug = (slug) => blogs.find((blog) => blog.slug === slug);

export const getRelatedBlogs = (currentSlug, limit = 3) =>
  blogs.filter((blog) => blog.slug !== currentSlug).slice(0, limit);

export const categoryMatchesBlog = (categoryName, blog) => {
  const categoryWords = categoryName
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 2);

  return categoryWords.some((word) => blog.searchableText.includes(word));
};
