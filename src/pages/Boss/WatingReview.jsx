import React from "react";

const WatingReview = ({ handleReviewButtonClick }) => {
  return (
    <div>
      <div className="flex w-[74.625rem] border-[#000000] mb-[2.37rem] border-b pb-[1rem]">
        <div className="mr-[1.94rem] text-[1.25rem] font-semibold">
          심사 대기 중인 리뷰
        </div>
        <div className="text-[#8F8F8F] text-[1rem]">
          {" "}
          ※ 가급적 리뷰 신청일 기준 7일 내에 심사를 완료해주시길 바랍니다.
        </div>
      </div>
      {/* 심사 대기 중인 리뷰 컴포넌트 추가 */}
      <div className="flex items-center border-b pb-[2.37rem] border-[#D9D9D9]">
        <div className="bg-[#4545] ml-[0.75rem] w-[5.3125rem] h-[5.3125rem] rounded-full"></div>
        <div className="ml-[1.62rem]">
          <div className="mb-[0.63rem] font=['Inter'] text-[1rem]">
            소중한 혜택 감사합니다.
          </div>
          <div className="text=[0.75rem] mb-[0.81rem] text-[#8F8F8F] font=['Inter']">
            예지의 냠냠저장소
          </div>
          <div className="text-[0.71rem] text-[#FF0069]">7일전</div>
        </div>
        <div className="ml-[44.81rem]">
          <button
            onClick={handleReviewButtonClick}
            className="w-[9.8125rem] font=['Inter'] h-[2.5rem] border rounded-[0.44rem] bg-[#FF0069] text-[#fff]"
          >
            리뷰 심사하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatingReview;
