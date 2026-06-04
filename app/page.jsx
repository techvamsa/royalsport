"use client";
import BannerBottom from "@/app/components/BannerBottom";
import Clients from "@/app/components/Clients";
import EqBanner from "@/app/components/EqBanner";
import EquipmentRange from "@/app/components/EquipmentRange";
import Fitness from "@/app/components/Fitness";
import OurAchievements from "@/app/components/OurAchievements";
import MediaSections from "@/app/components/MediaSections";
import ClientTestimonials from "@/app/components/ClientTestimonials";
import "@/app/styles/equipment.scss";
import Offers from "@/app/components/Offers";
import ProductCategories from "./components/Products";
import BlogSection from "@/app/components/BlogSection";
import { OPEN_ENQUIRY_POPUP_EVENT } from "@/app/components/GlobalFixedbtns";

const EquipmentPage = () => {
  const handlePopup = () => {
    window.dispatchEvent(new Event(OPEN_ENQUIRY_POPUP_EVENT));
  };

  return (
    <>
      <EqBanner />
      <Offers handlePopup={handlePopup} />

      <EquipmentRange handleMainPopup={handlePopup} />
      <section className="eq-about section-padding">
        <div className="container">
          <div className="inner-wrapper">
            <div className="left">
              <img
                src="https://royalsportsnfitness.com/images/equipments/why-choose-RSF.jpg"
                alt="Banner"
                unoptimized
              />
            </div>
            <div className="right">
              <div className="heading-wrapper">
                <h2 className="title">
                  Why Choose <span>Royal Sports N Fitness?</span>
                </h2>
              </div>
              <p>
                Royal Sports and Fitness has come a long way since its inception
                in 2012 as a gym equipment business. With a focus on quality and
                innovation, the company has made significant strides in the
                fitness industry. With 13+ years of experience and 5000+
                successful gym Setups and unmatched after-sales
                support to you succeed
              </p>
            </div>
          </div>
        </div>
      </section>
      <Clients />

      <ProductCategories handlePopup={handlePopup} />

      <OurAchievements />

      <MediaSections />

      <BlogSection />

      <section class="faq-section section-padding-bottom" id="feedback">
        <div class="container">
          <div class="heading-wrapper text-center">
            <div class="title">Client Testimonials</div>
            <p>
              Don’t just take our word for it—our customers love us! Hear from{" "}
              <b>gym owners, fitness coaches, and franchise partners</b> who
              trusted RSF to power their fitness journey with premium equipment
              and reliable service
            </p>
          </div>
          <div
            class="elfsight-app-8ac0d9df-c304-4dc9-851a-4e160b2ef7b1"
            data-elfsight-app-lazy
          ></div>
          {/* <div class="items flex">
            <div
              class="item"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
            >
              <div class="stars flex">
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div class="name">Members</div>
              <div class="date">
                22<sup>nd</sup> Jan, 2024
              </div>
            </div>
            <div
              class="item"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1200"
            >
              <div class="stars flex">
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div class="name">Members</div>
              <div class="date">
                13<sup>th</sup> July, 2024
              </div>
            </div>
            <div
              class="item"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1400"
            >
              <div class="stars flex">
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
                <img src="/imgs/equipment/star.svg" alt="star" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div class="name">Members</div>
              <div class="date">
                18<sup>th</sup> Oct, 2024
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <BannerBottom />

      <Fitness />
    </>
  );
};

export default EquipmentPage;
