import React, { useEffect, useRef, useState } from "react";

const useInfiniteScroll = (fetchData, keyword) => {
  const pageEndRef = useRef(null);
  const [page, setPage] = useState(-1); // 페이지 수

  useEffect(() => {
    // IntersectionObserver를 사용하여 페이지 끝에 도달할 때마다 fetchData를 호출
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, [fetchData]);

  useEffect(() => {
    setPage(-1); // keyword가 변경될 때마다 페이지 초기화
  }, [keyword]);

  useEffect(() => {
    if (page === -1) return;
    fetchData(page);
  }, [page]);

  return { pageEndRef };
};

export default useInfiniteScroll;
