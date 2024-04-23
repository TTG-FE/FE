import React from "react";
import LOGO from "../../assets/또또가X_백색로고.png";
export const BossHeader = () => {
  return (
    <>
      <div className="w-full items-center text-[#ffffff] flex h-[6.875rem] bg-[#DC4B6D] justify-between ">
        <img
          src={LOGO}
          alt="로고"
          className="w-[3.42263rem] h-[3.50406rem] ml-[4.16rem] mr-[0.48rem]"
        />
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
