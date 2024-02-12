import { useEffect, useState } from "react";
import axios from "axios";
import Top from "./Top";
import Hot from "./Hot";
import Review from "./Review";
import Banner from "./Banner";
const Main = () => {
  const [top15, setTop15] = useState([]); // top15
  const [hotStores, setHotStores] = useState([]); // hot
  const [homeReviews, setHomeReviews] = useState([]); // review
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // TODO: url 주소 변경 및 homeReview의 프로퍼티 변수 변경
      const response = await axios
        .get("http://13.125.71.170:8080/stores/home")
        .then((response) => {
          const { top15, hotStores, homeReviews } = response.data.result;
          setTop15(top15);
          setHotStores(hotStores);
          setHomeReviews(homeReviews);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, []);

  // TODO: 로딩중 텍스트를 아이콘으로 변경
  if (isLoading) {
    return (
      <div className="absolute animate-pulse text-custom-orange w-fit top-1/2 left-1/2">
        로딩중...
      </div>
    );
  }

  // TODO: 에러 처리하는 방식 변경
  if (error) {
    return (
      <div className="absolute text-custom-orange w-fit top-1/2 left-1/2">
        에러
      </div>
    );
  }

  return (
    /* 전체 페이지 크기 설정 */
    <div className="">
      <div>
        {/* TOP 15 또또가 */}
        <Top top15={top15} />
        {/* Hot */}
        <Hot hotStores={hotStores} />
        {/* 또또가 리뷰 */}
        <Review homeReviews={homeReviews} />
        {/* 배너 */}
        <Banner />
      </div>
    </div>
  );
};

export default Main;
