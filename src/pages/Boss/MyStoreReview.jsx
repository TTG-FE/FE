import React from "react";

export const MyStoreReview = () => {
  return (
    <div>
      <div className="flex w-[74.625rem] mt-[5.82rem] mb-[1.5rem] border-[#000000] border-b pb-[1rem]">
        <div className="mr-[1.37rem] text=[1.25rem] font-semibold">
          우리가게 리뷰
        </div>
        <div className="text-[#8F8F8F] text-[1rem]">
          {" "}
          ※ 계약 기간이 만료된 리뷰는 언제든지 삭제될 수 있습니다.
        </div>
      </div>
      <div class="flex w-[23.21219rem] h-[8.75rem] mb-[15.4rem] items-center shadow-custom-box-shadow2">
        <div className="bg-[#787] rounded-full w-[4.95988rem] ml-[1.52rem] h-[5.16731rem] mr-[1.52rem]"></div>
        <div>
          <div className="text-[1.125rem] mb-[1.1rem]">
            예지의 냠냠저장소213
          </div>
          <button className="border-solid border-[#FF0069] border-[1px] w-[13.68925rem] h-[2.61813rem] bg-[#fff] text-[0.75rem] text-[#FF0069] rounded">
            리뷰 보러 가기
          </button>
        </div>
      </div>
    </div>
  );
};
