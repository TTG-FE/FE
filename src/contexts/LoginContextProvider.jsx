import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  // context value: 로그인 여부, 로그아웃 함수
  const [isLogin, setLogin] = useState(true);
  const logout = () => setLogin(false);

  return (
    <LoginContext.Provider value={{ isLogin, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
