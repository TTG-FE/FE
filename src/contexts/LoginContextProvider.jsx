import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext(); // LoginContext 생성

const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate();
  // context value: 로그인 여부, 로그아웃 함수, 자동로그아웃 함수, 로그인 성공함수, 리셋 함수(새로고침시 변수 날라가는걸 방지하기 위함)

  // const [isLogin, setLogin] = useState(true);
  const [isLogin, setLogin] = useState(false);
  const [token, setToken] = useState(null);

  const logout = () => {
    setLogin(false);
    setToken(null);
    localStorage.removeItem("oauthToken");
    localStorage.removeItem("tokenExpiration");
  };

  // 로그인 상태 업데이트 함수
  const loginSuccess = (token) => {
    localStorage.setItem("oauthToken", token); // 토큰을 로컬 스토리지에 저장

    const expiresIn = 1 * 60 * 60;
    const expirationTime = new Date().getTime() + expiresIn * 1000; // 1분 후로 설정
    localStorage.setItem("tokenExpiration", expirationTime);

    setToken(`Bearer ${token}`);
    setLogin(true); // 로그인 상태를 true로 설정
  };

  // 자동로그아웃 함수
  const autoLogout = () => {
    const token = localStorage.getItem("oauthToken");
    const expirationTime = localStorage.getItem("tokenExpiration");

    if (token && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > Number(expirationTime)) {
        // 토큰 만료 시 자동 로그아웃
        localStorage.removeItem("oauthToken");
        localStorage.removeItem("tokenExpiration");
        setLogin(false);
        setToken(null);
        navigate("/login", { replace: true }); // 로그인 페이지로 이동 // 이거 왜 오류남?
      } else {
        // 중복로그인을 피하기 위해, 토큰 유효한 경우 로그인 페이지로 이동하지 않음
        // navigate("/", { replace: true });
      }
    }
  };

  /** 새로고침시 컨텍스트 login, token이 사라지는 것을 방지*/
  useEffect(() => {
    const reset = () => {
      const token = localStorage.getItem("oauthToken");
      if (token) {
        setLogin(true);
        setToken(`Bearer ${token}`);
      }
    };

    reset(); // 컴포넌트가 마운트될 때 reset 함수 실행
  }, []);

  return (
    <LoginContext.Provider
      value={{ isLogin, logout, token, loginSuccess, autoLogout }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
