import { useState } from "react";
import { ReactComponent as HeartIcon } from "./../../../assets/images/heartIcon.svg";

const Hot = () => {
  const hotRestarants = [
    {
      id: 1,
      text: "연어 무게",
      free: "펩",
    },
    {
      id: 2,
      text: "칼로리 폭탄 초코 빙수 먹고 불안해진 다이어터에게 한 줄기의 희망같은 샐러드를 드려요칼로리 폭탄 초코 빙수 먹고 불안해진 다이어터에게 한 줄기의 희망같은 샐러드를 드려요",
      free: "펩시 제로 콜라 1개 + 연어 100g 추가추가추가추가추가하하하",
    },
    {
      id: 3,
      text: "용왕님 육지에 올라갔더니 저희 식구들이 가지런히 놓여있는게 아니겠어요?용왕님 육지에 올라갔더니 저희 식구들이 가지런히 놓여있는게 아니겠어요?",
      free: "뭐라뭐라뭐라",
    },
  ];
  return (
    <div className="md:mb-16 font-inter">
      {/* 구분선 */}
      <div className="h-px mx-6 bg-black md:hidden opacity-10 "></div>
      <div className="flex flex-col py-10 bg-white md:pl-6 md:py-6 lg:px-16 md:bg-custom-gradation md:flex-row">
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

        {/* 카드 리스트 */}
        <div className="w-full pl-4 overflow-hidden overflow-x-auto md:pl-0 scrollbar-hide">
          <ul className="flex w-full py-6 m-2 space-x-6">
            {hotRestarants.map((item) => (
              <li
                className="w-[65%] lg:shrink shrink-0 xl:w-1/3 sm:w-[40%] md:w-[45%]"
                key={item.id}
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
  const [isLiked, setIsLiked] = useState(false); // 현재 상점의 관심 여부를 나타낸다.

  /** 'handleLikeClick' 함수는 하트 아이콘을 클릭했을 때 호출되며
   * 'isLiked' 상태를 반전시켜 관심 상점 상태를 나타낸다.
   */
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="h-full bg-white border cursor-pointer rounded-2xl border-custom-pink md:border-0 hover:shadow-custom-box-shadow-pink">
      <div className="flex flex-col h-full p-2 md:p-3">
        {/* 카드 이미지 */}
        <figure
          className="relative pb-[60%] h-0 bg-cover bg-no-repeat bg-center rounded-xl bg-gray-200 mb-4"
          style={{ backgroundImage: `url()` }}
        >
          <button className="absolute top-2 right-2" onClick={handleLikeClick}>
            <HeartIcon stroke="white" fill={isLiked ? "#FF0069" : "none"} />
          </button>
        </figure>
        <div className="flex flex-col space-y-2 grow">
          {/* 텍스트 */}
          <p className="text-sm font-semibold leading-2 sm:text-base text-custom-gray-100 line-clamp-2 grow">
            {item.text}
          </p>
          {/* 메뉴 */}
          <p className="text-[0.625rem] sm:text-sm text-custom-pink line-clamp-1">
            {item.free}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hot;
