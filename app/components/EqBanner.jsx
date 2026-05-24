"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import Form from "@/app/components/Form";

const sliderData = [
  {
    image: "https://royalsportsnfitness.com/images/equipments/banner-2.jpg",
    mobImg: "https://royalsportsnfitness.com/images/equipments/mob-banner-2.jpg",
    tab: "Cardio Machines",
  },
  {
    image: "https://royalsportsnfitness.com/images/equipments/banner-1.jpg",
    mobImg: "https://royalsportsnfitness.com/images/equipments/mob-banner-1.jpg",
    tab: "Strength Machines",
  },
  // {
  //   image: "https://royalsportsnfitness.com/images/equipments/banner.webp",
  //   mobImg: "https://royalsportsnfitness.com/images/equipments/banner.webp",
  //   tab: "Functional Training & Accessories",
  // },
  // {
  //   image: "https://royalsportsnfitness.com/images/equipments/banner.webp",
  //   mobImg: "https://royalsportsnfitness.com/images/equipments/banner.webp",
  //   tab: "Rehabilitation & Recovery",
  // },
];

const EqBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // ✅ Enable autoplay
    autoplaySpeed: 4000, // ✅ Change slide every 4 seconds
    pauseOnHover: false, // ✅ Keep moving even when hovered
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  const handleTabClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveSlide(index);
  };

  return (
    <section className="eq-banner">
      <div className="inner-wrapper">
        <div className="banner-slider">
          <Slider ref={sliderRef} {...sliderSettings}>
            {sliderData.map((slide, index) => (
              <div key={index} className="item">
                <img
                  src={slide.image}
                  alt={slide.tab}
                  className="slider-image-desktop"
                  unoptimized
                />
                <img
                  src={slide.mobImg}
                  alt={slide.tab}
                  className="slider-image-mobile"
                  unoptimized
                />
              </div>
            ))}
          </Slider>

          <div className="slider-tabs">
            {sliderData.map((slide, index) => (
              <button
                key={index}
                className={`tab-btn ${activeSlide === index ? "active" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {slide.tab}
              </button>
            ))}
          </div>

          <div className="banner-form">
            <h2 className="form-heading">Get Your Right Gym Setup</h2>

            <Form showHeading={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EqBanner;
