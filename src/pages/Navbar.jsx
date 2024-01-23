import { Link } from "react-router-dom";

/** 'NavBar': 네비게이션 컴포넌트 */
const Navbar = ({ setSelectModal }) => {
  const handleModal = (index) => {
    setSelectModal(index);
  };
  return (
    // Header 아래의 네비게이션 바
    <div className="flex justify-between h-16 px-16 shadow-custom-button-shadow">
      {/* 좌측영역: 이용가이드 및 상점, 메뉴 선택을 위한 네비게이션 */}
      <ul className="flex items-center space-x-7 shrink-0">
        <Link
          className="flex items-center h-10 text-lg text-custom-orange hover:text-custom-pink"
          to="/user-guide"
        >
          이용가이드
        </Link>
        <Link
          className="flex items-center h-10  text-[#19191980] text-lg hover:text-custom-pink "
          onClick={() => handleModal(1)}
        >
          지역 별 상점
        </Link>
        <Link
          className="flex items-center h-10  text-[#19191980] text-lg hover:text-custom-pink"
          onClick={() => handleModal(2)}
        >
          메뉴선택
        </Link>
      </ul>
      {/* 우측영역: 로그아운 및 회원가입 버튼*/}
      <ul className="flex items-center space-x-2 shrink-0">
        <li className="flex items-center h-10  text-[#19191980] text-base">
          로그아웃
        </li>
        <li className="flex items-center h-10  text-[#19191980] text-base">
          회원가입
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
