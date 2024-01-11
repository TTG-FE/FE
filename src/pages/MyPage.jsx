import React from "react";
//상단바+메뉴바까지 같이 생각해서 마진 설정
export const MyPage = () => {
  return (
    <div className="grid place-items-center">
      <div className="mt-[6.315rem] w-[95.4375rem] h-[24.0625rem] rounded-[1.125rem] shadow-[0_0_45px_0_rgba(0,0,0,0.2)] backdrop-sepia-74.99999237060547 bg-white-500/70">
        <div>
          <img src="" alt="프로필 사진" />
          <div>프로필 사진 변경</div>
        </div>
        <div>
          <div>안녕하세요, 도라도라님</div>
          <div>지금까지 또또가로 혜택받은 횟수</div>
        </div>
        <div>
          <div className="text=[1.38669rem] text-[#000000]/30 tracking-[0.01388rem] font-bold">고객센터</div>
          <div className="w-[19.62669rem] h-[3.2rem] grid place-items-center text-[#000000]/50 rounded-[0.53331rem] bg-[#E9E9E9] tracking-[0.01281rem] font-bold text=[1.28rem]">P. 010-7747-4928</div>
          <div className="text=[1.28rem] text-[#000000]/50 font-normal	">*주중 10시~18시 / 주말 및 공휴일 제외</div>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
