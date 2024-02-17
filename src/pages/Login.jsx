import React, { useContext, useEffect, useRef, useState } from "react";
import NaverLogin from "react-naver-login";
import KakaoLogin from "react-kakao-login";
import LoginImage from "../assets/loginimage.png";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContextProvider";

const baseurl = "http://localhost:3000";

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
  // 팝업 창을 닫음
  window.close();
});

const sendAuthenticatedRequest = async (accessToken, navigate, endpoint) => {
  try {
    const response = await fetch(`${baseurl}${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    console.log("서버 응답:", data);
  } catch (error) {
    console.error("요청 중 오류 발생:", error);
  }
};

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

      <div className="mx-auto p-4 sm:p-0 ">
        <div className=" mr-[31.75rem] sm:text-[2.1875rem] text-[1.5rem] font-semibold mb-4">
          간편 로그인 후 <br />
          이용 가능합니다.
        </div>

        <div className="mr-[19.38rem] whitespace-nowrap w-[32.125rem] h-[1.3125rem] sm:text-[1.125rem] text-[0.9rem] text-gray-700 mb-[3.245rem] opacity-50">
          간편 로그인 정보는 또또가에 연동되어 더 빠르게 이용할 수 있어요!
        </div>

        {/* 네이버 로그인 */}
        <button
          className=" mb-[1.19rem]  flex items-center bg-[#57BC63] rounded-md sm:h-[4.125rem] sm:w-[32.0625rem] w-[28rem] h-[3rem]"
          onClick={handleCustomNaverLogin}
        >
          <svg
            style={{ marginRight: "5.44rem" }}
            className="ml-[3rem]"
            width="42"
            height="41"
            viewBox="0 0 42 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.693 7.6875V20.7172L16.307 7.6875H6.23438V33.3125H16.307V20.5L25.693 33.3125H35.7656V7.6875H25.693Z"
              fill="white"
            />
          </svg>

          <span className="sm:text-[1.5625rem]  font-medium flex items-center justify-center font=['Inter']  text-[#FFF]">
            네이버 로그인
          </span>
        </button>


        {/* 카카오 로그인 */}
        <button
          className="flex items-center bg-[#FFD600] rounded-md  sm:h-[4.125rem] sm:w-[32.0625rem] w-[28rem] h-[3rem]"
          onClick={handleCustomKaKaoLogin}
        >
          <svg
            style={{ marginRight: "5.44rem" }}
            className="ml-[3rem]"
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

          <span className="sm:text-[1.5625rem] font-medium flex items-center justify-center font=['Inter'] text-[#341C15]">
            카카오톡 로그인
          </span>
        </button>
      </div>
    </div>
  );
};
