"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const coursesData = [
  {
  id: 1,
  title: "Diet And Nutrition: A Beginners Course",
  description:
    "Learn the fundamentals of nutrition, understand body functions, and discover how balanced diets improve performance, energy, recovery, and overall health for athletes and fitness enthusiasts.",
  img: "/imgs/certificate3.webp",
},
{
  id: 2,
  title: "Special Population Trainer",
  description:
    "Gain skills to design safe training programs for individuals with special conditions, helping them overcome limitations, enhance strength, improve flexibility, and achieve better quality of life.",
  img: "/imgs/certificate2.webp",
},
{
  id: 3,
  title: "Certified Personal Trainer",
  description:
    "Develop expertise in anatomy, physiology, and exercise science, enabling you to create effective personalized fitness plans that support client goals, safety, motivation, and sustainable results.",
  img: "/imgs/certificate.webp",
},
];

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
        <div className="heading-wrapper">
          <h2 className="title">
            Our <span>Courses</span>
          </h2>
          <p>Unlocking Your Potential for Success in Every Industry</p>
        </div>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {coursesData.map((course) => (
              <div key={course.id}>
                <div className="item">
                  <div className="top">
                    <div className="img-wrapper">
                      <img src={course.img} alt={course.title} />
                    </div>
                    <div className="title">{course.title}</div>
                    <p>{course.description}</p>
                  </div>
                  <Link href="tel:+91-8126299638" className="btn">
                    <img src="/imgs/call.svg" alt="Call" /> Call Us
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
