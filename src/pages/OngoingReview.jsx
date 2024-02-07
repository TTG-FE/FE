import React from "react";

export const OngoingReview = () => {
  return (
    <div className="flex space-x-[1.12rem]">
      <div>
        <div className="w-[13.97756rem] h-[13.97756rem] bg-[#FFEDED] rounded-[0.59481rem]"></div>
        <div
          style={{ fontSize: "0.9375rem" }}
          className="w-[13.97756rem] font-['Inter'] text-[0.9375rem] flex items-center h-[2.26019rem] text-[#545454] font-bold"
        >
          [강북] 또먹고싶어 곱창
        </div>
        <div
          style={{ fontSize: "0.8125rem" }}
          className="mb-[0.58rem] font-['Inter'] text-[#FF0069]"
        >
          주먹밥+캔음료 1개
        </div>
        <div
          style={{
            fontSize: "0.8125rem",
            color: "#898989",
            fontFamily: "Inter",
          }}
        >
          신청일자: 2023.11.29
        </div>
      </div>
    </div>
  );
};
export default OngoingReview;
