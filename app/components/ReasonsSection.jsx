"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReasonsSection() {
const reasons = [
  "Workshops, Events and Live Sessions for Practical understanding",
   "Life saving skills",
   "5000+ Gym Setups",
  "Official Training Partner of Sports Physical Education Fitness & Leisure",
  "Get world class premium fitness equipment under one roof",
    "100% placement",
  "100% guaranteed internship with trained trainers",
  "Theoretical classes by reputed master coaches",
  "Online and active application learning under one roof",
  "Highly trained and professional Mentors",
  "Faculty with 10+ Years of teaching experience",
   "CPR & AED, First Aid Session",
  "Lifetime post training support",
  "Time and Cost - effective courses",
  "15+ Years of experience of fitness industry",
];

  // ✅ group reasons into chunks of 4 (2x2 grid per slide)
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const groupedReasons = chunkArray(reasons, 4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1, // one grid per slide
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="reasons">
      <div className="container">
        <div className="heading-wrapper" data-eyebrow="Why Choose RSF">
          <div className="title">
            Reasons to Choose <span>RSF Fitness Academy  </span>
          </div>
        </div>

        <Slider {...settings} className="reasons-slider">
          {groupedReasons.map((group, index) => (
            <div key={index} className="reasons-grid">
              {group.map((reason, i) => (
                <div key={i} className="reason-card">
                  <span className="icon">✔</span>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
