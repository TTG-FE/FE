// OAuthResponse.js

import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

const OAuthResponse = () => {
  const [, setCookie] = useCookies(["accessToken"]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.accessToken) {
      // 쿠키에 액세스 토큰 설정
      setCookie("accessToken", params.accessToken, { path: "/" });
    }

    // 리다이렉트
    window.location.href = `http://localhost:3000/api/v1/auth/oauth2/naver`;
  }, [setCookie]);

  return (
    <div>
      <p>OAuth 응답 처리 중...</p>
    </div>
  );
};

export default OAuthResponse;
