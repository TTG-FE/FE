import React, { useRef, useState } from "react";
import BossReviewModal from "../Boss/BossReviewModal";
import WaitingReview from "./WatingReview";
import ReceivedCoupon from "./ReceivedCoupon";
import { MyStoreReview } from "./MyStoreReview";
import { ChangeImage } from "./ChangeImage";
export const BossMain = () => {
  const ongoingRef = useRef(null);
  const receivedRef = useRef(null);
  const completedRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showChangeImage, setShowChangeImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleReviewButtonClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleReviewSubmit = () => {
    // 심사 승인 또는 탈락 동작 구현
    // 여기에 관련 로직 추가
    // 모달 닫기
    handleCloseModal();
  };

  const handleMenuClick = (target) => {
    // 메뉴 클릭 시 동작
    setShowChangeImage(target === "changeImage");
  };
  const handleImageChange = (image) => {
    setSelectedImage(image); // 이미지가 변경되면 상태 업데이트
  };

  // const scrollToSection = (ref) => {
  //   if (ref && ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <div className="relative grid place-items-center">
      <div className="flex justify-center items-center relative mt-[6.315rem] w-[95.4375rem] h-[24.0625rem] rounded-[1.125rem] shadow-[0_0_45px_0_rgba(0,0,0,0.2)] backdrop-sepia-74.99999237060547 bg-white/70 ">
        <div
          className=" w-[17.3125rem] h-[11.375rem] bg-[#D9D9D9]"
          onClick={() => handleMenuClick("changeImage")}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover"
            />
          ) : (
            <div>{/* 상점 사진 없을 때 기본 이미지 */}</div>
          )}
        </div>

        <div
          className="h-[18.23438rem] ml-[3.54rem]  pr-[4.94rem] text-[1rem]  border-r-[1.5px] border-[#000000]/30"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* 우리가게 페이지로 이동하는 링크 추가 */}
          <div className="ml-[0.69rem] opacity-50">
            우리가게 페이지 바로가기
          </div>
          <div
            className="mb-[1.88rem] ml-[0.69rem]"
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              fontStyle: "normal",
              fontFamily: "Inter",
            }}
          >
            또또가 X 왕중왕전 떡볶이{" "}
          </div>

          <div className=" w-[35.8125rem] h-[5.5rem] flex items-center bg-[#FFEDED] rounded-[0.9375rem] gap-x-[3.87rem]">
            <div
              style={{
                fontSize: "1.25rem",
                whiteSpace: "nowrap",
                paddingLeft: "3.75rem",
                fontWeight: "normal",
                fontFamily: "Inter",
              }}
            >
              {" "}
              또또가와 함께하고 리뷰 받은 횟수
            </div>
            <div className="text-[#FF0069]  text-2xl font-semibold ">17회</div>
          </div>
        </div>

        <div className="ml-[5.94rem]">
          <div className="text=[1.38669rem] font-['Pretendard']  text-[#000000]/30 tracking-[0.01388rem] font-bold ">
            고객센터
          </div>
          <div className="w-[19.62669rem] h-[3.2rem] mt-[1.88rem] mb-[1rem] grid place-items-center text-[#000000]/50 rounded-[0.53331rem] bg-[#E9E9E9] tracking-[0.01281rem] font-bold text=[1.28rem]">
            P. 010 - 7747 - 4928
          </div>
          <div className="text=[1.28rem] text-[#000000]/50 font-normal   ">
            *주중 10시~18시 / 주말 및 공휴일 제외
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-[3.31rem] w-[9.625rem] h-[33.375rem] pb-[23.6875rem]">
          <div className="w-[9.625rem] mb-[1.25rem] pl-[0.25rem] pb-[0.88rem] border-[#000000]/30 border-b text=[1.25rem] font-bold">
            리뷰 관리
          </div>

          <div
            onClick={() => handleMenuClick("waitingReview")}
            className="text-[#000000]/70 text=[1rem] mb-[1.25rem] cursor-pointer"
          >
            {" "}
            심사 대기 중인 리뷰
          </div>
          <div
            onClick={() => handleMenuClick("receivedCoupon")}
            className="text-[#000000]/70 text=[1rem] mb-[1.25rem] cursor-pointer"
          >
            {" "}
            발급된 쿠폰 현황
          </div>
          <div
            onClick={() => handleMenuClick("myStoreReview")}
            className="text-[#000000]/70 text=[1rem] cursor-pointer"
          >
            우리가게 리뷰
          </div>

          <div className="w-[9.625rem] mt-[4.06rem] mb-[1.25rem] pl-[0.25rem] pb-[0.88rem] border-[#000000]/30 border-b text=[1.25rem] font-bold">
            상점 관리
          </div>
          <div
            onClick={() => handleMenuClick("changeImage")}
            className="text-[#000000]/70 text=[1rem] mb-[1.25rem] cursor-pointer"
          >
            {" "}
            상점 이미지 수정하기
          </div>
        </div>

        {showChangeImage && (
          <div className="mt-[3.31rem] ml-[9.5rem]">
            <ChangeImage onClose={handleImageChange} />
          </div>
        )}

        {!showChangeImage && (
          <div className="mt-[3.31rem] ml-[9.5rem]">
            <WaitingReview
              ref={ongoingRef}
              handleReviewButtonClick={handleReviewButtonClick}
            />
            <ReceivedCoupon ref={receivedRef} />
            <MyStoreReview ref={completedRef} />
          </div>
        )}
      </div>

      <BossReviewModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleReviewSubmit={handleReviewSubmit}
      />
    </div>
  );
};
