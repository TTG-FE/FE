import { ReactComponent as RightArrow } from "./../../../assets/images/rightArrow.svg";
import { ReactComponent as KakaoIcon } from "./../../../assets/images/kakaoIcon.svg";
import { ReactComponent as SearchIcon } from "./../../../assets/images/searchIcon2.svg";
import { ReactComponent as PlusIcon } from "./../../../assets/images/plusIcon.svg";

/** 또또가 카카오 채널톡 배너 */
const Banner = () => {
  const icons = [
    { icon: KakaoIcon, text: "카카오톡 실행하기" },
    { icon: SearchIcon, text: "검색창에 '또또가'입력하기" },
    { icon: PlusIcon, text: "채널 추가하기" },
  ];
  return (
    // 780px 부터 보이도록 설정
    <div className="hidden pb-8 md:flex">
      <div className="py-8 bg-[#FFE6F0] flex items-center justify-between w-full md:px-14 lg:px-24 xl:px-32 2xl:px-64 ">
        {/* 좌측영역*/}
        <div>
          <p className="flex items-center h-12 text-xl font-extrabold md:text-2xl whitespace-nowrap">
            또또가 카카오 채널톡
          </p>
          <p className="text-sm font-light md:text-base lg:text-lg">
            카카오톡으로 더 편하게 또또가의 소식을 받아보세요!
          </p>
        </div>

        {/* 우측영역 */}
        <div className="relative">
          <ul className="flex items-center px-4 py-3 space-x-4 bg-white rounded-lg">
            {icons.map((item, i) => (
              <li className="flex flex-col items-center" key={i}>
                <figure className="bg-[#FFEE54] rounded-full mb-2 flex justify-center items-center p-4 shrink-0">
                  <item.icon />
                </figure>
                <p className="text-[0.625rem] font-light">{item.text}</p>
              </li>
            ))}
          </ul>
          {/* 화살표 아이콘 */}
          <RightArrow
            className="absolute top-7 left-24"
            width="24"
            height="22"
          />
          <RightArrow
            className="absolute top-7 right-20"
            width="24"
            height="22"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
