import React from "react";
import closeIcon from "../assets/modalCloseIcon.svg";

const Modal = ({ isOpen, onClose, isCoupon,isLast, children }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  // sticky로 어떻게 할수는 없을까?
  return (
    <div
      className={`absolute inset-0 bg-opacity-25 backdrop-blur-xl flex justify-center ${
        isCoupon ? null : "bg-black"
      }`}
      id="wrapper"
      onClick={handleClose}
    >
      <div className="absolute top-24 sm:top-10">
        {/* 모달 내용 */}
        <div className="w-fit truncate sticky">
          {/* 모달 바디 */}
          <div
            className={`relative bg-white rounded-md ${
              isCoupon ? `border-solid border-4 ${isLast ? "#B2B2B2":"border-custom-pink"}` : ""
              }`
            }
          >
            {/* 모달 닫기 버튼 */}
            <button
              className="absolute top-5 right-3 sm:top-9 sm:right-4 text-gray-500 cursor-pointer"
              onClick={onClose}
            >
              <img src={closeIcon} alt="" />
            </button>

            {/* 모달 내용 */}
            {/* <div className="p-4"> */}
            <div className="">
              {/* 모달 내용을 여기에 추가 */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
