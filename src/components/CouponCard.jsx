import React, { useState } from "react";
import Modal from "./Modal"; // Modal 컴포넌트 import
import DownloadIcon from "./DownloadIcon"; // DownloadIcon 컴포넌트 import
import CheckIcon from "./CheckIcon";

const CouponCard = ({
  storeImg,
  storeArea,
  storeName,
  promotionText,
  couponDate,
  couponStoreImg,
  isCoupon,
  handleCouponUsed,
  handleOpenModal,
  handleCloseModal,
  modalStates,
}) => {
  // 이메일 유효검사
  const [email, setEmail] = useState("abc@123.com");
  //email& 비밀번호 정규식
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const emailCheck = (email) => {
    return emailRegEx.test(email); //형식에 맞을 경우, true 리턴
  };

  // 쿠폰 발급 동의 여부
  const [isCheck, setIsCheck] = useState(false);
  // let isCoupon = false;
  // console.log(`isCoupon: ${isCoupon}`);

  const { id, used } = isCoupon;

  console.log(` id, used`,id,used);

  return (
    <div className="flex h-72 shadow-custom-box-shadow rounded-lg mb-8">
      {/* 쿠폰 이미지 및 상세 내용 */}
      <div className="flex w-3/4 pl-7 py-6">
        {/* 이미지 */}
        <img src={storeImg} alt="" className="mr-12" />
        {/* 내용 전체 크기 설정 */}
        <div className="pt-11 pb-7">
          <h2 className="text-3xl	font-medium	mb-4">
            [{storeArea}] {storeName}
          </h2>
          <h3 className="text-[#FF7A00] mb-14">{promotionText}</h3>
          <div className="flex items-center">
            <p
              className={`px-5 py-2.5 rounded-3xl	text-white mr-5 ${
                used ? "bg-custom-gray-200" : "bg-custom-pink"
              }`}
            >
              {used ? "사용완료" : "사용가능"}
            </p>
            <p>기한: {couponDate}</p>
          </div>
        </div>
      </div>
      {/* 쿠픈 다운로드 */}
      <div
        className={`relative w-1/4 rounded-r-lg h-full ${
          used ? "bg-custom-gray-200" : "bg-custom-gradation-180"
        }`}
      >
        {/* 쿠폰 디자인 */}
        {/* %로 하고싶은데 맞추기 번거로움 */}
        <div className="absolute top-[15px] left-[-20px] h-10 w-10 bg-white rounded-full"></div>
        <div className="absolute top-[69px] left-[-20px] h-10 w-10 bg-white rounded-full"></div>
        <div className="absolute top-[123px] left-[-20px] h-10 w-10 bg-white rounded-full"></div>
        <div className="absolute top-[177px] left-[-20px] h-10 w-10 bg-white rounded-full"></div>
        <div className="absolute top-[231px] left-[-20px] h-10 w-10 bg-white rounded-full"></div>

        {/* 다운로드 */}
        <div className="h-full flex flex-col items-center justify-center ml-5">
          <div className="flex items-center justify-center mb-3.5">
            <button
              className="w-40 h-40 bg-white rounded-full flex items-center justify-center"
              onClick={() => {
                handleOpenModal("isCouponModalOpen");
                console.log(modalStates);
              }}
              disabled={used}
            >
              <DownloadIcon isCoupon={used} />
            </button>
          </div>
          <button
            className="text-white"
            onClick={() => {
              handleOpenModal("isCouponModalOpen");
            }}
            disabled={used}
          >
            Download
          </button>
        </div>

        <Modal
          isOpen={modalStates.isCouponModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
        >
          <div className="px-5 w-[376px] h-[510px]">
            <div className="h-[300px]">
              <div className="text-center">쿠폰 정보</div>
              <img src={couponStoreImg} alt="" className="mt-5 mb-11" />
            </div>

            <div className="absolute w-14 h-14 bg-white rounded-full top-[300px] left-[-28px] border-4 border-custom-pink"></div>
            <div className="absolute w-14 h-14 bg-white rounded-full top-[300px] right-[-28px] border-4 border-custom-pink "></div>

            <div className="border-dashed border-t-2 border-custom-pink text-center">
              <h2 className="text-base mt-12 mb-2.5">
                [{storeArea}] {storeName}
              </h2>
              <h3 className="text-sm mb-2.5 text-custom-orange">
                {promotionText}
              </h3>
              <h4 className="text-xs mb-5">기한: {couponDate}</h4>
            </div>
            <button
              className="absolute w-[300px]  left-1/2 transform -translate-x-1/2 bottom-7 h-9 rounded bg-custom-pink text-white text-xs"
              onClick={() => {
                handleCloseModal();
                handleOpenModal("isCouponInfoModalOpen");
              }}
            >
              발급하기
            </button>
          </div>
        </Modal>

        <Modal
          isOpen={modalStates.isCouponInfoModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
        >
          <div className="px-5 w-[376px] h-[510px] ">
            <div className="h-[300px]">
              <div className="mb-14 text-center">발급 정보</div>
              <h2 className="text-sm mb-4">카카오 계정</h2>
              <input
                className="w-full bg-[#F4F4F4] text-xs p-3 mb-4 w-[300px]"
                type="email"
                placeholder="예) kakaologin@naver.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                  emailCheck(e.target.value);
                }}
                value={email}
              />
              <div className="flex items-center">
                <button
                  className="mr-1"
                  onClick={() => {
                    setIsCheck(!isCheck);
                  }}
                >
                  <CheckIcon isCheck={isCheck} />
                </button>
                <p className="text-[11px]">
                  쿠폰 발급을 위한 개인정보 제 3자 제공에 동의합니다. (필수)
                </p>
              </div>
            </div>
            {/* 쿠폰 디자인 양쪽 원으로 파인 부분 */}
            <div className="absolute w-14 h-14 bg-white rounded-full top-[300px] left-[-28px] border-4 border-custom-pink "></div>
            <div className="absolute w-14 h-14 bg-white rounded-full top-[300px] right-[-28px] border-4 border-custom-pink "></div>
            <div className="border-dashed border-t-2 border-custom-pink">
              <div className="mt-16 text-[#FF0000] text-xs">
                <p>※ 발급 정보는 마이페이지에서 수정가능합니다.</p>
                <p>※ 쿠폰 발급 이후 발급 정보 수정이 불가합니다.</p>
                <p>※ 본인 이외에 쿠폰 발급은 불가합니다.</p>
              </div>

              <button
                className={`absolute w-[300px]  left-1/2 transform -translate-x-1/2 bottom-7 h-9 rounded  text-white text-xs ${
                  isCheck && emailCheck(email)
                    ? "bg-custom-pink"
                    : "bg-[#B2B2B2] cursor-not-allowed"
                }`}
                onClick={() => {
                  if (isCheck) {
                    // isCheck가 true일 때만 클릭 이벤트 처리
                    handleCloseModal();
                    handleOpenModal("isCouponDownloadModalOpen");
                    // console.log(modalStates);
                  }
                }}
                disabled={!isCheck && emailCheck(email)}
              >
                발급하기
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalStates.isCouponDownloadModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
        >
          <div className="px-5 w-[376px] h-[510px]">
            <div className="h-[300px] relative">
              <div className="text-center">쿠폰 정보</div>
              <img
                src={couponStoreImg}
                alt=""
                className="mt-5 mb-11 grayscale"
              />
              <div className="w-[160px] h-[160px] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-custom-pink rounded-full flex flex-col items-center justify-center bg-white/75">
                <p className="text-custom-pink text-4xl font-bold">
                  발급
                  <br />
                  완료
                </p>
              </div>
            </div>

            <div className="absolute w-14 h-14 bg-white rounded-full top-[300px] left-[-28px] border-4 border-custom-pink "></div>
            <div className="absolute w-14 h-14 bg-white rounded-full top-[300px] right-[-28px] border-4 border-custom-pink "></div>

            <div className="border-dashed border-t-2 border-custom-pink text-center">
              <h2 className="text-base mt-14 mb-2.5">
                [{storeArea}] {storeName}
              </h2>
              <h3 className="text-sm mb-2.5 text-custom-orange">
                {promotionText}
              </h3>
              <h4 className="text-xs">기한: {couponDate}</h4>
            </div>
            <button
              className="absolute w-[300px]  left-1/2 transform -translate-x-1/2 bottom-7 h-9 rounded bg-[#B2B2B2] text-white text-xs"
              onClick={() => {
                handleCloseModal();
                handleCouponUsed(id);
              }}
            >
              닫기
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CouponCard;
