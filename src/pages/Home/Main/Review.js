import { Link, useNavigate } from "react-router-dom";
import BakeryImg from "./../../../assets/bakery.png";
const Review = ({ homeReviews }) => {
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
          {homeReviews.map((item) => (
            <li
              key={item.reviewId}
              className="w-[40%] md:w-1/3 shrink-0 xl:w-1/5 xl:shrink lg:w-1/4 "
            >
              <ReviewCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ReviewCard = ({ item }) => {
  const handleReviewClick = () => {
    // 리뷰 링크로 새 창 열기
    const absoluteLink = "http://" + item.reviewLink;
    window.open(absoluteLink, "_blank");
  };

  return (
    // 누르면 item.reviewLink로 이동하는 로직 추가해줘라잉
    <div
      className="h-full p-1 rounded-lg cursor-pointer w-border shadow-custom-box-shadow sm:p-2 hover:shadow-custom-box-shadow-pink"
      onClick={handleReviewClick}
    >
      <div className="flex flex-col h-full">
        <figure
          className="pb-[80%] h-0 bg-cover bg-no-repeat bg-center rounded-lg bg-gray-200 md:mb-4 mb-2"
          style={{ backgroundImage: `url(${item.reviewImage})` }}
        ></figure>
        <div className="flex flex-col h-full space-y-2">
          <div className="flex">
            {/* 작성자 */}
            <figure
              className="w-5 h-5 mr-2 bg-gray-200 bg-center bg-no-repeat bg-cover rounded-full sm:w-8 sm:h-8 shrink-0"
              style={{ backgroundImage: `url(${item.profileImage})` }}
            ></figure>
            <p className="text-[#9F9F9F] text-[0.625rem] md:text-base truncate">
              {item.nickname}
            </p>
          </div>
          {/* 리뷰 제목 */}
          <p className="text-xs font-semibold sm:text-base text-custom-gray-100 line-clamp-2 grow">
            {item.reviewTitle}
          </p>

          {/* 상점명 */}
          <p className="text-custom-pink line-clamp-1 sm:text-sm text-[0.625rem]">
            {item.storeName}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Review;
