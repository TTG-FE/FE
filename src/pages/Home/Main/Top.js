import { Link } from "react-router-dom";
import HeartButton from "../../../components/HeartButton";

/** Top 15 또또가 */
const Top = ({ top15 }) => {
  return (
    <div className="my-16">
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
          {top15.map((item, rank) => (
            <li className="w-[18%] mb-16" key={item.storeId}>
              <Top15Card item={item} rank={rank} />
            </li>
          ))}
        </ul>
      </div>

      {/* 모바일용 */}
      <div className="w-full pl-4 overflow-hidden overflow-x-auto scrollbar-hide lg:px-16">
        <ul className="flex w-full m-2 space-x-4 md:hidden">
          {top15.map((item, rank) => (
            <li
              className="w-[40%] md:w-1/3 shrink-0 xl:w-1/5 xl:shrink lg:w-1/4"
              key={item.storeId}
            >
              <Top15Card item={item} rank={rank} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/** TOP15 카드 */
const Top15Card = ({ item, rank }) => {
  return (
    <Link
      className="flex flex-col h-full rounded "
      to={`/store/${item.storeId}`}
    >
      {/* 메뉴 이미지 */}
      <figure
        className="pb-[75%] bg-center bg-no-repeat bg-cover bg-gray-200 rounded relative mb-2 md:hover:shadow-custom-box-shadow-pink"
        style={{ backgroundImage: `url(${item.storeImage})` }}
      >
        {/* 등수 */}
        <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-semibold text-white left-4 bg-custom-pink">
          {rank + 1}위
        </div>
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
      <div className="flex flex-col grow">
        {/* 제목 */}
        <p className="mb-2 text-xs font-bold lg:text-sm text-custom-gray-100 line-clamp-2 grow">
          {item.storeTitle}
        </p>
        {/* 리뷰 참여 횟수 */}
        <p className="lg:text-sm text-custom-gray-200 text-[0.625rem] ">
          또또가 리뷰 참여 횟수 {item.reviewCount}
        </p>
      </div>
    </Link>
  );
};

export default Top;
