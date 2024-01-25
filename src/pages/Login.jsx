import React from "react";

export const Login = () => {
  return (
    <div className="flex center center items-center h-screen">
      <div className="w-[43rem] h-[30.125rem] mr-[19.44rem] ml-[14.87rem]  bg-slate-300">
        이미지영역
      </div>
      <div>
        <div className="mr-[31.75rem] text-[2.1875rem] font-semibold mb-4">
          간편 로그인 후 <br />
          이용 가능합니다.
        </div>
        <div className="mr-[19.38rem] whitespace-nowrap w-[32.125rem] h-[1.3125rem] text-[1.125rem] text-gray-700 mb-[3.245rem] opacity-50">
          간편 로그인 정보는 또또가에 연동되어 더 빠르게 이용할 수 있어요!
        </div>
        <button
          className="mr-[20.06rem] flex items-center justify-center rounded-[1rem]  bg-[#57BC63] rounded-md p-3 h-[4.125rem] w-[32.0625rem]"
          onClick={() => {
            console.log("카카오톡 로그인 버튼이 클릭");
          }}
        >
          <img
            src="./assets/login-kakao.png"
            className="h-[2.625rem] w-[2.625rem] "
            alt="naver logo"
          />
          <span className="text-[1.5625rem] text-[#FFF]">네이버 로그인</span>
        </button>
      </div>
    </div>
  );
};
