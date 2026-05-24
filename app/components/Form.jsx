"use client";
import "@/app/styles/form.scss";
import { useForm } from "react-hook-form";
import { apiPost } from "../libs/apicall";
import { useRouter } from "next/navigation";

const FormLayout = (props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted ✅", data);
    apiPost("/enquiry", {
      ...data,
      subject: `Equipment Enquiry Request`,
    });
    reset();
    router.push("/thank-you");
  };

  return (
    <>
      {!props?.showHeading && (
        <div className={`mainHeading ${props?.styleClass}`}>
          <div className="mainHeading__title">Enquire Now</div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form form__items flex-wrap gap-y-2 mt-2"
      >
        {/* Name */}
        <div className="form__item form__item--full">
          <input
            type="text"
            placeholder="Your Name*"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        {/* Phone Number */}
        <div className="form__item form__item--full">
          <input
            type="tel"
            placeholder="Phone Number*"
            {...register("num", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed",
              },
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
              maxLength: {
                value: 15,
                message: "Phone number must not exceed 15 digits",
              },
            })}
          />
          {errors.num && <span className="error">{errors.num.message}</span>}
        </div>

        {/* City */}
        <div className="form__row flex gap-x-2 w-full">
          <div className="form__item flex-1">
            <input
              type="text"
              placeholder="Your City*"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && <span className="error">{errors.city.message}</span>}
          </div>
        </div>

        {/* Budget */}
        <div className="form__item form__item--full">
          <input
            type="text"
            placeholder="Budget Range"
            {...register("enquiry")}
          />
        </div>

        {/* Square Feet Area */}
        <div className="form__item form__item--full">
          <textarea
            rows={5}
            placeholder="Square Feet Area"
            {...register("message")}
          />
        </div>

        {/* Submit */}
        <div className="form__item form__item--btn-wrapper form__item--full flex justify-start">
          <button type="submit" className="btn btn__darkbtn btn--radius-sm">
            Send an Enquiry
          </button>
        </div>
      </form>
    </>
  );
};

export default FormLayout;
