import React, { createContext, useState } from "react";

export const LoginContext = createContext(); // LoginContext 생성

const LoginContextProvider = ({ children }) => {
  // context value: 로그인 여부, 로그아웃 함수
  // TODO: 로그인 시 닉네임, 프로필 사진 등 정보를 저장하는 변수 및 함수 추가
  const [isLogin, setLogin] = useState(true);
  const logout = () => setLogin(false);

  return (
    <LoginContext.Provider value={{ isLogin, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
