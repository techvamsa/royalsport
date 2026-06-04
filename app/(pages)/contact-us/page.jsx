import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Form from "@/app/components/Form";
import WhatsAppIcon from "@/app/components/WhatsAppIcon";
import "@/app/styles/contact.scss";

export const metadata = {
  title: "Contact Us | Royal Sports N Fitness",
  description:
    "Contact Royal Sports N Fitness for gym equipment, fitness academy courses, accessories, commercial gym setup guidance, service, and support.",
};

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=918126299638&text&type=phone_number&app_absent=0";

const contactCards = [
  {
    label: "Call Sales Team",
    value: "+91 81262 99638",
    href: "tel:+918126299638",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Get quick guidance",
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

const officeLocations = [
  {
    title: "Head Office",
    city: "Meerut",
    address: "Gali No. 6, Sai Puram Ind. Area, Delhi Rd, Meerut, Uttar Pradesh",
  },
  {
    title: "Corporate Office",
    city: "Pune",
    address: "302, 3rd Floor, Biz Bay, Baner, Pune, Maharashtra 411045",
  },
  {
    title: "Showroom",
    city: "Pune",
    address:
      "RSF Showroom, Nakhate Nagar, Front of Balaji Medical, Kalewadi Phata, Pune 411017",
    phones: [
      { label: "+91 80877 34518", href: "tel:+918087734518" },
      { label: "+91 73878 37119", href: "tel:+917387837119" },
    ],
  },
  {
    title: "Branch Office",
    city: "New Delhi",
    address:
      "Plot No. 143, 1st Floor, Kakrola Housing Complex, Opposite Metro Pillar No. 789, Dwarka Mor, New Delhi 110078",
  },
  {
    title: "Branch Office",
    city: "Jaipur",
    address:
      "Royal Sports and Fitness, J.K. Tower Basement, Pandit Ji Ki Thadi, Near Hotel Manohar Palace, Kalwar Road, Jhotwara, Jaipur, Rajasthan",
  },
  {
    title: "Branch Office",
    city: "Lucknow",
    address: "D-2143, Indiranagar, Lucknow, Uttar Pradesh 226016",
  },
  {
    title: "Branch Office",
    city: "Ahmedabad",
    address: "Shop No 5, Setu Scarlet Building, Gandhi Nagar Highway, Ahmedabad 382424",
  },
];

const supportPoints = [
  "Commercial gym equipment and product selection",
  "Fitness academy course admission support",
  "Accessories, sports amenities, and setup planning",
  "Service, installation, quotation, and after-sales guidance",
];

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.1250780555947!2d77.68365560000001!3d28.9540144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6468e1dc5fdb%3A0xc4ff3ab2c1651e41!2sRoyal%20Sports%20N%20Fitness%20(RSF)!5e0!3m2!1sen!2sin!4v1757189029520!5m2!1sen!2sin";

export default function ContactUsPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div className="contact-hero__copy">
            <span className="contact-eyebrow">
              <Send size={17} strokeWidth={2.5} />
              Contact RSF
            </span>
            <h1>Talk to Royal Sports N Fitness for equipment, academy, and setup support.</h1>
            <p>
              Share your requirement with the RSF team and get help with gym
              equipment selection, academy admissions, accessories, installation,
              quotations, and after-sales support.
            </p>

            <div className="contact-hero__actions">
              <Link href="tel:+918126299638" className="contact-btn contact-btn--primary">
                <Phone size={18} strokeWidth={2.4} />
                Call Now
              </Link>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn--light"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </Link>
            </div>
          </div>

          <div className="contact-hero__panel">
            <div className="contact-hero__panel-head">
              <Clock3 size={22} strokeWidth={2.4} />
              <span>Response Support</span>
              <strong>Equipment / Academy / Club</strong>
            </div>

            <div className="contact-hero__checks">
              {supportPoints.map((point) => (
                <span key={point}>
                  <ArrowRight size={16} strokeWidth={2.5} />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-quick">
        <div className="container contact-quick__grid">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const isExternal = card.href.startsWith("http");

            return (
              <Link
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="contact-card"
                key={card.label}
              >
                <span className="contact-card__icon">
                  <Icon size={22} strokeWidth={2.4} />
                </span>
                <small>{card.label}</small>
                <strong>{card.value}</strong>
                <ArrowRight size={18} strokeWidth={2.4} />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="contact-section contact-main">
        <div className="container contact-main__grid">
          <div className="contact-form-panel">
            <div className="contact-section__head">
              <span>Send Enquiry</span>
              <h2>Request a call back from the RSF team.</h2>
              <p>
                Fill in your details and our team will connect with you for the
                right product, course, service, or setup guidance.
              </p>
            </div>
            <Form showHeading />
          </div>

          <aside className="contact-map-panel">
            <div className="contact-section__head">
              <span>Visit RSF</span>
              <h2>Find Royal Sports N Fitness.</h2>
            </div>
            <iframe
              loading="lazy"
              src={mapSrc}
              title="Royal Sports N Fitness Meerut location map"
              aria-label="Royal Sports N Fitness Meerut location map"
            />
          </aside>
        </div>
      </section>

      <section className="contact-section contact-offices">
        <div className="container">
          <div className="contact-section__head">
            <span>Reach Us</span>
            <h2>Our Offices</h2>
            <p>Connect with RSF teams across major cities for sales and support.</p>
          </div>

          <div className="contact-offices__grid">
            {officeLocations.map((office) => (
              <article className="contact-office-card" key={`${office.title}-${office.city}`}>
                <div className="contact-office-card__icon">
                  {office.title.includes("Branch") ? (
                    <MapPin size={21} strokeWidth={2.4} />
                  ) : (
                    <Building2 size={21} strokeWidth={2.4} />
                  )}
                </div>
                <div>
                  <span>{office.title}</span>
                  <h3>{office.city}</h3>
                  <p>{office.address}</p>
                  {office.phones && (
                    <div className="contact-office-card__phones">
                      {office.phones.map((phone) => (
                        <Link href={phone.href} key={phone.label}>
                          {phone.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
