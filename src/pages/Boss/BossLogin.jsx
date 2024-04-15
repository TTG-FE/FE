import React from "react";
import LoginImage from "../../assets/loginimage.png";

export const BossLogin = () => {
  const handleCustomKaKaoLogin = () => {
    // 팝업 열기
    const popup = window.open(
      `http://13.124.232.198/api/v1/auth/oauth2/kakao`,
      "네이버 로그인",
      "width=600,height=800",
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
      {" "}
      <div className="hidden desktop:block mr-[7.69rem] ml-[15.81rem]">
        <img
          src={LoginImage}
          alt="로그인 이미지"
          className="w-[44.375rem] h-[32.4375rem]"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="desktop:p-4 mx-auto desktop:p-0 ">
        <div className="ml-[0rem] text-[2.25rem] font-semibold mb-[3.19rem]">
          대학가 맛집 리뷰 마케팅은 <br />
          또또가X 에서!
        </div>
        {/* 카카오 로그인 */}
        <button
          className="flex mb-[2.19rem] items-center bg-[#FFD600] rounded-md ml-[0rem]  h-[4.125rem] w-[32.0625rem]"
          onClick={handleCustomKaKaoLogin}
        >
          <svg
            className="ml-[3rem] mr-[5.44rem]  w-[2.625rem] h-[2.5625rem]"
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
          <span className="text-[1.5625rem] font-medium flex items-center justify-center font=['Inter'] text-[#341C15]">
            카카오 로그인
          </span>
        </button>
        <div className="text-black text-opacity-50 font-medium text-[1rem]">
          가게 마케팅 관련 내용 전달을 위해 카카오톡 로그인만 진행하고 있습니다.
          <br />
          원활한 이용을 위해 해당 방법으로 로그인 부탁드립니다.
        </div>
      </div>
    </div>
  );
};
