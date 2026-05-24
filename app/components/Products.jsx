"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "@/app/styles/product-category.scss"; // SCSS import
import { productsSection } from "../libs/DB";
import { useState } from "react";

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-left"></i>
    </div>
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
    <section className="product ">
      <div className="container">
        <div className="items">
          {productsSection.map((section, sectionIndex) => (
            <div className="item" id={section?.id ? section?.id: `product-${sectionIndex}`}>
              <div key={sectionIndex} className="">
                <div className="heading-wrapper">
                  <div className="left">
                    <div
                      className="title"
                      dangerouslySetInnerHTML={{ __html: section.heading }}
                    />

                    <p>{section.description}</p>
                  </div>

                  <div className="btn-wrapper">
                    <button className="red-btn" onClick={() => handlePopup()}>
                      Enquire Now
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
  );
};

export default ProductList;
