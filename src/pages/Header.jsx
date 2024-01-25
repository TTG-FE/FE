import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../assets/images/logo.png";
import { ReactComponent as CouponIcon } from "./../assets/images/couponIcon.svg";
import { ReactComponent as HeartIcon } from "./../assets/images/heartIcon.svg";
import { ReactComponent as HumanIcon } from "./../assets/images/humanIcon.svg";
import { ReactComponent as SearchIcon } from "./../assets/images/searchIcon.svg";
/** Header */
const Header = () => {
  const [buttonsHover, setButtonsHover] = useState([false, false, false]); // 버튼 호버 여부

  /** 버튼 Hover 일 때 버튼 호버 여부 변경 */
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
        {/* 좌측영역: 로고, 검색창 */}
        <div className="flex items-center">
          {/* 로고 */}
          <Link className="mr-4 w-14 h-14 shrink-0" to="/">
            <div
              className="mr-4 bg-center bg-no-repeat bg-cover w-14 h-14"
              style={{ backgroundImage: `url(${Logo})` }}
            ></div>
          </Link>

          {/* 로고 옆 텍스트 */}
          <div className="mr-4 shrink-0">
            <Link className="text-3xl font-semibold" to="/">
              또또가
            </Link>
            <p className="text-xs font-light text-[#19191980]">
              또 가고싶은 곳만 리뷰한다
            </p>
          </div>
          {/* 검색창 */}
          <SearchBar />
        </div>

        {/* 우측영역: 버튼 3개와 '우리가게 등록하기' 버튼 */}
        {/* 참고: 버튼을 눌렀을 때 페이지 이동은 useNavigate로 할것! -> 버튼 컴포넌트 구현 */}
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
                  fill="none"
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
    </div>
  );
};

/**
 * 'Button': 버튼이 호버될 때와 호버가 해제될 때 색상을 변경하는 버튼 컴포넌트
 *
 * @param {object} props - 버튼에 필요한 속성들
 * @param {JSX.Element} props.icon - 버튼에 표시할 아이콘
 * @param {string} props.label - 버튼에 표시할 이름
 * @param {number} props.index - 버튼 인덱스
 * @param {Function} props.handleButtonColor - 마우스 위치에 따라 버튼 색상을 변경하는 함수
 */
const Button = ({ icon, label, index, handleButtonColor }) => {
  // 'useNavigate' 훅을 통해 navigate 함수를 가져옴
  const navigate = useNavigate();

  /**
   * 'handleButtonClick': 버튼을 클릭하면 해당 버튼에 맞는 페이지로 이동
   * (단, 로그인 되어있지 않다면 로그인 창으로 이동)
   * @param {number} index - 클릭된 버튼 인덱스
   */
  const handleButtonClick = (index) => {
    // TODO: 만약 로그인 상태가 아니라면 로그인 페이지로 이동하는 코드를 작성하세요.
    // TODO: 페이지 경로를 추가해주세요.
    switch (index) {
      case 0: // '쿠폰함' 페이지로 이동
        navigate("/coupon");
        break;
      case 1: // '관심상점' 페이지로 이동
        navigate("/");
        break;
      case 2: // '마이' 페이지로 이동
        navigate("/");
        break;
      default:
        break;
    }
  };
  return (
    // 버튼 요소에 마우스 진입시와 마우스 이탈시 handleButtonColor 함수를 호출하여 hover 상태를 갱신
    <button
      onMouseEnter={() => handleButtonColor(index, true)}
      onMouseLeave={() => handleButtonColor(index, false)}
      onClick={() => {
        handleButtonClick(index);
      }}
      className="flex flex-col items-center  w-14 h-12 mr-8 text-[#19191980] hover:text-[#FF0069] text-sm "
    >
      {/* 아이콘 */}
      {icon}
      {/* 텍스트 */}
      <p> {label}</p>
    </button>
  );
};

/** 'SearchBar': 검색창 컴포넌트*/
const SearchBar = () => {
  const [inputText, setInputText] = useState(""); // 검색 텍스트
  const [isFocused, setIsFocused] = useState(false); // 검색창 포커스 여부
  const inputRef = useRef(); // 검색창

  /** handleInputChange': 검색창의 값이 변경될 때마다 호출되는 함수 */
  const handleInputChange = (e) => setInputText(e.target.value);

  /** 'handleSearch': 검색 버튼 클릭 시 API 요청보내는 함수 */
  const handleSearch = (e) => {
    e.preventDefault();

    // 입력 텍스트가 비어있다면 검색 입력창에 다시 포커스를 맞춤
    if (inputText === "") {
      inputRef.current.focus();
    }
    // TODO: 아래에 'inputText'를 기반으로 하는 검색을 위한 API 요청을 로직을 구현하세요.
  };

  return (
    // 검색 폼 컴포넌트
    <form className="flex w-72" onSubmit={handleSearch}>
      {/* 입력창 */}
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        placeholder={
          isFocused ? "성신여대 안주 맛집" : "또 가고싶은 곳을 검색해보세요!"
        }
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 text-xs border-b outline-none ps-2 h-7 focus:border-custom-pink"
      />
      {/* 검색버튼 */}
      <button
        type="submit"
        className="outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <SearchIcon fill={isFocused ? "#FF0069" : "#D9D9D9"} />
      </button>
    </form>
  );
};

export default Header;
