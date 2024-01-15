import gukbapImg from "./../../../assets/images/gukbap.png";
const Review = () => {
  const reviews = [
    {
      id: 1,
      author: "산책왕자 강형욱",
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
    <div className="mb-16">
      <div className="py-[1.5em]">
        <p className="text-2xl font-semibold leading-normal text-black">
          또또가 리뷰
        </p>
        <p className="text-xl font-normal leading-normal text-custom-gray-100">
          또또가 리뷰어들이 작성한 리뷰를 모아봤어요.
        </p>
      </div>
      {/* 카드 리스트 */}
      <ul className="flex justify-between mb-[1.63rem]">
        {reviews.map((review) => (
          <li
            key={review.id}
            className=" w-[19%] p-2 w-border rounded shadow-custom-box-shadow cursor-pointer"
          >
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div>
      <figure
        className="pb-[80%] h-0 bg-cover bg-no-repeat bg-center rounded mb-4 bg-gray-200"
        style={{ backgroundImage: `url(${gukbapImg})` }}
      >
        <img src={gukbapImg} alt="review" className="hidden" />
      </figure>
      <div>
        <div className="flex mb-[0.96rem] author-wrap px-2">
          <figure
            className="bg-gray-200 bg-center bg-no-repeat bg-cover rounded-full w-11 h-11"
            style={{ backgroundImage: `url(${gukbapImg})` }}
          ></figure>
          <div className="flex items-center flex-1 pl-3 text-[#9F9F9F] ">
            {review.author}
          </div>
        </div>
        <p className="min-h-12 h-fit mb-4 text-xl font-semibold text-custom-gray-100  line-clamp-2 leading-[1.8rem]">
          {review.text}
        </p>
        <p className=" text-custom-pink store-wrap">{review.store}</p>
      </div>
    </div>
  );
};
export default Review;
