import { useState, useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./../assets/images/logo.png";
import { ReactComponent as CouponIcon } from "./../assets/images/couponIcon.svg";
import { ReactComponent as HeartIcon } from "./../assets/images/heartIcon.svg";
import { ReactComponent as HumanIcon } from "./../assets/images/humanIcon.svg";
import { ReactComponent as SearchIcon } from "./../assets/images/searchIcon.svg";
import { ReactComponent as PhoneArrowLeftIcon } from "./../assets/phone_Arrow_right.svg";
import { ReactComponent as RightArrow } from "./../assets/images/rightArrow.svg";
import { ReactComponent as LoginIcon } from "./../assets/images/loginIcon.svg";
import { LoginContext } from "./../contexts/LoginContextProvider";
/** Header */
const Header = () => {
  const location = useLocation();
  const { autoLogout } = useContext(LoginContext);

  autoLogout(); // 1시간 지나면 자동로그아웃

  return (
    <>
      {/** 너비 780px 이상일 때 헤더 */}
      <DesktopHeader />
      {/* 모바일 화면일 때 메인페이지인지 아닌지에 따라 헤더가 달라진다 */}
      {location.pathname === "/" ? (
        <MobileMainPageHeader />
      ) : (
        <MobileRestPageHeader />
      )}
    </>
  );
};

/** 데스크탑 헤더 */
const DesktopHeader = () => {
  const [buttonsHover, setButtonsHover] = useState({
    coupon: false,
    heart: false,
    my: false,
  }); // 버튼 호버 여부

  /** 버튼 Hover 일 때 버튼 호버 여부 변경 */
  const handleButtonColor = (button, isHovered) => {
    setButtonsHover((prev) => ({ ...prev, [button]: isHovered }));
  };
  return (
    //780px 이상일 때 보여지도록 설정
    <div className="z-20 justify-between hidden h-40 md:px-6 lg:p-12 md:flex">
      {/* 좌측영역: 로고, 검색창 */}
      <div className="flex items-center">
        {/* 로고 */}
        <Link className="mr-4 w-14 h-14" to="/">
          <div
            className="bg-center bg-no-repeat bg-cover w-14 h-14 shrink-0 "
            style={{ backgroundImage: `url(${Logo})` }}
          ></div>
        </Link>

        {/* 로고 옆 텍스트 */}
        <div className="mr-8">
          <Link className="text-3xl font-semibold" to="/">
            또또가
          </Link>
          <p className="text-xs font-light text-[#191919] opacity-70">
            또 가고싶은 곳만 리뷰한다
          </p>
        </div>
        {/* 검색창 */}
        <SearchBar />
      </div>

      {/* 우측영역: 버튼 3개와 '우리가게 등록하기' 버튼 */}
      <div className="flex items-center py-2">
        {/* 쿠폰 버튼 */}
        <div className="flex lg:mr-6 lg:space-x-6 md:space-x-2">
          <CustomLink
            icon={
              <CouponIcon
                stroke={
                  // 마우스가 호버될 때 그라데이션, 해제될 때 그레이
                  buttonsHover.coupon
                    ? "url(#paint0_linear_306_2415)"
                    : "#19191980"
                }
              />
            }
            handleButtonColor={handleButtonColor}
            label={"쿠폰함"}
            to={"/coupon"}
            obj="coupon"
          />

          {/* 관심상점 버튼 */}
          <CustomLink
            icon={
              <HeartIcon
                fill="none"
                stroke={
                  buttonsHover.heart
                    ? "url(#paint0_linear_306_2415)"
                    : "#19191980"
                }
              />
            }
            label={"관심상점"}
            handleButtonColor={handleButtonColor}
            to="heart"
            obj="heart"
          />
          {/* 마이 버튼 */}
          <CustomLink
            icon={
              <HumanIcon
                stroke={
                  buttonsHover.my ? "url(#paint0_linear_306_2415)" : "#19191980"
                }
              />
            }
            label={"마이"}
            handleButtonColor={handleButtonColor}
            to="/mypage"
            obj="my"
          />
        </div>
        {/* 우리 가게 등록하러가기 버튼 */}
        {/* border-custom-gradation은 커스텀한 또또가 그라데이션 색상 */}
        <button className=" w-40 h-full  text-[#19191980] text-xs font-semibold hover:text-custom-pink rounded-lg  shadow-custom-button-shadow border-custom-gradation hidden lg:block ">
          우리 가게 등록하러가기
        </button>
      </div>
    </div>
  );
};
/** 모바일 메인페이지 헤더 */
/** 모바일일 때만 존재하는 상단 로그인, 쿠폰함 */
const MobileMainPageHeader = () => {
  const { isLogin, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  /** 로그인 버튼을 눌렀을 때 동작 */
  const handleLogin = () => {
    if (isLogin) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="px-6 md:hidden">
        {/* 로그인 UI*/}
        <div className="flex justify-between my-11">
          <div className="flex flex-col mr-2 space-y-2">
            <p className="text-xl font-semibold line-clamp-1">
              {isLogin
                ? "안녕하세요 또또가 입니다!"
                : "로그인 후 이용하실 수 있습니다."}
            </p>
            <p className="text-xs opacity-60">
              오늘도 또또가에서 혜택을 받아보세요!
            </p>
          </div>
          {/* 로그인 페이지로 이동하는 버튼 */}
          <button
            to="/login"
            className="flex flex-col items-center justify-center"
            onClick={handleLogin}
          >
            <div className="bg-[#EDEDED] rounded-full w-6 h-6 flex items-center justify-center">
              <LoginIcon />
            </div>
            <p className="text-[0.5rem] opacity-30 whitespace-nowrap">
              {isLogin ? "로그아웃" : "로그인"}
            </p>
          </button>
        </div>

        {/* 쿠폰함 UI*/}
        <div className="mt-11">
          <div className="relative flex items-center w-full px-3 text-white h-28 rounded-xl bg-custom-gradation-180-2">
            <div className="w-1.5 h-20 bg-white rounded-full mix-blend-soft-light"></div>
            <div className="flex flex-col p-4">
              <div className="flex items-center mb-2">
                <CouponIcon stroke="white" />
                <span className="ml-3 text-xl">쿠폰함</span>
              </div>
              <p className="text-xs">
                또또가 리뷰를 통해 받은 쿠폰 사용하러 가기
              </p>
            </div>

            {/* 화살표 버튼을 누르면 쿠폰함 페이지로 이동 */}
            <Link
              className="absolute flex items-center justify-center bg-white rounded-full right-4 w-11 h-11 "
              to="/coupon"
            >
              <RightArrow fill="#FF0069" width="18" height="18" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
/** 모바일 메인페이지를 제외한 나머지 페이지의 헤더 */
const MobileRestPageHeader = () => {
  const location = useLocation(); // 현재 경로 정보를 가져옴

  // 현재 경로에 따른 MobileHeader title 결정
  let headerTitle = ""; // 기본값
  switch (location.pathname) {
    case "/coupon":
      headerTitle = "쿠폰함";
      break;
    case "/login":
      headerTitle = "로그인";
      break;
    // 추가적인 경로와 타이틀 매핑이 필요하다면 여기에 추가
    default:
      // 기본값 또는 다른 로직
      break;
  }
  return (
    <>
      {headerTitle && (
        <header className="flex w-full px-6 pb-5 border-b-2 pt-7 md:hidden ">
          <Link to="/" className="z-10">
            <PhoneArrowLeftIcon />
          </Link>
          <h1 className="w-full text-center font-semibold text-base ml-[-23px]">
            {headerTitle}
          </h1>
        </header>
      )}
    </>
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
const CustomLink = ({ icon, label, to, obj, handleButtonColor }) => {
  // TODO: 페이지 경로 설정

  return (
    // 버튼 요소에 마우스 진입시와 마우스 이탈시 handleButtonColor 함수를 호출하여 hover 상태를 갱신
    <Link
      onMouseEnter={() => handleButtonColor(obj, true)}
      onMouseLeave={() => handleButtonColor(obj, false)}
      className="flex flex-col items-center justify-between text-[#19191980] hover:text-[#FF0069] text-sm"
      to={to}
    >
      {/* 아이콘 */}
      {icon}
      {/* 텍스트 */}
      <p className="p-1 text-xs"> {label}</p>
    </Link>
  );
};

/** 'SearchBar': 검색창 컴포넌트*/
const SearchBar = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState(""); // 검색 텍스트
  const [isFocused, setIsFocused] = useState(false); // 검색창 포커스 여부
  const inputRef = useRef(); // 검색창

  /** handleInputChange': 검색창의 값이 변경될 때마다 호출되는 함수 */
  const handleInputChange = (e) => setInputText(e.target.value);

  /** 'handleSearch': 검색 버튼 클릭 시 API 요청보내는 함수 */
  const handleSearch = (e) => {
    e.preventDefault();

    // 입력 텍스트가 비어있다면 검색 입력창에 다시 포커스를 맞춤
    if (!inputText) {
      inputRef.current.focus();
      return;
    }
    // TODO: 아래에 'inputText'를 기반으로 하는 검색을 위한 API 요청을 로직을 구현하세요.
    navigate(`/search/${inputText}`);
  };

  return (
    // 검색 폼 컴포넌트
    <form className="relative flex items-center w-72" onSubmit={handleSearch}>
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
        className="flex-1 p-1 text-xs border-b outline-none pe-6 h-7 focus:border-custom-pink"
      />
      {/* 검색버튼 */}
      <button type="submit" className="absolute right-0 ">
        <SearchIcon
          stroke={isFocused ? "#FF0069" : "#D9D9D9"}
          fill={isFocused ? "#FF0069" : "#D9D9D9"}
        />
      </button>
    </form>
  );
};

export default Header;
