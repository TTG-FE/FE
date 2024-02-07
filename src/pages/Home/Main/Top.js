import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeartIcon } from "./../../../assets/images/heartIcon.svg";

/** Top 15 또또가 */
const Top = () => {
  const top15 = [
    {
      id: 1,
      rank: 1,
      text: "[유-엠씨] 글씨가 매우매우 매우매",
      reviewCount: 65,
    },
    {
      id: 2,
      rank: 2,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 3,
      rank: 3,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 4,
      rank: 4,
      text: "[유-엠씨] 글씨가",
      reviewCount: 65,
    },
    {
      id: 5,
      rank: 5,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 6,
      rank: 6,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 7,
      rank: 7,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 8,
      rank: 8,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 9,
      rank: 9,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 10,
      rank: 10,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 11,
      rank: 11,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 12,
      rank: 12,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 13,
      rank: 13,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 14,
      rank: 14,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
    {
      id: 15,
      rank: 15,
      text: "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를 써서 보여주세요",
      reviewCount: 65,
    },
  ];
  return (
    <div className={`font-inter my-16`}>
      {/* 구분선 */}
      <div className="h-px mx-6 bg-black md:hidden opacity-10"></div>
      {/* 제목 텍스트*/}
      <div className="px-6 pt-10 pb-6 md:py-6 lg:px-16">
        <p className="text-base font-semibold text-black md:text-2xl">
          TOP 15 또또가
        </p>
        <p className="text-xs md:text-xl text-custom-gray-100">
          또또가에서 가장 인기있는 상위 15개 상점을 모아봤어요.
        </p>
      </div>

      {/* TOP15 카드 리스트 */}
      <div className="w-full px-6 lg:px-16">
        {/* 데스크탑: 768px 이상일 때 보이도록 설정 */}
        {/* md를 기준으로 hidden처리를 하여 데스크탑용 UI를 분리 */}
        <ul className="flex-wrap justify-between hidden md:flex">
          {top15.map((item) => (
            <li className="w-[18%] mb-16" key={item.id}>
              <Top15Card item={item} />
            </li>
          ))}
        </ul>
      </div>
      {/* 모바일용 */}
      <div className="w-full pl-4 overflow-hidden overflow-x-auto scrollbar-hide lg:px-16">
        <ul className="flex w-full m-2 space-x-4 md:hidden">
          {top15.map((item) => (
            <li
              className="w-[40%] md:w-1/3 shrink-0 xl:w-1/5 xl:shrink lg:w-1/4"
              key={item.id}
            >
              <Top15Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/** TOP15 카드 */
const Top15Card = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false); // 현재 상점의 관심 여부를 나타낸다.

  /** 'handleLikeClick' 함수는 하트 아이콘을 클릭했을 때 호출되며
   * 'isLiked' 상태를 반전시켜 관심 상점 상태를 나타낸다.
   */
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <Link className="flex flex-col h-full rounded hover:shadow-custom-box-shadow-pink">
      {/* 메뉴 이미지 */}
      <figure
        className="pb-[75%] bg-center bg-no-repeat bg-cover bg-gray-200 rounded relative mb-2"
        style={{ backgroundImage: `url()` }}
      >
        {/* 등수 표시 */}
        <div className="absolute flex items-center justify-center w-8 h-8 text-xs text-white left-4 bg-custom-pink">
          {item.rank}위
        </div>
        {/* 하트아이콘 */}
        <button className="absolute top-2 right-2" onClick={handleLikeClick}>
          <HeartIcon
            stroke={isLiked ? "#FF0069" : "white"}
            fill={isLiked ? "#FF0069" : "none"}
          />
        </button>
      </figure>
      <div className="flex flex-col grow">
        {/* 텍스트 */}
        <p className="mb-2 text-xs font-bold lg:text-sm text-custom-gray-100 line-clamp-2 grow">
          {item.text}
        </p>
        {/* 또또가 리뷰 참여 횟수 */}
        <p className="lg:text-sm text-custom-gray-200 text-[0.625rem] ">
          또또가 리뷰 참여 횟수 {item.reviewCount}
        </p>
      </div>
    </Link>
  );
};

export default Top;
