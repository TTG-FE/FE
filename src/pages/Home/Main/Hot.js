import ttgArrow from "./../../../assets/images/ttg-arrow.png";
import channelIcon from "./../../../assets/images/channelIcon.png";
import HeartButton from "../../../components/HeartButton";

const Hot = ({ hotStores }) => {
  const handleChannelClick = () => {
    // 리뷰 링크로 새 창 열기
    const absoluteLink =
      "https://accounts.kakao.com/login/?continue=https%3A%2F%2Fpf.kakao.com%2F_tktBG%2Ffriend#login";
    window.open(absoluteLink, "_blank");
  };
  return (
    <div className="md:mb-16 ">
      {/* 구분선 */}
      <div className="h-px mx-6 bg-black md:hidden opacity-10 "></div>
      <div className="relative flex flex-col py-10 bg-white md:pl-6 md:py-6 lg:px-16 md:bg-custom-gradation md:flex-row">
        {/* 텍스트 부분 w = 1/3 */}
        <div className="flex flex-col items-start px-6 sm:justify-center sm:mr-16 md:p-0 ">
          <div className="flex items-center mb-1 text-custom-pink md:text-white md:flex-col md:items-start">
            <p className="mr-2 text-3xl font-bold md:text-4xl ">HOT!</p>
            <p className="text-sm font-semibold md:mb-12 md:text-xl whitespace-nowrap">
              지금 또또가에서 핫한 상점
            </p>
          </div>

          <div className="text-xs text-black opacity-50 md:text-lg md:text-white md:opacity-100">
            <p className="inline md:block ">좋은 가게들의</p>
            <p className="inline md:block"> 단골이 되어보세요.</p>
          </div>
        </div>
        {/* 화살표 이미지 */}
        <figure
          className="absolute right-3 w-[4.81rem] bg-center bg-no-repeat bg-cover h-[6.48rem] top-7 md:hidden"
          style={{ backgroundImage: `url(${ttgArrow})` }}
        ></figure>
        {/* 채널톡 버튼 */}
        <button
          className="fixed z-50 flex items-center justify-center  rounded-full right-3 top-[46.5rem] w-11 h-11 md:hidden "
          onClick={handleChannelClick}
        >
          <img src={channelIcon} alt="ch" />
        </button>
        {/* 카드 리스트 */}
        <div className="z-10 w-full pl-4 overflow-hidden overflow-x-auto md:pl-0 scrollbar-hide">
          <ul className="flex w-full py-6 m-2 space-x-3 ">
            {hotStores.map((item) => (
              <li
                className="w-[65%] lg:shrink shrink-0 xl:w-1/3 sm:w-[40%] md:w-[45%]"
                key={item.storeId}
              >
                <HotCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/** Hot 한 상점 카드 */
const HotCard = ({ item }) => {
  return (
    <div className="h-full mr-2 bg-white border cursor-pointer rounded-2xl border-custom-pink md:border-0">
      <div className="flex flex-col h-full p-2 md:p-3">
        {/* 메뉴 이미지 */}
        <figure
          className="relative pb-[60%] h-0 bg-cover bg-no-repeat bg-center rounded-xl bg-gray-200 mb-4"
          style={{ backgroundImage: `url(${item.storeImage})` }}
        >
          {/* 하트아이콘 */}
          <div className="absolute top-2 right-2">
            <HeartButton
              like={item.isHeartStore}
              id={item.storeId}
              borderColor={"white"}
              w={"22px"}
              h={"22px"}
            />
          </div>
        </figure>
        <div className="flex flex-col space-y-2 grow">
          {/* 제목 */}
          <p className="text-sm font-semibold leading-2 sm:text-base text-custom-gray-100 line-clamp-2 grow">
            {item.storeTitle}
          </p>
          {/* 서비스 정보 */}
          <p className="text-[0.625rem] sm:text-sm text-custom-pink line-clamp-1">
            {item.serviceInfo}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hot;
