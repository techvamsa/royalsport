"use client";
import Link from "next/link";
import Popup from "@/app/components/popup";
import "@/app/styles/floatingIcons.scss";
import "@/app/styles/popup.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import Form from "@/app/components/Form";

const FloatingIcons = ({handlePopupClose,handlePopup,isOpen}) => {


  const [isCallPopup, setIsCallPopup] = useState(false);
  const [isMsgPopup, setIsMsgPopup] = useState(false);




  const handleCallPopup = () => {
    setIsCallPopup(true);
  };

  const handleCallPopupClose = () => {
    setIsCallPopup(false);
  };

  const handleMsgPopup = () => {
    setIsMsgPopup(true);
  };

  const handleMsgPopupClose = () => {
    setIsMsgPopup(false);
  };

  return (
    <>
      <div className="floating__icons">
        <span className="floating__icon call" onClick={handlePopup}>
          <Image
            src={"/imgs/equipment/notes.png"}
            alt="notes"
            width={26}
            height={26}
          />
        </span>

        <span className="floating__icon call " onClick={handleCallPopup}>
          <Image
            src={"/imgs/equipment/call.png"}
            alt="call"
            width={26}
            height={26}
          />
          
        </span>

        <Link
          className="floating__icon whatsapp"
          target="_blank"
          href={
            "https://api.whatsapp.com/send/?phone=7455900612&text=Royal Sports n Fitness&app_absent=0"
          }
        >
          <Image
            src={"/whatsappFloating.svg"}
            alt="whatsapp"
            width={26}
            height={26}
          />
        </Link>
      </div>
      {isOpen && (
        <CommonPopup
          styleClass={`popup__enquire-now enquire-now-popup ${
            isOpen ? "active" : ""
          }`}
          innerClass="p-4 md:p-8 lg:p-12"
          popupClose={handlePopupClose}
        >
          <Form handlePopupClose={handlePopupClose} />

          <div className="btm-btns mt-2 mb-1 lg:mt-4 flex flex-wrap">
            <div className="btm-btns__btn btm-btns__btn--whatsapp flex p-1.5">
              <span>Talk to us</span>
              <Link
                className="btm-btns__icon"
                target="_blank"
                href={
                  "https://api.whatsapp.com/send/?phone=917455900612&text=Royal Sports n Fitness&app_absent=0"
                }
              >
                <Image
                  className="ml-2"
                  src={"/whatsappIcon.svg"}
                  alt="whatsapp"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
            <div className="btm-btns__btn  flex p-1.5">
              <span>Instant Help</span>&nbsp;-&nbsp;
              <Link href={"tel:917455900612"}>+91 7455900612</Link>
            </div>
          </div>
        </CommonPopup>
      )}

      {isCallPopup && (
        <CommonPopup
          styleClass={`call-popup  ${isCallPopup ? "active" : ""}`}
          innerClass="p-4 md:p-8 lg:p-12"
          popupClose={handleCallPopupClose}
        >
          <div className="call-popup__heading">
            Our Call Facility and Live Chat Support
          </div>
          <div className="call-popup__sm-heading">
           Available Monday to Saturday | 09.30 AM – 06:00 PM
          </div>

          <p className="mt-4">
            All <span>&quot;Call Back Requests&quot;</span> after business hours
            will be answered on next working day
            
          </p>

          <div className="call-popup__heading mt-4">
            Please reach out to our customer support @
          </div>
          <div className="call-popup__sm-heading">
           📞9997019738 - Between 09 am - 08:30 PM
          </div>

          <Link
            href={"tel:7455900612"}
            className="btn btn__darkbtn btn--radius-sm mt-6"
          >
            Call now
          </Link>
        </CommonPopup>
      )}

      {isMsgPopup && (
        <CommonPopup
          styleClass={`call-popup  ${isMsgPopup ? "active" : ""}`}
          innerClass="p-4 md:p-8 lg:p-12"
          popupClose={handleMsgPopupClose}
        >
          <div className="call-popup__heading">message sent successfully</div>

          <span
            className="btn btn__darkbtn btn--radius-sm mt-6"
            onClick={handleMsgPopupClose}
          >
            Ok
          </span>
        </CommonPopup>
      )}
    </>
  );
};

const CommonPopup = (props) => {
  return (
    <>
      <div className={`popup ${props?.styleClass}`}>
        <div className={`popup__inner-wrapper ${props?.innerClass}`}>
          {props.popupClose && (
            <div className="popup__close" onClick={props.popupClose}>
              <Image
                src={"/imgs/equipment/close.png"}
                alt="call"
                width={26}
                height={26}
              />
            </div>
          )}
          <div className="popup__inner-box verticle-scroll">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};
export default FloatingIcons;
