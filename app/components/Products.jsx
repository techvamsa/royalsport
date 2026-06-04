"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "@/app/styles/product-category.scss"; // SCSS import
import { productsSection } from "../libs/DB";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  GraduationCap,
  PackageCheck,
  Store,
  UsersRound,
} from "lucide-react";

const lookingForItems = [
  {
    title: "Equipment",
    label: "Premium machines",
    image: "/imgs/equipment/eq-strength.webp",
    icon: Dumbbell,
  },
  {
    title: "Certified Personal Trainer",
    subtitle: "Diet And Nutrition: A Beginners Course",
    label: "Academy programs",
    image: "/imgs/equipment/Fitness-Academy.jpg",
    icon: GraduationCap,
  },
  {
    title: "Accessories",
    label: "Daily gym essentials",
    image: "/imgs/equipment/eq-functional.webp",
    icon: PackageCheck,
  },
  {
    title: "Full Gym Setup",
    label: "Turnkey planning",
    image: "/imgs/equipment/about.webp",
    icon: Store,
  },
  {
    title: "Our Experts",
    label: "Consultation team",
    image: "/imgs/faculty-1.webp",
    icon: UsersRound,
  },
];

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} product__arrow product__arrow--next`}
      onClick={onClick}
      aria-label="Next gym setups"
    >
      <ArrowRight size={20} strokeWidth={2.4} />
    </button>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} product__arrow product__arrow--prev`}
      onClick={onClick}
      aria-label="Previous gym setups"
    >
      <ArrowLeft size={20} strokeWidth={2.4} />
    </button>
  );
};

const ProductList = ({ handlePopup }) => {
  const [currentSlide, setCurrentSlide] = useState({});
  const settings = (sectionIndex, listLength) => ({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide((prev) => ({ ...prev, [sectionIndex]: newIndex + 1 }));
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });

  return (
    <>
      <section className="looking-for section-padding">
        <div className="container">
          <div className="looking-for__wrap">
            <div className="looking-for__intro">
              <span className="looking-for__eyebrow">Fitness Solutions</span>
              <h2>Looking for the right fitness solution?</h2>
              <p>
                Explore equipment, courses, accessories, complete gym setup
                support, and expert guidance from one trusted RSF team.
              </p>

              <button
                className="looking-for__cta"
                type="button"
                onClick={() => handlePopup()}
              >
                Talk To Our Experts
                <ArrowUpRight size={18} />
              </button>

              <div className="looking-for__stats" aria-label="RSF highlights">
                <span>
                  5000+
                  <small>Gym Setups</small>
                </span>
                <span>
                  13+
                  <small>Years Experience</small>
                </span>
              </div>
            </div>

            <div className="looking-for__grid">
              {lookingForItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    className={`looking-for__tile ${
                      index === 0 ? "looking-for__tile--large" : ""
                    }`}
                    key={item.title}
                    type="button"
                    onClick={() => handlePopup()}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={520}
                      height={420}
                    />
                    <span className="looking-for__shade" />
                    <span className="looking-for__icon">
                      <Icon size={22} />
                    </span>
                    <span className="looking-for__tile-content">
                      <small>{item.label}</small>
                      <strong>{item.title}</strong>
                      {item.subtitle && <em>{item.subtitle}</em>}
                    </span>
                    <span className="looking-for__arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="product section-padding">
        <div className="container">
          <div className="items">
            {productsSection.map((section, sectionIndex) => (
              <div
                className="item"
                id={section?.id ? section?.id : `product-${sectionIndex}`}
                key={section?.id || `product-${sectionIndex}`}
              >
                <div className="">
                  <div className="heading-wrapper product__header">
                    <div className="left">
                      <span className="product__eyebrow">
                        Gym Setup Solutions
                      </span>
                      <h2 className="title">
                        <span>RSF Gym Setups</span>
                      </h2>

                      <p>{section.description}</p>
                    </div>

                    <div className="btn-wrapper">
                      <button className="red-btn" onClick={() => handlePopup()}>
                        Enquire Now
                        <ArrowUpRight size={18} strokeWidth={2.4} />
                      </button>
                    </div>
                  </div>

                  <Slider
                    {...settings(sectionIndex, section.list.length)}
                    className="product-slider"
                  >
                    {section.list.map((product, index) => (
                      <div key={index} className="product-item">
                        <Image
                          src={`https://royalsportsnfitness.com/images/equipments/${encodeURI(
                            product.img
                          )}`}
                          alt={product.name}
                          width={250}
                          height={180}
                        />
                        <div className="product-title">{product.name}</div>
                      </div>
                    ))}
                  </Slider>
                  {/* Slider Info */}
                  {/* <div className="slider-info">
                {`Image ${currentSlide[sectionIndex] || 1} of ${section.list.length}`}
              </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
