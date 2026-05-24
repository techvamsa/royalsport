"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Clients = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,          // ✅ enable autoplay
        autoplaySpeed: 2000,  
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 5 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 }
            }
        ]
    };

    return (
        <section className="clients section-padding-top">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="title">Our <span>Client</span></div>
                    <p>Building Strong Partnerships, Achieving Shared Success</p>
                </div>

                <Slider {...settings} className="client-slider">
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/1.webp" alt="ach-1" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/2.webp" alt="ach-2" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/3.webp" alt="ach-3" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/4.webp" alt="ach-4" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/5.webp" alt="ach-5" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/6.webp" alt="ach-6" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/7.webp" alt="ach-7" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/8.webp" alt="ach-8" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/9.webp" alt="ach-9" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/10.webp" alt="ach-10" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/11.webp" alt="ach-11" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/12.webp" alt="ach-12" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/13.webp" alt="ach-13" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/14.webp" alt="ach-14" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo-box">
                            <img src="/imgs/clients/15.webp" alt="ach-15" />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Clients