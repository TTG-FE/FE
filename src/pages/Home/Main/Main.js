import Top from "./Top";
import Hot from "./Hot";
import Review from "./Review";
import { ReactComponent as RightArrow } from "./../../../assets/images/rightArrow.svg";
const Main = () => {
  return (
    /* 전체 페이지 크기 설정 */

    <div className=" font-inter">
      <div>
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

const Banner = () => {
  return (
    <div className="h-40 bg-[#FFE6F0] hidden md:flex md:items-center justify-between px-[17%]">
      <div className="shrink-0">
        <p className="flex items-center h-12 text-3xl font-bold ">
          또또가 카카오 채널톡
        </p>
        <p className="text-xl font-light">
          카카오톡으로 더 편하게 또또가의 소식을 받아보세요!
        </p>
      </div>
      <ul className="relative flex items-center justify-between px-4 bg-white rounded-lg w-96 h-28 shrink-0">
        <li className="flex flex-col items-center ">
          <figure className="bg-[#FFEE54] w-16 h-16 rounded-full mb-2"></figure>
          <p className="text-xs font-light">카카오톡 실행하기</p>
        </li>
        <li className="flex flex-col items-center">
          <figure className="bg-[#FFEE54] w-16 h-16 rounded-full mb-2"></figure>
          <p className="text-xs font-light">검색창에 '또또가'입력하기</p>
        </li>
        <li className="flex flex-col items-center">
          <figure className="bg-[#FFEE54] w-16 h-16 rounded-full mb-2"></figure>
          <p className="text-xs font-light">채널 추가하기</p>
        </li>
        <RightArrow className="absolute top-8 left-28" />
        <RightArrow className="absolute top-8 right-24" />
      </ul>
    </div>
  );
};
export default Main;
