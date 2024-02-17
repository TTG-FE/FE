import React, { createContext, useEffect, useState } from "react";

export const LoginContext = createContext(); // LoginContext 생성

const LoginContextProvider = ({ children }) => {
  // context value: 로그인 여부, 로그아웃 함수
  // TODO: 로그인 시 닉네임, 프로필 사진 등 정보를 저장하는 변수 및 함수 추가
  // !참고사항: context api는 새로고침 시 저장소가 초기화된다. 따라서 로그인 정보는 다른 저장소를 이용하고 context에서는 그 저장소에서 불러온 데이터를 저장하는 역할로 구현할 예정입니다!
  // const [isLogin, setLogin] = useState(true);
  const [isLogin, setLogin] = useState(false);
  const [token, setToken] = useState(null);

  const logout = () => {
    setLogin(false);
    setToken(null);
    localStorage.removeItem("oauthToken");
  };

  // 로그인 상태 업데이트 함수
  const loginSuccess = (token) => {
    const expiresIn = 1 * 60; // 토큰의 만료 60분
    const expirationTime = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem("oauthToken", token); // 토큰을 로컬 스토리지에 저장
    localStorage.setItem("tokenExpiration", expirationTime);
    setToken(`Bearer ${token}`);
    setLogin(true); // 로그인 상태를 true로 설정
  };

  // 자동 로그아웃 함수
  const autoLogout = () => {};
  return (
    <LoginContext.Provider value={{ isLogin, logout, token, loginSuccess }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
