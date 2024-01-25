import React from "react";

const Modal = ({ isOpen, onClose, isCoupon, children }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-opacity-25 backdrop-blur-xl flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      {/* 모달 내용 */}
      <div className="w-fit truncate">
        {/* 모달 바디 */}
        <div
          className={`relative bg-white p-2 rounded-md ${
            isCoupon ? "border-solid border-4 border-custom-pink" : ""
          }`}
        >
          {/* 모달 닫기 버튼 */}
          <button
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 cursor-pointer"
            onClick={onClose}
          >
            <span className="text-2xl">×</span>
          </button>

          {/* 모달 내용 */}
          <div className="p-4">
            {/* 모달 내용을 여기에 추가 */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
