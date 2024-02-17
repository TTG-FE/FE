import React, { useState, useCallback, useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import StoreCard from "../../components/StoreCard";
import SelectModal from "../../components/SelectModal";
import { LoginContext } from "../../contexts/LoginContextProvider";

const Region = () => {
  const { city_id, town_id, city_label, town_label } = useParams();
  const { token } = useContext(LoginContext);
  const [stores, setStores] = useState([]); // 상점 데이터
  const [isLoading, setLoading] = useState(false); // 로딩 여부
  const [lastPage, setLastPage] = useState(false); // 마지막 페이지 여부

  useEffect(() => {
    setStores([]); // 데이터 초기화
    setLastPage(false);
  }, [city_id, town_id]);

  // 메뉴 키워드를 기반으로 api 호출
  const fetchData = useCallback(
    async (page) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/stores/region-categories?regionId=${city_id}&page=${page}&size=20`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setStores((prev) => [...prev, ...response.data.result.content]);
        // 마지막 페이지라면 true 로 변경
        if (response.data.result.last) {
          setLastPage(true);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
    [city_id, token]
  );

  const { pageEndRef } = useInfiniteScroll(
    !lastPage && city_id ? fetchData : () => {},
    city_id
  );
  return (
    /* 전체 페이지 크기 설정 */
    <div className={`px-16 relative`}>
      {/* 모달창 */}
      <SelectModal />
      <div>
        {/* 상점 필터명 */}
        <div className="flex items-center justify-between px-8 py-16">
          <div>
            <div className="mb-4 text-2xl font-semibold">
              지역 &gt; <span className="">{city_label} </span>
              &gt;{" "}
              <span className="border-b-4 border-custom-yellow">
                {town_label}
              </span>
            </div>
            <p className="text-sm font-normal text-custom-gray-100">
              전국 각지의 또또가 상점을 만나보세요!
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
        </ul>
        {/* infiniteScroll 감지할 요소 */}
        <div className="p-6" ref={pageEndRef}></div>
      </div>
    </div>
  );
};

export default Region;
