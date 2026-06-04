import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Dumbbell,
  GraduationCap,
  Medal,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Wrench,
} from "lucide-react";
import Clients from "@/app/components/Clients";
import MediaSections from "@/app/components/MediaSections";
import "@/app/styles/about.scss";

export const metadata = {
  title: "About Us | Royal Sports N Fitness",
  description:
    "Learn about Royal Sports N Fitness, its gym equipment journey since 2012, fitness academy, franchise growth, commercial gym setup support, and customer-first service.",
};

const storyParagraphs = [
  "Royal Sports N Fitness began in 2012 as a gym equipment business and has grown into a fitness solutions company serving gym owners, trainers, academies, clubs, and fitness entrepreneurs across India.",
  "With a focus on quality, innovation, and long-term service, RSF supports customers with commercial gym equipment, complete setup guidance, accessories, academy programs, and after-sales support.",
  "The brand has expanded its reach through fitness education and franchise-led growth while staying committed to cutting-edge products and dependable customer experience.",
];

const metrics = [
  {
    value: "5000+",
    label: "Gym Setups",
    detail: "Commercial fitness spaces supported with equipment and planning.",
    icon: Dumbbell,
  },
  {
    value: "14+",
    label: "Years Experience",
    detail: "Deep operating experience in fitness equipment and education.",
    icon: Medal,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    detail: "Trusted by business owners, coaches, and fitness professionals.",
    icon: UsersRound,
  },
  {
    value: "200+",
    label: "Students Trained",
    detail: "Fitness academy learners trained through practical programs.",
    icon: GraduationCap,
  },
];

const strengths = [
  {
    title: "Commercial Gym Equipment",
    text: "Strength machines, cardio equipment, accessories, and solutions for high-usage fitness spaces.",
    icon: Dumbbell,
  },
  {
    title: "Complete Setup Guidance",
    text: "Product selection, space planning, equipment combinations, and practical buying support.",
    icon: Building2,
  },
  {
    title: "Fitness Academy",
    text: "Hybrid education, practical sessions, mentor support, and career-focused training pathways.",
    icon: GraduationCap,
  },
  {
    title: "After-Sales Support",
    text: "Service-first guidance for installation, maintenance, spare parts, and customer care.",
    icon: Wrench,
  },
];

const values = [
  "Quality-led product selection",
  "Practical guidance for real gym spaces",
  "Customer relationships beyond one-time sales",
  "Fitness education with industry relevance",
  "Reliable support for growing fitness businesses",
  "Premium equipment under one roof",
];

const timeline = [
  {
    year: "2012",
    title: "RSF begins its equipment journey",
    text: "The company starts with a focused gym equipment business and a strong quality-first mindset.",
  },
  {
    year: "Growth",
    title: "Commercial setup expertise expands",
    text: "RSF builds trust with gym owners through equipment supply, setup guidance, and service support.",
  },
  {
    year: "Academy",
    title: "Fitness education enters the ecosystem",
    text: "RSF Fitness Academy adds career-focused trainer education and practical learning opportunities.",
  },
  {
    year: "Today",
    title: "A complete fitness solutions brand",
    text: "The business now supports equipment buyers, students, clubs, and fitness entrepreneurs together.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <span className="about-eyebrow">
              <ShieldCheck size={17} strokeWidth={2.5} />
              About RSF
            </span>
            <h1>Building stronger fitness spaces, careers, and communities.</h1>
            <p>
              Royal Sports N Fitness brings equipment, education, setup
              guidance, and support together for people who want to build,
              operate, and grow better fitness businesses.
            </p>

            <div className="about-hero__actions">
              <Link href="/product" className="about-btn about-btn--primary">
                Explore Equipment
                <ArrowRight size={18} strokeWidth={2.4} />
              </Link>
              <Link href="tel:+918126299638" className="about-btn about-btn--light">
                <Phone size={18} strokeWidth={2.4} />
                Call RSF
              </Link>
            </div>
          </div>

          <div className="about-hero__media">
            <img src="/imgs/about-us.jpg" alt="Royal Sports N Fitness team and equipment" />
            <div className="about-hero__badge">
              <Sparkles size={20} strokeWidth={2.4} />
              <span>Equipment / Academy / Club</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-metrics" aria-label="RSF achievements">
        <div className="container about-metrics__grid">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <article className="about-metric-card" key={metric.label}>
                <Icon size={24} strokeWidth={2.4} />
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-section about-story">
        <div className="container about-story__grid">
          <div className="about-story__media">
            <img src="/imgs/equipment/about.webp" alt="RSF commercial gym setup" />
          </div>

          <div className="about-story__content">
            <div className="about-section__head">
              <span>Our Journey</span>
              <h2>From equipment supply to a complete fitness ecosystem.</h2>
            </div>

            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="about-story__checks">
              {values.slice(0, 4).map((value) => (
                <span key={value}>
                  <CheckCircle2 size={18} strokeWidth={2.4} />
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-strengths">
        <div className="container">
          <div className="about-section__head">
            <span>What We Do</span>
            <h2>Solutions for every stage of a fitness business.</h2>
            <p>
              RSF helps customers choose, plan, learn, install, and keep moving
              with the right mix of products and support.
            </p>
          </div>

          <div className="about-strengths__grid">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="about-strength-card" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={23} strokeWidth={2.4} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-section about-values">
        <div className="container about-values__grid">
          <div>
            <div className="about-section__head">
              <span>Why RSF</span>
              <h2>Built around trust, quality, and practical fitness industry experience.</h2>
            </div>
            <p>
              Customers come to RSF for more than machines. They come for
              equipment clarity, space guidance, academy knowledge, responsive
              service, and a team that understands what commercial gyms need.
            </p>
          </div>

          <div className="about-values__list">
            {values.map((value) => (
              <span key={value}>
                <BadgeCheck size={18} strokeWidth={2.4} />
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-timeline">
        <div className="container">
          <div className="about-section__head">
            <span>Milestones</span>
            <h2>How RSF keeps expanding its fitness impact.</h2>
          </div>

          <div className="about-timeline__grid">
            {timeline.map((item) => (
              <article className="about-timeline-card" key={item.title}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-cta">
        <div className="container about-cta__panel">
          <div>
            <span className="about-eyebrow">
              <Target size={17} strokeWidth={2.5} />
              Start With RSF
            </span>
            <h2>Planning equipment, academy admission, or a complete setup?</h2>
          </div>

          <div className="about-cta__actions">
            <Link href="/contact-us" className="about-btn about-btn--primary">
              Contact Team
              <ArrowRight size={18} strokeWidth={2.4} />
            </Link>
            <Link href="/fitness-academy" className="about-btn about-btn--dark">
              View Academy
            </Link>
          </div>
        </div>
      </section>

      <MediaSections />
      <Clients />
    </main>
  );
}
