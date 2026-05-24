import React from "react";
import "@/app/styles/offers.scss";

const packagesData = [
  {
    image: "/imgs/package/Package1.jpeg",
    title: "Supreme Series",
    setup: "Commercial Gym Setup",
    description:
      "Premium performance and unmatched durability for high-use commercial gym spaces.",
    price: "Rs. 9,99,999",
    note: "With GST",
    features: [
      "Heavy duty construction",
      "Premium quality",
      "Smooth performance",
      "Ergonomic design",
    ],
  },
  {
    image: "/imgs/package/Package2.jpeg",
    title: "KG Series",
    setup: "Imported Gym Setup",
    description:
      "Engineered for strength and built for performance with a robust frame and pulley system.",
    price: "Rs. 12,21,000",
    note: "With GST",
    features: ["Robust frame", "Premium pulley system", "Ergonomic design"],
  },
  {
    image: "/imgs/package/Package3.jpeg",
    title: "Barbura Pro Series",
    setup: "Commercial Gym Setup",
    description:
      "A complete fitness solution built stronger, designed for comfort, and made for results.",
    price: "Rs. 5,99,999",
    note: "Package price",
    features: [
      "Heavy duty steel frame",
      "Superior performance",
      "Premium comfort",
      "Commercial grade quality",
    ],
  },
];

const Offers = ({ handlePopup }) => {
  return (
    <section className="offers section-padding" id="about">
      <div className="container">
        <div className="heading-wrapper text-center">
          <div className="title">
            Gym Setup <span>Packages</span>
          </div>
          <p>
            Choose from ready commercial gym setup packages designed for
            strength, performance, durability, and premium user experience.
          </p>
        </div>

        <div className="listing flex">
          {packagesData.map((pkg) => (
            <div className="list" key={pkg.title}>
              <div className="inner-wrapper flex">
                <div className="img-wrapper border-box item">
                  <img src={pkg.image} alt={`${pkg.title} package`} />
                </div>

                <div className="content-box item">
                  <div className="meta">{pkg.setup}</div>
                  <div className="title">{pkg.title}</div>
                  <p>{pkg.description}</p>

                  <div className="features">
                    {pkg.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>

                  <div className="content-flex">
                    <div className="price">
                      <span>{pkg.note}</span>
                      <strong>{pkg.price}</strong>
                    </div>
                  </div>

                  <button className="btn primary" type="button" onClick={() => handlePopup()}>
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
