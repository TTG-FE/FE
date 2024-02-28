import React, { useState, useCallback, useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import StoreCard from "../../components/StoreCard";
import SelectModal from "../../components/SelectModal";
import { LoginContext } from "../../contexts/LoginContextProvider";

// 지역 코드 테이블
const RegionTable = {
  "강남-논현": 8,
  "강동-천호": 9,
  "강서-목동": 10,
  "건대-왕십리": 11,
  "관악-신림": 12,
  "교대-사당": 13,
  "노원-강북": 14,
  "명동-이태원": 15,
  "삼성-선릉": 16,
  "송파-잠실": 17,
  "수유-동대문": 18,
  "신촌-이대": 19,
  "압구정-신사": 20,
  "여의도-영등포": 21,
  "종로-대학로": 22,
  "홍대-마포": 23,
  "일산-파주": 24,
  "용인-분당-수원": 25,
  "인천-부천": 26,
  "남양주-구리-하남": 27,
  "안양-안산-광명": 28,
  대전: 29,
  춘천: 30,
  대구: 31,
  경북: 32,
  부산: 33,
  경남: 34,
  광주: 35,
  전라: 36,
  강원: 37,
  제주: 38,
  전체: {
    서울: 1,
    "경기-인천": 2,
    "대전-충청": 3,
    "대구-경북": 4,
    "부산-경남": 5,
    "광주-전라": 6,
    다른지역: 7,
  },
};
const Region = () => {
  const { city_id, town_id, city_label, town_label } = useParams();
  const { token } = useContext(LoginContext);
  const [stores, setStores] = useState([]); // 상점 데이터
  const [lastPage, setLastPage] = useState(false); // 마지막 페이지 여부
  const { isLogin } = useContext(LoginContext);

  useEffect(() => {
    setStores([]); // 데이터 초기화
    setLastPage(false);
  }, [city_id, town_id]);

  // 메뉴 키워드를 기반으로 api 호출
  const fetchData = useCallback(
    async (page) => {
      // 로그인 여부에 따라 조건부 헤더 설정
      const config = {
        headers: {},
      };

      if (isLogin) {
        config.headers.Authorization = token;
      }
      // 지역 테이블에서 코드 가져오기
      let region_id;
      if (town_label === "전체") {
        region_id = Number(RegionTable[town_label][city_label]);
      } else {
        region_id = Number(RegionTable[town_label]);
      }

      try {
        const response = await axios.get(
          `/stores/region-categories?regionId=${region_id}&page=${page}&size=20`,
          config
        );
        setStores((prev) => [...prev, ...response.data.result.content]);
        // 마지막 페이지라면 true 로 변경
        if (response.data.result.last) {
          setLastPage(true);
        }
      } catch (error) {
      } finally {
      }
    },
    [city_id, token, isLogin]
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
            {city_id && (
              <>
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
              </>
            )}
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
