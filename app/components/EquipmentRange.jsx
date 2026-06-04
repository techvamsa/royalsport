"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PopupForm from "./PopupForm";

const itemsData = [
  {
    img: "/imgs/equipment/cardio-machine.jpg",
    alt: "Commercial cardio machine",
    name: "Cardio Machines",
    description:
      "Premium treadmills, bikes, ellipticals, and cardio stations built for consistent commercial performance.",
    link: "#CardioMachines",
  },
  {
    img: "/imgs/equipment/strength-training.jpg",
    alt: "Strength training machine",
    name: "Strength Machines",
    description:
      "Durable selectorized and plate-loaded machines for serious strength zones, studios, and full gyms.",
    link: "#StrengthMachine",
  },
  {
    img: "/imgs/equipment/Fitness-Academy.jpg",
    alt: "Fitness academy training",
    name: "Fitness Academy",
    description:
      "Professional fitness education and training support for trainers, owners, and growing fitness teams.",
    link: "/fitness-academy",
  },
  {
    img: "/imgs/equipment/premium-pool-table.jpg",
    alt: "Premium amenities and accessories",
    name: "Amenities & Accessories",
    description:
      "Finishing touches for premium spaces, from accessories to recreational amenities and setup essentials.",
    link: "https://royalsportsnfitness.com/accessories",
  },
];

const EquipmentRange = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePopup = (targetLink, targetName) => {
    setLink(targetLink);
    setName(targetName);
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setLink("");
    setName("");
    setIsPopupOpen(false);
  };

  const showPreviousItem = () => {
    setActiveIndex((current) =>
      current === 0 ? itemsData.length - 1 : current - 1
    );
  };

  const showNextItem = () => {
    setActiveIndex((current) =>
      current === itemsData.length - 1 ? 0 : current + 1
    );
  };

  const activeItem = itemsData[activeIndex];
  const visibleSelectorItems = itemsData.filter(
    (_, index) => index !== activeIndex
  );

  return (
    <section className="eq-range section-padding" id="equipment">
      <div className="container">
        <div className="eq-range__shell">
          <div className="eq-range__intro">
            <div className="eq-range__eyebrow">
              <span>Equipment Range</span>
              <i aria-hidden="true" />
            </div>
            <h2>Our Gym Equipment Range</h2>
          </div>

          <div className="eq-range__showcase">
            <button
              className="eq-range__nav eq-range__nav--prev"
              type="button"
              onClick={showPreviousItem}
              aria-label="Show previous equipment category"
              title="Previous"
            >
              <ArrowLeft size={28} />
            </button>

            <div className="eq-range__left-panel">
              <div className="eq-range__summary">
                <h3>
                  Complete fitness solutions for commercial and personal spaces
                </h3>
                <p>
                  Royal Sports N Fitness offers a catalog of 200+ gym products
                  for commercial setups, personal training spaces, fitness
                  clubs, and academy-led growth.
                </p>
              </div>

              <div
                key={`selector-${activeIndex}`}
                className="eq-range__selector"
                aria-label="Equipment categories"
              >
                {visibleSelectorItems.map((item, visibleIndex) => {
                  const itemIndex = itemsData.findIndex(
                    (rangeItem) => rangeItem.name === item.name
                  );

                  return (
                    <button
                      className="eq-range__thumb"
                      key={item.name}
                      type="button"
                      style={{ "--eq-range-thumb-index": visibleIndex }}
                      onClick={() => setActiveIndex(itemIndex)}
                    >
                      <span className="eq-range__thumb-label">{item.name}</span>
                      <span className="eq-range__thumb-media">
                        <img src={item.img} alt={item.alt} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              key={`featured-${activeItem.name}`}
              className="eq-range__featured"
              aria-live="polite"
            >
              <div className="eq-range__featured-image">
                <img src={activeItem.img} alt={activeItem.alt} />
              </div>

              <div className="eq-range__featured-copy">
                <h3>{activeItem.name}</h3>
                <p>{activeItem.description}</p>
                <button
                  className="eq-range__explore"
                  type="button"
                  onClick={() => handlePopup(activeItem.link, activeItem.name)}
                >
                  <span>
                    <ArrowRight size={20} />
                  </span>
                  Explore
                </button>
              </div>
            </div>

            <button
              className="eq-range__nav eq-range__nav--next"
              type="button"
              onClick={showNextItem}
              aria-label="Show next equipment category"
              title="Next"
            >
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>

      <PopupForm
        isOpen={isPopupOpen}
        link={link}
        onClose={() => handleClose()}
        name={name}
      />
    </section>
  );
};

export default EquipmentRange;
