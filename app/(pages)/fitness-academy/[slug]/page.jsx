import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileQuestion,
  GraduationCap,
  HelpCircle,
  ListChecks,
  Phone,
  UserRound,
  UsersRound,
} from "lucide-react";
import { blogs } from "@/app/libs/blogs";
import BlogSection from "@/app/components/BlogSection";
import {
  courseDetails,
  getCourseBySlug,
  getRelatedCourses,
} from "@/app/libs/courses";
import "@/app/styles/course-detail.scss";

export const generateStaticParams = () =>
  courseDetails.map((course) => ({
    slug: course.slug,
  }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Royal Sports N Fitness",
    };
  }

  return {
    title: `${course.title} | RSF Fitness Academy`,
    description: course.summary,
  };
};

const getCourseBlogs = (course, limit = 5) => {
  const keywords = course.blogKeywords.map((keyword) => keyword.toLowerCase());
  const matchedBlogs = blogs.filter((blog) =>
    keywords.some((keyword) => blog.searchableText.includes(keyword))
  );

  return (matchedBlogs.length ? matchedBlogs : blogs).slice(0, limit);
};

const formatCourseMode = (mode) => (Array.isArray(mode) ? mode.join(" / ") : mode);

const courseModuleFallbackImage = "https://dummyimage.com/600x400";

const getModuleTopics = (module) =>
  Array.isArray(module.topics) ? module.topics : [];

const courseFacts = (course) => [
  {
    label: "Course Duration",
    value: course.duration,
    icon: CalendarDays,
  },
  {
    label: course.mode ? "Mode" : "No. of Classes",
    value: course.mode ? formatCourseMode(course.mode) : course.classes,
    icon: BookOpenCheck,
  },
  {
    label: "Eligibility",
    value: course.eligibility,
    icon: UserRound,
  },
  {
    label: course.assessment ? "Assessment" : "Exam Format",
    value: course.assessment || course.examFormat,
    icon: FileQuestion,
  },
];

const getCourseFaqs = (course) => {
  const courseName = course.shortTitle || course.title;
  const mode = course.mode ? formatCourseMode(course.mode) : course.classes;
  const assessment = course.assessment || course.examFormat;

  return [
    {
      question: `Who can join the ${courseName} course?`,
      answer: course.eligibility,
    },
    {
      question: `What is the duration of the ${courseName} course?`,
      answer: `${course.title} runs for ${course.duration}${
        mode ? ` with ${mode.toLowerCase?.() || mode}` : ""
      }.`,
    },
    {
      question: "Is this course online, offline, or hybrid?",
      answer: course.mode
        ? `This course is offered in ${formatCourseMode(course.mode)} mode. The RSF team can guide you on the current batch schedule and practical session plan.`
        : `This course includes ${course.classes}. Contact the RSF Academy team for the current online/offline batch format.`,
    },
    {
      question: "How are students assessed?",
      answer: assessment,
    },
    {
      question: "Will I receive certification after completing the course?",
      answer:
        course.certification ||
        `Yes. Students who complete the ${course.title} requirements and assessment process receive certification from RSF Fitness Academy.`,
    },
    {
      question: "How can I get admission or batch details?",
      answer:
        "Call RSF Fitness Academy or submit an enquiry through the contact page. The team will share batch availability, fees, schedule, and the right course path for your goal.",
    },
  ].filter((item) => item.answer);
};

const CourseDetailPage = async ({ params }) => {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedBlogs = getCourseBlogs(course);
  const relatedCourses = getRelatedCourses(course.slug, 3);
  const overviewParagraphs = course.overview || [course.description];
  const courseFaqs = getCourseFaqs(course);
  const hasOnlySimpleModules = course.modules.every(
    (module) => getModuleTopics(module).length === 0
  );

  return (
    <main className="course-detail-page">
      <section className="course-detail-hero">
        <div className="container course-detail-hero__grid">
          <div className="course-detail-hero__copy">
          

            <span className="course-detail-eyebrow">
              <GraduationCap size={17} />
              {course.eyebrow}
            </span>
            <h1>{course.title}</h1>
            <p>{course.summary}</p>

            <div className="course-detail-hero__actions">
              <Link href="tel:+917455900306" className="course-detail-btn course-detail-btn--primary">
                <Phone size={18} />
                Call Academy
              </Link>
              <Link href="#modules" className="course-detail-btn course-detail-btn--light">
                View Modules
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="course-detail-hero__media">
            <img src={course.image} alt={course.title} />
            {/* <span>{course.tag}</span> */}
          </div>
        </div>
      </section>

      <section className="course-detail-facts" aria-label="Course quick facts">
        <div className="container course-detail-facts__grid">
          {courseFacts(course).map((fact) => {
            const Icon = fact.icon;

            return (
              <article className="course-fact-card" key={fact.label}>
                <span>
                  <Icon size={21} />
                </span>
                <small>{fact.label}</small>
                <strong>{fact.value}</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className="course-detail-section course-detail-overview">
        <div className="container course-detail-overview__grid">
          <div>
            <span className="course-detail-kicker">Course Overview</span>
            <h2>
              {course.overviewTitle ||
                "Practical training designed for real fitness careers."}
            </h2>
            {overviewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="course-detail-audience" aria-label="Who this course is for">
            <div className="course-detail-audience__head">
              <UsersRound size={22} />
              <h2>Ideal For</h2>
            </div>
            <div className="course-detail-audience__list">
              {course.idealFor.map((item) => (
                <span key={item}>
                  <UserRound size={16} />
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="course-detail-section course-benefits">
        <div className="container">
          <div className="course-detail-section__head">
            <span className="course-detail-kicker">
              {course.benefitsKicker || "Benefits of Course"}
            </span>
            <h2>
              {course.benefitsTitle || "What students learn to do with confidence."}
            </h2>
          </div>

          <div className="course-benefits__grid">
            {course.benefits.map((benefit, index) => {
              const benefitTitle =
                typeof benefit === "string" ? null : benefit.title;
              const benefitText =
                typeof benefit === "string" ? benefit : benefit.text;

              return (
              <article className="course-benefit-card" key={benefitText}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <CheckCircle2 size={20} />
                {benefitTitle && <h3>{benefitTitle}</h3>}
                <p>{benefitText}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="course-detail-section course-modules" id="modules">
        <div className="container">
          <div className="course-detail-section__head">
            <span className="course-detail-kicker">Course Module</span>
            <h2>
              {course.modulesTitle ||
                "Structured modules from foundation to practical application."}
            </h2>
          </div>

          <div
            className={`course-modules__grid ${
              hasOnlySimpleModules ? "course-modules__grid--mosaic" : ""
            }`}
          >
            {course.modules.map((module, index) => {
              const topics = getModuleTopics(module);
              const hasTopics = topics.length > 0;
              const moduleImage =
                module.image || (!hasTopics ? courseModuleFallbackImage : null);

              if (!hasTopics && hasOnlySimpleModules) {
                return [
                  <article className="course-module-image-tile" key={`${module.title}-image`}>
                    <img src={moduleImage} alt={`${module.title} module visual`} />
                  </article>,
                  <article
                    className={`course-module-card course-module-card--simple course-module-card--theme-${
                      (index % 4) + 1
                    }`}
                    key={module.title}
                  >
                    <div className="course-module-card__meta">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <ListChecks size={20} />
                    </div>
                    <h3>{module.title}</h3>
                    <p>{module.text}</p>
                    <div className="course-module-card__actions">
                      <Link href="tel:+917455900306">Enquire Now</Link>
                      <Link href="/contact-us">Get In Touch</Link>
                    </div>
                  </article>,
                ];
              }

              return (
                <article
                  className={`course-module-card ${
                    moduleImage ? "course-module-card--with-image" : ""
                  } ${!hasTopics ? "course-module-card--simple" : ""}`}
                  key={module.title}
                >
                  {moduleImage && (
                    <img
                      src={moduleImage}
                      alt={module.title}
                      className="course-module-card__image"
                    />
                  )}
                  <div className="course-module-card__meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <ListChecks size={20} />
                  </div>
                  <h3>{module.title}</h3>
                  {hasTopics ? (
                    <ul>
                      {topics.map((topic) => (
                        <li key={topic}>
                          <CheckCircle2 size={15} />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{module.text}</p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="course-detail-section course-exam">
        <div className="container course-exam__grid">
          <article>
            <div className="course-exam__label">
              <ClipboardCheck size={26} />
              <span>Eligibility</span>
            </div>
            <h2>Who can join?</h2>
            <p>{course.eligibility}</p>
          </article>
          <article>
            <div className="course-exam__label">
              <BadgeCheck size={26} />
              <span>{course.assessment ? "Assessment" : "Exam Format"}</span>
            </div>
            <h2>How students are assessed</h2>
            <p>{course.assessment || course.examFormat}</p>
          </article>
          {course.certification && (
            <article>
              <div className="course-exam__label">
                <GraduationCap size={26} />
                <span>Certification</span>
              </div>
              <h2>Certification awarded</h2>
              <p>{course.certification}</p>
            </article>
          )}
        </div>
      </section>

      <section className="course-detail-section course-faq">
        <div className="container course-faq__grid">
          <div className="course-detail-section__head">
            <span className="course-detail-kicker">Course FAQ</span>
            <h2>Questions students ask before joining this course.</h2>
          </div>

          <div className="course-faq__list">
            {courseFaqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  <span>
                    <HelpCircle size={18} strokeWidth={2.4} />
                    {item.question}
                  </span>
                  <ArrowRight size={18} strokeWidth={2.4} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BlogSection
        blogs={relatedBlogs}
        eyebrow="From RSF Blogs"
        title="Helpful reading for this course path."
        description={`Explore ${course.shortTitle || course.title} related guides, academy insights, and fitness career resources from Royal Sports N Fitness.`}
      />

      <section className="course-detail-section course-next">
        <div className="container">
          <div className="course-next__panel">
            <div>
              <span className="course-detail-kicker">Explore More Courses</span>
              <h2>Compare this program with other RSF academy courses.</h2>
            </div>

            <div className="course-next__links">
              {relatedCourses.map((relatedCourse) => (
                <Link href={`/fitness-academy/${relatedCourse.slug}`} key={relatedCourse.slug}>
                  {relatedCourse.shortTitle}
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetailPage;
