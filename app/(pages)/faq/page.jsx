import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  Dumbbell,
  GraduationCap,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Truck,
  Wrench,
} from "lucide-react";
import WhatsAppIcon from "@/app/components/WhatsAppIcon";
import "@/app/styles/faq.scss";

export const metadata = {
  title: "FAQ | Royal Sports N Fitness",
  description:
    "Find answers about Royal Sports N Fitness gym equipment, fitness academy courses, accessories, delivery, installation, pricing, and support.",
};

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=918126299638&text&type=phone_number&app_absent=0";

const faqGroups = [
  {
    title: "Gym Equipment",
    summary: "Product range, gym setup, and buying support.",
    icon: Dumbbell,
    questions: [
      {
        question: "What type of gym equipment does RSF provide?",
        answer:
          "Royal Sports N Fitness offers commercial gym equipment across strength machines, cardio machines, hammer series, functional training, rehab equipment, accessories, and sports amenities.",
      },
      {
        question: "Can RSF help with complete gym setup planning?",
        answer:
          "Yes. The team can guide gym owners with equipment selection, space planning, product combinations, and setup support based on the size and goal of the fitness space.",
      },
      {
        question: "Do you provide product guidance before purchase?",
        answer:
          "Yes. You can speak with the RSF team to compare product categories, understand usage needs, and shortlist machines for commercial gyms, academies, clubs, and personal training studios.",
      },
    ],
  },
  {
    title: "Fitness Academy",
    summary: "Courses, practical training, and career support.",
    icon: GraduationCap,
    questions: [
      {
        question: "What courses are available at RSF Fitness Academy?",
        answer:
          "RSF Fitness Academy offers fitness education programs focused on personal training, nutrition, practical gym-floor learning, hybrid classes, certification guidance, and placement assistance.",
      },
      {
        question: "Are classes online or offline?",
        answer:
          "Academy programs are offered through a hybrid format, combining online learning with offline practical sessions where applicable.",
      },
      {
        question: "Does the academy include practical gym training?",
        answer:
          "Yes. Practical sessions are designed around real gym-floor coaching, exercise technique, client handling, and professional trainer readiness.",
      },
    ],
  },
  {
    title: "Delivery & Installation",
    summary: "Dispatch, setup, and after-sales care.",
    icon: Truck,
    questions: [
      {
        question: "Is delivery available outside Meerut or Pune?",
        answer:
          "Yes. RSF works with customers across different cities. Delivery timelines and installation coordination depend on product availability, order size, and customer location.",
      },
      {
        question: "Do you help with installation after delivery?",
        answer:
          "Installation support is coordinated based on the selected equipment and location. The team will explain the process while confirming your order.",
      },
      {
        question: "What after-sales support is available?",
        answer:
          "RSF provides after-sales support for equipment buyers. For service, spare parts, or maintenance queries, contact the support team with your product and purchase details.",
      },
    ],
  },
  {
    title: "Pricing & Orders",
    summary: "Quotes, accessories, and order assistance.",
    icon: CreditCard,
    questions: [
      {
        question: "Where can I get prices for gym equipment?",
        answer:
          "Pricing depends on the product model, quantity, customization needs, and delivery location. Contact RSF for a current quote and product recommendation.",
      },
      {
        question: "Can I buy accessories separately?",
        answer:
          "Yes. Accessories can be explored separately through the accessories section, and the team can help you match them with your gym or training requirement.",
      },
      {
        question: "How do I place an order or request a quote?",
        answer:
          "Call, WhatsApp, or email the RSF team with your product requirement, location, and setup goal. A team member will guide you through product selection and next steps.",
      },
    ],
  },
];

const supportCards = [
  {
    label: "Call",
    value: "+91 81262 99638",
    href: "tel:+918126299638",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Message RSF team",
    href: whatsappUrl,
    icon: WhatsAppIcon,
  },
  {
    label: "Email",
    value: "contact@royalsportsnfitness.com",
    href: "mailto:contact@royalsportsnfitness.com",
    icon: Mail,
  },
];

const helpPoints = [
  "Share your city, space size, and target equipment list.",
  "RSF suggests the right products, academy options, or support path.",
  "You receive next steps for quotation, visit, delivery, or enrollment.",
];

export default function FaqPage() {
  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="container faq-hero__grid">
          <div className="faq-hero__copy">
            <span className="faq-eyebrow">
              <HelpCircle size={17} strokeWidth={2.5} />
              FAQ
            </span>
            <h1>Answers for equipment, academy, accessories, and support.</h1>
            <p>
              Get quick clarity before you choose machines, plan a commercial
              gym, enroll in academy training, or request after-sales help from
              Royal Sports N Fitness.
            </p>

            <div className="faq-hero__actions">
              <Link href="tel:+918126299638" className="faq-btn faq-btn--primary">
                <Phone size={18} strokeWidth={2.4} />
                Call Now
              </Link>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="faq-btn faq-btn--light"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </Link>
            </div>
          </div>

          <div className="faq-hero__visual">
            <img src="/imgs/faq-banner.jpg" alt="Royal Sports N Fitness gym equipment" />
            <div className="faq-hero__badge">
              <BadgeCheck size={20} strokeWidth={2.4} />
              <span>Equipment, academy, setup, and support guidance in one place.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-section__grid">
          <div className="faq-section__main">
            <div className="faq-section__head">
              <span>FAQ Help Center</span>
              <h2>Frequently Asked Questions</h2>
              <p>
                Browse the most common questions customers ask before buying,
                enrolling, or requesting support.
              </p>
            </div>

            <div className="faq-groups">
              {faqGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <section className="faq-group" key={group.title}>
                    <div className="faq-group__head">
                      <div className="faq-group__icon">
                        <Icon size={22} strokeWidth={2.4} />
                      </div>
                      <div>
                        <h3>{group.title}</h3>
                        <p>{group.summary}</p>
                      </div>
                    </div>

                    <div className="faq-list">
                      {group.questions.map((item, index) => (
                        <details key={item.question} open={index === 0}>
                          <summary>{item.question}</summary>
                          <p>{item.answer}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>

          <aside className="faq-help" aria-label="FAQ support">
            <div className="faq-help__panel">
              <div className="faq-help__icon">
                <Wrench size={24} strokeWidth={2.4} />
              </div>
              <h2>Need a specific answer?</h2>
              <p>
                Share your requirement with the RSF team and get guided support
                for products, academy courses, setup, or service.
              </p>

              <div className="faq-help__steps">
                {helpPoints.map((point, index) => (
                  <span key={point}>
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="faq-help__location">
              <MapPin size={21} strokeWidth={2.4} />
              <span>Meerut | Pune | Jaipur | Lucknow</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="faq-contact">
        <div className="container faq-contact__grid">
          <div>
            <span className="faq-eyebrow">
              <WhatsAppIcon size={17} />
              Contact RSF
            </span>
            <h2>Still choosing? Talk to the team before you decide.</h2>
          </div>

          <div className="faq-contact__cards">
            {supportCards.map((card) => {
              const Icon = card.icon;
              const isExternal = card.href.startsWith("http");

              return (
                <Link
                  href={card.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  key={card.label}
                >
                  <Icon size={20} strokeWidth={2.4} />
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                  <ArrowRight size={17} strokeWidth={2.4} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
