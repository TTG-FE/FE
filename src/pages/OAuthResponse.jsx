import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthResponse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.code) {
      console.log("Received code:", params.code);
    }

    // 리다이렉트
    navigate("http://localhost:3000");
  }, [navigate]);

  return (
    <div>
      <p>OAuth 응답 처리 중...</p>
    </div>
  );
};

export default OAuthResponse;
