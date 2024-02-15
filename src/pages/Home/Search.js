import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StoreCard from "../../components/StoreCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
const Search = () => {
  const { keyword } = useParams();
  const [stores, setStores] = useState([]); // 상점 데이터
  const [isLoading, setLoading] = useState(false); // 로딩 여부
  const [lastPage, setLastPage] = useState(false); // 마지막 페이지 여부

  useEffect(() => {
    setStores([]); // 데이터 초기화
    setLastPage(false);
  }, [keyword]);

  // 검색 키워드를 기반으로 api 호출
  const fetchData = useCallback(
    async (page) => {
      console.log("간장쓰~");
      setLoading(true);
      try {
        const response = await axios.get(
          `/stores/search?keyword=${keyword}&page=${page}&size=20`
        );
        setStores((prev) => [...prev, ...response.data.result.content]);
        // 마지막 페이지라면 true 로 변경
        if (response.data.result.last) {
          setLastPage(true);
        }
      } catch (error) {
        console.log("error");
      } finally {
        setLoading(false);
      }
    },
    [keyword]
  );

  const { pageEndRef } = useInfiniteScroll(
    !lastPage ? fetchData : () => {},
    keyword
  );

  return (
    <div className={`lg:px-16 px-6`}>
      {/* 검색 제목 */}
      <div className="flex items-center justify-between px-8 py-16">
        <div>
          <div className="mb-4 text-2xl font-semibold">
            검색 &gt;{" "}
            <span className="border-b-4 border-custom-yellow">{keyword}</span>
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
