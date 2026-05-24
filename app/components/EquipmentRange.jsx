"use client";
import Link from "next/link";
import React, { useState } from "react";
import PopupForm from "./PopupForm";

const EquipmentRange = ({ handleMainPopup = () => {} }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  const handlePopup = (link,name) => {
    setLink(link);
    setName(name)
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setLink("");
     setName("")
    setIsPopupOpen(false);
  };
  const itemsData = [
    {
      img: "https://royalsportsnfitness.com/images/equipments/cardio-machine.jpg",
      alt: "cardio",
      name: "Cardio Machines",
      link: "#CardioMachines",
    },
    {
      img: "https://royalsportsnfitness.com/images/equipments/strength-training.jpg",
      alt: "strength",
      name: "Strength Machine",
      link: "#StrengthMachine",
    },
    {
      img: "https://royalsportsnfitness.com/images/equipments/Fitness-Academy.jpg",
      alt: "functional",
      name: "Fitness Academy",
      link: "https://royalsportsnfitness.com/academy",
    },
    {
      img: "https://royalsportsnfitness.com/images/equipments/premium-pool-table.jpg",
      alt: "rehab",
      name: "Amenities Accessories",
      link: "https://royalsportsnfitness.com/accessories",
    },
  ];

  return (
    <section className="eq-range section-padding" id="equipment">
      <div className="container">
        <div className="inner-wrapper">
          <div className="heading-wrapper">
            <h2 className="title">
              Our Gym <span>Equipment Range</span>
            </h2>
            <p>
              The Royal Sports N Fitness We Offer a Complete Catalog of 200+ gym
              products designed for commercial and personal use. is a one-stop
              solution for all Fitness enthusiasts that offers services in Gym
              equipment, Fitness Clubs and Fitness Academy.
            </p>
            <div className="btn-wrapper">
              <button
                onClick={() =>
                  handlePopup(
                    "https://royalsportsnfitness.com/images/equipments/Product%20Catalogue.pdf",
                    'Broucher'
                  )
                }
                className="btn broucher"
              >
                <img src={"/imgs/equipment/broucher.png"} alt="brochure" />
                Download Broucher
              </button>
              <button className="btn" onClick={() => handleMainPopup()}>
                Enquire Now
              </button>
            </div>
          </div>

          <div className="items">
            {itemsData.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.img} alt={item.alt} />
                <div className="name">{item.name}</div>
                <button
                  className="hover-btn"
                  onClick={() => handlePopup(item.link,item.name)}
                >
                  View Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PopupForm
        isOpen={isPopupOpen}
        link={link}
        onClose={() => handleClose()}
        name={name}
      />
    </section>
  );
};

export default EquipmentRange;
