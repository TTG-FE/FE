import React from "react";
import closeIcon from "../assets/modalCloseIcon.svg";

const Modal = ({ isOpen, onClose, isCoupon, isLast, children }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-opacity-25 backdrop-blur-xl flex justify-center items-center z-10"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="absolute w-auto overflow-hidden">
        <div
          className={` bg-white rounded-md border-solid border-4
         ${isLast ? "border-gray-300" : "border-custom-pink"}`}
        >
          <button
            className="absolute top-5 right-3 md:top-9 md:right-4 text-gray-500 cursor-pointer"
            onClick={onClose}
          >
            <img src={closeIcon} alt="Close" />
          </button>

          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
