import Image from "next/image";
import Form from "@/app/components/Form";
const Banner = () => {
  return (
    <section className="banner">
      <div className="inner-wrapper">
        <div className="left">
          <Image
            src="/imgs/banner.webp"
            alt="banner"
            width={500}
            height={500}
          />
        </div>
        <div className="right">
          <div className="form-container">
            <div className="heading-wrapper" data-eyebrow="Contact RSF">
              <h1 className="title">
                Request a Free <span>Call Back</span>
              </h1>
              <p>
                Join RSF Fitness Academy and elevate your fitness training
                career to new heights.
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
