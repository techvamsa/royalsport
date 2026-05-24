"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const Achievements = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,          // ✅ enable autoplay
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            }
        ]
    };

    return (
        <section className="achievement section-padding">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="title">
                        Our <span>Achievements</span>
                    </div>
                    <p>
                        Royal Sports and Fitness has come a long way since its inception in
                        2012 as a gym equipment business. With a focus on quality and
                        innovation, the company has made significant strides in the fitness
                        industry. In the past year, Royal Sports and Fitness has expanded its
                        offerings to include a fitness academy and franchise business,
                        catering to a wider audience.
                    </p>
                </div>

                {/* Slick Slider */}
                <Slider {...settings} className="achievement-slider">
                    <div className="item">
                        <div className="icon-box">
                            <img src="/imgs/ach-1.webp" alt="ach-1" />
                        </div>
                        <div className="num">200+</div>
                        <div className="text">Students Trained</div>
                    </div>
                        <div className="item">
                        <div className="icon-box">
                            <img src="/imgs/barbell.png" alt="ach-3" />
                        </div>
                        <div className="num">5000+</div>
                        <div className="text">Gym setups </div>
                    </div>

                    <div className="item">
                        <div className="icon-box">
                            <img src="/imgs/ach-3.webp" alt="ach-3" />
                        </div>
                        <div className="num">14+</div>
                        <div className="text">Years Of Experience</div>
                    </div>

                    <div className="item">
                        <div className="icon-box">
                            <img src="/imgs/ach-2.webp" alt="ach-2" />
                        </div>
                        <div className="num">10+</div>
                        <div className="text">Faculty</div>
                    </div>

                    <div className="item">
                        <div className="icon-box">
                            <img src="/imgs/ach-4.webp" alt="ach-4" />
                        </div>
                        <div className="num">99%</div>
                        <div className="text">Client Satisfaction</div>
                    </div>
                </Slider>

                <Link href="tel:+91-8126299638" className="btn">
                    <img src="/imgs/call.svg" alt="Call" /> Call Us
                </Link>
            </div>
        </section>
    );
};

export default Achievements;