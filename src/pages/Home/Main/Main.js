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
      try {
        // TODO: url 주소 변경 및 homeReview의 프로퍼티 변수 변경
        const response = await axios.get("/stores/home");
        const { top15, hotStores, homeReviews } = response.data.result;
        setTop15(top15);
        setHotStores(hotStores);
        setHomeReviews(homeReviews);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>is Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
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
