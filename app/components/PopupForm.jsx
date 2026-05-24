"use client";
import React from "react";
import { useForm } from "react-hook-form";
import "@/app/styles/popupEq.scss";
import { apiPost } from "../libs/apicall";

const PopupForm = ({ link, isOpen, onClose, name: AccessType = "" }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    onClose();
    apiPost("/enquiry", {
      ...data,
      subject: `Equipment Enquire Request for ${AccessType}`,
    });
    if (link) {
      if (link.startsWith("#")) {
        const targetId = link.replace("#", "");
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.open(link, "_blank");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Enquire Now</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="popup-form">
          <input
            type="text"
            placeholder="Your Name*"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}

          <input
            type="tel"
            placeholder="Your Number*"
            {...register("number", {
              required: "Number is required",
              pattern: {
                value: /^[0-9]+$/, // only digits
                message: "Only numbers are allowed",
              },
              minLength: {
                value: 10,
                message: "Number must be at least 10 digits",
              },
              maxLength: {
                value: 10, // optional limit for international
                message: "Number must not exceed 15 digits",
              },
            })}
          />
          {errors.number && (
            <span className="error">{errors.number.message}</span>
          )}

          <button type="submit" className="btn">
            View Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
