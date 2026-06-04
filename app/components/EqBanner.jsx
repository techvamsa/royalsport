"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import Form from "@/app/components/Form";
import Link from "next/link";

const sliderData = [
  {
    image:
      "https://royalsportsnfitness.com/images/Blog/1777960765560_Desktop Size Banner - 1.jpg.jpeg",
    mobImg:
      "https://royalsportsnfitness.com/images/Blog/1777960779423_Website Phone Banner -1  Size.jpg.jpeg",
    tab: "Slide 1",
    cta: "", // ← Add button text here, e.g. ""
    ctaLink: "", // ← Add URL here, e.g. "
  },
  {
    image:
      "https://royalsportsnfitness.com/images/Blog/1777960791855_Desktop Size Banner - 2.jpg.jpeg",
    mobImg:
      "https://royalsportsnfitness.com/images/Blog/1777960801212_Website Phone Banner -2 Size..jpg.jpeg",
    tab: "Slide 2",
  },
  {
    image:
      "https://royalsportsnfitness.com/images/Blog/1777960811850_Desktop Size Banner - 3.jpg.jpeg",
    mobImg:
      "https://royalsportsnfitness.com/images/Blog/1777960820011_Website Phone Banner -3  Size..jpg.jpeg",
    tab: "Slide 3",
  },
  {
    image:
      "https://royalsportsnfitness.com/images/Blog/1777960830086_Desktop Size Banner - 4.jpg.jpeg",
    mobImg:
      "https://royalsportsnfitness.com/images/Blog/1777960837459_Website Phone Banner -4 Size..jpg.jpeg",
    tab: "Slide 4",
  },
  {
    image:
      "https://royalsportsnfitness.com/images/Blog/1765434615349_2nd banner v3.png",
    mobImg:
      "https://royalsportsnfitness.com/images/Blog/1765434632942_2nd MOBILE banner V2.png",
    tab: "Slide 5",
  },
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
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    beforeChange: (_, newIndex) => setActiveSlide(newIndex),
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
                />
                <img
                  src={slide.mobImg}
                  alt={slide.tab}
                  className="slider-image-mobile"
                />

                {/* CTA Button — only renders if cta text is set */}
                {slide.cta && (
                  <div className="slide-cta-wrapper">
                    {slide.ctaLink ? (
                      <Link href={slide.ctaLink} className="slide-cta-btn">
                        {slide.cta}
                      </Link>
                    ) : (
                      <button className="slide-cta-btn">{slide.cta}</button>
                    )}
                  </div>
                )}
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
        </div>
{/* 
        <div className="banner-form">
          <h2 className="form-heading">Get Your Right Gym Setup</h2>
          <Form showHeading={true} />
        </div> */}
      </div>
    </section>
  );
};

export default EqBanner;
