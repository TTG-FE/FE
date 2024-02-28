import React, { useState, useCallback, useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import StoreCard from "../../components/StoreCard";
import SelectModal from "../../components/SelectModal";
import { LoginContext } from "../../contexts/LoginContextProvider";

const Menu = () => {
  const { menu_id, menu_label } = useParams(); // 파라미터로 넘어오는 메뉴 아이디
  const { token } = useContext(LoginContext);
  const [stores, setStores] = useState([]); // 상점 데이터
  const [lastPage, setLastPage] = useState(false); // 마지막 페이지 여부
  const { isLogin } = useContext(LoginContext);

  useEffect(() => {
    setStores([]); // 데이터 초기화
    setLastPage(false);
  }, [menu_id]);

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

      // 데이터 가져오기
      try {
        const response = await axios.get(
          `/stores/menu-categories?menuId=${menu_id}&page=${page}&size=20`,
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
    [menu_id, token, isLogin]
  );

  const { pageEndRef } = useInfiniteScroll(
    !lastPage && menu_id ? fetchData : () => {},
    menu_id
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
            {menu_id && (
              <>
                <div className="mb-4 text-2xl font-semibold">
                  메뉴&gt;{" "}
                  <span className="border-b-4 border-custom-yellow">
                    {menu_label}
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
            <li className="w-1/5 p-4" key={item.storeId}>
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

export default Menu;
