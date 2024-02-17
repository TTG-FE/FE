import React, { createContext, useState } from "react";

export const LoginContext = createContext(); // LoginContext 생성

const LoginContextProvider = ({ children }) => {
  // context value: 로그인 여부, 로그아웃 함수
  // TODO: 로그인 시 닉네임, 프로필 사진 등 정보를 저장하는 변수 및 함수 추가
  // !참고사항: context api는 새로고침 시 저장소가 초기화된다. 따라서 로그인 정보는 다른 저장소를 이용하고 context에서는 그 저장소에서 불러온 데이터를 저장하는 역할로 구현할 예정입니다!
  const [isLogin, setLogin] = useState(true);
  const [token, setToken] = useState(
    `Bearer naver_AAAAOJfwotWY-2LW99xJbMFxVtxBH5iK9_mCGm0taR2vNkob8xFA3aL6sidYko9f2_XyVFUE_A3xILwphzB585z_ldI`
  );
  const logout = () => {
    setLogin(false);
    setToken(null);
  };

  return (
    <LoginContext.Provider value={{ isLogin, logout, token }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
