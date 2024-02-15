import React, { useEffect, useState } from "react";
import NaverLogin from "react-naver-login";
import LoginImage from "../assets/loginimage.png";

export const Login = () => {
  const [naverClientId, setNaverClientId] = useState("");
  const baseurl = "http://localhost:3000";
  const naverCallbackUrl = `${baseurl}/api/v1/auth/oauth2/naver`;

  useEffect(() => {
    // 서버에서 클라이언트 ID 가져오기
    const fetchNaverClientId = async () => {
      try {
        const response = await fetch("서버에서_클라이언트_ID를_가져올_API_URL");
        const data = await response.json();

        setNaverClientId(data.clientId);
      } catch (error) {
        console.error("클라이언트 ID를 가져오면서 오류 발생:", error);
      }
    };

    fetchNaverClientId();
  }, []);

  // 네이버 로그인 성공 후의 처리
  const onSuccessNaverLogin = async (naverUser) => {
    // 네이버 로그인 성공 시
    console.log("네이버 로그인 성공!", naverUser);

    try {
      // 네이버에서 제공하는 사용자 액세스 토큰 얻기
      const naverAccessToken = naverUser.accessToken;

      // 서버로 인증된 요청 보내기
      await sendAuthenticatedRequest(naverAccessToken);

      // 리다이렉트
      window.location.href = naverCallbackUrl;
    } catch (error) {
      console.error("액세스 토큰을 이용한 서버 요청 중 오류 발생:", error);
    }
  };

  const onFailureNaverLogin = (result) => {
    // 네이버 로그인 실패 시
    console.error("네이버 로그인 실패!", result);
  };

  const sendAuthenticatedRequest = async (accessToken) => {
    try {
      const response = await fetch(
        "http://localhost:3000/auth/oauth-response/",
        {
          method: "GET", // 또는 다른 HTTP 메서드
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      console.log("서버 응답:", data);
    } catch (error) {
      console.error("요청 중 오류 발생:", error);
    }
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

        <NaverLogin
          clientId={naverClientId}
          callbackUrl={naverCallbackUrl}
          onSuccess={(naverUser) => {
            onSuccessNaverLogin(naverUser);
            // 네이버 로그인 성공 시, 저장된 accessToken을 사용하여 인증된 요청 보내기
            sendAuthenticatedRequest(naverUser.accessToken);
          }}
          onFailure={onFailureNaverLogin}
          render={(props) => (
            <button
              className=" mb-[1.19rem]  flex items-center bg-[#57BC63] rounded-md sm:h-[4.125rem] sm:w-[32.0625rem] w-[28rem] h-[3rem]"
              onClick={props.onClick}
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
          )}
        />
      </div>
    </div>
  );
};
