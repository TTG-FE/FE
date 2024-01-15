import { useState } from "react";
import saladImg from "./../../../assets/images/salad.png";
import HeartIcon from "./../../../components/Home/HeartIcon";

const Hot = () => {
  const hotRestarants = [
    {
      id: 1,
      text: "연어 무게는 조상님이 들어주시나요? 연어 g수 안따지고 사장님이 미친 만큼 넣어줘요",
      free: "펩시 제로 콜라 1개",
    },
    {
      id: 2,
      text: "칼로리 폭탄 초코 빙수 먹고 불안해진 다이어터에게 한 줄기의 희망같은 샐러드를 드려요",
      free: "샐러드 1 개 ",
    },
    {
      id: 3,
      text: "용왕님 육지에 올라갔더니 저희 식구들이 가지런히 놓여있는게 아니겠어요?",
      free: "별주부전 스끼다시 1개 ",
    },
  ];
  return (
    <div className="flex mb-16 bg-custom-gradation">
      {/*  HOT!
        지금 또또가에서 핫한 상점
        좋은 가게들의
        단골이 되어보세요. */}

      {/* 텍스트 부분 w = 1/3 */}
      <div className="flex items-center justify-center w-1/3">
        <div className="w-3/4">
          <p className="text-6xl font-bold text-white">HOT!</p>
          <p className="mb-12 text-3xl font-semibold text-white">
            지금 또또가에서 핫한 상점
          </p>

          <p className="text-2xl text-white ">
            좋은 가게들의
            <br />
            단골이 되어보세요.
          </p>
        </div>
      </div>

      {/* 카드 리스트 */}
      <div className="flex items-center justify-center w-2/3 p-8">
        <ul className="flex space-x-4">
          {hotRestarants.map((item) => (
            <HotCard key={item.id} item={item} />
          ))}
        </ul>
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
    <li className="w-[33%] flex-1 bg-white p-4 rounded-2xl cursor-pointer">
      {/* 카드 이미지 */}
      <figure
        className="relative pb-[65%] h-0 bg-cover bg-no-repeat bg-center rounded-xl bg-gray-200 mb-6"
        style={{ backgroundImage: `url(${saladImg})` }}
      >
        <img src={saladImg} alt="review" className="hidden" />
        <button className="absolute top-4 right-4 " onClick={handleLikeClick}>
          <HeartIcon isLiked={isLiked} />
        </button>
      </figure>
      <div>
        {/* 텍스트 */}
        <p className="m-h-14 h-fit mb-[0.44rem] text-xl font-semibold text-custom-gray-100  line-clamp-2">
          {item.text}
        </p>
        {/* 메뉴 */}
        <p className="text-base font-normal text-custom-pink">{item.free}</p>
      </div>
    </li>
  );
};
export default Hot;
