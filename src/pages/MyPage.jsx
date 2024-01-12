import React from "react";
import doraImage from "../assets/dora.png";

//상단바+메뉴바까지 같이 생각해서 마진 설정
export const MyPage = () => {
  return (
    <div className="grid place-items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 378"
        fill="none"
        className="absolute top-0 left-0 z-0"
      >
        <path
          d="M823.828 300.073C312.306 445.708 60.6947 349.085 -4 314.076V0H2080V74.518C2000.78 234.957 1687.5 249 1540.5 240C1266.07 211.993 1010.93 217.553 823.828 300.073Z"
          fill="url(#paint0_linear_674_49507)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_674_49507"
            x1="291.412"
            y1="154.636"
            x2="2324.09"
            y2="324.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF0068" />
            <stop offset="0.508842" stopColor="#FF4D27" />
            <stop offset="0.734375" stopColor="#FF7A01" />
            <stop offset="1" stopColor="#FFD600" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex justify-center items-center relative mt-[6.315rem] w-[95.4375rem] h-[24.0625rem] rounded-[1.125rem] shadow-[0_0_45px_0_rgba(0,0,0,0.2)] backdrop-sepia-74.99999237060547 bg-white/70 ">
        <div className="absolute text-white top-[-3.12rem] left-0 text-[1.25rem] font-bold">
          마이페이지
        </div>

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

        <div
          className="h-[18.23438rem] ml-[3.54rem] pr-[4.94rem] border-r-[1.5px] border-[#000000]/30"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
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
      <div className="flex">
        <div className="mt-[3.31rem] w-[9.625rem] h-[33.375rem] pb-[23.6875rem]">
          <div className="w-[9.625rem] mb-[1.25rem] pl-[0.25rem] pb-[0.88rem] border-[#000000]/30 border-b text=[1.25rem] font-bold">
            리뷰 관리
          </div>
          <div className="text-[#000000]/70 text=[1rem] mb-[1.25rem]">
            나의 리뷰 현황
          </div>
          <div className="text-[#000000]/70 text=[1rem] mb-[1.25rem]">
            탈락한 리뷰
          </div>
          <div className="text-[#000000]/70 text=[1rem]">완료된 리뷰</div>
        </div>

        <div className="mt-[3.31rem] ml-[9.5rem]">
          <div className="w-[74.625rem] border-[#000000] border-b pb-[1rem] text=[1.25rem] font-semibold">
            진행중인 리뷰
          </div>

          <div className="flex items-center mb-[0.94rem]  pt-[1.06rem] pb-[1.25rem] border-[#545454] border-b w-[74.625rem] pl-[8.44rem] pr-[8.44rem]">
            <div className="w-[3.5625rem]  mr-[11.06rem]">신청</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
            >
              <path
                d="M0.214986 13.7353C0.146313 13.8069 0.0926256 13.891 0.0569897 13.983C0.0213542 14.075 0.00446749 14.173 0.00729465 14.2715C0.0101218 14.3699 0.0326076 14.4668 0.0734677 14.5566C0.114328 14.6465 0.172762 14.7276 0.245434 14.7952C0.318106 14.8628 0.403594 14.9157 0.497014 14.9508C0.590435 14.9859 0.689959 15.0025 0.789906 14.9997C0.889853 14.9969 0.988264 14.9748 1.07952 14.9345C1.17078 14.8943 1.25309 14.8368 1.32177 14.7652L7.79193 8.01916C7.92555 7.87999 8 7.69573 8 7.50421C8 7.31269 7.92555 7.12843 7.79193 6.98926L1.32177 0.242474C1.25355 0.169346 1.17125 0.110293 1.07966 0.0687494C0.988064 0.0272055 0.889002 0.00399685 0.788224 0.000471115C0.687446 -0.00305462 0.58696 0.0131741 0.492605 0.0482121C0.39825 0.083251 0.311904 0.136401 0.238585 0.204577C0.165267 0.272753 0.106435 0.354595 0.0655088 0.44535C0.0245819 0.536104 0.00237608 0.633962 0.000180721 0.733238C-0.00201511 0.832515 0.0158429 0.931232 0.0527186 1.02365C0.0895939 1.11608 0.144751 1.20036 0.214986 1.27162L6.1919 7.50421L0.214986 13.7353Z"
                fill="#545454"
              />
            </svg>
            <div className="mr-[9.44rem] flex-shrink-0 ml-[9.44rem]">
              리뷰 유지 기간
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
            >
              <path
                d="M0.214986 13.7353C0.146313 13.8069 0.0926256 13.891 0.0569897 13.983C0.0213542 14.075 0.00446749 14.173 0.00729465 14.2715C0.0101218 14.3699 0.0326076 14.4668 0.0734677 14.5566C0.114328 14.6465 0.172762 14.7276 0.245434 14.7952C0.318106 14.8628 0.403594 14.9157 0.497014 14.9508C0.590435 14.9859 0.689959 15.0025 0.789906 14.9997C0.889853 14.9969 0.988264 14.9748 1.07952 14.9345C1.17078 14.8943 1.25309 14.8368 1.32177 14.7652L7.79193 8.01916C7.92555 7.87999 8 7.69573 8 7.50421C8 7.31269 7.92555 7.12843 7.79193 6.98926L1.32177 0.242474C1.25355 0.169346 1.17125 0.110293 1.07966 0.0687494C0.988064 0.0272055 0.889002 0.00399685 0.788224 0.000471115C0.687446 -0.00305462 0.58696 0.0131741 0.492605 0.0482121C0.39825 0.083251 0.311904 0.136401 0.238585 0.204577C0.165267 0.272753 0.106435 0.354595 0.0655088 0.44535C0.0245819 0.536104 0.00237608 0.633962 0.000180721 0.733238C-0.00201511 0.832515 0.0158429 0.931232 0.0527186 1.02365C0.0895939 1.11608 0.144751 1.20036 0.214986 1.27162L6.1919 7.50421L0.214986 13.7353Z"
                fill="#545454"
              />
            </svg>
            <div className="ml-[11.06rem] flex-shrink-0">쿠폰 발급 완료</div>
          </div>

          <div className="flex space-x-[1.12rem]">
            <div>
              <div className="w-[13.97756rem] h-[13.97756rem] bg-[#FFEDED] rounded-[0.59481rem]"></div>
              <div
                style={{ fontSize: "0.9375rem" }}
                className="w-[13.97756rem] text-[0.9375rem] flex items-center h-[2.26019rem] text-[#545454] font-bold"
              >
                [강북] 또먹고싶어 곱창
              </div>
              <div
                style={{ fontSize: "0.8125rem" }}
                className="mb-[0.58rem] text-[#FF0069]"
              >
                주먹밥+캔음료 1개
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#898989" }}>
                신청일자: 2023.11.29
              </div>
            </div>
          </div>

          <div className="w-[74.625rem] mt-[7.21rem] border-[#000000] border-b pb-[1rem] text=[1.25rem] font-semibold">
            탈락된 리뷰
          </div>
          <div className="flex">
            <div>
              <div>[강북] 또먹고싶어 곱창</div>
              <div>탈락사유: 글자수 미충족</div>
            </div>
            <div>
              <div>신청일자: 2023.11.29</div>
              <button>다시 신청하기</button>
            </div>
          </div>

          <div className="w-[74.625rem] border-[#000000] border-b pb-[1rem] text=[1.25rem] font-semibold">
            완료된 리뷰
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
