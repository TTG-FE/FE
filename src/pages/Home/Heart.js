import React, { useContext, useState } from "react";
import StoreCard from "../../components/StoreCard";
import GoToLogin from "../../components/GoToLogin";
import { LoginContext } from "../../contexts/LoginContextProvider";

const Heart = () => {
  const { isLogin } = useContext(LoginContext);
  const stores = [
    {
      storeId: 1,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 2,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 3,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 4,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 5,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 6,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 7,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 8,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 9,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 10,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 11,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 12,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 13,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      storeId: 14,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
  ];

  return (
    /* 전체 페이지 크기 설정 */
    <div className={`lg:px-16 px-6`}>
      {/* 제목 */}
      <div className="flex items-center px-8 py-16">
        <span className="mr-2 text-2xl font-semibold border-b-4 border-custom-pink">
          관심상점
        </span>
      </div>
      {isLogin ? (
        <ul className="flex flex-wrap mb-[2.69rem]">
          {stores.map((item) => (
            <li
              className="p-4 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2"
              key={item.storeId}
            >
              <StoreCard item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <GoToLogin />
        </div>
      )}
      {/* 상점 카드 리스트 */}
    </div>
  );
};
export default Heart;
