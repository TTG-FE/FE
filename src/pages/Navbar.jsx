import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContextProvider";
import { ModalContext } from "../contexts/ModalContextProvider";
/** 'NavBar': 네비게이션 컴포넌트 */
const Navbar = () => {
  const { isLogin, logout } = useContext(LoginContext);
  const { openRegionModal, openMenuModal } = useContext(ModalContext);

  /** 로그아웃 버튼을 누르면 로그아웃 로직을 수행 */
  const handleLogout = () => {
    logout();
  };
  return (
    // 780px 부터 보이도록 설정
    <div className="justify-between hidden w-full h-16 lg:px-16 md:px-6 md: md:flex shadow-custom-button-shadow z-50">
      {/* 좌측영역: 이용가이드 및 상점, 메뉴 선택을 위한 네비게이션 */}
      <div className="flex items-center space-x-7">
        <CustomNavLink to="/user-guide">이용가이드</CustomNavLink>
        <CustomNavLink to="/region" onClick={() => openRegionModal()}>
          지역 별 상점
        </CustomNavLink>
        <CustomNavLink to="/menu" onClick={() => openMenuModal()}>
          메뉴선택
        </CustomNavLink>
      </div>

      <div className="flex items-center">
        {/* 우측영역: 로그인 여부에 따라서 다른 메뉴를 표시 */}
        {isLogin ? (
          <button
            onClick={handleLogout}
            className="flex items-center h-10 text-lg hover:text-custom-pink text-[#19191980]"
          >
            로그아웃
          </button>
        ) : (
          <CustomNavLink to="/login">로그인</CustomNavLink>
        )}
      </div>
    </div>
  );
};

/** 커스텀된 NavLink */
const CustomNavLink = ({ onClick, to, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        // 활성화 여부에 따라 스타일을 동적으로 변경
        isActive
          ? "flex items-center h-10 text-lg text-custom-pink "
          : `flex items-center h-10  text-lg hover:text-custom-pink ${
              to === "/user-guide" ? "text-custom-orange" : "text-[#19191980]"
            } `
      }
      onClick={onClick}
      to={to}
    >
      {children}
    </NavLink>
  );
};
export default Navbar;
