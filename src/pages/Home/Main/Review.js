import BakeryImg from "./../../../assets/bakery.png";
const Review = () => {
  const reviews = [
    {
      id: 1,
      author: "산책강형욱",
      text: "남은 횟감은 싸서 강아지에게 생식으로 주니 너무 좋아하더라구요~^^",
      store: "로우앤 하이로우앤 하이로우앤 하이로우앤 하이로우앤 하이루하이루",
    },
    {
      id: 2,
      author: "카리나 로켓펀쳐",
      text: "123",
      store: "로우앤 하이로우앤 하이로우앤 하이로우앤 ",
    },
    {
      id: 3,
      author: "윈터 아머멘털",
      text: "내 무기들에 기름칠 하기 딱 좋은 무쇠 삼겹살 맛집",
      store: "무쇠 기름칠 삼겹살구이 ",
    },
    {
      id: 4,
      author: "닝닝 이디해커",
      text: "망설이듯 간 보는 너 기회는 없어 Oh : 매우 spicy한 분모자 떡볶이에요망설이듯 간 보는 너 기회는 없어 Oh : 매우 spicy한 분모자 떡볶이에요망설이듯 간 보는 너 기회는 없어 Oh : 매우 spicy한 분모자 떡볶이에요",
      store: "커잠투 스파이시떡볶이",
    },
    {
      id: 5,
      author: "지젤 갓제너글로스",
      text: "내 본능을 당겨 Zoom Hold up, What? Oh my god 너무 맛있어서..",
      store: "아침드라마 닭갈비",
    },
  ];
  return (
    <div className="mb-16">
      {/* 구분선 */}
      <div className="h-px mx-6 bg-black md:hidden opacity-10"></div>
      {/* 제목 텍스트 */}
      <div className="px-6 pt-10 pb-6 md:py-6 lg:px-16">
        <p className="text-base font-semibold text-black md:text-2xl">
          또또가 리뷰
        </p>
        <p className="text-xs md:text-xl text-custom-gray-100">
          또또가 리뷰어들이 작성한 리뷰를 모아봤어요.
        </p>
      </div>

      {/* 카드 리스트 */}
      <div className="w-full py-5 pl-4 overflow-hidden overflow-x-auto scrollbar-hide lg:px-16 ">
        <ul className="flex w-full m-2 space-x-4">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="w-[40%] md:w-1/3 shrink-0 xl:w-1/5 xl:shrink lg:w-1/4 "
            >
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="h-full p-1 rounded-lg cursor-pointer w-border shadow-custom-box-shadow sm:p-2 hover:shadow-custom-box-shadow-pink">
      <div className="flex flex-col h-full">
        <figure
          className="pb-[80%] h-0 bg-cover bg-no-repeat bg-center rounded-lg bg-gray-200 md:mb-4 mb-2"
          style={{ backgroundImage: `url()` }}
        ></figure>
        <div className="flex flex-col h-full space-y-2">
          <div className="flex">
            {/* 작성자 */}
            <figure
              className="w-5 h-5 mr-2 bg-gray-200 bg-center bg-no-repeat bg-cover rounded-full sm:w-8 sm:h-8 shrink-0"
              style={{ backgroundImage: `url(${BakeryImg})` }}
            ></figure>
            <p className="text-[#9F9F9F] text-[0.625rem] md:text-base truncate">
              {review.author}
            </p>
          </div>
          {/* 리뷰 텍스트 */}
          <p className="text-xs font-semibold sm:text-base text-custom-gray-100 line-clamp-2 grow">
            {review.text}
          </p>

          {/* 상점명 */}
          <p className="text-custom-pink line-clamp-1 sm:text-sm text-[0.625rem]">
            {review.store}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Review;
