"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Download,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

const equipmentGroups = [
  {
    title: "Streagth Sectione",
    items: [
      { label: "BH Series", href: "/#StrengthMachine" },
      { label: "Dezire Series", href: "/#DezireSeries" },
      { label: "KG Series", href: "/#KGSeries" },
      { label: "RS- 5", href: "/#RS5Series" },
      { label: "RS-7", href: "/#RS7Series" },
      { label: "Smart Series", href: "/#SmartSeries" },
      { label: "Supreme Series", href: "/#SupremeSeries" },
    ],
  },
  {
    title: "Cardio Sectione",
    items: [
      { label: "Cross Trainer", href: "/#CardioMachines" },
      { label: "Sky Rower and Water Rower", href: "/#CardioMachines" },
      { label: "Spin Bike", href: "/#CardioMachines" },
      { label: "Treadmill", href: "/#CardioMachines" },
    ],
  },
  {
    title: "Others",
    items: [{ label: "Hammer Series", href: "/#HammerSeries" }],
  },
];

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Equipment",
    href: "/#equipment",
    type: "mega",
    groups: equipmentGroups,
  },
  {
    label: "Academy",
    href: "https://royalsportsnfitness.com/academy",
    children: [
      { label: "Fitness Academy", href: "https://royalsportsnfitness.com/academy" },
      {
        label: "Fitness Trainer",
        href: "https://royalsportsnfitness.com/best-online-personal-training-certification",
      },
    ],
  },
  { label: "Accessories", href: "https://royalsportsnfitness.com/accessories" },
  {
    label: "Sports & Amenities",
    href: "https://royalsportsnfitness.com/sports-and-aminities",
  },
  { label: "Blogs", href: "https://royalsportsnfitness.com/blog" },
  { label: "Contact", href: "https://royalsportsnfitness.com/contact-us" },
];

const contactUrl =
  "https://api.whatsapp.com/send/?phone=918126299638&text&type=phone_number&app_absent=0";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isOpen ? "site-header--open" : ""}`}>
      <div className="site-header__top">
        <div className="container site-header__top-inner">
          <div className="site-header__contact">
            <a href="tel:+918126299638">
              <Phone size={15} strokeWidth={2.4} />
              <span>+91 81262 99638</span>
            </a>
            <a href="mailto:contact@royalsportsnfitness.com">
              <Mail size={15} strokeWidth={2.4} />
              <span>contact@royalsportsnfitness.com</span>
            </a>
            <span>
              <MapPin size={15} strokeWidth={2.4} />
              Meerut | Pune | Jaipur | Lucknow
            </span>
          </div>

          <Link
            href="https://royalsportsnfitness.com/images/rsf_fitness_academy_brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="site-header__brochure"
          >
            <Download size={16} strokeWidth={2.4} />
            Academy Brochure
          </Link>
        </div>
      </div>

      <div className="site-header__main-wrap">
        <div className="container">
          <div className="site-header__main">
            <Link href="/" className="site-header__logo" aria-label="Royal Sports N Fitness">
              <img src="/imgs/footer-logo.webp" alt="Royal Sports N Fitness" />
            </Link>

            <nav className="site-header__nav" aria-label="Primary navigation">
              {navItems.map((item) => (
                <div
                  className={`site-header__nav-item ${
                    item.children || item.type === "mega" ? "site-header__nav-item--dropdown" : ""
                  }`}
                  key={item.label}
                >
                  <Link href={item.href} className="site-header__nav-link">
                    {item.label}
                    {(item.children || item.type === "mega") && (
                      <ChevronDown size={15} strokeWidth={2.5} />
                    )}
                  </Link>

                  {item.type === "mega" && (
                    <div className="site-header__mega">
                      <Link
                        href="https://royalsportsnfitness.com/gym-equipments"
                        className="site-header__mega-all"
                      >
                        All Product
                      </Link>
                      <div className="site-header__mega-grid">
                        {item.groups.map((group) => (
                          <div className="site-header__mega-group" key={group.title}>
                            <p>{group.title}</p>
                            <div className="site-header__mega-links">
                              {group.items.map((child) => (
                                <Link href={child.href} key={child.label}>
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.children && (
                    <div className="site-header__dropdown">
                      {item.children.map((child) => (
                        <Link href={child.href} key={child.label}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="site-header__actions">
              <Link
                href={contactUrl}
                target="_blank"
                rel="noreferrer"
                className="site-header__whatsapp"
              >
                <MessageCircle size={18} strokeWidth={2.4} />
                WhatsApp
              </Link>
              <a href="tel:+918126299638" className="site-header__call">
                <Phone size={18} strokeWidth={2.4} />
                Call
              </a>
              <button
                type="button"
                className="site-header__toggle"
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={isOpen}
                aria-controls="site-header-mobile"
                onClick={() => setIsOpen((current) => !current)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="site-header__mobile-panel" id="site-header-mobile">
        <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) =>
            item.type === "mega" ? (
              <details className="site-header__mobile-group" key={item.label}>
                <summary>
                  <span>{item.label}</span>
                  <ChevronDown size={17} strokeWidth={2.5} />
                </summary>
                <div className="site-header__mobile-subnav">
                  <Link href="https://royalsportsnfitness.com/gym-equipments" onClick={closeMenu}>
                    All Product
                  </Link>
                  {item.groups.map((group) => (
                    <div className="site-header__mobile-section" key={group.title}>
                      <span>{group.title}</span>
                      {group.items.map((child) => (
                        <Link href={child.href} key={child.label} onClick={closeMenu}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            ) : item.children ? (
              <details className="site-header__mobile-group" key={item.label}>
                <summary>
                  <span>{item.label}</span>
                  <ChevronDown size={17} strokeWidth={2.5} />
                </summary>
                <div className="site-header__mobile-subnav">
                  <Link href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.label} onClick={closeMenu}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                href={item.href}
                className="site-header__mobile-link"
                key={item.label}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
