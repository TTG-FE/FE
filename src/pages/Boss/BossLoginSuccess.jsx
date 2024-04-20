import React, { useState } from "react";
import LoginImage from "../../assets/loginimage.png";
import { useNavigate } from "react-router-dom";
export const BossLoginSuccess = () => {
  const [companyName, setCompanyName] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("가게 운영 지역");
  const options = [
    "서울여대/과기대(공릉동)",
    "광운대/인덕대(월계동)",
    "덕성여대(쌍문동)",
    "한국외대/경희대/시립대(이문동-회기동)",
  ];

  const navigate = useNavigate();
  const handleCheckboxClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      companyName &&
      businessNumber &&
      phoneNumber &&
      selectedOption &&
      isChecked
    ) {
      navigate("/boss-main");
    } else {
      setShowModal(true);
    }
  };

  // 모달 x 버튼 클릭
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 모달 배경 클릭
  const handleModalBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="flex items-center h-screen ">
      {" "}
      <div className="hidden desktop:block mr-[6.69rem] ml-[15.81rem]">
        <img
          src={LoginImage}
          alt="로그인 이미지"
          className="w-[44.375rem] h-[32.4375rem]"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div>
        <div className=" text-[2.25rem] font-semibold mb-[1rem]">시작하기</div>
        <div className="text-[1rem]">
          최초 1회만 작성하여 로그인 정보에 저장된다는 멘트 등등등
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-[1.46rem]">
            <input
              className="w-[29.9375rem] pl-[1.06rem] h-[4.04313rem] border-[#B3B3B3] border border-solid"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="업체명"
              style={{
                borderRadius: "0.625rem",
                color: "#B3B3B3",
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="mt-[1.46rem]">
            <input
              className="w-[29.9375rem] pl-[1.06rem] h-[4.04313rem] border-[#B3B3B3] border border-solid"
              type="text"
              value={businessNumber}
              onChange={(e) => setBusinessNumber(e.target.value)}
              placeholder="사업자번호"
              style={{
                borderRadius: "0.625rem",
                color: "#B3B3B3",
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="mt-[1.46rem]">
            <input
              className="w-[29.9375rem] pl-[1.06rem] h-[4.04313rem] border-[#B3B3B3] border border-solid"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="연락처"
              style={{
                borderRadius: "0.625rem",
                color: "#B3B3B3",
                fontSize: "1rem",
              }}
            />
          </div>
          <div className="relative">
            <div
              className="w-[29.9375rem] mt-[1.46rem] pl-[0.92rem] h-[4.043rem] border-[#B3B3B3] border border-solid flex items-center justify-between cursor-pointer"
              onClick={toggleDropdown}
              style={{
                borderRadius: "0.625rem",
                color: "#B3B3B3",
                fontSize: "1rem",
              }}
            >
              <span>{selectedOption}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="29"
                viewBox="0 0 27 29"
                fill="none"
                className="mr-[1.17rem]"
              >
                <path
                  d="M18.9882 17.8119C19.0455 17.872 19.1128 17.919 19.1864 17.9501C19.26 17.9813 19.3384 17.9961 19.4172 17.9936C19.4959 17.9911 19.5734 17.9715 19.6453 17.9357C19.7172 17.9 19.782 17.8488 19.8361 17.7852C19.8902 17.7217 19.9325 17.6469 19.9606 17.5651C19.9887 17.4834 20.002 17.3963 19.9998 17.3088C19.9975 17.2214 19.9798 17.1353 19.9476 17.0554C19.9154 16.9756 19.8694 16.9035 19.8122 16.8435L14.4153 11.1821C14.304 11.0651 14.1566 11 14.0034 11C13.8502 11 13.7027 11.0651 13.5914 11.1821L8.19398 16.8435C8.13548 16.9031 8.08824 16.9752 8.055 17.0553C8.02176 17.1354 8.0032 17.2221 8.00038 17.3103C7.99756 17.3985 8.01054 17.4864 8.03857 17.569C8.0666 17.6515 8.10912 17.7271 8.16366 17.7912C8.2182 17.8554 8.28368 17.9069 8.35628 17.9427C8.42888 17.9785 8.50717 17.9979 8.58659 17.9998C8.66601 18.0018 8.74499 17.9861 8.81892 17.9539C8.89286 17.9216 8.96029 17.8733 9.0173 17.8119L14.0034 12.5821L18.9882 17.8119Z"
                  fill="#FF0069"
                />
              </svg>
            </div>
            {isOpen && (
              <div className="absolute w-[29.9375rem] mt-[0.27rem] bg-[#fff] border-[#B3B3B3] border rounded">
                {options.map((option, index) => (
                  <div
                    key={index}
                    style={{
                      borderRadius: "0.625rem",
                      color: "rgba(84, 84, 84, 0.70)",
                      fontSize: "1rem",
                    }}
                    className="py-[1.17rem] pl-[0.94rem] bg-[#fff] border-b  cursor-pointer"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center mt-[1.21rem] mb-[1.17rem] ml-[0.31rem] mr-[0.37rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isChecked ? "#FF0069" : "#B3B3B3"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={handleCheckboxClick}
              style={{ cursor: "pointer" }}
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12L11 15L16 9" />
            </svg>

            <span className="ml-2 text-[#B3B3B3] text-base">
              개인정보 이용 약관에 동의합니다.
            </span>
          </div>
          <button
            type="submit"
            className={`w-[29.9375rem] h-[4.04313rem] border-none bg-[#D9D9D9] rounded-[0.625rem] text-[1rem] text-base font-semibold ${isOpen ? "hidden" : "block"}`}
            style={{ zIndex: isOpen ? "-1" : "1" }}
          >
            완료
          </button>
        </form>
      </div>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 backdrop-blur-[50px]"
          onClick={handleModalBackgroundClick}
        >
          <div className="bg-white w-[39.6875rem] h-[20.0625rem] rounded-md relative">
            <div
              className="absolute top-0 right-0 m-4 cursor-pointer"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <circle
                  cx="12.6406"
                  cy="12"
                  r="9"
                  fill="#7E869E"
                  fill-opacity="0.25"
                />
                <path
                  d="M9.64062 9L15.6406 15"
                  stroke="#222222"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
                <path
                  d="M15.6406 9L9.64062 15"
                  stroke="#222222"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="ml-[3.56rem]">
              <h2 className="text-xl font-semibold mt-[3.87rem] text-[1rem] mb-[0.69rem] ">
                확인된 정보가 없습니다.
              </h2>
              <p className="text-sm text-gray-500 mb-[3.69rem]">
                작성하신 정보가 올바른지 확인해주세요.
              </p>
            </div>
            <div>
              <button
                onClick={handleCloseModal}
                className="w-[34.10406rem] ml-[2.56rem] h-[3.0625rem] bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-[1.125rem]"
              >
                닫기
              </button>
            </div>
            <div>
              <button className="w-[34.10406rem] ml-[2.56rem] h-[3.0625rem] text-[1rem] bg-[#FF0069] text-[#ffffff] mt-[0.44rem] rounded-md ml-[2.56rem]">
                혹시 아직 또또가X와 제휴를 맺지 않은 가게인가요?
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
