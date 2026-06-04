"use client";

import { useCallback, useEffect, useState } from "react";
import Fixedbtns from "@/app/components/Fixedbtns";

export const OPEN_ENQUIRY_POPUP_EVENT = "rsf:open-enquiry-popup";

const GlobalFixedbtns = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handlePopupClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("formSubmitted")) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener(OPEN_ENQUIRY_POPUP_EVENT, handlePopup);

    return () => {
      window.removeEventListener(OPEN_ENQUIRY_POPUP_EVENT, handlePopup);
    };
  }, [handlePopup]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsOpen((current) => {
        const hasFilledForm = sessionStorage.getItem("formSubmitted");

        return !hasFilledForm && !current ? true : current;
      });
    }, 60000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Fixedbtns
      handlePopup={handlePopup}
      handlePopupClose={handlePopupClose}
      isOpen={isOpen}
    />
  );
};

export default GlobalFixedbtns;
