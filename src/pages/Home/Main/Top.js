import { useState } from "react";
import { Link } from "react-router-dom";
import chickenImg from "./../../../assets/images/chicken.png";
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
    <div className="px-16">
      {/* 제목 */}
      {/* TOP 15 또또가 */}
      {/* 또또가에서 가장 인기있는 상위 15개 상점을 모아봤어요. */}
      <div className="py-[1.5em]">
        <p className="text-2xl font-semibold leading-normal text-black">
          TOP 15 또또가
        </p>
        <p className="text-xl font-normal leading-normal text-custom-gray-100">
          또또가에서 가장 인기있는 상위 15개 상점을 모아봤어요.
        </p>
      </div>

      {/* TOP15 카드 리스트 */}
      <ul className="flex flex-wrap justify-between">
        {top15.map((item) => (
          <li className="w-[18%] mb-16" key={item.id}>
            <Top15Card item={item} />
          </li>
        ))}
      </ul>
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
    <div>
      {/* 메뉴 이미지 */}
      <figure
        className="pb-[75%] bg-center bg-no-repeat bg-cover bg-gray-200 rounded relative mb-[0.63rem]"
        style={{ backgroundImage: `url(${chickenImg})` }}
      >
        <img src={chickenImg} alt="menu" className="hidden" />
        {/* 등수 표시 */}
        <div className="flex justify-center items-center absolute w-[2.19rem] h-[2.56rem] left-[0.94rem] bg-custom-pink text-white">
          {item.rank}위
        </div>
        {/* 하트아이콘 */}
        <button className="absolute top-4 right-4" onClick={handleLikeClick}>
          <HeartIcon stroke="white" fill={isLiked ? "#FF0069" : "none"} />
        </button>
      </figure>
      <div>
        {/* 텍스트 */}
        <p className="mb-2 text-base font-bold h-fit min-h-10 text-custom-gray-100 line-clamp-2 ">
          {item.text}
        </p>
        {/* 또또가 리뷰 참여 횟수 */}
        <p className="text-sm text-custom-gray-200 ">
          또또가 리뷰 참여 횟수 {item.reviewCount}
        </p>
      </div>
    </div>
  );
};

export default Top;
