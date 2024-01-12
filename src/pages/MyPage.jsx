import React from "react";
import doraImage from "../assets/dora.png";

//상단바+메뉴바까지 같이 생각해서 마진 설정
export const MyPage = () => {
  return (
    <div className="grid place-items-center ">

      <div className="flex justify-center items-center relative mt-[6.315rem] w-[95.4375rem] h-[24.0625rem] rounded-[1.125rem] shadow-[0_0_45px_0_rgba(0,0,0,0.2)] backdrop-sepia-74.99999237060547 bg-white-500/70 ">
      <div className="absolute top-[-3.12rem] left-0 text-[1.25rem] font-bold">마이페이지</div>

        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img
              className="w-[10.6875rem] h-[10.6875rem] object-cover"
              src={doraImage}
              alt="프로필 사진"
            />
          </div>
          <div className="text=[1.28rem] text-[#000000]/50 mt-[0.88rem]">
            프로필 사진 변경
          </div>
        </div>

        <div className="h-[18.23438rem] ml-[3.54rem] pr-[4.94rem] border-r-[1.5px] border-[#000000]/30" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="flex mb-[2.43rem] ">
            <div style={{ fontSize: "1.875rem", marginRight: "0.5rem" }}>
              안녕하세요,{" "}
            </div>
            <div style={{ fontSize: "1.875rem", fontWeight: "bold" }}>
              도라도라영어나라노랑이보라님
            </div>
          </div>
          <div className=" w-[35.8125rem] h-[5.5rem] flex  place-items-center bg-[#FFEDED] rounded-[0.9375rem] gap-x-[5.56rem]">
            <div
              style={{
                fontSize: "1.25rem",
                whiteSpace: "nowrap",
                paddingLeft: "3.75rem",
                fontWeight: "normal",
                
              }}
            >
              {" "}
              지금까지 또또가로 혜택받은 횟수
            </div>
            <div className="text-[#FF0069]  text-2xl font-semibold pr-[4.94rem]">
              17회
            </div>
          </div>
        </div>

        <div className="ml-[5.94rem]">
          <div className="text=[1.38669rem] text-[#000000]/30 tracking-[0.01388rem] font-bold ">
            고객센터
          </div>
          <div className="w-[19.62669rem] h-[3.2rem] mt-[1.88rem] mb-[1rem] grid place-items-center text-[#000000]/50 rounded-[0.53331rem] bg-[#E9E9E9] tracking-[0.01281rem] font-bold text=[1.28rem]">
            P. 010-7747-4928
          </div>
          <div className="text=[1.28rem] text-[#000000]/50 font-normal	">
            *주중 10시~18시 / 주말 및 공휴일 제외
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
