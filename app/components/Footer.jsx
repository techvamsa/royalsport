import Link from "next/link";
import {
  Building2,
  ChevronDown,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import WhatsAppIcon from "@/app/components/WhatsAppIcon";

const companyIntro =
  "Royal Sports and Fitness helps gym owners, fitness professionals, academies, and clubs build better fitness spaces with quality equipment, education, and support.";

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Gym Equipment", href: "/product" },
  { label: "Cardio Machines", href: "/product/cardio-machines" },
  { label: "Strength Machines", href: "/product/strength-machines" },
  { label: "Fitness Academy", href: "/fitness-academy" },
  { label: "Accessories", href: "/accessories" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

const contactActions = [
  {
    label: "Call Now",
    href: "tel:+918126299638",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=918126299638&text&type=phone_number&app_absent=0",
    icon: WhatsAppIcon,
  },
  {
    label: "Brochure",
    href: "https://royalsportsnfitness.com/images/rsf_fitness_academy_brochure.pdf",
    icon: Download,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/royalsportsnfitnessIndia",
    icon: "/imgs/fb.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/royalsportnfitness/",
    icon: "/imgs/insta.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@royalsportsnfitness",
    icon: "/imgs/youtube.svg",
  },
];

const officeLocations = [
  {
    title: "Head Office",
    city: "Meerut",
    address: "Gali No. 6, Sai Puram Ind. Area, Delhi Rd, Meerut, Uttar Pradesh",
    icon: Building2,
  },
  {
    title: "Corporate Office",
    city: "Pune",
    address: "302, 3rd Floor, Biz Bay, Baner, Pune, Maharashtra 411045",
    icon: Building2,
  },
  {
    title: "Showroom",
    city: "Pune",
    address: "RSF Showroom, Nakhate Nagar, Front of Balaji Medical, Kalewadi Phata, Pune 411017",
    phones: [
      { label: "+91 8087734518", href: "tel:+918087734518" },
      { label: "+91 73878 37119", href: "tel:+917387837119" },
    ],
    icon: Building2,
  },
  {
    title: "Branch Office",
    city: "New Delhi",
    address:
      "Plot No. 143, 1st Floor, Kakrola Housing Complex, Opposite Metro Pillar No. 789, Dwarka Mor, New Delhi 110078",
    icon: MapPin,
  },
  {
    title: "Branch Office",
    city: "Jaipur",
    address:
      "Royal Sports and Fitness, J.K. Tower Basement, Pandit Ji Ki Thadi, Near Hotel Manohar Palace, Kalwar Road, Jhotwara, Jaipur, Rajasthan",
    icon: MapPin,
  },
  {
    title: "Branch Office",
    city: "Lucknow",
    address: "D-2143, Indiranagar, Lucknow, Uttar Pradesh 226016",
    icon: MapPin,
  },
  {
    title: "Branch Office",
    city: "Ahmedabad",
    address: "Shop No 5, Setu Scarlet Building, Gandhi Nagar Highway, Ahmedabad 382424",
    icon: MapPin,
  },
];

const officeGroups = officeLocations.reduce((groups, office) => {
  const existingGroup = groups.find((group) => group.title === office.title);

  if (existingGroup) {
    existingGroup.locations.push(office);
    return groups;
  }

  return [...groups, { title: office.title, locations: [office] }];
}, []);

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="footer__logo" aria-label="Royal Sports N Fitness">
              <img src="/imgs/footer-logo.webp" alt="Royal Sports N Fitness" />
            </Link>
            <p>{companyIntro}</p>
            <div className="footer__social" aria-label="Social links">
              {socialLinks.map((social) => (
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  key={social.label}
                >
                  <img src={social.icon} alt="" />
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__help">
            <span>Need Guidance?</span>
            <h2>Talk to our team for equipment, academy, and setup support.</h2>
            <div className="footer__actions">
              {contactActions.map((action) => {
                const Icon = action.icon;

                return (
                  <Link
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                    key={action.label}
                  >
                    <Icon size={18} strokeWidth={2.4} />
                    {action.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer__main">
          <div className="footer__links-panel">
            <div>
              <h2>Quick Links</h2>
              <nav className="footer__links" aria-label="Footer navigation">
                {quickLinks.map((link) => (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2>Contact</h2>
              <ul className="footer__contact">
                <li>
                  <Mail size={18} strokeWidth={2.4} />
                  <Link href="mailto:contact@royalsportsnfitness.com">
                    contact@royalsportsnfitness.com
                  </Link>
                </li>
                <li>
                  <Phone size={18} strokeWidth={2.4} />
                  <div>
                    <Link href="tel:+918126299638">+91-8126299638</Link>
                    <Link href="tel:+917455900612">+91-7455900612</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__offices">
            <div className="footer__section-head">
              <span>Reach Us</span>
              <h2>Our Offices</h2>
            </div>

            <div className="footer__office-groups">
              {officeGroups.map((group, groupIndex) => (
                <details
                  className={`footer__office-group ${
                    group.locations.length === 1
                      ? "footer__office-group--single"
                      : "footer__office-group--multiple"
                  }`}
                  key={group.title}
                  open={groupIndex === 0}
                >
                  <summary>
                    <span>{group.title}</span>
                    <small>
                      {group.locations.length}{" "}
                      {group.locations.length === 1 ? "location" : "locations"}
                    </small>
                    <ChevronDown size={18} strokeWidth={2.4} />
                  </summary>

                  <div className="footer__office-list">
                    {group.locations.map((office) => {
                      const Icon = office.icon;

                      return (
                        <article
                          className="footer__office"
                          key={`${office.title}-${office.city}`}
                        >
                          <div className="footer__office-icon">
                            <Icon size={19} strokeWidth={2.4} />
                          </div>
                          <div>
                            <h3>{office.city}</h3>
                            <p>{office.address}</p>
                            {office.phones && (
                              <div className="footer__office-phones">
                                {office.phones.map((phone) => (
                                  <Link href={phone.href} key={phone.label}>
                                    {phone.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>Equipment / Academy / Club</span>
          <p>
            &copy; Copyright{" "}
            <Link href="https://techvamsa.com" target="_blank" rel="noreferrer">
              TechVamsa
            </Link>
            . All Rights Reserved
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
