import React, { useState } from "react";
import ReviewRejectionModal from "./ReviewRejectionModal";
const ReviewModal = ({ showModal, handleCloseModal, handleReviewSubmit }) => {
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  const handleRejectReview = () => {
    setShowRejectionModal(true);
  };
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 backdrop-blur-[50px]">
          <div className="bg-white w-[49.3125rem] h-[41.82625rem] rounded-[0.483rem] relative">
            <div
              className="absolute top-0 right-0 m-4 cursor-pointer"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="#7E869E"
                  fill-opacity="0.25"
                />
                <path
                  d="M9 9L15 15"
                  stroke="#222222"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 9L9 15"
                  stroke="#222222"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="mt-[3.59rem] ml-[3.04rem] text-[1.5rem]">
              리뷰 심사하기
            </div>
            <div className="w-[42.9375rem] h-[7.1875rem] mt-[2.29rem] ml-[3.19rem] border border-[#B3B3B3] rounded-md ">
              <div className="flex">
                <div className="bg-[#4545] ml-[1.31rem] w-[4.0625rem] h-[4.0625rem] mt-[1.37rem] rounded-full"></div>
                <div className="ml-[0.63rem]">
                  <div className="mb-[0.88rem] mt-[2rem] font=['Inter'] text=[1rem]">
                    예지의 냠냠저장소123(리뷰어의 또또가 닉네임)
                  </div>

                  <div className="text-[1rem] text-[#8F8F8F]">7일전</div>
                </div>
                <div className="ml-[8.62rem] mt-[3.12rem] text-[1rem] text-[#8F8F8F]">
                  리뷰 보기
                </div>
              </div>
            </div>

            <div className="text-[#FF0069] mt-[4.62rem] ml-[3.75rem] font-semibold mb-2">
              심사 시 유의사항
            </div>
            <p className="text-[1.125rem] ml-[3.75rem] text-[#898989] mb-2">
              • 우리가게 페이지 이용안내란에 공지 하였다면 불성실한 리뷰는
              탈락가능합니다.
            </p>
            <p className="text-[1.125rem] ml-[3.75rem] text-[#898989] mb-2">
              • 부당한 이유로 심사 탈락을 주거나 심사 승인 이후 혜택을 제공하지
              않을 시 또또가 이용
              <br />에 제약이되는 패널티를 받을 수 있습니다.
            </p>
            <p className="text-[1.125rem] ml-[3.75rem] text-[#898989] mb-2">
              • 심사 결과는 한번 선택한 뒤 바꿀 수 없습니다.
            </p>
            <p className="text-[1.125rem] ml-[3.75rem] text-[#898989] mb-2">
              • 이외 문제사항이 있으시다면 고객센터로 문의에 남겨주세요.
            </p>

            <div className="flex justify-center mt-[2rem]">
              <button
                className="w-[21.10819rem] h-[4.125rem] bg-[#D9D9D9] font-[1.125rem] rounded-md mx-2"
                onClick={handleRejectReview}
              >
                심사 탈락
              </button>
              <button
                className="w-[21.10819rem] h-[4.125rem] bg-[#FFCED7] font-[1.125rem] rounded-md mx-2"
                onClick={handleReviewSubmit}
              >
                심사 승인
              </button>
            </div>
          </div>
        </div>
      )}
      <ReviewRejectionModal
        showModal={showRejectionModal}
        handleCloseModal={() => setShowRejectionModal(false)}
        handleReviewSubmit={handleReviewSubmit}
      />
    </>
  );
};

export default ReviewModal;
