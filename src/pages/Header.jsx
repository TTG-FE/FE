import { useState } from "react";
import Logo from "./../assets/images/logo.png";
import { ReactComponent as CouponIcon } from "./../assets/images/couponIcon.svg";
import { ReactComponent as HeartIcon } from "./../assets/images/heartIcon.svg";
import { ReactComponent as HumanIcon } from "./../assets/images/humanIcon.svg";
import { ReactComponent as SearchIcon } from "./../assets/images/searchIcon.svg";
/** Header */
const Header = () => {
  const [buttonsHover, setButtonsHover] = useState([false, false, false]); // 버튼 호버 여부

  /** 버튼 Hover 일 때 그라데이션 색 변경 */
  const handleButtonColor = (index, isHovered) => {
    setButtonsHover((prev) => {
      const newHover = [...prev];
      newHover[index] = isHovered;
      return newHover;
    });
  };

  return (
    <div>
      {/* 헤더 부분 */}
      <div className="flex justify-between h-40 p-16 ">
        <div className="flex items-center">
          {/* 로고 */}
          <div
            className="mr-4 bg-center bg-no-repeat bg-cover w-14 h-14 shrink-0"
            style={{ backgroundImage: `url(${Logo})` }}
          ></div>
          {/* 로고 옆 텍스트 */}
          <div className="mr-4 shrink-0">
            <p className="text-3xl font-semibold">또또가</p>
            <p className="text-xs font-light text-[#19191980]">
              또 가고싶은 곳만 리뷰한다
            </p>
          </div>

          {/* 검색창 */}
          <SearchBar />
        </div>
        <div className="flex items-center">
          {/* 쿠폰 버튼 */}
          <div className="flex">
            <Button
              icon={
                <CouponIcon
                  stroke={
                    // 마우스가 호버될 때 그라데이션, 해제될 때 그레이
                    buttonsHover[0]
                      ? "url(#paint0_linear_306_2415)"
                      : "#19191980"
                  }
                />
              }
              handleButtonColor={handleButtonColor}
              index={0}
              label={"쿠폰함"}
            />
            {/* 관심상점 버튼 */}
            <Button
              icon={
                <HeartIcon
                  stroke={
                    buttonsHover[1]
                      ? "url(#paint0_linear_306_2415)"
                      : "#19191980"
                  }
                />
              }
              label={"관심상점"}
              handleButtonColor={handleButtonColor}
              index={1}
            />
            {/* 마이 버튼 */}
            <Button
              icon={
                <HumanIcon
                  stroke={
                    buttonsHover[2]
                      ? "url(#paint0_linear_306_2415)"
                      : "#19191980"
                  }
                />
              }
              label={"마이"}
              handleButtonColor={handleButtonColor}
              index={2}
            />
          </div>
          {/* 우리 가게 등록하러가기 버튼 */}
          {/* border-custom-gradation은 커스텀한 또또가 그라데이션 색상 */}
          <button className="w-48 h-14 text-[#19191980] text-sm rounded-lg  shadow-custom-button-shadow border-custom-gradation">
            우리 가게 등록하러가기
          </button>
        </div>
      </div>
      {/* 네비게이션 부분 */}
      <NavBar />
    </div>
  );
};

/** NavBar */
const NavBar = () => {
  return (
    // Header 아래의 네비게이션 바
    <div className="flex justify-between h-16 px-16 shadow-custom-button-shadow">
      {/* 이용가이드 및 상점, 메뉴 선택을 위한 네비게이션 */}
      <ul className="flex items-center space-x-7 shrink-0">
        <button className="flex items-center h-10 text-lg text-custom-orange">
          이용가이드
        </button>
        <button className="flex items-center h-10  text-[#19191980] text-lg">
          지역 별 상점
        </button>
        <button className="flex items-center h-10  text-[#19191980] text-lg">
          메뉴선택
        </button>
      </ul>
      {/* 로그아운 및 회원가입 버튼*/}
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

/** 'SearchBar': 검색창 */
const SearchBar = () => {
  const [inputText, setInputText] = useState(""); // 검색 텍스트
  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(inputText);
  };
  return (
    <div className="flex w-72">
      <input
        type="text"
        value={inputText}
        placeholder="또 가고싶은 곳을 검색해보세요!"
        onChange={handleInputChange}
        className="flex-1 text-xs border-b outline-none ps-2 h-7"
      />
      <button onSubmit={handleSearch}>
        <SearchIcon fill="#D9D9D9" />
      </button>
    </div>
  );
};

/** 'Button': 버튼이 호버될 때와 호버가 해제될 때 색상을 변경한다 */
const Button = ({ icon, label, index, handleButtonColor }) => {
  return (
    // 버튼 요소에 마우스 진입시와 마우스 이탈시 handleButtonColor 함수를 호출하여 hover 상태를 갱신
    <button
      onMouseEnter={() => handleButtonColor(index, true)}
      onMouseLeave={() => handleButtonColor(index, false)}
      className="flex flex-col items-center  w-14 h-12 mr-8 text-[#19191980] hover:text-[#FF0069] text-sm "
    >
      {/* 아이콘 */}
      {icon}
      {/* 텍스트 */}
      <p> {label}</p>
    </button>
  );
};

export default Header;
