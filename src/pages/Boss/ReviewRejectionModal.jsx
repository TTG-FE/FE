import React, { useState } from "react";

const ReviewRejectionModal = ({
  showModal,
  handleCloseModal,
  handleReviewSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState("리뷰 탈락 사유를 선택해주세요");
  const options = [
    "공개범위가 제한됨",
    "악의적인 비난 및 욕설이 포함됨",
    "자사 가게의 리뷰가 아님",
    "작성한 이용안내 가이드에 맞지 않는 불성실한 페이지",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
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
                  fillOpacity="0.25"
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
              리뷰 탈락 사유
            </div>
            <div className="relative">
              <div
                className="w-[42.9375rem] mt-[2.29rem] text-[1rem] text-[#B3B3B3] ml-[3.19rem] h-[4.043rem] border border-gray-300 rounded flex items-center justify-between px-4 cursor-pointer"
                onClick={toggleDropdown}
              >
                <span>{selectedOption}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="29"
                  viewBox="0 0 27 29"
                  fill="none"
                >
                  <path
                    d="M18.9882 17.8119C19.0455 17.872 19.1128 17.919 19.1864 17.9501C19.26 17.9813 19.3384 17.9961 19.4172 17.9936C19.4959 17.9911 19.5734 17.9715 19.6453 17.9357C19.7172 17.9 19.782 17.8488 19.8361 17.7852C19.8902 17.7217 19.9325 17.6469 19.9606 17.5651C19.9887 17.4834 20.002 17.3963 19.9998 17.3088C19.9975 17.2214 19.9798 17.1353 19.9476 17.0554C19.9154 16.9756 19.8694 16.9035 19.8122 16.8435L14.4153 11.1821C14.304 11.0651 14.1566 11 14.0034 11C13.8502 11 13.7027 11.0651 13.5914 11.1821L8.19398 16.8435C8.13548 16.9031 8.08824 16.9752 8.055 17.0553C8.02176 17.1354 8.0032 17.2221 8.00038 17.3103C7.99756 17.3985 8.01054 17.4864 8.03857 17.569C8.0666 17.6515 8.10912 17.7271 8.16366 17.7912C8.2182 17.8554 8.28368 17.9069 8.35628 17.9427C8.42888 17.9785 8.50717 17.9979 8.58659 17.9998C8.66601 18.0018 8.74499 17.9861 8.81892 17.9539C8.89286 17.9216 8.96029 17.8733 9.0173 17.8119L14.0034 12.5821L18.9882 17.8119Z"
                    fill="#FF0069"
                  />
                </svg>
              </div>
              {isOpen && (
                <div className="absolute w-[42.9375rem]  mt-1 ml-[3.19rem] bg-white border border-gray-300 rounded">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="py-[1.17rem] text-[1rem] pl-[1.75rem] border border-gray-300 cursor-pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-[1.125rem] ml-[3.75rem] mt-[18rem] text-[#898989]">
              <p>• 심사 결과는 한 번 선택한 뒤 바꿀 수 없습니다.</p>
              <p>• 이외 문제사항이 있으시다면 고객센터로 문의에 남겨주세요.</p>
            </div>
            <div className="flex justify-center mt-[2rem]">
              <button className="w-[21.10819rem] h-[4.125rem] bg-[#D9D9D9] font-[1.125rem] rounded-md mx-2">
                뒤로가기
              </button>
              <button className="w-[21.10819rem] h-[4.125rem] bg-[#FF0069] font-[1.125rem] font-bold	 text-white rounded-md mx-2">
                완료
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewRejectionModal;
