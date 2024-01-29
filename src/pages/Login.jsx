import React from "react";
import NaverLogin from "react-naver-login";

export const Login = () => {
  const naverClientId = "NAVER_CLIENT_ID";
  const naverCallbackUrl = "NAVER_CALLBACK_URL";

  const onSuccessNaverLogin = (naverUser) => {
    // 네이버 로그인 성공 시
    console.log("네이버 로그인 성공!", naverUser);
  };

  const onFailureNaverLogin = (result) => {
    // 네이버 로그인 실패 시
    console.error("네이버 로그인 실패!", result);
  };

  return (
    <div className="flex center center items-center h-screen">

      <div className="w-[43rem] h-[30.125rem] mr-[19.44rem] ml-[14.87rem]  bg-slate-300">
        이미지 영역
      </div>

      <div>
        <div className="mr-[31.75rem] text-[2.1875rem] font-semibold mb-4">
          간편 로그인 후 <br />
          이용 가능합니다.
        </div>

        <div className="mr-[19.38rem] whitespace-nowrap w-[32.125rem] h-[1.3125rem] text-[1.125rem] text-gray-700 mb-[3.245rem] opacity-50">
          간편 로그인 정보는 또또가에 연동되어 더 빠르게 이용할 수 있어요!
        </div>

        <NaverLogin
          clientId={naverClientId}
          callbackUrl={naverCallbackUrl}
          onSuccess={onSuccessNaverLogin}
          onFailure={onFailureNaverLogin}
          render={(props) => (
            <button
              className="mr-[20.06rem] flex items-center rounded-[1rem]  bg-[#57BC63] rounded-md  h-[4.125rem] w-[32.0625rem]"
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

              <span className="text-[1.5625rem] font-medium flex items-center justify-center text-[#FFF]">
                네이버 로그인
              </span>
            </button>
          )}
        />
      </div>
    </div>
  );
};
