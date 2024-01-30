import { Link } from "react-router-dom";
import Top from "./Top";
import Hot from "./Hot";
import Review from "./Review";
import { ReactComponent as CouponIcon } from "./../../../assets/images/couponIcon.svg";
import { ReactComponent as RightArrow } from "./../../../assets/images/rightArrow.svg";
import { ReactComponent as KakaoIcon } from "./../../../assets/images/kakaoIcon.svg";
import { ReactComponent as SearchIcon } from "./../../../assets/images/searchIcon2.svg";
import { ReactComponent as PlusIcon } from "./../../../assets/images/plusIcon.svg";
import { ReactComponent as LoginIcon } from "./../../../assets/images/loginIcon.svg";

const Main = () => {
  return (
    /* 전체 페이지 크기 설정 */

    <div className=" font-inter">
      <div>
        <Mobile />
        {/* TOP 15 또또가 */}
        <Top />
        {/* Hot */}
        <Hot />
        {/* 또또가 리뷰 */}
        <Review />
        {/* 배너 */}
        <Banner />
      </div>
    </div>
  );
};

/** 모바일 메인 페이지 */
const Mobile = () => {
  return (
    <div>
      {/* 모바일용 헤더 */}
      <div className="px-6 sm:hidden ">
        {/* 로그인 UI*/}
        <div className="flex justify-between my-11">
          <div className="space-y-2">
            <p className="text-xl font-semibold">
              로그인 후 이용하실 수 있습니다.
            </p>
            <p className="text-xs opacity-60">
              오늘도 또또가에서 혜택을 받아보세요.
            </p>
          </div>
          {/* TODO: 로그인 페이지 연결 */}
          <Link to="/">
            <div className="bg-[#EDEDED] rounded-full w-6 h-6 flex items-center justify-center">
              <LoginIcon />
            </div>
            <p className="text-[0.5rem] opacity-30">로그인</p>
          </Link>
        </div>

        {/* 쿠폰함 UI*/}
        <div className="my-11">
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

            {/* TODO: useNavigate 훅을 이용하여 쿠폰함 페이지로 이동하거나 로그인 페이지로 이동 */}
            <button className="absolute flex items-center justify-center bg-white rounded-full right-4 w-11 h-11 ">
              <RightArrow fill="#FF0069" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
/** 또또가 카카오 채널톡 배너 */
const Banner = () => {
  const icons = [
    { icon: KakaoIcon, text: "카카오톡 실행하기" },
    { icon: SearchIcon, text: "검색창에 '또또가'입력하기" },
    { icon: PlusIcon, text: "채널 추가하기" },
  ];
  return (
    <div className="hidden md:flex">
      <div className="h-40 bg-[#FFE6F0] flex items-center justify-between w-full sm:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* 좌측영역*/}
        <div className="mr-4">
          <p className="flex items-center h-12 font-bold md:text-3xl whitespace-nowrap sm:text-2xl ">
            또또가 카카오 채널톡
          </p>
          <p className="text-sm font-light md:text-xl">
            카카오톡으로 더 편하게 또또가의 소식을 받아보세요!
          </p>
        </div>
        {/* 우측영역 */}
        <ul className="relative flex items-center justify-between px-4 bg-white rounded-lg w-96 h-28 shrink-0">
          {icons.map((item, i) => (
            <li className="flex flex-col items-center" key={i}>
              <figure className="bg-[#FFEE54] w-16 h-16 rounded-full mb-2 flex justify-center items-center">
                <item.icon />
              </figure>
              <p className="text-xs font-light">{item.text}</p>
            </li>
          ))}
          <RightArrow
            className="absolute top-8 left-28"
            width="32"
            height="28"
          />
          <RightArrow
            className="absolute top-8 right-24"
            width="33"
            height="28"
          />
        </ul>
      </div>
    </div>
  );
};
export default Main;
