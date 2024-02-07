import React, { useEffect, useRef, useState } from "react";

/** 'useInfiniteScroll': 무한 스크롤 커스텀 훅
 * @param {Function} fetchData 다음 페이지의 데이터를 가져오는 함수
 * @returns {Object} 페이지 끝 요소에 대한 참조를 포함하는 객체
 */
const useInfiniteScroll = (fetchData) => {
  const pageEndRef = useRef(null); // 페이지 끝을 나타내는 요소 참조
  const [page, setPage] = useState(1); // 페이지 수

  useEffect(() => {
    // IntersectionObserver를 사용하여 페이지 끝에 도달할 때마다 fetchData를 호출
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchData(page); // 데이터 가져오기
          setPage((prev) => prev + 1); // 페이지 증가
        }
      },
      { threshold: 1 }
    );

    if (pageEndRef.current) {
      observer.observe(pageEndRef.current); // 주시 시작
    }

    return () => {
      if (pageEndRef.current) {
        observer.unobserve(pageEndRef.current); // 옵저버 제거
      }
    };
  }, [page, fetchData]);

  return {
    pageEndRef,
  };
};

export default useInfiniteScroll;
