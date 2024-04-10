import React, { useContext, useState } from "react";
import LoginImage from "../assets/loginimage.png";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContextProvider";

// 콜백 페이지의 스크립트 예시
document.addEventListener("DOMContentLoaded", function () {
  // 현재 페이지의 URL을 파싱
  const pathArray = window.location.pathname.split("/");
  // 토큰 값이 URL의 마지막 부분에 있다고 가정
  const token = pathArray[pathArray.length - 1];

  if (token.startsWith("naver_") || token.startsWith("kakao_")) {
    // 토큰을 로컬 스토리지에 저장
    localStorage.setItem("oauthToken", token);
    // 팝업 창을 닫음
    window.close();
  }
});

export const Login = () => {
  const navigate = useNavigate();
  const [tokenTest, setToken] = useState();

  if (tokenTest) {
    navigate("/");
  }

  const { loginSuccess } = useContext(LoginContext);

  // 로그인 페이지 또는 컴포넌트
  const handleCustomNaverLogin = () => {
    // 팝업 열기
    const popup = window.open(
      `http://13.124.232.198/api/v1/auth/oauth2/naver`,
      "네이버 로그인",
      "width=600,height=800"
    );

    // 팝업 창 닫힘 감지
    const checkPopupClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopupClosed);
        // 팝업이 닫혔다면 로컬 스토리지에서 토큰 확인
        const token = localStorage.getItem("oauthToken");
        setToken(token);
        loginSuccess(token);
        console.log("token", token);
      }
    }, 500); // 500ms마다 확인
  };

  const handleCustomKaKaoLogin = () => {
    // 팝업 열기
    const popup = window.open(
      `http://13.124.232.198/api/v1/auth/oauth2/kakao`,
      "네이버 로그인",
      "width=600,height=800"
    );

    // 팝업 창 닫힘 감지
    const checkPopupClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopupClosed);
        // 팝업이 닫혔다면 로컬 스토리지에서 토큰 확인
        const token = localStorage.getItem("oauthToken");
        setToken(token);
        loginSuccess(token);
      }
    }, 500); // 500ms마다 확인
  };

  return (
    <div className="flex items-center h-screen ">
      <div className="hidden sm:block mr-[7.69rem] ml-[15.81rem]">
        <img
          src={LoginImage}
          alt="로그인 이미지"
          className="w-[44.375rem] h-[32.4375rem]"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="sm:p-4 sm:p-0 ">
        <div className=" ml-[1.75rem] sm:mb-[3.88rem] sm:ml-[0.62rem] sm:text-[3rem] text-[1.5rem] font-semibold mb-[5rem]">
          대학생 식비고민 <br />
          또또가로 해결하세요!
        </div>

        

        {/* 네이버 로그인 */}
        <button
          className=" mb-[1.19rem] ml-[1.69rem] sm:ml-[0rem]  flex items-center bg-[#57BC63] rounded-md sm:h-[4.125rem] sm:w-[32.0625rem] w-[19.1875rem] h-[2.63544rem]"
          onClick={handleCustomNaverLogin}
        >
          <svg
            className="sm:ml-[3rem] sm:mr-[5.44rem] mr-[3.8rem] ml-[1.19rem] sm:w-[2.625rem] sm:h-[2.5625rem] w-[1.72869rem] h-[1.6875rem]"
            
            viewBox="0 0 42 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.693 7.6875V20.7172L16.307 7.6875H6.23438V33.3125H16.307V20.5L25.693 33.3125H35.7656V7.6875H25.693Z"
              fill="white"
            />
          </svg>
          <span className="sm:text-[1.5625rem] text-[ 0.99825rem] font-medium flex items-center justify-center font=['Inter']  text-[#FFF]">
            네이버 로그인
          </span>
        </button>

        {/* 카카오 로그인 */}
        <button
          className="flex items-center bg-[#FFD600] rounded-md ml-[1.69rem] sm:ml-[0rem]  sm:h-[4.125rem] sm:w-[32.0625rem] w-[19.1875rem] h-[2.63544rem]"
          onClick={handleCustomKaKaoLogin}
        >
          <svg
            className="sm:ml-[3rem] sm:mr-[5.44rem] mr-[3.8rem] ml-[1.19rem] sm:w-[2.625rem] sm:h-[2.5625rem] w-[1.6875rem] h-[1.6875rem]"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9594 7C13.7059 7 7 12.425 7 19.075C7 23.275 9.75115 26.95 13.7059 29.225L12.6742 35L19.0363 30.8C19.896 30.975 20.9277 30.975 21.7874 30.975C30.0408 30.975 36.7468 25.55 36.7468 18.9C36.9187 12.425 30.2128 7 21.9594 7Z"
              fill="#341C15"
            />
          </svg>
          <span className="sm:text-[1.5625rem] text-[ 0.99825rem] font-medium flex items-center justify-center font=['Inter'] text-[#341C15]">
            카카오톡 로그인
          </span>
        </button>
      </div>
    </div>
  );
};
