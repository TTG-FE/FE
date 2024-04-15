import React from "react";

export const BossHeader = () => {
  return (
    <>
      <div className="w-full items-center text-[#ffffff] flex h-[6.875rem] bg-[#DC4B6D] justify-between ">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[0.48rem] ml-[4.16rem]"
        >
          <rect
            x="-2.38086"
            y="-3.89355"
            width="54.7619"
            height="56.0647"
            fill="white"
          />
        </svg>

        <div className="text-[2.04544rem] mr-[5.75rem] font-semibold">
          또또가X
        </div>
        <div className="text-[1.25rem] font-medium mr-[4.25rem]">소개</div>
        <div className="text-[1.25rem] font-medium mr-[5.31rem]">공지사항</div>
        <div className="text-[1.25rem] font-medium ">
          우리가게 등록하기(무료)
        </div>
        <div className="text-[1.25rem] ml-auto mr-[6.5rem]">로그아웃</div>
      </div>
    </>
  );
};
