import React, { useContext, useRef, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContextProvider";
import doraImg from "../../assets/dora.png";
export const BossMain = () => {
  const ongoingRef = useRef(null);
  const receivedRef = useRef(null);
  const completedRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="relative grid place-items-center">
      <div className="flex justify-center items-center relative mt-[6.315rem] w-[95.4375rem] h-[24.0625rem] rounded-[1.125rem] shadow-[0_0_45px_0_rgba(0,0,0,0.2)] backdrop-sepia-74.99999237060547 bg-white/70 ">
        <div className=" w-[17.3125rem] h-[11.375rem] bg-[#D9D9D9]">
          {/* 이미지 넣기 */}
        </div>

        <div
          className="h-[18.23438rem] ml-[3.54rem]  pr-[4.94rem] text-[1rem]  border-r-[1.5px] border-[#000000]/30"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* 우리가게 페이지로 이동하는 링크 추가 */}
          <div className="ml-[0.69rem] opacity-50">
            우리가게 페이지 바로가기
          </div>
          <div
            className="mb-[1.88rem] ml-[0.69rem]"
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              fontStyle: "normal",
              fontFamily: "Inter",
            }}
          >
            또또가 X 왕중왕전 떡볶이{" "}
          </div>

          <div className=" w-[35.8125rem] h-[5.5rem] flex items-center bg-[#FFEDED] rounded-[0.9375rem] gap-x-[3.87rem]">
            <div
              style={{
                fontSize: "1.25rem",
                whiteSpace: "nowrap",
                paddingLeft: "3.75rem",
                fontWeight: "normal",
                fontFamily: "Inter",
              }}
            >
              {" "}
              또또가와 함께하고 리뷰 받은 횟수
            </div>
            <div className="text-[#FF0069]  text-2xl font-semibold ">17회</div>
          </div>
        </div>

        <div className="ml-[5.94rem]">
          <div className="text=[1.38669rem] font-['Pretendard']  text-[#000000]/30 tracking-[0.01388rem] font-bold ">
            고객센터
          </div>
          <div className="w-[19.62669rem] h-[3.2rem] mt-[1.88rem] mb-[1rem] grid place-items-center text-[#000000]/50 rounded-[0.53331rem] bg-[#E9E9E9] tracking-[0.01281rem] font-bold text=[1.28rem]">
            P. 010 - 7747 - 4928
          </div>
          <div className="text=[1.28rem] text-[#000000]/50 font-normal   ">
            *주중 10시~18시 / 주말 및 공휴일 제외
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-[3.31rem] w-[9.625rem] h-[33.375rem] pb-[23.6875rem]">
          <div className="w-[9.625rem] mb-[1.25rem] pl-[0.25rem] pb-[0.88rem] border-[#000000]/30 border-b text=[1.25rem] font-bold">
            리뷰 관리
          </div>

          <div
            onClick={() => scrollToSection(ongoingRef)}
            className="text-[#000000]/70 text=[1rem] mb-[1.25rem] cursor-pointer"
          >
            {" "}
            심사 대기 중인 리뷰
          </div>
          <div
            onClick={() => scrollToSection(receivedRef)}
            className="text-[#000000]/70 text=[1rem] mb-[1.25rem] cursor-pointer"
          >
            {" "}
            발급된 쿠폰 현황
          </div>
          <div
            onClick={() => scrollToSection(completedRef)}
            className="text-[#000000]/70 text=[1rem] cursor-pointer"
          >
            우리가게 리뷰
          </div>

          <div className="w-[9.625rem] mt-[4.06rem] mb-[1.25rem] pl-[0.25rem] pb-[0.88rem] border-[#000000]/30 border-b text=[1.25rem] font-bold">
            상점 관리
          </div>
          <div
            onClick={() => scrollToSection(ongoingRef)}
            className="text-[#000000]/70 text=[1rem] mb-[1.25rem] cursor-pointer"
          >
            {" "}
            상점 이미지 수정하기
          </div>
        </div>

        <div className="mt-[3.31rem] ml-[9.5rem]">
          <div
            className="flex w-[74.625rem] border-[#000000] mb-[2.37rem] border-b pb-[1rem]"
            ref={ongoingRef}
          >
            <div className="mr-[1.94rem] text=[1.25rem] font-semibold">
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
              <div className="mb-[0.63rem] font=['Inter'] text=[1rem]">
                소중한 혜택 감사합니다.
              </div>
              <div className="text=[0.75rem] mb-[0.81rem] text-[#8F8F8F] font=['Inter']">
                예지의 냠냠저장소
              </div>
              <div className="text-[0.71rem] text-[#FF0069]">7일전</div>
            </div>
            <div className="ml-[44.81rem]">
              <button className="w-[9.8125rem] font=['Inter'] h-[2.5rem] border rounded-[0.44rem] bg-[#FF0069] text-[#fff]">
                리뷰 심사하기
              </button>
            </div>
          </div>

          <div
            className="flex w-[74.625rem] mt-[7.21rem] border-[#000000] border-b pb-[1rem]"
            ref={receivedRef}
          >
            <div className="mr-[1.37rem] text=[1.25rem] font-semibold">
              발급된 쿠폰 현황
            </div>
            <div className="text-[#8F8F8F] text-[1rem]">
              {" "}
              ※ 한 번 발급된 쿠폰은 다시 회수할 수 없습니다.
            </div>
          </div>
          <div className="bg-[#FFEDED] flex w-[74.5625rem] h-[8rem] pt-[1.12rem]">
            <div className="ml-[6.63rem] ">
              <div className="text-[1.125rem]">미사용 쿠폰</div>
              <div className="text-[2.5rem] font-semibold ml-[1.94rem]">9</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#545454"
              className="ml-[9.31rem] mt-[2.63rem]"
            >
              <path
                d="M10 0C4.48615 0 0 4.48615 0 10C0 15.5138 4.48615 20 10 20C15.5138 20 20 15.5138 20 10C20 4.48615 15.5138 0 10 0ZM10 1.53846C14.6823 1.53846 18.4615 5.31769 18.4615 10C18.4615 14.6823 14.6823 18.4615 10 18.4615C5.31769 18.4615 1.53846 14.6823 1.53846 10C1.53846 5.31769 5.31769 1.53846 10 1.53846ZM9.23077 5.38462V9.23077H5.38462V10.7692H9.23077V14.6154H10.7692V10.7692H14.6154V9.23077H10.7692V5.38462H9.23077Z"
                fill="#545454"
              />
            </svg>
            <div className="ml-[10.75rem] ">
              <div className="text-[1.125rem]">사용완료 쿠폰</div>
              <div className="text-[2.5rem] font-semibold ml-[2.56rem]">8</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#545454"
              className="ml-[10.31rem] mt-[2.63rem]"
            >
              <path
                d="M14.375 8.75C14.5408 8.75 14.6997 8.68415 14.8169 8.56694C14.9342 8.44973 15 8.29076 15 8.125C15 7.95924 14.9342 7.80027 14.8169 7.68306C14.6997 7.56585 14.5408 7.5 14.375 7.5H5.625C5.45924 7.5 5.30027 7.56585 5.18306 7.68306C5.06585 7.80027 5 7.95924 5 8.125C5 8.29076 5.06585 8.44973 5.18306 8.56694C5.30027 8.68415 5.45924 8.75 5.625 8.75H14.375ZM14.375 12.5C14.5408 12.5 14.6997 12.4342 14.8169 12.3169C14.9342 12.1997 15 12.0408 15 11.875C15 11.7092 14.9342 11.5503 14.8169 11.4331C14.6997 11.3158 14.5408 11.25 14.375 11.25H5.625C5.45924 11.25 5.30027 11.3158 5.18306 11.4331C5.06585 11.5503 5 11.7092 5 11.875C5 12.0408 5.06585 12.1997 5.18306 12.3169C5.30027 12.4342 5.45924 12.5 5.625 12.5H14.375ZM20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10ZM10 1.25C11.1491 1.25 12.2869 1.47633 13.3485 1.91605C14.4101 2.35578 15.3747 3.0003 16.1872 3.81282C16.9997 4.62533 17.6442 5.58992 18.0839 6.65152C18.5237 7.71312 18.75 8.85093 18.75 10C18.75 11.1491 18.5237 12.2869 18.0839 13.3485C17.6442 14.4101 16.9997 15.3747 16.1872 16.1872C15.3747 16.9997 14.4101 17.6442 13.3485 18.0839C12.2869 18.5237 11.1491 18.75 10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25Z"
                fill="#545454"
              />
            </svg>
            <div className="ml-[7.63rem] text-[#FF0069]">
              <div className="text-[1.125rem]">전체 발급 쿠폰 수</div>
              <div className="text-[2.5rem] font-semibold ml-[2.81rem]">8</div>
            </div>
          </div>
          {/* 발급된 쿠폰 현황 컴포넌트 추가 */}
          <div
            className="flex w-[74.625rem] mt-[5.82rem] mb-[1.5rem] border-[#000000] border-b pb-[1rem]"
            ref={completedRef}
          >
            <div className="mr-[1.37rem] text=[1.25rem] font-semibold">
              우리가게 리뷰
            </div>
            <div className="text-[#8F8F8F] text-[1rem]">
              {" "}
              ※ 계약 기간이 만료된 리뷰는 언제든지 삭제될 수 있습니다.
            </div>
          </div>
          {/* 우리가게 리뷰 컴포넌트 추가 */}

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
      </div>
    </div>
  );
};
