import gukbapImg from "./../../../assets/images/gukbap.png";
const Review = () => {
  const reviews = [
    {
      id: 1,
      author:
        "산책왕자 강형욱산책왕자 강형욱산책왕자 강형욱산책왕자 강형욱산책왕자 강형욱",
      text: "남은 횟감은 싸서 강아지에게 생식으로 주니 너무 좋아하더라구요~^^",
      store: "로우앤 하이",
    },
    {
      id: 2,
      author: "카리나 로켓펀쳐",
      text: "언제라도 우린 together, 또 먹고싶은 감자튀김이 있는 공덕역 맛집",
      store: "로우앤 하이",
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
      text: "망설이듯 간 보는 너 기회는 없어 Oh : 매우 spicy한 분모자 떡볶이에요",
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
    <div className="mb-16 font-inter">
      <div className="h-px mx-6 bg-black sm:hidden opacity-10"></div>
      <div className="py-[1.5em] px-6 lg:px-16">
        <p className="text-base font-semibold text-black md:text-2xl">
          또또가 리뷰
        </p>
        <p className="text-xs font-normal md:text-xl text-custom-gray-100">
          또또가 리뷰어들이 작성한 리뷰를 모아봤어요.
        </p>
      </div>
      {/* 카드 리스트 */}
      <div className="w-full pl-6 overflow-hidden overflow-x-auto scrollbar-hide lg:px-16">
        <ul className="flex w-full space-x-2">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="w-[40%] md:w-1/3 shrink-0 xl:w-1/5 xl:shrink lg:w-1/4"
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
    <div className="p-1 m-1 rounded cursor-pointer md:p-2 w-border shadow-custom-box-shadow">
      <figure
        className="pb-[80%] h-0 bg-cover bg-no-repeat bg-center rounded bg-gray-200 md:mb-4 mb-2"
        style={{ backgroundImage: `url(${gukbapImg})` }}
      ></figure>
      <div className="space-y-2 ">
        <div className="flex">
          {/* 작성자 */}
          <figure
            className="w-5 h-5 mr-1 bg-gray-200 bg-center bg-no-repeat bg-cover rounded-full md:w-11 md:h-11 shrink-0"
            style={{ backgroundImage: `url(${gukbapImg})` }}
          ></figure>
          <div className="flex items-center flex-1 text-[#9F9F9F] text-[0.625rem] md:text-base truncate">
            {review.author}
          </div>
        </div>
        {/* 리뷰 텍스트 */}
        <p className="text-[0.625rem]  font-semibold md:text-xl min-h-6 h-fit text-custom-gray-100 line-clamp-2">
          {review.text}
        </p>
        {/* 상점명 */}
        <p className=" overflow-hidden text-custom-pink truncate md:text-base text-[0.5rem] ">
          {review.store}
        </p>
      </div>
    </div>
  );
};
export default Review;
