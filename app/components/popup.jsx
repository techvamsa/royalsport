"use client";
import Form from "@/app/components/Form";

const Popup = ({ isPopup, onClose }) => {
    if (!isPopup) return null; // agar popup false hai toh kuch render na ho

    return (
        <div className="popup">
            <div className="inner-popup">
                {/* Close Button */}
                <button onClick={onClose} className="close">
                    ✕
                </button>

                {/* Popup Content */}
                <h2 className="title">Contact Form</h2>
                <Form />
            </div>
        </div>
    );
};



export default Popup;
