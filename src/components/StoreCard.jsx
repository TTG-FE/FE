import React, { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContextProvider";
import HeartButton from "./HeartIcon";
/** 지역별 상점 및 메뉴별 상점의 카드 */
const StoreCard = ({ item }) => {
  const { isLogin } = useContext(LoginContext);

  return (
    <div className="flex flex-col h-full p-4 transition-all rounded-2xl shadow-custom-box-shadow hover:shadow-custom-box-shadow-pink">
      {/* 카드 이미지 */}
      <figure
        className="pb-[75%] h-0 bg-cover bg-no-repeat bg-center rounded-lg mb-4 bg-gray-200 relative"
        style={{ backgroundImage: `url(${item.storeImage})` }}
      >
        {/* 하트아이콘 */}
        <HeartButton like={item.heartStore} id={item.storeId} />
      </figure>
      <div className="flex flex-col grow">
        {/* 제목 */}
        <p className="mb-2 text-base font-semibold min-h-10 text-custom-gray-100 line-clamp-2 grow">
          {item.storeTitle}
        </p>
        {/* 서비스 메뉴 */}
        <p className="mb-6 text-xs font-semibold text-custom-pink line-clamp-1">
          {item.storeId}
        </p>
        {/* 또또가 리뷰 참여 횟수 */}
        <p className="text-xs text-custom-gray-200 ">
          또또가 리뷰 참여 횟수 {item.reviewCount}
        </p>
      </div>
    </div>
  );
};

export default StoreCard;
