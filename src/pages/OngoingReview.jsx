import React from "react";

export const OngoingReview = () => {
  return (
    <div className="flex space-x-[1.12rem] font-inter">
      <div className="w-56">
        <div className="w-56rem h-56 bg-[#FFEDED] rounded-[0.59481rem]"></div>
        <div className="text-[0.9375rem]  text-custom-gray-100 font-bold truncate mt-2 mb-1">
          [강북] 또먹고싶어 곱창
        </div>
        <div className="mb-[0.58rem]  text-[#FF0069] truncate text-sm">
          주먹밥+캔음료 1개 또먹고싶지않아도 먹어
        </div>
        <div className="text-[0.8125rem] text-custom-gray-200 ">
          신청일자: 2023.11.29
        </div>
      </div>
    </div>
  );
};
export default OngoingReview;
