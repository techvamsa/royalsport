"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabData = [
  {
    key: "affiliated",
    title: "Affiliated By",
    eyebrow: "Affiliations",
    subtitle: "Trusted partners and affiliations that strengthen our business reach.",
  },
  {
    key: "approved",
    title: "Approved With",
    eyebrow: "Approvals",
    subtitle: "Quality certifications and approval badges for credibility.",
  },
  {
    key: "clients",
    title: "Our Clients",
    eyebrow: "Client Network",
    subtitle: "Strong partnerships and satisfied customers across fitness brands.",
  },
];

const logoGroups = {
  affiliated: [
    "/imgs/affiliat/img-1.webp",
    "/imgs/affiliat/img-2.webp",
    "/imgs/affiliat/img-3.webp",
    "/imgs/affiliat/img-4.webp",
  ],
  approved: [
    "/imgs/affiliat/img-5.webp",
    "/imgs/affiliat/img-6.webp",
  ],
  clients: [
    "/imgs/clients/1.webp",
    "/imgs/clients/2.webp",
    "/imgs/clients/3.webp",
    "/imgs/clients/4.webp",
    "/imgs/clients/5.webp",
    "/imgs/clients/6.webp",
    "/imgs/clients/7.webp",
    "/imgs/clients/8.webp",
    "/imgs/clients/9.webp",
    "/imgs/clients/10.webp",
    "/imgs/clients/11.webp",
    "/imgs/clients/12.webp",
    "/imgs/clients/13.webp",
    "/imgs/clients/14.webp",
    "/imgs/clients/15.webp",
  ],
};

const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`custom-arrow prev ${className || ""}`}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Previous"
  >
    <ChevronLeft size={22} strokeWidth={2.6} />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`custom-arrow next ${className || ""}`}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Next"
  >
    <ChevronRight size={22} strokeWidth={2.6} />
  </button>
);

const Clients = () => {
  const [activeTab, setActiveTab] = useState("affiliated");
  const activeTabData = tabData.find((tab) => tab.key === activeTab);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2200,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  const logos = logoGroups[activeTab] || [];
  const shouldUseSlider = logos.length > settings.slidesToShow;

  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="heading-wrapper text-center" data-eyebrow={activeTabData.eyebrow}>
          <div className="title">{activeTabData.title}</div>
          <p>{activeTabData.subtitle}</p>
        </div>

        <div className="client-tabs">
          <div className="tab-list">
            {tabData.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tab-panel">
            {shouldUseSlider ? (
              <Slider {...settings} className="client-slider">
                {logos.map((logo, index) => (
                  <div className="item" key={index}>
                    <div className="logo-card">
                      <img src={logo} alt={`${activeTabData.title} logo ${index + 1}`} />
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="logo-grid">
                {logos.map((logo, index) => (
                  <div className="logo-card" key={index}>
                    <img src={logo} alt={`${activeTabData.title} logo ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
