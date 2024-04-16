import React, { useState } from "react";
import LoginImage from "../../assets/loginimage.png";
import { useNavigate } from "react-router-dom";
export const BossLoginSuccess = () => {
  const [companyName, setCompanyName] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [region, setRegion] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleCheckboxClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (companyName && businessNumber && phoneNumber && region && isChecked) {
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
          <div className="mt-[1.46rem] relative">
            <select
              className="w-[29.9375rem]  pl-[1.06rem] pr-[2.5rem] h-[4.043rem] border-[#B3B3B3] border border-solid bg-white appearance-none rounded-[0.625rem] text-[#B3B3B3] text-base focus:outline-none "
              style={{
                color: "#B3B3B3",
                fontSize: "1rem",
              }}
              value={region}
              onChange={(e) => setRegion(e.target.value)} // 변경 시 상태 업데이트
            >
              <option value="" disabled hidden>
                가게 운영 지역을 선택하세요
              </option>
              <option value="seoul-tech">서울여대/과기대</option>
              <option value="kwu-induk">광운대/인덕대</option>
              <option value="deokseong">덕성여대</option>
              <option value="hu-ku-si">한국외대/경희대/시립대</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-[1.17rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
              >
                <path
                  d="M14.6132 17.8119C14.6705 17.872 14.7378 17.919 14.8114 17.9501C14.885 17.9813 14.9634 17.9961 15.0422 17.9936C15.1209 17.9911 15.1984 17.9715 15.2703 17.9357C15.3422 17.9 15.407 17.8488 15.4611 17.7852C15.5152 17.7217 15.5575 17.6469 15.5856 17.5651C15.6137 17.4834 15.627 17.3963 15.6248 17.3088C15.6225 17.2214 15.6048 17.1353 15.5726 17.0554C15.5404 16.9756 15.4944 16.9035 15.4372 16.8435L10.0403 11.1821C9.92899 11.0651 9.78159 11 9.62837 11C9.47515 11 9.32775 11.0651 9.21641 11.1821L3.81898 16.8435C3.76048 16.9031 3.71324 16.9752 3.68 17.0553C3.64676 17.1354 3.6282 17.2221 3.62538 17.3103C3.62256 17.3985 3.63554 17.4864 3.66357 17.569C3.6916 17.6515 3.73412 17.7271 3.78866 17.7912C3.8432 17.8554 3.90868 17.9069 3.98128 17.9427C4.05388 17.9785 4.13217 17.9979 4.21159 17.9998C4.29101 18.0018 4.36999 17.9861 4.44392 17.9539C4.51786 17.9216 4.58529 17.8733 4.6423 17.8119L9.62837 12.5821L14.6132 17.8119Z"
                  fill="#FF0069"
                />
              </svg>
            </div>
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
            // disabled={
            //   !companyName ||
            //   !businessNumber ||
            //   !phoneNumber ||
            //   !region ||
            //   !isChecked
            // }
            className="w-[29.9375rem] h-[4.04313rem] border-none bg-[#D9D9D9] rounded-[0.625rem] text-[1rem] text-base opacity-50 font-semibold"
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
