import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StoreCard from "../../components/StoreCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
const Search = () => {
  const params = useParams();
  const [stores, setStores] = useState([]); // 상점 데이터
  const [isLoading, setLoading] = useState(false); // 로딩 여부
  const [error, setError] = useState(null); // 에러
  //   const stores = [
  //     {
  //       storeId: 1,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 2,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 3,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 4,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 5,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 6,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 7,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 8,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 9,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 10,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 11,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 12,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 13,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //     {
  //       storeId: 14,
  //       storeTitle: "[성",
  //       serviceInfo: "용용이 파스타 + 음료 1",
  //       reviewCount: 654,
  //     },
  //   ];

  // 검색 키워드를 기반으로 api 호출
  const fetchData = useCallback(async (page) => {
    console.log(page);
    setLoading(true);
    try {
      const response = await axios.get(
        `/stores/search?keyword=${params.keyword}&page=${page}&size=20`
      );
      setStores((prev) => [...prev, ...response.data.result]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const { pageEndRef } = useInfiniteScroll(fetchData);

  // TODO: 에러 처리하는 방식 변경
  if (error) {
    return (
      <div className="absolute text-custom-orange w-fit top-1/2 left-1/2 ">
        에러
      </div>
    );
  }
  return (
    <div className={`lg:px-16 px-6`}>
      {/* 검색 제목 */}
      <div className="flex items-center justify-between px-8 py-16">
        <div>
          <div className="mb-4 text-2xl font-semibold">
            검색 &gt;{" "}
            <span className="border-b-4 border-custom-yellow">
              {params.keyword}
            </span>
          </div>
          <p className="text-sm font-normal text-custom-gray-100">
            검색어를 기반으로 찾은 상점입니다.
          </p>
        </div>
      </div>
      {/* 상점 카드 리스트 */}
      <ul className="flex flex-wrap ">
        {stores.map((item) => (
          <li
            className="p-4 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2"
            key={item.storeId}
          >
            <StoreCard item={item} />
          </li>
        ))}
        {/* 로딩중일 때 */}
        {isLoading && <div>Loading...</div>}
      </ul>
      {/* infiniteScroll 감지할 요소 */}
      <div className="p-6" ref={pageEndRef}></div>
    </div>
  );
};

export default Search;
