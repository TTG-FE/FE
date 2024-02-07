import { ReactComponent as PhoneIcon } from "./../assets/images/phoneIcon.svg";
import { ReactComponent as LogoIcon } from "./../assets/images/logoIcon.svg";
import Logo from "./../assets/images/footerLogoIcon.png";
const Footer = () => {
  return (
    <div>
      {/* 780px 전까지 보이도록 설정 */}
      <Mobile />

      {/* 780px 부터 보이도록 설정   */}
      <div className="hidden px-8 md:flex">
        <div className="flex items-center justify-between w-full p-10 border-t">
          {/* 좌측 영역: 로고 및 텍스트 */}
          <div className="flex items-center">
            {/* 로고 */}
            <div
              className="mr-4 bg-center bg-no-repeat bg-cover w-14 h-14 shrink-0"
              style={{
                backgroundImage: `url(${Logo})`,
              }}
            ></div>
            {/* 로고 옆 텍스트 */}
            <div className="mr-4 space-y-2 shrink-0">
              <p className="text-3xl font-semibold opacity-60 text-custom-gray-100">
                또또가
              </p>
              <p className="text-sm font-bold opacity-60 text-custom-gray-100">
                또 가고싶은 곳만 리뷰한다
              </p>
            </div>
          </div>

          {/* 우측 영역: 전화번호 및 메뉴 목록 */}
          <div className="flex flex-col items-end text-[#404040] space-y-1">
            <div className="flex items-center">
              <p className="mr-3 font-bold">010-7747-4928</p>
              <PhoneIcon />
            </div>
            <p className="underline ">공지사항</p>
            <p className="underline ">우리가게 등록하기</p>
            <p className="underline ">또또가 팀</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/** 모바일 푸터 */
const Mobile = () => {
  return (
    <div className="flex w-full md:hidden">
      <div className="flex items-center text-white bg-[#FFCED7] h-28 w-full p-10">
        <LogoIcon width="26px" height="27px" className="mr-1" />
        <p className="mr-12 text-xl font-semibold">또또가</p>
        <p>010-7747-4928</p>
      </div>
    </div>
  );
};
export default Footer;
