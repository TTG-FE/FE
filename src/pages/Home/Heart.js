import React, { useState, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StoreCard from "../../components/StoreCard";
import GoToLogin from "../../components/GoToLogin";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { LoginContext } from "../../contexts/LoginContextProvider";

const Heart = () => {
  const { isLogin } = useContext(LoginContext);
  const { token } = useContext(LoginContext);
  const [stores, setStores] = useState([]); // 상점 데이터
  const [isLoading, setLoading] = useState(false); // 로딩 여부
  const [lastPage, setLastPage] = useState(false); // 마지막 페이지 여부

  // 관심상점 api 호출
  const fetchData = useCallback(
    async (page) => {
      setLoading(true);
      try {
        console.log("token: ", token);
        const response = await axios.get(`/stores/heart?page=${page}&size=20`, {
          headers: {
            Authorization: token,
          },
        });
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
    [token]
  );

  const { pageEndRef } = useInfiniteScroll(!lastPage ? fetchData : () => {});

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
        <>
          {" "}
          <ul className="flex flex-wrap mb-[2.69rem]">
            {stores.map((item) => (
              <li
                className="p-4 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2"
                key={item.storeId}
              >
                <StoreCard item={item} />
              </li>
            ))}
          </ul>{" "}
          <div className="p-6" ref={pageEndRef}></div>
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <GoToLogin />
        </div>
      )}
    </div>
  );
};
export default Heart;
