import React, { createContext, useState } from "react";

export const ModalContext = createContext(); // ModalContext 생성

const SelectModalProvider = ({ children }) => {
  // context value: 모달 번호(0: 모달이 닫힌 상태, 1: 지역 별 상점, 2:메뉴 선택)
  // context value: 모달창 닫기 함수, 지역 모달창 여는 함수, 메뉴 모달창 여는 함수
  const [modalNumber, setModalNumber] = useState(0);
  const closeModal = () => setModalNumber(0);
  const openRegionModal = () => setModalNumber(1);
  const openMenuModal = () => setModalNumber(2);

  return (
    <ModalContext.Provider
      value={{ modalNumber, closeModal, openRegionModal, openMenuModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default SelectModalProvider;
