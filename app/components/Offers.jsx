"use client";

import { useState } from "react";
import "@/app/styles/offers.scss";

const dummyPackageImage =
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=80";

const offersIntro = {
  title: "Special Offers & Packages",
  eyebrow: "Gym Setup Offers",
  description:
    "Planning to start your own gym? Take advantage of our exclusive gym setup packages with bulk discounts, combo deals, and financing options. Perfect for new fitness entrepreneurs and expanding gyms.",
};

const packagesData = [
  {
    image: dummyPackageImage,
    title: "Bulk Discounts",
    description:
      "Save more on larger equipment orders with tailored commercial gym setup pricing.",
  },
  {
    image: dummyPackageImage,
    title: "Combo Deals",
    description:
      "Get complete cardio, strength, and functional training combinations in one smart package.",
  },
  {
    image: dummyPackageImage,
    title: "Financing Options",
    description:
      "Start or expand your fitness business with flexible payment support for your setup.",
  },
];

const Offers = ({ handlePopup }) => {
  const [isOpen, setIsOpen] = useState(0);

  const handleTabClick = (index) => {
    setIsOpen(index);
  };

  return (
    <section className="offers section-padding" id="about">
      <div className="container">
        <div className="offers__header">
          <span>{offersIntro.eyebrow}</span>
          <h2>{offersIntro.title}</h2>
          <p>{offersIntro.description}</p>
        </div>

        <div className="offers__tabs-wrapper" aria-label="Gym setup packages">
          <div className="offers__tabs" role="tablist">
            {packagesData.map((pkg, idx) => (
              <button
                key={pkg.title}
                className={`offers__tab-link ${idx === isOpen ? "active" : ""}`}
                onClick={() => handleTabClick(idx)}
                type="button"
                role="tab"
                aria-selected={idx === isOpen}
              >
                {pkg.title}
              </button>
            ))}
          </div>

          {packagesData.map((pkg, idx) => (
            idx === isOpen && (
              <div className="offers__tabs-content" key={pkg.title}>
                <div className="offers__content-img">
                  <img src={pkg.image} alt={pkg.title} />
                </div>

                <div className="offers__content-text">
                  <h2 className="offers__content-heading">{pkg.title}</h2>
                  <p className="offers__content-desc">{pkg.description}</p>
                  <button className="btn explore" onClick={() => handlePopup()}>
                    Explore Now
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
