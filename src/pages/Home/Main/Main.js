import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Top from "./Top";
import Hot from "./Hot";
import Review from "./Review";
import Banner from "./Banner";
import { LoginContext } from "../../../contexts/LoginContextProvider";
import test from "../../../assets/images/Test.png";
const Main = () => {
  const { token, isLogin } = useContext(LoginContext);
  const [top15, setTop15] = useState([]); // top15
  const [hotStores, setHotStores] = useState([]); // hot
  const [homeReviews, setHomeReviews] = useState([]); // review
  const [error, setError] = useState(null); // 에러 여부
  const [isLoading, setLoading] = useState(true); // 로딩 여부

  useEffect(() => {
    const fetchData = async () => {
      // 로그인 여부에 따라 조건부 헤더 설정
      const config = {
        headers: {},
      };

      if (isLogin) {
        config.headers.Authorization = token;
      }

      // 메인페이지 데이터 가져오기
      try {
        const response = await axios.get("/stores/home", config);
        const { top15, hotStores, homeReviews } = response.data.result;
        setTop15(top15);
        setHotStores(hotStores);
        setHomeReviews(homeReviews);
      } catch (e) {
        setError(e); // 에러 처리
      } finally {
        setLoading(false); // 로딩 완료
      }
    };
    fetchData();
  }, [token, isLogin]);

  // TODO: 에러 처리하는 방식 변경
  if (error) {
    return (
      <div className="absolute text-custom-orange w-fit top-1/2 left-1/2">
        에러
      </div>
    );
  }

  return isLoading ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <img className="animate-spin w-14 h-14" src={test} alt="로딩중" />
    </div>
  ) : (
    /* 전체 페이지 크기 설정 */

    <div>
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
