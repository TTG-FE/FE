import { Link } from "react-router-dom";
import Top from "./Top";
import Hot from "./Hot";
import Review from "./Review";
import Banner from "./Banner";
import { ReactComponent as CouponIcon } from "./../../../assets/images/couponIcon.svg";
import { ReactComponent as RightArrow } from "./../../../assets/images/rightArrow.svg";
import { ReactComponent as LoginIcon } from "./../../../assets/images/loginIcon.svg";

const Main = () => {
  return (
    /* 전체 페이지 크기 설정 */

    <div className=" font-inter">
      <div>
        {/* 모바일일 때만 존재하는 상단 로그인, 쿠폰함 */}
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

/** 모바일일 때만 존재하는 상단 로그인, 쿠폰함 */
const Mobile = () => {
  return (
    <div>
      {/* 모바일용 헤더 */}
      <div className="px-6 md:hidden ">
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
          <Link to="/login">
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

export default Main;
