import React from "react";

export const FailReview = () => {
  return (
    <div className="flex justify-between border-b pb-[1rem] border-[#D9D9D9]">
      <div>
        <div className="mb-[1.44rem] text=[1.125rem]">
          [강북] 또먹고싶어 곱창
        </div>
        <div className="text=[1rem]">탈락사유: 글자수 미충족</div>
      </div>
      <div>
        <div className="text=[1rem] mb-[1.19rem]">신청일자: 2023.11.29</div>
        <button className="w-[9.8125rem] h-[2.4375rem] border rounded-[0.44rem] border-[#FF0069] text-[#FF0069]">
          다시 신청하기
        </button>
      </div>
    </div>
  );
};
export default FailReview;
