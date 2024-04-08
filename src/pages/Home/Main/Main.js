import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Top from "./Top";
import Hot from "./Hot";
import Review from "./Review";
import Banner from "./Banner";

// import { LoginContext } from "../../../contexts/LoginContextProvider";
import loading from "../../../assets/images/loading.png"; // 로딩중 이미지

// 임시 데이터
const fakeData = {
  top15: [
    {
      storeId: 1,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 2,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 3,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 4,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 5,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 6,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 7,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 8,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 9,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 10,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 11,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 12,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 13,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 14,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
    {
      storeId: 15,
      storeTitle:
        "[유-엠씨] 글씨가 매우매우 매우매우 매우매우매우매우매우 길어진다면 이렇게 말줄임표를...",
      storeImage: "",
      reviewCount: 65,
      isHeartStore: false,
    },
  ],
  hotStores: [
    {
      storeId: 1,
      storeTitle:
        "연어 무게는 조상님이 들어주시나요? 연어 g수 안따지고 사장님이 미친 만큼 넣어줘요",
      storeImage:
        "https://files.weble.net/campaign/data/910914/thumb200.jpg?bust=1712602526161",
      serviceInfo: "펩시 제로 콜라 1개",
    },
    {
      storeId: 2,
      storeTitle:
        "연어 무게는 조상님이 들어주시나요? 연어 g수 안따지고 사장님이 미친 만큼 넣어줘요",
      storeImage:
        "https://files.weble.net/campaign/data/910914/thumb200.jpg?bust=1712602526161",
      serviceInfo: "펩시 제로 콜라 1개",
    },
    {
      storeId: 3,
      storeTitle:
        "연어 무게는 조상님이 들어주시나요? 연어 g수 안따지고 사장님이 미친 만큼 넣어줘요",
      storeImage:
        "https://files.weble.net/campaign/data/910914/thumb200.jpg?bust=1712602526161",
      serviceInfo: "펩시 제로 콜라 1개",
    },
  ],
  homeReviews: [
    {
      reviewId: 1,
      profileImage:
        "https://gangnam-review.net/data/file/cmp/2024/04/04/thumb-cmp_1334416-b61f08474a251b2c01a052e6e3b53c6506bf9b50_300x300.jpg",
      nickname: "산책왕자 강형욱",
      reviewTitle:
        "남은 횟감은 싸서 강아지에게 생식으로 주니 너무 좋아하더라구요~^^",
      storeName: "로우앤 하이",
    },
    {
      reviewId: 2,

      profileImage:
        "https://gangnam-review.net/data/file/cmp/2024/04/04/thumb-cmp_1334416-b61f08474a251b2c01a052e6e3b53c6506bf9b50_300x300.jpg",
      nickname: "산책왕자 강형욱",
      reviewTitle:
        "남은 횟감은 싸서 강아지에게 생식으로 주니 너무 좋아하더라구요~^^",
      storeName: "로우앤 하이",
    },
    {
      reviewId: 3,

      profileImage:
        "https://gangnam-review.net/data/file/cmp/2024/04/04/thumb-cmp_1334416-b61f08474a251b2c01a052e6e3b53c6506bf9b50_300x300.jpg",
      nickname: "산책왕자 강형욱",
      reviewTitle:
        "남은 횟감은 싸서 강아지에게 생식으로 주니 너무 좋아하더라구요~^^",
      storeName: "로우앤 하이",
    },
    {
      reviewId: 4,

      profileImage:
        "https://gangnam-review.net/data/file/cmp/2024/04/04/thumb-cmp_1334416-b61f08474a251b2c01a052e6e3b53c6506bf9b50_300x300.jpg",
      nickname: "산책왕자 강형욱",
      reviewTitle:
        "남은 횟감은 싸서 강아지에게 생식으로 주니 너무 좋아하더라구요~^^",
      storeName: "로우앤 하이",
    },
    {
      reviewId: 5,

      profileImage:
        "https://gangnam-review.net/data/file/cmp/2024/04/04/thumb-cmp_1334416-b61f08474a251b2c01a052e6e3b53c6506bf9b50_300x300.jpg",
      nickname: "산책왕자 강형욱",
      reviewTitle:
        "남은 횟감은 싸서 강아지에게 생식으로 주니 너무 좋아하더라구요~^^",
      storeName: "로우앤 하이",
    },
  ],
};
const Main = () => {
  // const { token, isLogin } = useContext(LoginContext);

  const [top15, setTop15] = useState([]);
  const [hotStores, setHotStores] = useState([]);
  const [homeReviews, setHomeReviews] = useState([]);

  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // 로그인 여부에 따라 조건부 헤더 설정
  //     const config = {
  //       headers: {},
  //     };

  //     if (isLogin) {
  //       config.headers.Authorization = token;
  //     }

  //     // 메인페이지 데이터 가져오기
  //     try {
  //       const response = await axios.get("/stores/home", config);
  //       const { top15, hotStores, homeReviews } = response.data.result;
  //       setTop15(top15);
  //       setHotStores(hotStores);
  //       setHomeReviews(homeReviews);
  //     } catch (e) {
  //       setError(e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [token, isLogin]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const { top15, hotStores, homeReviews } = fakeData;
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
      <img className="animate-spin w-14 h-14" src={loading} alt="로딩중" />
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
