"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { academyCourseCards } from "@/app/libs/courses";

const Course = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1920, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="courses section-padding">
      <div className="container">
        <div className="heading-wrapper" data-eyebrow="Academy Courses">
          <h2 className="title">
            Our <span>Courses</span>
          </h2>
          <p>Unlocking Your Potential for Success in Every Industry</p>
        </div>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {academyCourseCards.map((course) => (
              <div key={course.href}>
                <div className="item">
                  <div className="top">
                    <div className="img-wrapper">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <div className="title">{course.title}</div>
                    <p>{course.summary}</p>
                  </div>
                  <Link href={course.href} className="btn">
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Course;
