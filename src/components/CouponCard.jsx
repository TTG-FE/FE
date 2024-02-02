import React, { useState } from "react";
import Modal from "./Modal"; // Modal 컴포넌트 import
import DownloadIcon from "./DownloadIcon"; // DownloadIcon 컴포넌트 import
import CheckIcon from "./CheckIcon";
import EmployeeVerificationIcon from "../assets/employeeVerification.svg";
import QrCodeIcon from "../assets/qr-code-line.svg";
import { ReactComponent as HorizontalCircleIcon } from "../assets/horizontalCircle.svg";
import { ReactComponent as PhoneDownloadIcon } from "../assets/phone_downloadIcon.svg";

// 가게 사진, 지역, 이름, 행사 쿠폰명, 쿠폰 날짜, 쿠폰가게 이미지, 쿠폰여부, 쿠폰사용여부, 모달창 열기, 모달창 닫기, 모달 관리
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
  // 쿠폰 정보
  const { id, used } = isCoupon;

  // 쿠폰 발급 동의 여부
  const [isCheck, setIsCheck] = useState(false);

  // 모달창 쿠폰 양옆 반원 UI 관련 설정
  const couponSemicircle_desktop_size = 14; /* 크기 48x48(단위 rem)*/
  const couponSemicircle_desktop_top = 306; /* top으로부터 위치(단위 px) */
  const couponSemicircle_desktop_side = -28; /* left, right (단위 px)*/
  const couponSemicircle_mobile_size = 10; 
  const couponSemicircle_mobile_top = 200;
  const couponSemicircle_mobile_side = -20;

  return (
    <>
      {/* 모바일 쿠폰 영역 */}
      <main className="ml-7 border h-40 shadow-lg flex flex-row break-words mb-6 sm:hidden font-inter">
        {/* 쿠폰 왼쪽 다운로드 영역*/}
        <div className="relative z-0">
          <div
            className={`rounded-l-lg h-full w-16 flex flex-col items-center justify-center pl-4 pr-[18px] basis-1/4 overflow-hidden ${
              used ? "bg-custom-gray-300" : "bg-custom-pink"
            }`}
          >
            <button
              className="text-[8px]"
              onClick={() => {
                handleOpenModal("isCouponModalOpen");
              }}
              disabled={used}
            >
              <div className="w-9 h-9 bg-white rounded-full mb-1.5 flex justify-center items-center">
                <PhoneDownloadIcon
                  fill={`${used ? "#B3B3B3" : "#FF0068"}`}
                  stroke={`${used ? "#B3B3B3" : "#FF0068"}`}
                />
                {/* <img src={phoneDownloadIcon} alt="" /> */}
              </div>
              <p className="text-white">다운로드</p>
            </button>
            <HorizontalCircleIcon
              fill={used ? "white" : "#FFF2F2"}
              className="absolute top-3 right-[-6px]"
            />
          </div>
        </div>

        {/* 쿠폰 오른쪽 내용 영역 */}
        <div
          className={`py-6 pl-6 pr-2  w-full ${
            used ? "bg-white" : "bg-[#FFF2F2]"
          }`}
        >
          <div className="flex flex-col h-full justify-around">
            <h1>[성수] 베리베리 스트로베리 케이크 전문점</h1>
            <p
              className={`text-[10px]  ${
                used ? "text-custom-gray-200" : "text-custom-pink"
              }`}
            >
              닐라닐라바닐라 조각케이크 무료증정
            </p>
            <div className="flex flex-row items-center">
              <p
                className={`text-[8px] rounded-lg text-white px-2 py-0.5 mr-2 ${
                  used ? "bg-custom-gray-300" : "bg-custom-pink"
                }`}
              >
                {used ? "사용완료" : "사용가능"}
              </p>
              <p
                className={`text-[10px]  ${used ? "text-custom-gray-200" : ""}`}
              >
                2023.12.01 ~ 2023.12.31
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* //모바일 쿠폰 영역 끝 */}

      {/* 데스크탑 쿠폰 */}
      <main className="flex h-72 shadow-custom-box-shadow rounded-lg mb-8 w-full hidden sm:flex">
        {/* 쿠폰 이미지 및 상세 내용 */}
        <div className="flex basis-3/4 pl-7 py-6">
          {/* 이미지 */}
          <img src={storeImg} alt="" className="mr-12" />
          {/* 내용 전체 크기 설정 */}
          <div className="pt-11 pb-7 truncate">
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
          className={`relative basis-1/4 rounded-r-lg h-full overflow-hidden ${
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
        </div>
      </main>

      {/* 모바일 모달 */}
      <div className="sm:hidden">
        {/* 1번째 모달 */}
        <Modal
          isOpen={modalStates.isCouponModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
        >
          <div className="px-6 py-5 w-[278px] h-full">
            <div className="h-[200px]">
              <div className="text-center mb-3 text-custom-gray-200">
                쿠폰 정보
              </div>
              <img
                src={couponStoreImg}
                alt=""
                className="mb-8 w-[228px] h-[141px]"
              />
            </div>

            {/* 쿠폰 디자인 양쪽 원으로 파인 부분  */}
            {/* 흰색 아래 흰색을 덮어서 그위에 블러처리하면 안될려나? */}
            {/* <CouponSemicircleUI
              size={couponSemicircle_mobile_size}
              top={couponSemicircle_mobile_top}
              leftAndright={couponSemicircle_mobile_side}
              borderColor={`custom-pink`}
            /> */}
            <CouponSemicircleUI_Mobile borderColor={`custom-pink`} />

            {/* 쿠폰 실선 밑 영역 */}
            <div className="border-dashed border-t-2 border-custom-pink text-center">
              <h2 className="text-xs mt-8 mb-2.5">
                [{storeArea}] {storeName}
              </h2>
              <h3 className="text-[10px] mb-2.5 text-custom-orange">
                {promotionText}
              </h3>
              <h4 className="text-[9px] mb-1">기한: {couponDate}</h4>
              <button
                className="h-8 w-full rounded bg-custom-pink text-white text-xs"
                onClick={() => {
                  handleCloseModal();
                  handleOpenModal("isCouponInfoModalOpen");
                }}
              >
                직원확인
              </button>
            </div>
          </div>
        </Modal>

        {/* 2번째 모달 */}
        <Modal
          isOpen={modalStates.isCouponInfoModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
        >
          <div className="px-6 py-5 w-[278px] h-full">
            <div className="h-[200px]">
              <div className="text-center text-custom-gray-200">직원 확인</div>
              <div className="flex justify-center items-center h-5/6">
                <img
                  className={`${isCheck ? "w-40 h-40" : "w-28 h-28"}`}
                  src={isCheck ? QrCodeIcon : EmployeeVerificationIcon}
                  alt=""
                />
              </div>
            </div>

            {/* 쿠폰 디자인 양쪽 원으로 파인 부분  */}
            {/* <CouponSemicircleUI
              size={couponSemicircle_mobile_size}
              top={couponSemicircle_mobile_top}
              leftAndright={couponSemicircle_mobile_side}
              borderColor={`custom-pink`}
            /> */}
            <CouponSemicircleUI_Mobile borderColor={`custom-pink`} />

            <div className="border-dashed border-t-2 border-custom-pink">
              {/* 대쉬바 밑에 내용 전체 div */}
              <div className="pt-3 h-[133px] flex flex-col justify-between">
                <div className="flex items-center mb-1">
                  <button
                    className="mr-1 "
                    onClick={() => {
                      setIsCheck(!isCheck);
                    }}
                  >
                    <CheckIcon isCheck={isCheck} />
                  </button>
                  <p className="text-[9px] text-black">
                    해당 쿠폰의 상점 직원이 맞습니다. (필수)
                  </p>
                </div>
                <div className="text-[#FF0000] text-[9px] mb-3">
                  <p>※ 발급 정보는 마이페이지에서 수정가능합니다.</p>
                  <p>※ 쿠폰 발급 이후 발급 정보 수정이 불가합니다.</p>
                  <p>※ 본인 이외에 쿠폰 발급은 불가합니다.</p>
                </div>
                <button
                  className={`w-full h-8 rounded  text-white text-xs ${
                    isCheck
                      ? "bg-custom-pink"
                      : "bg-[#B2B2B2] cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (isCheck) {
                      // isCheck가 true일 때만 클릭 이벤트 처리
                      handleCloseModal();
                      handleOpenModal("isCouponDownloadModalOpen");
                    }
                  }}
                  disabled={!isCheck}
                >
                  사용하기
                </button>
              </div>
            </div>
          </div>
        </Modal>

        {/* 3번째 모달창 */}
        <Modal
          isOpen={modalStates.isCouponDownloadModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
          isLast={true}
        >
          <div className="px-6 py-5 w-[278px] h-full">
            <div className="h-[200px]">
              <div className="text-center mb-3 text-custom-gray-200">
                쿠폰 정보
              </div>
              <img
                src={couponStoreImg}
                alt=""
                className="mb-8 w-[228px] h-[141px] grayscale"
              />
              <div className="w-[115px] h-[115px] text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-custom-pink rounded-full flex flex-col items-center justify-center bg-white/75">
                <p className="text-custom-pink text-2xl font-semibold">
                  사용
                  <br />
                  완료
                </p>
              </div>
            </div>

            {/* 쿠폰 디자인 양쪽 원으로 파인 부분  */}
            {/* 흰색 아래 흰색을 덮어서 그위에 블러처리하면 안될려나? */}
            {/* <CouponSemicircleUI
              size={couponSemicircle_mobile_size}
              top={couponSemicircle_mobile_top}
              leftAndright={couponSemicircle_mobile_side}
              borderColor={`custom-gray-400`}
            /> */}
            <CouponSemicircleUI_Mobile borderColor={`custom-gray-400`} />

            {/* 쿠폰 실선 밑 영역 */}
            <div className="border-dashed border-t-2 border-[#B2B2B2] text-center">
              <h2 className="text-xs mt-8 mb-2.5">
                [{storeArea}] {storeName}
              </h2>
              <h3 className="text-[10px] mb-2.5 text-custom-orange">
                {promotionText}
              </h3>
              <h4 className="text-[9px] mb-1">기한: {couponDate}</h4>
              <button
                className="h-8 w-full rounded bg-[#B2B2B2] text-white text-xs"
                onClick={() => {
                  handleCloseModal();
                  handleCouponUsed(id);
                }}
              >
                닫기
              </button>
            </div>
          </div>
        </Modal>
      </div>

      {/* 데스크탑 모달 */}
      <div className="hidden sm:block">
        {/* <div className=""> */}
        <Modal
          isOpen={modalStates.isCouponModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
        >
          <div className="px-9 py-8 w-[408px] h-full">
            <div className="h-[300px]">
              <div className="text-center text-custom-gray-200">쿠폰 정보</div>
              <img src={couponStoreImg} alt="" className="mt-5 mb-11" />
            </div>

            {/* 쿠폰 디자인 양쪽 원으로 파인 부분  */}
            {/* 흰색 아래 흰색을 덮어서 그위에 블러처리하면 안될려나? */}
            {/* <CouponSemicircleUI
              size={couponSemicircle_desktop_size}
              top={couponSemicircle_desktop_top}
              leftAndright={couponSemicircle_desktop_side}
              borderColor={`custom-pink`}
            /> */}
            <CouponSemicircleUI_Desktop borderColor={`custom-pink`} />

            <section className="flex flex-col items-center">
              <div className="w-11/12 border-dashed border-t-2 border-custom-pink text-center">
                <h2 className="text-base mt-12 mb-2.5">
                  [{storeArea}] {storeName}
                </h2>
                <h3 className="text-sm mb-2.5 text-custom-orange">
                  {promotionText}
                </h3>
                <h4 className="text-xs mb-5">기한: {couponDate}</h4>
                <button
                  className="w-full h-9 rounded bg-custom-pink text-white text-xs"
                  onClick={() => {
                    handleCloseModal();
                    handleOpenModal("isCouponInfoModalOpen");
                  }}
                >
                  직원확인
                </button>
              </div>
            </section>
          </div>
        </Modal>

        <Modal
          isOpen={modalStates.isCouponInfoModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
        >
          <div className="px-9 py-8 w-[408px] h-full">
            <div className="h-[300px]">
              <div className="text-center text-custom-gray-200">직원 확인</div>
              <div className="flex justify-center items-center h-5/6">
                <img
                  className=""
                  src={isCheck ? QrCodeIcon : EmployeeVerificationIcon}
                  alt=""
                />
              </div>
            </div>
            {/* 쿠폰 디자인 양쪽 원으로 파인 부분  */}
            {/* <CouponSemicircleUI
              size={couponSemicircle_desktop_size}
              top={couponSemicircle_desktop_top}
              leftAndright={couponSemicircle_desktop_side}
              borderColor={`custom-pink`}
            /> */}
            <CouponSemicircleUI_Desktop borderColor={`custom-pink`} />

            <section className="flex flex-col items-center">
              <div className="w-11/12 border-dashed border-t-2 border-custom-pink ">
                {/* 대쉬바 밑에 내용 전체 div */}
                <div className="mb-7">
                  <div className="mt-9 mb-2 flex items-center">
                    <button
                      className="mr-1"
                      onClick={() => {
                        setIsCheck(!isCheck);
                      }}
                    >
                      <CheckIcon isCheck={isCheck} />
                    </button>
                    <p className="text-[11px] text-black">
                      해당 쿠폰의 상점 직원이 맞습니다. (필수)
                    </p>
                  </div>
                  <div className="text-[#FF0000] text-xs">
                    <p>※ 발급 정보는 마이페이지에서 수정가능합니다.</p>
                    <p>※ 쿠폰 발급 이후 발급 정보 수정이 불가합니다.</p>
                    <p>※ 본인 이외에 쿠폰 발급은 불가합니다.</p>
                  </div>
                </div>

                <button
                  className={`w-full h-9 rounded  text-white text-xs ${
                    isCheck
                      ? "bg-custom-pink"
                      : "bg-[#B2B2B2] cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (isCheck) {
                      // isCheck가 true일 때만 클릭 이벤트 처리
                      handleCloseModal();
                      handleOpenModal("isCouponDownloadModalOpen");
                    }
                  }}
                  disabled={!isCheck}
                >
                  사용하기
                </button>
              </div>
            </section>
          </div>
        </Modal>

        <Modal
          isOpen={modalStates.isCouponDownloadModalOpen}
          onClose={handleCloseModal}
          isCoupon={true}
          isLast={true}
        >
          <div className="px-9 py-8 w-[408px] h-full">
            <div className="h-[300px]">
              <div className="text-center text-custom-gray-200">쿠폰 정보</div>
              <img
                src={couponStoreImg}
                alt=""
                className="mt-5 mb-11 grayscale"
              />
              <div className="w-[160px] h-[160px] text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-custom-pink rounded-full flex flex-col items-center justify-center bg-white/75">
                <p className="text-custom-pink text-4xl font-bold">
                  사용
                  <br />
                  완료
                </p>
              </div>
            </div>

            {/* <CouponSemicircleUI
              size={couponSemicircle_desktop_size}
              top={couponSemicircle_desktop_top}
              leftAndright={couponSemicircle_desktop_side}
              borderColor={`custom-gray-400`}
            /> */}
            <CouponSemicircleUI_Desktop borderColor={`custom-gray-400`} />

            <section className="flex flex-col items-center">
              <div className="w-11/12 border-dashed border-t-2 border-[#B2B2B2] text-center">
                <h2 className="text-base mt-12 mb-2.5">
                  [{storeArea}] {storeName}
                </h2>
                <h3 className="text-sm mb-2.5 text-custom-orange">
                  {promotionText}
                </h3>
                <h4 className="text-xs mb-5">기한: {couponDate}</h4>
                <button
                  className="w-full h-9 rounded bg-[#B2B2B2] text-white text-xs"
                  onClick={() => {
                    handleCloseModal();
                    handleCouponUsed(id);
                  }}
                >
                  닫기
                </button>
              </div>
            </section>
          </div>
        </Modal>
      </div>
      {/* //모달 */}
    </>
  );
};

// 쿠폰 양옆 반원 UI 추가(가로x세로, 위, 양옆, border 색상) -> [] 가로를 치면 버그가 발생함
const CouponSemicircleUI = ({ size, top, leftAndright, borderColor }) => {
  return (
    <>
      <div
        className={`absolute w-${size} h-${size} bg-white rounded-full top-[${top}px] left-[${leftAndright}px] border-4 border-${borderColor}`}
      ></div>
      <div
        className={`absolute w-${size} h-${size} bg-white rounded-full top-[${top}px] right-[${leftAndright}px] border-4 border-${borderColor}`}
      ></div>
    </>
  );
};

const CouponSemicircleUI_Desktop = ({ borderColor }) => {
  return (
    <>
      <div
        className={`absolute w-14 h-14 bg-white rounded-full top-[306px] left-[-28px] border-4 border-${borderColor}`}
      ></div>
      <div
        className={`absolute w-14 h-14 bg-white rounded-full top-[306px] right-[-28px] border-4 border-${borderColor}`}
      ></div>
    </>
  );
};
const CouponSemicircleUI_Mobile = ({ borderColor }) => {
  return (
    <>
      <div
        className={`absolute w-10 h-10 bg-white rounded-full top-[200px] left-[-20px] border-4 border-${borderColor}`}
      ></div>
      <div
        className={`absolute w-10 h-10 bg-white rounded-full top-[200px] right-[-20px] border-4 border-${borderColor}`}
      ></div>
    </>
  );
};

export default CouponCard;
